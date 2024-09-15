'use client';
import { startGameSession } from '@/app/auth/supabase/actions';
import { UNIQUE_GUEST_COOKIE } from '@/consts';
import Link from 'next/link';
import { redirect, useParams, usePathname } from 'next/navigation';

export default function LoginPage() {
  const urlParms = useParams();
  const pathName = usePathname();

  // const redirectUrlToPlay = Object.values(urlParms).join('/');
  const redirectUrlToPlay = pathName.replace('/create-game-session', '/play');
  const redirectUrlToExplore = pathName.replace(
    '/create-game-session',
    '/explore'
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

  return (
    <div className="flex flex-col container py-8 mx-auto">
      <h1 className="text-2xl font-bold mb-8">Start Game</h1>
      <p>We can see you are logged in and can start this game</p>
      <p>
        You will have two hours to start the game. If you want to play with
        friends, enter a key here and share it with them. (You can't change this
        later)
      </p>
      <form className="flex flex-col mt-8">
        <>
          <label htmlFor="unique_key">Optional Key For Friends to Join:</label>
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

      <p>Don't want to start the game just yet?</p>
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
