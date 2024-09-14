'use client';

import { LOCAL_STORAGE_KEY } from '@/consts';
import { TMarkerClue } from '@/types';
import Leaflet from 'leaflet';
import { SetStateAction, useEffect, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import handleUpdateGameScore from '../utils/handleUpdateGameScore';
import stringSimilarity from '../utils/stringSimilarity';

const LOCATION_ACCURACY = 0.001;

const MarkerClue = ({
  gameId,
  clueId,
  currentLocation,
  question,
  answer,
  answerReply,
  markerPosition,
  clueCompleted,
  points,
  handleUpdateScore,
}: TMarkerClue) => {
  const [userAtClue, setUserAtClue] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [submittedAnswer, setSubmittedAnswer] = useState<string>(
    clueCompleted ? answer : ''
  );
  const [answerCorrect, setAnswerCorrect] = useState<boolean>(clueCompleted);

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setUserAnswer(e.target.value);
  };

  const handleReset = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmittedAnswer('');
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmittedAnswer(userAnswer);
    if (
      stringSimilarity(userAnswer.toLowerCase(), answer.toLowerCase()) > 0.7
    ) {
      setAnswerCorrect(true);

      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(handleUpdateGameScore({ gameId, clueId, points }))
      );

      handleUpdateScore(points);
    }
  };

  // Custom flashing blue dot icon
  const markerIcon = Leaflet.divIcon({
    className: 'relative w-4 h-4',
    html: `
      <div class="relative top-1.5 left-1.5  z-10 w-3 h-3 rounded-full ${
        answerCorrect ? 'bg-green-600' : 'bg-red-500'
      }"></div>
      <div class="absolute z-10 top-0 left-0 w-6 h-6 opacity-25 rounded-full ${
        answerCorrect ? 'bg-green-600' : 'bg-red-500'
      }"></div>`,
    iconSize: [24, 24], // Size of the flashing dot
    popupAnchor: [0, -10], // Position of the popup in relation to the marker
  });

  useEffect(() => {
    const { lat: currentLat, lng: currentLng } = currentLocation;
    const { lat: markerLat, lng: markerLng } = markerPosition;

    const minLat = markerLat - LOCATION_ACCURACY;
    const maxLat = markerLat + LOCATION_ACCURACY;
    const minLng = markerLng - LOCATION_ACCURACY;
    const maxLng = markerLng + LOCATION_ACCURACY;

    const inBetweenLat = currentLat > minLat && currentLat < maxLat;
    const inBetweenLng = currentLng > minLng && currentLng < maxLng;

    if (inBetweenLat && inBetweenLng) {
      setUserAtClue(true);
    }
  }, [currentLocation, markerPosition]);

  return (
    <Marker
      position={[markerPosition.lat, markerPosition.lng]}
      icon={markerIcon}
    >
      <Popup>
        {userAtClue ? (
          <div>
            <h3 className="font-bold mb-2">{question}</h3>
            {submittedAnswer ? (
              answerCorrect ? (
                answerReply ? (
                  answerReply
                ) : (
                  <p>Correct! {submittedAnswer}</p>
                )
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
                  value={userAnswer}
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
