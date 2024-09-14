import dynamic from 'next/dynamic';

const GameDynamic = dynamic(() => import('./components/Game'), { ssr: false });

export default function LocationTracker() {
  return <GameDynamic />;
}
