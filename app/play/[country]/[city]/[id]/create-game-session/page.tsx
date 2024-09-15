'use client';
import { startGameSession } from '@/app/auth/supabase/actions';
import { UNIQUE_GUEST_COOKIE } from '@/consts';
import { redirect, useParams, usePathname } from 'next/navigation';

export default function LoginPage() {
  const urlParms = useParams();
  const pathName = usePathname();

  // const updatedUrl = Object.values(urlParms).join('/');
  const updatedUrl = pathName.replace('/create-game-session', '/play');

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (!parts || !parts.length) return '';
    if (parts.length === 2) return parts.pop()?.split(';')?.shift();
  };

  const uniqueGameSession = getCookie(UNIQUE_GUEST_COOKIE);

  console.log({ uniqueGameSession });

  if (uniqueGameSession) {
    redirect(updatedUrl);
  }

  return (
    <div className="flex flex-col container py-8 mx-auto">
      <h1 className="text-2xl font-bold mb-8">Start Game</h1>
      <p>You will have two hours to start the game</p>
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
            className="bg-blue-200 my-2 p-3 hover:bg-blue-300"
            formAction={(e) =>
              startGameSession(e, `${urlParms.id}`, updatedUrl)
            }
          >
            Start Game
          </button>
        </>
      </form>
    </div>
  );
}
