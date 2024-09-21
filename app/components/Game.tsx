'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import MarkerClue from './MarkerClue';
import { TGameData, TGameStatus } from '@/types';
import { UNIQUE_GUEST_COOKIE } from '@/consts';
import { createClient } from '../lib/supabase/client';
import { useRouter } from 'next/navigation';

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Game = ({
  location: startingLocation,
  gameId,
  name,
  game_clues,
}: TGameData) => {
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string>('');
  // set state from game object
  const [gameStatus, setGameStatus] = useState<TGameStatus>({
    [gameId]: {
      clueIds: game_clues
        .filter((clue) => clue.solved)
        .map((item) => item.clueId),
      score: 0,
      startTime: new Date(),
    },
  });

  const [location, setLocation] = useState({
    lat: startingLocation.lat,
    lng: startingLocation.lng,
    loaded: false,
  });

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (!parts || !parts.length) return '';
    if (parts.length === 2) return parts.pop()?.split(';')?.shift();
  };

  const uniqueGameSession = getCookie(UNIQUE_GUEST_COOKIE);

  const supabase = createClient();

  supabase
    .channel('custom-all-channel')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'game_session_clues_solved',
        filter: `game_session_id=eq.${uniqueGameSession}`,
      },
      (payload) => {
        const updatedClue = payload.new;

        const updatedClueHasBeenSolved = (updatedClue as { solved: boolean })
          .solved;
        const gameStatusDoesNotContainClue = !gameStatus[
          gameId
        ]?.clueIds?.includes((updatedClue as { clue_id: string })?.clue_id);

        if (
          updatedClue &&
          updatedClueHasBeenSolved &&
          gameStatusDoesNotContainClue
        ) {
          const duplicateGameStatus: TGameStatus = { ...gameStatus };

          const updatedClueArray = [
            ...(duplicateGameStatus[gameId]?.clueIds || []),
            (updatedClue as { clue_id: string }).clue_id,
          ];

          const updatedGameData: TGameStatus = {
            ...duplicateGameStatus,
            [gameId]: {
              ...duplicateGameStatus[gameId],
              clueIds: [
                ...(duplicateGameStatus[gameId]?.clueIds || []),
                (updatedClue as { clue_id: string }).clue_id,
              ],
              score: (updatedClueArray?.length || 0) * 10,
            },
          };

          setGameStatus(updatedGameData);
        }
      }
    )
    .subscribe();

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setErrorMessage('');
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setErrorMessage(
                'Location access denied. Please enable location services and try again.'
              );
              break;
            case error.POSITION_UNAVAILABLE:
              setErrorMessage('Location information is unavailable.');
              break;
            case error.TIMEOUT:
              setErrorMessage('The request to get user location timed out.');
              break;
            default:
              setErrorMessage('An unknown error occurred.');
              break;
          }
        }
      );
    } else {
      setErrorMessage('Geolocation is not supported by this browser.');
    }
  };

  // Custom flashing blue dot icon
  const blueDotIcon = Leaflet.divIcon({
    className: 'relative w-4 h-4',
    html: `
      <div class="relative top-1.5 left-1.5 z-10 w-3 h-3 rounded-full bg-blue-600"></div>
      <div class="absolute z-10 top-0 left-0 w-6 h-6 opacity-25 rounded-full bg-blue-600 animate-ping-slow"></div>`,
    iconSize: [24, 24], // Size of the flashing dot
    popupAnchor: [0, -10], // Position of the popup in relation to the marker
  });

  const getTimeDifference = (date: string | number | Date) => {
    const now = new Date();
    const differenceInMilliseconds = +now - +new Date(date); // Get the difference in milliseconds

    const differenceInMinutes = Math.floor(
      differenceInMilliseconds / (1000 * 60)
    );
    const hours = Math.floor(differenceInMinutes / 60);
    const minutes = differenceInMinutes % 60;

    return { hours, minutes };
  };

  const handleStartNewGame = () => {
    const userWantsToQuitGame = confirm('Are you sure?');

    if (userWantsToQuitGame) {
      document.cookie = `${UNIQUE_GUEST_COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      router.push('/');
    }
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            loaded: true,
          });
        },
        (error) => {
          console.error('Error detecting location: ', error);
        },
        { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 }
      );
    } else {
      alert(`To play ${name}, you need to enable location services.`);
    }
  }, [name]);

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      const { data: gameSessionCluesSolvedData } = await supabase
        .from('game_session_clues_solved')
        .select('*')
        .eq('game_session_id', uniqueGameSession);

      const { data: gameSessionData } = await supabase
        .from('game_sessions')
        .select(`created_at`)
        .eq('id', uniqueGameSession);

      return { gameSessionCluesSolvedData, gameSessionData };
    };

    try {
      const result = fetchData();

      result.then((cluesResponse) => {
        const solvedClues = cluesResponse.gameSessionCluesSolvedData
          ?.filter((clue) => clue.solved)
          .map((clue) => clue.clue_id);

        const duplicateGameStatus: TGameStatus = { ...gameStatus };

        const updatedGameData: TGameStatus = {
          ...duplicateGameStatus,
          [gameId]: {
            ...duplicateGameStatus[gameId],
            clueIds: solvedClues,
            score: (solvedClues?.length || 0) * 10,
            startTime: cluesResponse?.gameSessionData?.[0]?.created_at || '',
          },
        };

        setGameStatus(updatedGameData);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="h-100vh relative" style={{ height: '100vh' }}>
      {location.loaded ? (
        gameStatus[gameId]?.clueIds?.length === game_clues.length ? (
          <div className="flex flex-col items-center gap-8 pt-8 mx-8">
            <h1 className="text-2xl font-bold text-center mt-4">
              Congratulations! You finished!
            </h1>
            <h2 className="text-xl font-bold text-center mt-4">
              In {getTimeDifference(gameStatus[gameId].startTime).hours} hours
              and {getTimeDifference(gameStatus[gameId].startTime).minutes}{' '}
              minutes
            </h2>

            <h2 className="text-2xl font-bold text-center mt-4">
              Your final score is: {gameStatus[gameId]?.score}
            </h2>

            <button
              onClick={handleStartNewGame}
              className={
                'py-2 px-8 w-full md:w-auto rounded-lg bg-gray-600 text-white inline-block mx-auto text-center mb-4'
              }
            >
              Finish Game
            </button>
          </div>
        ) : (
          <>
            <button
              className="z-[1000] text-xs md:text-md fixed top-4 right-4 bg-white p-2 md:p-4 text-left text-black"
              onClick={handleStartNewGame}
            >
              Score: {gameStatus[gameId]?.score}
              <br />
              <br />
              Start New Game
            </button>
            <MapContainer
              center={[location.lat, location.lng]}
              zoom={13}
              style={{ height: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker
                position={[location.lat, location.lng]}
                icon={blueDotIcon}
              >
                <Popup>
                  <h3 className="font-bold">Your Position</h3>
                  Latitude: {parseFloat(`${location.lat}`).toFixed(2)} <br />
                  Longitude: {parseFloat(`${location.lng}`).toFixed(2)} <br />
                </Popup>
              </Marker>

              {game_clues.map((clue, index) => (
                <MarkerClue
                  key={index} // Add a unique key to each MarkerClue
                  gameId={gameId}
                  currentLocation={location}
                  clueId={clue.clueId}
                  location={clue.location}
                  question={clue.question}
                  answer={clue.answer}
                  answer_reply={clue.answer_reply}
                  solved={
                    gameStatus[gameId]?.clueIds?.includes(clue.clueId) || false
                  }
                  points={clue.points}
                />
              ))}
            </MapContainer>
          </>
        )
      ) : (
        <div className="container mx-auto text-center py-6">
          <h1 className="text-2xl font-bold mb-4">Allow Location Access</h1>
          <p className="mb-4">
            We need access to your location to enhance your experience.
          </p>

          <button
            onClick={requestLocation}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Enable Location Services
          </button>

          <p className="mb-4">
            Once you have enabled location services, you might need to refresh
            the page to start
          </p>

          {errorMessage && (
            <div className="text-red-600 mt-4">{errorMessage}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
