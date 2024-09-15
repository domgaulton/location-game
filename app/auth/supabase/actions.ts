'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/app/lib/supabase/server';
import { cookies } from 'next/headers';
import { UNIQUE_GUEST_COOKIE } from '@/consts';
import { User } from '@supabase/supabase-js';

export async function signOut() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect('/error');
  }

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

  console.log({ signUpData });

  const { data: insertData, error: insertError } = await supabase
    .from('users')
    .insert({
      user_id: signUpData.user ? signUpData.user.id : '',
      email: signUpData.user ? signUpData.user.email : '',
    });

  console.log({ insertData, insertError });
  revalidatePath(urlToRedirectTo, 'layout');
  redirect(urlToRedirectTo);
}

export async function startGameSession(
  userData: { user: User },
  gameId: string
) {
  const supabase = createClient();

  const { data: gameSessionData, error: gameSessionError } = await supabase
    .from('game_sessions')
    .insert({
      user_id: userData.user ? userData.user.id : '',
      game_id: gameId,
    });

  console.log({ gameSessionData, gameSessionError });
}

export async function joinGame(formData: FormData, urlToRedirectTo: string) {
  const supabase = createClient();

  const { data: gameSessionData, error: gameSessionError } = await supabase
    .from('game_sessions')
    .select(
      `game_id, 
      email,
      created_at
      `
    )
    .eq('email', formData.get('email') as string);

  console.log({ gameSessionData, gameSessionError });

  if (gameSessionData?.length) {
    const createdAtDate = new Date(gameSessionData[0].created_at);
    const currentTime = new Date();

    // Calculate the time difference in milliseconds (2 hours = 2 * 60 * 60 * 1000)
    const twoHoursAgo = new Date(currentTime.getTime() - 2 * 60 * 60 * 1000);

    // Check if the timestamp is within the last two hours
    const isInLastTwoHours =
      createdAtDate >= twoHoursAgo && createdAtDate <= currentTime;

    // Check user is on the right game board
    const gameId = gameSessionData[0].game_id;
    const gameIdFromUrl = urlToRedirectTo.split('/').pop();

    const gameIdMatches = gameId === gameIdFromUrl;

    if (isInLastTwoHours && gameIdMatches) {
      cookies().set(UNIQUE_GUEST_COOKIE, gameId, {
        secure: true,
      });
    }
  }

  redirect(urlToRedirectTo);

  // const { data: gameSessionData, error: gameSessionError } = await supabase
  //   .from('game_sessions')
  //   .insert({
  //     user_id: userData.user ? userData.user.id : '',
  //     game_id: gameId,
  //   });

  // console.log({ gameSessionData, gameSessionError });
}
