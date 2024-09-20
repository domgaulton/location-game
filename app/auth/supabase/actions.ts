'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/app/lib/supabase/server';
import { cookies } from 'next/headers';
import { COOKIE_EXPIRE_TIME, UNIQUE_GUEST_COOKIE } from '@/consts';

export async function signOut() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect('/error');
  }

  // delete the cookie
  cookies().delete(UNIQUE_GUEST_COOKIE);

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function login(formData: FormData, urlToRedirectTo: string) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath(urlToRedirectTo, 'layout');
  redirect(urlToRedirectTo);
}

export async function signUp(formData: FormData, urlToRedirectTo: string) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
    data
  );

  if (signUpError) {
    redirect('/error');
  }

  const { error: userInsertError } = await supabase.from('users').insert({
    user_id: signUpData.user ? signUpData.user.id : '',
    email: signUpData.user ? signUpData.user.email : '',
  });
  // TO CHECK - WHEN GETTING DATA BASE FROM INSERT ROW I HAVE A ROW VIOLATE
  // userInsertError: {
  //   code: '42501',
  //   details: null,
  //   hint: null,
  //   message: 'new row violates row-level security policy for table "users"'
  // }

  if (userInsertError) {
    redirect('/error');
  }

  revalidatePath(urlToRedirectTo, 'layout');
  redirect(urlToRedirectTo);
}

export async function startGameSession(
  formData: FormData,
  gameId: string,
  urlToRedirectTo: string
) {
  const existingCookie = cookies().get(UNIQUE_GUEST_COOKIE);

  if (existingCookie) return;

  const supabase = createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (!userData || userError) {
    redirect('/error');
  }
  const { data: gameSessionData, error: gameSessionError } = await supabase
    .from('game_sessions')
    .insert({
      user_id: userData.user ? userData.user.id : '',
      game_id: gameId,
      email: userData.user ? userData.user.email : '',
      unique_key: formData.get('unique_key') as string,
    })
    .select('id');

  // Get rows from user_purchase_credits table which have not been used
  const {
    data: userPurchaseCreditsSelectData,
    error: userPurchaseCreditsSelectError,
  } = await supabase
    .from('user_purchase_credits')
    .select('id')
    .eq('user_id', userData.user.id)
    .is('used_at', null);

  if (
    gameSessionData &&
    userPurchaseCreditsSelectData &&
    !userPurchaseCreditsSelectError
  ) {
    const gameSessionId = gameSessionData[0].id;
    const purchaseCreditsRowId = userPurchaseCreditsSelectData[0].id;
    const { data: updateCreditData, error: updateCreditError } = await supabase
      .from('user_purchase_credits')
      .update({
        used_at: '2024-09-19 11:48:39.154961+00',
        game_session_id: gameSessionId,
      })
      .eq('id', purchaseCreditsRowId)
      .eq('user_id', userData.user.id)
      .select('id, used_at, game_session_id');
  }

  if (!gameSessionError && gameSessionData && gameSessionData[0].id) {
    const cookieExpiry = new Date(new Date().getTime() + COOKIE_EXPIRE_TIME);

    cookies().set(UNIQUE_GUEST_COOKIE, gameSessionData[0].id, {
      secure: true,
      expires: cookieExpiry,
    });
  }

  revalidatePath(urlToRedirectTo, 'layout');
  redirect(urlToRedirectTo);
}

export async function joinGame(
  formData: FormData,
  gameIdFromUrl: string,
  urlToRedirectTo: string
) {
  const supabase = createClient();

  const { data: gameSessionData, error: gameSessionError } = await supabase
    .from('game_sessions')
    .select(
      `id,
      game_id, 
      email,
      created_at,
      unique_key
      `
    )
    .eq('email', formData.get('email') as string)
    .eq('unique_key', formData.get('unique_key') as string);

  if (gameSessionData?.length && !gameSessionError) {
    const latestGameSession = gameSessionData[gameSessionData.length - 1];
    const createdAtDate = new Date(latestGameSession.created_at);
    const currentTime = new Date();

    const withinInExpiration = new Date(
      currentTime.getTime() - COOKIE_EXPIRE_TIME
    );

    // Check if the timestamp is within the last two hours
    const gameSessionCreatedInPastTwoHours =
      createdAtDate >= withinInExpiration;
    const gameSessionCreatedInThePast = createdAtDate <= currentTime;
    const isInLastTwoHours =
      gameSessionCreatedInPastTwoHours && gameSessionCreatedInThePast;

    // Check user is on the right game board e.g. can't log into any random game
    const gameId = latestGameSession.game_id;
    const gameIdMatches = gameId === Number(gameIdFromUrl);

    const gameSessionId = latestGameSession.id;

    if (isInLastTwoHours && gameIdMatches) {
      const expirationFromGameSessionTime = new Date(
        createdAtDate.getTime() + COOKIE_EXPIRE_TIME
      );

      cookies().set(UNIQUE_GUEST_COOKIE, gameSessionId, {
        secure: true,
        expires: expirationFromGameSessionTime,
      });

      revalidatePath(urlToRedirectTo, 'layout');
      redirect(urlToRedirectTo);
    }
  }
}
