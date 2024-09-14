type TCountries = 'England' | 'UK' | 'USA';
type TCities = 'London' | 'Portland';

export type TPageTemplate = {
  params: { country: string; city: string; id: string };
};

export type TLocation = {
  lat: number;
  lng: number;
};

export type TMarkerClueData = {
  clueId: string;
  question: string;
  answer: string;
  answerReply?: string;
  markerPosition: TLocation;
  clueCompleted: boolean;
  points: number;
};

export type TGameMetaData = {
  countries: TCountries[];
  cities: TCities[];
  metaDescription: string;
};

export type TGameData = {
  name: string;
  gameId: string;
  startingLocation: TLocation;
  clues: TMarkerClueData[];
  overview?: string;
};

export type TGameObject = {
  [key: string]: TGameData & TGameMetaData;
};

export type TMarkerClue = {
  currentLocation: TLocation;
  handleUpdateScore: (points: number) => void;
} & Pick<TGameData, 'gameId'> &
  Pick<
    TMarkerClueData,
    | 'clueId'
    | 'question'
    | 'answer'
    | 'answerReply'
    | 'markerPosition'
    | 'clueCompleted'
    | 'points'
  >;

export type TGameLocalStorage = {
  [key: string]: {
    clueIds?: string[];
    score: number;
  };
};
