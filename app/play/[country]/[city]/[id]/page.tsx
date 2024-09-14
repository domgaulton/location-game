import capitalise from '@/app/utils/capitalise';
import { GAMES, STRIPE_PAYMENT_COOKIE } from '@/consts';
import { TGameData, TPageTemplate } from '@/types';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import ElementsForm from '@/app/components/Checkout/ElementsForm';
import ReactMarkdown from 'react-markdown';

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

const PageTemplate = async ({ params }: TPageTemplate) => {
  const cookieStore = cookies();

  let gameData: TGameData = {
    startingLocation: { lat: 0, lng: 0 },
    clues: [],
    name: '',
    gameId: '',
    overview: '',
  };
  try {
    gameData = GAMES[params.id];
  } catch (error) {
    console.error(error);
    notFound();
  }

  const cookie = await cookieStore?.get(STRIPE_PAYMENT_COOKIE);

  return cookie ? (
    <GameTemplate
      startingLocation={gameData.startingLocation}
      gameId={params.id}
      clues={gameData.clues}
      name={gameData.name}
    />
  ) : (
    <div className="container px-4">
      <ElementsForm />
      <ReactMarkdown>{gameData.overview}</ReactMarkdown>
    </div>
  );
};

export default PageTemplate;
