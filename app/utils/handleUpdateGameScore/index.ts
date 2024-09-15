import { LOCAL_STORAGE_KEY } from '@/consts';
import { TGameStatus } from '@/types';

const handleUpdateGameScore = ({
  gameId,
  clueId,
  points,
}: {
  gameId: string;
  clueId: string;
  points: number;
}) => {
  let currentGameData: TGameStatus = {};
  try {
    currentGameData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || '{}'
    );

    let updatedGameData: TGameStatus = {};
    if (Object.keys(currentGameData).length) {
      const currentClueIds = currentGameData[gameId].clueIds || [];
      const currentScore = currentGameData[gameId].score || 0;
      updatedGameData = {
        ...currentGameData,
        [gameId]: {
          ...currentGameData[gameId],
          clueIds: [...currentClueIds, clueId],
          score: currentScore + points,
        },
      };
    } else {
      updatedGameData = {
        [gameId]: {
          clueIds: [clueId],
          score: points,
        },
      };
    }

    return updatedGameData;
  } catch (err) {
    console.error('Error parsing local storage data');
  }
};

export default handleUpdateGameScore;
