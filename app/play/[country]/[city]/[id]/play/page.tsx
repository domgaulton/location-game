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

  const { data: gamesData, error: gamesError } = await supabase
    .from('games')
    .select(
      `id, 
      name, 
      description,
      startingLocation ( lat, lng ),
      game_clues ( id, question, answer, answerReply, points, 
        location ( lat, lng ) 
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
        location: clue.location[0] || clue.location, // issue with array type
      };
    }),
  };

  const { data: getUserData } = await supabase.auth.getUser();
  const cookie = cookieStore.get(UNIQUE_GUEST_COOKIE);

  // get users cookie

  console.log({ getUserData, cookie });

  const { country, city, id } = params;

  if (!cookie) {
    if (!getUserData?.user) {
      redirect(`/play/${country}/${city}/${id}/authenticate`);
    } else {
      redirect(`/play/${country}/${city}/${id}/create-game-session`);
    }
  }
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
