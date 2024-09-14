import { TGameObject } from './types';

export const LOCAL_STORAGE_KEY = 'geohunts';
export const STRIPE_PAYMENT_COOKIE = 'stripe-cookie';

export const GAMES: TGameObject = {
  'pomeroy-street': {
    gameId: 'pomeroy-street',
    name: 'Pomeroy Street Classics',
    startingLocation: { lat: 51.505, lng: -0.09 },
    countries: ['England', 'UK'],
    cities: ['London'],
    metaDescription: 'Explore Pomeroy Street and find the hidden treasure!',
    clues: [
      {
        clueId: '1',
        markerPosition: { lat: 51.4709229, lng: -0.0502218 },
        question: `Where is the Earl from?`,
        answer: 'Derby',
        answerReply: `Although he can be found near Peckham these days, he was originally from Derby - as the name suggests!`,
        clueCompleted: false,
        points: 10,
      },
      {
        clueId: '2',
        markerPosition: { lat: 51.4652513, lng: -0.0594534 },
        question: 'What is the name of the pub?',
        answer: 'The Old Nuns Head',
        answerReply: `The Old Nuns Head is a great place to stop for a drink or a bite to eat.`,
        clueCompleted: false,
        points: 10,
      },
    ],
  },
  'portland-pubs': {
    gameId: 'portland-pubs',
    name: 'Portland Sites and Pubs',
    startingLocation: { lat: 43.655276, lng: -70.255734 },
    countries: ['USA'],
    cities: ['Portland'],
    metaDescription: 'Explore Pomeroy Street and find the hidden treasure!',
    clues: [
      {
        clueId: '1',
        markerPosition: { lat: 43.655276, lng: -70.255734 }, // Commercial Street location
        question: `What is the name of the iconic lighthouse that watches over Portland?`,
        answer: 'Portland Head Light',
        answerReply: `Correct! The Portland Head Light is one of the most iconic landmarks of the city and has been guiding sailors since 1791.`,
        clueCompleted: false,
        points: 15,
      },
      {
        clueId: '2',
        markerPosition: { lat: 43.660212, lng: -70.25151 }, // East End Beach
        question:
          'Which beach offers stunning views of Casco Bay and is a favorite local spot?',
        answer: 'East End Beach',
        answerReply: `Exactly! East End Beach is a beloved spot for locals and offers beautiful views of Casco Bay.`,
        clueCompleted: false,
        points: 10,
      },
      {
        clueId: '3',
        markerPosition: { lat: 43.656839, lng: -70.25386 }, // Pub on Commercial Street
        question:
          'Which well-known pub on Commercial Street offers a wide selection of local craft beers?',
        answer: "Gritty McDuff's",
        answerReply: `That’s right! Gritty McDuff's is a staple of Portland's craft beer scene and a must-visit for any beer lover.`,
        clueCompleted: false,
        points: 10,
      },
      {
        clueId: '4',
        markerPosition: { lat: 43.65737, lng: -70.2547 }, // Shipyard Brewing Co.
        question:
          'Which brewery on the East End is famous for its Pumpkinhead Ale?',
        answer: 'Shipyard Brewing Co.',
        answerReply: `Yes! Shipyard Brewing Co. is known for its seasonal Pumpkinhead Ale, loved by locals and visitors alike.`,
        clueCompleted: false,
        points: 10,
      },
      {
        clueId: '5',
        markerPosition: { lat: 43.664316, lng: -70.239014 }, // Eastern Promenade
        question:
          'What is the name of the park that offers scenic views, trails, and a perfect picnic spot in Portland?',
        answer: 'Eastern Promenade',
        answerReply: `Absolutely! The Eastern Promenade is a beautiful area for walking, picnicking, and enjoying views of the bay.`,
        clueCompleted: false,
        points: 15,
      },
      {
        clueId: '6',
        markerPosition: { lat: 43.661072, lng: -70.254056 }, // Portland Observatory
        question:
          'What is the name of the historic tower that offers panoramic views of Portland and its harbor?',
        answer: 'Portland Observatory',
        answerReply: `Correct! The Portland Observatory is the last remaining maritime signal tower in the U.S. and offers spectacular views of the city.`,
        clueCompleted: false,
        points: 15,
      },
    ],
  },
};
