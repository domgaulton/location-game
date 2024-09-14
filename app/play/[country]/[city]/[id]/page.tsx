import capitalise from '@/app/utils/capitalise';
import { GAMES } from '@/consts';
import { TGameData, TPageTemplate } from '@/types';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
const GameTemplate = dynamic(() => import('@/app/components/Game'), {
  ssr: false,
});

export async function generateMetadata({ params }: TPageTemplate) {
  let gameData: TGameData = {
    startingLocation: { lat: 0, lng: 0 },
    clues: [],
    name: '',
    gameId: '',
  };
  try {
    gameData = GAMES[params.id];
  } catch (error) {
    console.error(error);
    notFound();
  }

  const { country, city, id } = params;
  return {
    title: `Play ${gameData.name} in ${capitalise(city)}, ${capitalise(
      country
    )}`,
    description: 'Play the game and find the hidden treasure!',
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${country}/${city}/${id}/`,
    },
  };
}

const PageTemplate = ({ params }: TPageTemplate) => {
  let gameData: TGameData = {
    startingLocation: { lat: 0, lng: 0 },
    clues: [],
    name: '',
    gameId: '',
  };
  try {
    gameData = GAMES[params.id];
  } catch (error) {
    console.error(error);
    notFound();
  }
  return (
    <GameTemplate
      startingLocation={gameData.startingLocation}
      gameId={params.id}
      clues={gameData.clues}
      name={gameData.name}
    />
  );
};

export default PageTemplate;
