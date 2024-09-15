'use client';
import { joinGame, login, signUp } from '@/app/auth/supabase/actions';
import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';

type SignUpType = 'login' | 'signUp' | 'joinGame';

export default function LoginPage() {
  const [signUpType, setSignUpType] = useState<SignUpType>('login');
  const currentUrl = usePathname();
  const urlParms = useParams();
  const { id: gameId } = urlParms;

  const updatedUrl = currentUrl.replace('/authenticate', '/play');
  return (
    <div className="flex flex-col container py-8 mx-auto">
      <button onClick={() => setSignUpType('login')}>Login</button>
      <button onClick={() => setSignUpType('signUp')}>Sign Up</button>
      <button onClick={() => setSignUpType('joinGame')}>Join Game</button>
      <h1 className="text-2xl font-bold mb-8">
        Log In or Create an account to play
      </h1>
      <form className="flex flex-col">
        {signUpType === 'login' && (
          <>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              className="border p-3"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              className="border p-3"
              required
              pattern=".{8,}"
            />

            <button
              className="bg-blue-200 my-2 p-3 hover:bg-blue-300"
              formAction={(e) => login(e, updatedUrl)}
            >
              Log In
            </button>
          </>
        )}

        {signUpType === 'signUp' && (
          <>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              className="border p-3"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              className="border p-3"
              required
              pattern=".{8,}"
            />

            <button
              className="bg-blue-200 my-2 p-3 hover:bg-blue-300"
              formAction={(e) => signUp(e, updatedUrl)}
            >
              Create Account
            </button>
          </>
        )}

        {signUpType === 'joinGame' && (
          <>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              className="border p-3"
              required
            />
            <label htmlFor="unique_key">Join Game Code:</label>
            <input
              id="unique_key"
              name="unique_key"
              type="unique_key"
              className="border p-3"
              required
            />

            <button
              className="bg-blue-200 my-2 p-3 hover:bg-blue-300"
              formAction={(e) => joinGame(e, gameId as string, updatedUrl)}
            >
              Join Game
            </button>
          </>
        )}
      </form>
    </div>
  );
}
