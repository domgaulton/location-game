import { createClient } from '@/app/lib/supabase/server';
import capitalise from '@/app/utils/capitalise';
import { TGameData, TPageTemplate } from '@/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

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
    .select('name, overview')
    .eq('id', params.id); // Correct;

  if (!gamesData) {
    notFound();
  }

  const gameData = gamesData[0] as TGameData;

  console.log({ gameData });
  return (
    <div className="flex flex-col container py-8 mx-auto text-center">
      <h2 className="text-2xl">Play {gameData.name}</h2>
      <Link
        className="bg-yellow-400 my-4 p-3 hover:bg-yellow-600 inline-block"
        href={`/play/${params.country}/${params.city}/${params.id}/play/`}
      >
        Click Here To Play
      </Link>
      <ReactMarkdown>{gameData.overview}</ReactMarkdown>
    </div>
  );
};

export default PageTemplate;
