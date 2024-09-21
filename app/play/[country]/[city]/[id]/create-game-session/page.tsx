'use client';
import { startGameSession } from '@/app/auth/supabase/actions';
import { CheckoutForm } from '@/app/components/CheckoutForm';
import { createClient } from '@/app/lib/supabase/client';
import { UNIQUE_GUEST_COOKIE } from '@/consts';
import Link from 'next/link';
import { redirect, useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoginPage({ params }: { params: { id: string } }) {
  const urlParms = useParams();
  const pathName = usePathname();
  const supabase = createClient();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasCredits, setHasCredits] = useState(false);
  const [gameName, setGameName] = useState('');

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

      // get empty user credits
      const { data: userPurchaseData } = await supabase
        .from('user_purchase_credits')
        .select('id')
        .eq('user_id', getUserData?.user?.id)
        .is('used_at', null); // Correct;

      const { data: gamesData } = await supabase
        .from('games')
        .select('name')
        .eq('id', params.id); // Correct;

      return { userPurchaseData, gamesData };
    };

    try {
      const result = fetchData();

      result.then((resultResponse) => {
        const { userPurchaseData, gamesData } = resultResponse;

        if (userPurchaseData && userPurchaseData.length > 0) {
          setHasCredits(true);
        }

        if (gamesData && gamesData.length > 0 && gamesData[0].name) {
          setGameName(gamesData[0].name);
        }

        setIsLoaded(true);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="flex flex-col container py-8 mx-auto max-w-128 px-4">
      <h1 className="text-2xl font-bold mb-8">Play {gameName} Now!</h1>

      {isLoaded ? (
        hasCredits ? (
          <h2 className="text-2xl font-bold mb-8 text-green-500">
            You have credits to play this game
          </h2>
        ) : (
          <h2 className="text-2xl font-bold mb-8 text-red-500">
            You need credits to play this game
          </h2>
        )
      ) : (
        <p>Loading...</p>
      )}

      {hasCredits ? (
        <>
          <h3 className="text-xl font-bold mb-8">
            Want to play with a friend?
          </h3>

          <form className="flex flex-col">
            <>
              <label htmlFor="unique_key">
                Optional 6 digit code for friends to join:
              </label>
              <input
                id="unique_key"
                name="unique_key"
                type="number"
                className="border p-3 dark:text-black"
                pattern="[0-9]{6}"
              />
              <button
                className="bg-yellow-400 text-black my-2 p-3 hover:bg-yellow-600"
                formAction={(e) =>
                  startGameSession(e, `${urlParms.id}`, redirectUrlToPlay)
                }
              >
                Play {gameName} Now!
              </button>
            </>
          </form>
          <h3 className="text-xl font-bold mb-8">Instructions</h3>
          <p className="mb-2">
            You can share the game with friends by creating a unique key and
            sharing it with them. Recommend a 6 digit numerical code
          </p>

          <p className="mb-2">
            You will have four hours until the game expires. If you want to play
            with friends, enter a key here and let them know it.
          </p>

          <h3 className="text-xl font-bold mb-8">
            You can&apos;t change the optional code later
          </h3>

          <p>
            Then tell them to click &apos;Join Friends Game&apos; (they
            don&apos;t need to sign up) and use this key along with your email
            address
          </p>
        </>
      ) : (
        <CheckoutForm
          priceId={process.env.NEXT_PUBLIC_EXAMPLE_PRICE_ID!}
          returnUrl={`${window.origin}${redirectUrlPaymentSuccess}`}
        />
      )}

      <h3 className="text-xl font-bold mb-8">
        Don&apos;t want to play {gameName} just yet?
      </h3>

      <Link
        className="bg-blue-300 hover:bg-blue-500 hover:text-white text-black p-4 my-4"
        href={redirectUrlToExplore}
      >
        Back to Explore Game
      </Link>

      <Link
        className="bg-blue-300 hover:bg-blue-500 hover:text-white text-black p-4"
        href={'/'}
      >
        See Other Games
      </Link>
    </div>
  );
}
