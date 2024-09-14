import capitalise from '@/app/utils/capitalise';
import { GAMES, STRIPE_PAYMENT_COOKIE } from '@/consts';
import { TGameData, TPageTemplate } from '@/types';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import ElementsForm from '@/app/components/Checkout/ElementsForm';

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
  };
  try {
    gameData = GAMES[params.id];
  } catch (error) {
    console.error(error);
    notFound();
  }

  const cookie = await cookieStore?.get(STRIPE_PAYMENT_COOKIE);

  console.log({ cookie });
  return cookie ? (
    <GameTemplate
      startingLocation={gameData.startingLocation}
      gameId={params.id}
      clues={gameData.clues}
      name={gameData.name}
    />
  ) : (
    <div className="container">
      <section>
        <h2>Introduction</h2>
        <p>
          Deep in the heart of Nunhead, South East London, a hidden treasure has
          been forgotten by time. For centuries, rumors of its existence have
          circulated, but few have dared to search for it. The treasure, buried
          beneath layers of history, has been protected by riddles and clues
          scattered across the quiet streets of Nunhead. Are you brave enough to
          begin the hunt?
        </p>
      </section>

      <section>
        <h2>The Legend</h2>
        <p>
          According to local folklore, the treasure once belonged to an
          eccentric Victorian inventor who lived in a grand house near Nunhead
          Cemetery. His inventions brought him wealth, but after his mysterious
          disappearance, his riches were never found.
        </p>
        <p>
          The treasure was said to be hidden in a series of underground tunnels
          that stretch from the cemetery to Peckham Rye Park. Over time, the
          inventor left behind cryptic clues to ensure that only the most clever
          could find his hidden wealth.
        </p>
      </section>

      <section className="mb-4 border-b-2 pb-4">
        <h2>The Journey Begins</h2>
        <p>
          Your journey starts at <strong>Nunhead Green</strong>, a peaceful spot
          where locals gather for quiet walks. There, under the shade of the
          ancient oak tree, you&apos;ll find your first clue: a riddle etched
          into a plaque.
        </p>
        <p>
          <em>
            &quot;To find the key to the old man&apos;s gold, look to the gate
            where the stories are told.&quot;
          </em>
        </p>
        <p>
          From here, you must head toward <strong>Nunhead Cemetery</strong>, one
          of London&apos;s &quot;Magnificent Seven&quot; cemeteries. The eerie,
          overgrown paths will lead you to the second clue, hidden among the
          gravestones.
        </p>
      </section>

      <ElementsForm />
    </div>
  );
};

export default PageTemplate;
