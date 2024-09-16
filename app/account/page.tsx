import { createClient } from '@/app/lib/supabase/server';
import { redirect } from 'next/navigation';
import { signOut } from '@/app/auth/supabase/actions';
import BackButton from '../components/BackButton';

const Account = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (!data || error) {
    redirect('/');
  }

  return (
    <div className="flex flex-col container py-8 mx-auto text-center pt-24">
      Logged in as {data.user.email}
      <h2 className="text-2xl">
        By Logging out you will lose access to any live games - are you sure you
        want to continue?
      </h2>
      <form className="flex flex-col mt-4">
        <button
          className="bg-yellow-400 p-3 hover:bg-yellow-600"
          formAction={signOut}
        >
          Sign out
        </button>
      </form>
      <BackButton className="bg-blue-400 p-3 hover:bg-blue-600 mt-4">
        Back to Game
      </BackButton>
    </div>
  );
};

export default Account;
