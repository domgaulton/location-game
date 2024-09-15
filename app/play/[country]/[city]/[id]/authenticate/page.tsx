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
    <div className="flex flex-col container py-8 max-w-128 mx-auto">
      <button onClick={() => setSignUpType('login')}>Login</button>
      <button onClick={() => setSignUpType('signUp')}>Sign Up</button>
      <button onClick={() => setSignUpType('joinGame')}>Join Game</button>

      {signUpType === 'login' && (
        <h1 className="text-2xl font-bold mb-8">Log in to start</h1>
      )}

      {signUpType === 'signUp' && (
        <h1 className="text-2xl font-bold mb-8">Sign up to start playing</h1>
      )}

      {signUpType === 'joinGame' && (
        <h1 className="text-2xl font-bold mb-8">Use friends details to play</h1>
      )}

      <form className="flex flex-col">
        <label htmlFor="email">
          {signUpType === 'login' || signUpType === 'signUp'
            ? 'Your'
            : 'Your Friends'}{' '}
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="border p-3"
          required
        />

        {signUpType === 'login' && (
          <>
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
              className="bg-yellow-400 mt-8 p-3 hover:bg-yellow-600"
              formAction={(e) => login(e, updatedUrl)}
            >
              Log In
            </button>
          </>
        )}

        {signUpType === 'signUp' && (
          <>
            <label htmlFor="password">Create Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              className="border p-3"
              required
              pattern=".{8,}"
            />

            <button
              className="bg-yellow-400 mt-8 p-3 hover:bg-yellow-600"
              formAction={(e) => signUp(e, updatedUrl)}
            >
              Create Account
            </button>
          </>
        )}

        {signUpType === 'joinGame' && (
          <>
            <label htmlFor="unique_key">Your Friends Secret Code:</label>
            <input
              id="unique_key"
              name="unique_key"
              type="unique_key"
              className="border p-3"
              required
            />

            <button
              className="bg-yellow-400 mt-8 p-3 hover:bg-yellow-600"
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
