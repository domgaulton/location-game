import { createClient } from '@/app/lib/supabase/server';
import capitalise from '@/app/utils/capitalise';
import { GAMES } from '@/consts';
import { TGameData, TPageTemplate } from '@/types';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: TPageTemplate) {
  const supabase = createClient();

  const { data: gamesData } = await supabase
    .from('games')
    .select('*')
    .eq('id', params.id); // Correct;

  if (!gamesData) {
    notFound();
  }

  const { country, city, id } = params;
  return {
    title: `Play ${gamesData[0].name} in ${capitalise(city)}, ${capitalise(
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
  const supabase = createClient();

  const { data: gamesData } = await supabase
    .from('games')
    .select('name')
    .eq('id', params.id); // Correct;

  if (!gamesData) {
    notFound();
  }

  const gameData = gamesData[0] as TGameData;
  return (
    <div className="flex flex-col container py-8 mx-auto text-center">
      Play {gameData.name} now
      <Link
        className="bg-blue-200 my-4 p-3 hover:bg-blue-300 inline-block"
        href={`/play/${params.country}/${params.city}/${params.id}/`}
      >
        Click Here To Play
      </Link>
    </div>
  );
};

export default PageTemplate;
