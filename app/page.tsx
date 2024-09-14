'use client';
// pages/location.js

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import MarkerClue from './components/MarkerClue';

// Fix the default marker icon issue in Leaflet with Next.js
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const CLUES = [
  {
    markerPosition: { lat: 51.47, lng: -0.05 },
    clue: { question: 'What’s your favorite color?', answer: 'blue' },
  },
];

export default function LocationTracker() {
  const [location, setLocation] = useState({
    lat: 51.505,
    lng: -0.09,
    loaded: false,
  });

  // Custom flashing blue dot icon
  const blueDotIcon = Leaflet.divIcon({
    className: 'relative flex items-center justify-center w-4 h-4',
    html: `
      <div class="relative z-10 w-3 h-3 bg-blue-600 rounded-full animate-ping-slow"></div>
      <div class="absolute top-[2px] left-[2px] z-0 w-2 h-2 bg-blue-500 rounded-full"></div>
    `,
    iconSize: [20, 20], // Size of the flashing dot
    popupAnchor: [0, -10], // Position of the popup in relation to the marker
  });

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
      alert('Geolocation is not supported by your browser');
    }
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      {location.loaded ? (
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
              You are here! <br /> Latitude: {location.lat}, Longitude:{' '}
              {location.lng}
            </Popup>
          </Marker>

          {CLUES.map((clue, index) => (
            <MarkerClue
              key={index} // Add a unique key to each MarkerClue
              currentLocation={location}
              markerPosition={clue.markerPosition}
              clue={clue.clue}
            />
          ))}
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
}
