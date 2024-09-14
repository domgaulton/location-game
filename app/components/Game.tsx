'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import MarkerClue from './MarkerClue';
import { TGameData, TGameLocalStorage } from '@/types';
import { LOCAL_STORAGE_KEY } from '@/consts';
import { stripe } from '../lib/stripe';

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Game = ({ startingLocation, gameId, name, clues }: TGameData) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [gameStatus, setGameStatus] = useState<TGameLocalStorage>({});
  const [location, setLocation] = useState({
    lat: startingLocation.lat,
    lng: startingLocation.lng,
    loaded: false,
  });

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('User location:', position.coords);
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

  const handleUpdateScore = (points: number) => {
    const duplicateGameStatus: TGameLocalStorage = { ...gameStatus };

    const updatedScore = duplicateGameStatus[gameId]?.score
      ? duplicateGameStatus[gameId]?.score + points
      : points;

    const updatedGameData: TGameLocalStorage = {
      ...duplicateGameStatus,
      [gameId]: {
        ...duplicateGameStatus[gameId],
        score: updatedScore,
      },
    };

    setGameStatus(updatedGameData);
  };

  useEffect(() => {
    let previousGameStatus: TGameLocalStorage = {};

    try {
      previousGameStatus = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY) || '{}'
      );
      if (Object.keys(previousGameStatus).length) {
        setGameStatus(previousGameStatus);
      }
    } catch (err) {
      console.error('Error parsing local storage data');
    }

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

  return (
    <div className="h-100vh relative" style={{ height: '100vh' }}>
      {location.loaded ? (
        <>
          <MapContainer
            center={[location.lat, location.lng]}
            zoom={13}
            style={{ height: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[location.lat, location.lng]} icon={blueDotIcon}>
              <Popup>
                <h3 className="font-bold mb-3">
                  Your Score: {gameStatus[gameId]?.score || 0}
                </h3>
                <h3 className="font-bold">Your Position</h3>
                Latitude: {parseFloat(`${location.lat}`).toFixed(2)} <br />
                Longitude: {parseFloat(`${location.lng}`).toFixed(2)} <br />
              </Popup>
            </Marker>

            {clues.map((clue, index) => (
              <MarkerClue
                key={index} // Add a unique key to each MarkerClue
                gameId={gameId}
                currentLocation={location}
                clueId={clue.clueId}
                markerPosition={clue.markerPosition}
                question={clue.question}
                answer={clue.answer}
                answerReply={clue.answerReply}
                clueCompleted={
                  gameStatus[gameId]?.clueIds?.includes(clue.clueId) || false
                }
                points={clue.points}
                handleUpdateScore={handleUpdateScore}
              />
            ))}
          </MapContainer>
        </>
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

          {errorMessage && (
            <div className="text-red-600 mt-4">{errorMessage}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
