// src/app/checkout-return/route.ts

import { createClient } from '@/app/lib/supabase/server';
import { URL_PREFIX } from '@/consts';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const apiKey = process.env.NEXT_STRIPE_KEY as string;
const stripe = new Stripe(apiKey);

export const GET = async (request: NextRequest, response: NextResponse) => {
  const supabase = createClient();

  const { searchParams } = new URL(request.url);
  const stripeSessionId = searchParams.get('session_id');
  // @ts-expect-error - Reponse should have params
  const { params } = response;
  const { country, city, id } = params;
  const returnUrl = `${country}/${city}/${id}/`;

  if (!stripeSessionId?.length) return redirect('/error');

  const session = await stripe.checkout.sessions.retrieve(stripeSessionId);

  if (session.status === 'complete') {
    // Go to a success page!

    const { data: getUserData } = await supabase.auth.getUser();

    const { error: purchaseCreditError } = await supabase
      .from('user_purchase_credits')
      .insert({
        purchase_id: stripeSessionId,
        user_id: getUserData?.user?.id,
      });

    console.log('Checkout Return Data');
    console.log({ purchaseCreditError });

    if (!purchaseCreditError) {
      return redirect(`${URL_PREFIX}${returnUrl}/create-game-session/`);
    }
  }

  if (session.status === 'open') {
    // Here you'll likely want to head back to some pre-payment page in your checkout
    // so the user can try again
    return redirect(`${URL_PREFIX}${returnUrl}/create-game-session/`);
  }

  return redirect('/error');
};
