'use client';

import Leaflet from 'leaflet';
import { SetStateAction, useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';

type TMarkerClue = {
  currentLocation: { lat: number; lng: number };
  markerPosition: {
    lat: number;
    lng: number;
  };
  clue: { question: string; answer: string };
};

const LOCATION_ACCURACY = 0.001;

const MarkerClue = ({ currentLocation, markerPosition, clue }: TMarkerClue) => {
  const [userAtClue, setUserAtClue] = useState(false);
  const [answer, setAnswer] = useState<string>('');
  const [submittedAnswer, setSubmittedAnswer] = useState<string>('');
  const [answerCorrect, setAnswerCorrect] = useState<boolean>(false);

  const { lat: markerLat, lng: markerLng } = markerPosition;
  const minLat = markerLat - LOCATION_ACCURACY;
  const maxLat = markerLat + LOCATION_ACCURACY;
  const minLng = markerLng - LOCATION_ACCURACY;
  const maxLng = markerLng + LOCATION_ACCURACY;

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setAnswer(e.target.value);
  };

  const handleReset = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmittedAnswer('');
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmittedAnswer(answer);
    if (answer.toLowerCase() === clue.answer.toLowerCase()) {
      setAnswerCorrect(true);
    }
  };

  // Custom flashing blue dot icon
  const markerIcon = Leaflet.divIcon({
    className: 'relative flex items-center justify-center w-4 h-4',
    html: `<div class="relative z-10 w-6 h-6 ${
      answerCorrect ? 'bg-green-600' : 'bg-red-600'
    } rounded-full"></div>`,
    iconSize: [20, 20], // Size of the flashing dot
    popupAnchor: [0, -10], // Position of the popup in relation to the marker
  });

  useEffect(() => {
    const { lat: currentLat, lng: currentLng } = currentLocation;

    const inBetweenLat = currentLat > minLat && currentLat < maxLat;
    const inBetweenLng = currentLng > minLng && currentLng < maxLng;

    if (inBetweenLat && inBetweenLng) {
      setUserAtClue(true);
    }
  }, [currentLocation]);

  return (
    <Marker
      position={[markerPosition.lat, markerPosition.lng]}
      icon={markerIcon}
    >
      <Popup>
        {userAtClue ? (
          <div>
            <h3 className="font-bold mb-2">{clue.question}</h3>
            {submittedAnswer ? (
              answerCorrect ? (
                <p>Correct! {submittedAnswer}</p>
              ) : (
                <>
                  <div>Not Correct: {submittedAnswer}</div>
                  <button
                    onClick={handleReset}
                    className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Try Again
                  </button>
                </>
              )
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={answer}
                  onChange={handleInputChange}
                  className="p-1 border border-gray-300 rounded"
                  placeholder="Type your answer..."
                />
                <button
                  type="submit"
                  className="ml-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        ) : (
          'Go to clue'
        )}
      </Popup>
    </Marker>
  );
};

export default MarkerClue;
