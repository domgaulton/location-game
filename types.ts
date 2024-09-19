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
  answer_reply?: string;
  location: TLocation;
  solved?: boolean;
  points: number;
};

export type TGameMetaData = {
  countries: TCountries[];
  cities: TCities[];
  metaDescription: string;
};

export type TGameData = {
  name: string;
  overview?: string;
  gameId: string;
  location: TLocation;
  game_clues: TMarkerClueData[];
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
    | 'answer_reply'
    | 'location'
    | 'solved'
    | 'points'
  >;

export type TGameStatus = {
  [key: string]: {
    clueIds?: string[];
    score: number;
  };
};
