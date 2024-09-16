'use client';
import { startGameSession } from '@/app/auth/supabase/actions';
import { CheckoutForm } from '@/app/components/CheckoutForm';
import { createClient } from '@/app/lib/supabase/client';
import { UNIQUE_GUEST_COOKIE } from '@/consts';
import Link from 'next/link';
import { redirect, useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoginPage() {
  const urlParms = useParams();
  const pathName = usePathname();
  const supabase = createClient();
  const [hasCredits, setHasCredits] = useState(false);

  const redirectUrlToPlay = pathName.replace('/create-game-session', '/play');
  const redirectUrlToExplore = pathName.replace(
    '/create-game-session',
    '/explore'
  );

  const redirectUrlPaymentSuccess = pathName.replace(
    '/create-game-session',
    ''
  );

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (!parts || !parts.length) return '';
    if (parts.length === 2) return parts.pop()?.split(';')?.shift();
  };

  const uniqueGameSession = getCookie(UNIQUE_GUEST_COOKIE);

  if (uniqueGameSession) {
    redirect(redirectUrlToPlay);
  }

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      const { data: getUserData } = await supabase.auth.getUser();

      const { data: userPurchaseData } = await supabase
        .from('user_purchase_credits')
        .select('id')
        .eq('user_id', getUserData?.user?.id)
        .is('used_at', null); // Correct;

      return userPurchaseData;
    };

    try {
      const result = fetchData();

      result.then((resultResponse) => {
        if (resultResponse && resultResponse.length > 0) {
          setHasCredits(true);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="flex flex-col container py-8 mx-auto max-w-128">
      <h1 className="text-2xl font-bold mb-8">Start Game</h1>
      <p>We can see you are logged in and can start this game</p>

      {hasCredits ? (
        <h2 className="text-2xl font-bold mb-8 text-green-500">
          You have credits to play this game
        </h2>
      ) : (
        <h2 className="text-2xl font-bold mb-8 text-red-500">
          You need credits to play this game
        </h2>
      )}

      {hasCredits ? (
        <>
          <p>
            You will have two hours to start the game. If you want to play with
            friends, enter a key here and share it with them. (You can&apos;t
            change this later)
          </p>

          <form className="flex flex-col mt-8">
            <>
              <label htmlFor="unique_key">
                Optional Key For Friends to Join:
              </label>
              <input
                id="unique_key"
                name="unique_key"
                type="unique_key"
                className="border p-3"
              />
              <button
                className="bg-yellow-400 my-2 p-3 hover:bg-yellow-600"
                formAction={(e) =>
                  startGameSession(e, `${urlParms.id}`, redirectUrlToPlay)
                }
              >
                Start Game
              </button>
            </>
          </form>
        </>
      ) : (
        <CheckoutForm
          priceId={process.env.NEXT_PUBLIC_EXAMPLE_PRICE_ID!}
          returnUrl={`${window.origin}${redirectUrlPaymentSuccess}`}
        />
      )}

      <p>Don&apos;t want to start the game just yet?</p>
      <Link
        className="bg-blue-300 hover:bg-blue-400 p-4 my-4"
        href={redirectUrlToExplore}
      >
        Back to Explore Game
      </Link>

      <Link className="bg-blue-300 hover:bg-blue-400 p-4" href={'/'}>
        Back to Home
      </Link>
    </div>
  );
}
