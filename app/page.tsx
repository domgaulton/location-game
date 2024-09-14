import Game from './components/Game';

export default function LocationTracker() {
  return typeof window !== 'undefined' ? 'Loading...' : <Game />;
}
