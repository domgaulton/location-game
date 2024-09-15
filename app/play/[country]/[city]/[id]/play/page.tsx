import { createClient } from '@/app/lib/supabase/server';
import { TPageTemplate } from '@/types';
import dynamic from 'next/dynamic';
import { notFound, redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { UNIQUE_GUEST_COOKIE } from '@/consts';

const GameTemplate = dynamic(() => import('@/app/components/Game'), {
  ssr: false,
});

const PageTemplate = async ({ params }: TPageTemplate) => {
  const supabase = createClient();
  const cookieStore = cookies();

  const { country, city, id } = params;

  const { data: getUserData } = await supabase.auth.getUser();
  const cookie = cookieStore.get(UNIQUE_GUEST_COOKIE);

  if (!cookie) {
    if (!getUserData?.user) {
      redirect(`/play/${country}/${city}/${id}/authenticate`);
    } else {
      redirect(`/play/${country}/${city}/${id}/create-game-session`);
    }
  }

  const { data: gamesData, error: gamesError } = await supabase
    .from('games')
    .select(
      `id, 
      name, 
      description,
      startingLocation ( lat, lng ),
      game_clues ( id, question, answer, answerReply, points, 
        location ( lat, lng ) 
      ),
      game_sessions ( id, game_id, user_id, created_at ,
        game_session_clues_solved ( clue_id, game_session_id, solved )
      )`
    )
    .eq('id', params.id);

  if (!gamesData || gamesError) {
    notFound();
  }

  const thisGameSession = gamesData[0].game_sessions.find(
    (session) => session.id == cookie.value
  );

  const gameData = {
    name: gamesData[0].name,
    startingLocation:
      gamesData[0].startingLocation[0] || gamesData[0].startingLocation, // issue with array type
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
      startingLocation={gameData.startingLocation}
      gameId={params.id}
      game_clues={gameData.game_clues}
      name={gameData.name}
    />
  );
};

export default PageTemplate;
