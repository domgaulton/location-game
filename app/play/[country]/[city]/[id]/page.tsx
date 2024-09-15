import { startGameSession } from '@/app/auth/supabase/actions';
import { createClient } from '@/app/lib/supabase/server';
import { TPageTemplate } from '@/types';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

const GameTemplate = dynamic(() => import('@/app/components/Game'), {
  ssr: false,
});

const PageTemplate = async ({ params }: TPageTemplate) => {
  const supabase = createClient();

  const { data: gamesData, error: gamesError } = await supabase
    .from('games')
    .select(
      `id, 
      name, 
      description,
      startingLocation ( lat, lng ),
      game_clues ( id, question, answer, answerReply, points, 
        position ( lat, lng ) 
      )`
    )
    .eq('id', params.id);

  if (!gamesData || gamesError) {
    notFound();
  }

  const gameData = {
    ...gamesData[0],
    startingLocation:
      gamesData[0].startingLocation[0] || gamesData[0].startingLocation, // issue with array type
    game_clues: gamesData[0].game_clues.map((clue) => {
      return {
        ...clue,
        clueId: clue.id,
        position: clue.position[0] || clue.position, // issue with array type
      };
    }),
  };

  const { data: getUserData, error: getUserError } =
    await supabase.auth.getUser();
  // console.log({ getUserData, getUserError });

  // only set game for logged in user
  if (getUserData.user) {
    await startGameSession(getUserData, gameData.id);
  }

  console.error(getUserError);

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
