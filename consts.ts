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
    overview: `
**Unravel the secrets of South East London**

---

## Introduction

Deep in the heart of Nunhead, South East London, a hidden treasure has been forgotten by time. For centuries, rumors of its existence have circulated, but few have dared to search for it. The treasure, buried beneath layers of history, has been protected by riddles and clues scattered across the quiet streets of Nunhead. Are you brave enough to begin the hunt?

## The Legend

According to local folklore, the treasure once belonged to an eccentric Victorian inventor who lived in a grand house near Nunhead Cemetery. His inventions brought him wealth, but after his mysterious disappearance, his riches were never found.

The treasure was said to be hidden in a series of underground tunnels that stretch from the cemetery to Peckham Rye Park. Over time, the inventor left behind cryptic clues to ensure that only the most clever could find his hidden wealth.

## The Journey Begins

Your journey starts at **Nunhead Green**, a peaceful spot where locals gather for quiet walks. There, under the shade of the ancient oak tree, you'll find your first clue: a riddle etched into a plaque.

*"To find the key to the old man's gold, look to the gate where the stories are told."*

From here, you must head toward **Nunhead Cemetery**, one of London's "Magnificent Seven" cemeteries. The eerie, overgrown paths will lead you to the second clue, hidden among the gravestones.

## The Final Clue

As you make your way past the old gravestones and mausoleums, you'll encounter your final clue near the **South Gate** of Nunhead Cemetery. Here, among the forgotten tombs, is a hidden key. The key unlocks a secret door—one that leads to the underground tunnels where the treasure lies hidden.

But beware: only those with a sharp mind and steady heart can navigate the labyrinth of tunnels. The journey will test your resolve, but the reward is beyond measure. Good luck, treasure hunter!`,
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
    overview: `
**A Seaside Adventure Awaits!**

---

## Introduction

Portland, Maine, a city known for its bustling seaport and rich history, holds more secrets than meets the eye. Somewhere along the cobbled streets and rocky shores, an ancient treasure lies hidden, waiting to be discovered by an adventurous soul. Legends of pirate gold, lost artifacts, and hidden maps have passed down through generations of seafarers. Will you be the one to uncover it?

## The Legend

In the late 1700s, a notorious pirate, Captain Ezra Blackwell, sailed the coast of Maine, plundering ships and terrorizing ports. But when a fierce storm struck his ship near Portland, he made a secret pact to hide his treasure somewhere along the coastline. His crew vanished, the shipwreck never found, but rumors of the hidden loot remain.

They say Captain Blackwell left behind a series of clues and puzzles to ensure only the cleverest adventurer would find his gold. From the Old Port to the Eastern Promenade, the search spans the city’s most iconic landmarks.

## The Adventure Begins

Your adventure starts at **Portland Head Light**, one of the oldest and most iconic lighthouses in the United States. The waves crash against the cliffs as the wind whispers the first clue. Hidden near the lighthouse’s base is a weathered stone engraved with your first puzzle:

*"The captain's gold was not for the brave, but for those who see beyond the wave."*

Follow the shoreline to **Fort Williams Park**, where old fortifications overlook the Atlantic. The ruins are filled with mystery, but look closely—you’ll find the second clue etched into a rusted cannon, directing you deeper into the city.

## The Hidden Trails

Now, make your way to **Eastern Promenade**, a scenic trail that offers stunning views of Casco Bay. As you walk the winding paths, keep an eye on the rocky shores below. There’s a hidden marking on the rocks near the water—a symbol from Captain Blackwell’s crew. It's a pirate's mark pointing you towards the **Old Port**, where cobblestone streets and historic buildings hide the next part of the puzzle.

Here, in the heart of Portland, you'll need to visit **Shipyard Brewing Company**. Search for a special bottle that’s been marked with an "X" and engraved with the final riddle. It's said to hold the key to where the treasure is buried.

## The Final Challenge

With the final riddle in hand, you must travel to **Peaks Island**, a short ferry ride away. On the island's hidden beaches, your treasure lies buried, but there is one last challenge: solving the final riddle. The island has many hidden coves and secret spots—only the truly clever will be able to piece together Captain Blackwell’s puzzle.

---

Good luck, adventurer! Portland’s secrets are yours to uncover—if you dare!`,
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
