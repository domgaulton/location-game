'use client';
import { joinGame, login, signUp } from '@/app/auth/supabase/actions';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type SignUpType = 'signIn' | 'signUp' | 'joinGame';

export default function LoginPage() {
  const [signUpType, setSignUpType] = useState<SignUpType>('signUp');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const currentUrl = usePathname();
  const urlParms = useParams();

  const updatedUrl = currentUrl.replace('/authenticate', '/play');

  const handleLogin = async (event: FormData) => {
    const response = await login(event, updatedUrl);
    console.log({ response });
    if (response) {
      setErrorMessage(response);
    }
  };

  const handleSignUp = async (event: FormData) => {
    const response = await signUp(event, updatedUrl);
    console.log({ response });
    if (response) {
      setErrorMessage(response);
    }
  };

  const handleJoinGame = async (event: FormData) => {
    const { id: gameId } = urlParms;
    const response = await joinGame(event, gameId as string, updatedUrl);
    console.log({ response });
    if (response) {
      setErrorMessage(response);
    }
  };

  useEffect(() => {
    setErrorMessage('');
  }, [signUpType]);

  return (
    <div className="flex flex-col container py-8 max-w-128 mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-around gap-2 items-center mb-8">
        <Link
          href="/"
          className={
            'py-2 px-8 w-full md:w-auto rounded-lg bg-gray-600 text-white text-center mb-4'
          }
        >
          Explore Other Games
        </Link>

        <button
          className={`py-4 px-8 w-full md:w-auto rounded-lg ${
            signUpType === 'signUp' ? 'bg-blue-500 text-white' : 'bg-blue-200'
          }`}
          onClick={() => setSignUpType('signUp')}
        >
          Sign Up
        </button>
        <button
          className={`py-4 px-8 w-full md:w-auto rounded-lg ${
            signUpType === 'signIn' ? 'bg-blue-500 text-white' : 'bg-blue-200'
          }`}
          onClick={() => setSignUpType('signIn')}
        >
          Sign In
        </button>
        <button
          className={`py-4 px-8 w-full md:w-auto rounded-lg ${
            signUpType === 'joinGame' ? 'bg-blue-500 text-white' : 'bg-blue-200'
          }`}
          onClick={() => setSignUpType('joinGame')}
        >
          Join Friends Game
        </button>
      </div>

      {signUpType === 'signIn' && (
        <h1 className="text-2xl font-bold mb-8">Sign in to start</h1>
      )}

      {signUpType === 'signUp' && (
        <h1 className="text-2xl font-bold mb-8">Sign up to start playing</h1>
      )}

      {signUpType === 'joinGame' && (
        <h1 className="text-2xl font-bold mb-8">Use friends details to play</h1>
      )}

      <form className="flex flex-col">
        <label htmlFor="email">
          {signUpType === 'signIn' || signUpType === 'signUp'
            ? 'Your'
            : 'Your Friends'}{' '}
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="border p-3 dark:text-black"
          required
        />

        {signUpType === 'signIn' && (
          <>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              className="border p-3 dark:text-black"
              required
              pattern=".{8,}"
            />

            <button
              className="bg-yellow-400 mt-8 p-3 hover:bg-yellow-600"
              formAction={(e) => handleLogin(e)}
            >
              Sign In
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
              className="border p-3 dark:text-black"
              required
              pattern=".{8,}"
            />

            <button
              className="bg-yellow-400 mt-8 p-3 hover:bg-yellow-600"
              formAction={(e) => handleSignUp(e)}
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
              className="border p-3 dark:text-black"
              required
            />

            <button
              className="bg-yellow-400 mt-8 p-3 hover:bg-yellow-600"
              formAction={(e) => handleJoinGame(e)}
            >
              Join Friends Game
            </button>
          </>
        )}

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>
    </div>
  );
}
