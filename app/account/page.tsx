import { createClient } from '@/app/lib/supabase/server';
import { redirect } from 'next/navigation';
import { signOut } from '@/app/auth/supabase/actions';

const Account = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (!data || error) {
    redirect('/');
  }

  return (
    <div className="flex flex-col container py-8 mx-auto text-center">
      Logged in as {data.user.email}
      <form className="flex flex-col mt-4">
        <button
          className="bg-yellow-400 p-3 hover:bg-yellow-600"
          formAction={signOut}
        >
          Sign out
        </button>
      </form>
    </div>
  );
};

export default Account;
