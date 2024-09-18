import { createClient } from '@/app/lib/supabase/server';
import { TPageTemplate } from '@/types';
import dynamic from 'next/dynamic';
import { notFound, redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { UNIQUE_GUEST_COOKIE, URL_PREFIX } from '@/consts';

const GameTemplate = dynamic(() => import('@/app/components/Game'), {
  ssr: false,
});

const PageTemplate = async ({ params }: TPageTemplate) => {
  const supabase = createClient();
  const cookieStore = cookies();

  const { country, city, id } = params;

  const { data: getUserData } = await supabase.auth.getUser();
  const cookie = cookieStore.get(UNIQUE_GUEST_COOKIE);

  console.log({ getUserData, cookie });
  if (!cookie) {
    if (!getUserData?.user) {
      redirect(`${URL_PREFIX}${country}/${city}/${id}/authenticate`);
    } else {
      redirect(`${URL_PREFIX}${country}/${city}/${id}/create-game-session`);
    }
  }

  const { data: gamesData, error: gamesError } = await supabase
    .from('games')
    .select(
      `id, 
      name, 
      description,
      location ( lat, lng ),
      game_clues ( id, question, answer, answer_reply, points, 
        location ( lat, lng ) 
      ),
      game_sessions ( id, game_id, user_id, created_at ,
        game_session_clues_solved ( clue_id, game_session_id, solved )
      )`
    )
    .eq('id', params.id);

  console.log({ gamesData, gamesError });
  if (!gamesData || gamesError) {
    notFound();
  }

  const thisGameSession = gamesData[0].game_sessions.find(
    (session) => session.id == cookie.value
  );

  const gameData = {
    name: gamesData[0].name,
    location: gamesData[0].location[0] || gamesData[0].location, // issue with array type
    game_clues: gamesData[0].game_clues.map((clue) => {
      return {
        ...clue,
        clueId: clue.id,
        location: clue.location[0] || clue.location, // issue with array type
        solved:
          thisGameSession?.game_session_clues_solved?.find(
            (solvedClues) => solvedClues?.clue_id == clue?.id
          )?.solved || false,
      };
    }),
  };

  return (
    <GameTemplate
      location={gameData.location}
      gameId={params.id}
      game_clues={gameData.game_clues}
      name={gameData.name}
    />
  );
};

export default PageTemplate;
