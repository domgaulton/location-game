-- Insert locations into the 'locations' table
INSERT INTO locations (lat, lng) 
VALUES 
(51.505, -0.09),            -- 1 Game 1 Starting Location Game 1
(51.4709229, -0.0502218),   -- 2 Game 1 Clue 1
(51.4652513, -0.0594534),   -- 3 Game 1 Clue 2
(43.655276, -70.255734),    -- 4 Game 2 Starting Location Game 3
(43.655276, -70.255734),    -- 5 Game 2 Clue 1
(43.660212, -70.25151),     -- 6 Game 2 Clue 2
(43.656839, -70.25386),     -- 7 Game 2 Clue 3
(43.65737, -70.2547),       -- 8 Game 2 Clue 4
(43.664316, -70.239014),    -- 9 Game 2 Clue 5
(43.661072, -70.254056),    -- 10 Game 2 Clue 6
(51.505, -0.09),            -- 11 Game 3 Starting Location Game 3
(51.4709229, -0.0502218);   -- 12 Game 3 Clue 1

-- Insert game into the 'games' table
INSERT INTO games (name, description, location, overview) 
VALUES 
  ('Pomeroy Street Classics', 'Explore Pomeroy Street and find the hidden treasure!', 
  1, 
  '**Unravel the secrets of South East London**
  ---
  ## Introduction
  Deep in the heart of Nunhead, South East London, a hidden treasure has been forgotten by time. For centuries, rumors of its existence have circulated, but few have dared to search for it. The treasure, buried beneath layers of history, has been protected by riddles and clues scattered across the quiet streets of Nunhead. Are you brave enough to begin the hunt?
  ## The Legend
  According to local folklore, the treasure once belonged to an eccentric Victorian inventor who lived in a grand house near Nunhead Cemetery. His inventions brought him wealth, but after his mysterious disappearance, his riches were never found.
  The treasure was said to be hidden in a series of underground tunnels that stretch from the cemetery to Peckham Rye Park. Over time, the inventor left behind cryptic clues to ensure that only the most clever could find his hidden wealth.
  ## The Journey Begins
  Your journey starts at **Nunhead Green**, a peaceful spot where locals gather for quiet walks. There, under the shade of the ancient oak tree, youll find your first clue: a riddle etched into a plaque.
  *"To find the key to the old mans gold, look to the gate where the stories are told."*
  From here, you must head toward **Nunhead Cemetery**, one of Londons "Magnificent Seven" cemeteries. The eerie, overgrown paths will lead you to the second clue, hidden among the gravestones.
  ## The Final Clue
  As you make your way past the old gravestones and mausoleums, youll encounter your final clue near the **South Gate** of Nunhead Cemetery. Here, among the forgotten tombs, is a hidden key. The key unlocks a secret door—one that leads to the underground tunnels where the treasure lies hidden.
  But beware: only those with a sharp mind and steady heart can navigate the labyrinth of tunnels. The journey will test your resolve, but the reward is beyond measure. Good luck, treasure hunter!`'), 
  ('Portland Sites and Pubs', 'Legends of pirate gold, lost artifacts, and hidden maps have passed down through generations of seafarers.', 
  4, 
  '**A Seaside Adventure Awaits!**
  ---
  ## Introduction
  Portland, Maine, a city known for its bustling seaport and rich history, holds more secrets than meets the eye. Somewhere along the cobbled streets and rocky shores, an ancient treasure lies hidden, waiting to be discovered by an adventurous soul. Legends of pirate gold, lost artifacts, and hidden maps have passed down through generations of seafarers. Will you be the one to uncover it?
  ## The Legend
  In the late 1700s, a notorious pirate, Captain Ezra Blackwell, sailed the coast of Maine, plundering ships and terrorizing ports. But when a fierce storm struck his ship near Portland, he made a secret pact to hide his treasure somewhere along the coastline. His crew vanished, the shipwreck never found, but rumors of the hidden loot remain.
  They say Captain Blackwell left behind a series of clues and puzzles to ensure only the cleverest adventurer would find his gold. From the Old Port to the Eastern Promenade, the search spans the citys most iconic landmarks.
  ## The Adventure Begins
  Your adventure starts at **Portland Head Light**, one of the oldest and most iconic lighthouses in the United States. The waves crash against the cliffs as the wind whispers the first clue. Hidden near the lighthouses base is a weathered stone engraved with your first puzzle:
  *"The captains gold was not for the brave, but for those who see beyond the wave."*
  Follow the shoreline to **Fort Williams Park**, where old fortifications overlook the Atlantic. The ruins are filled with mystery, but look closely—youll find the second clue etched into a rusted cannon, directing you deeper into the city.
  ## The Hidden Trails
  Now, make your way to **Eastern Promenade**, a scenic trail that offers stunning views of Casco Bay. As you walk the winding paths, keep an eye on the rocky shores below. Theres a hidden marking on the rocks near the water—a symbol from Captain Blackwells crew. Its a pirates mark pointing you towards the **Old Port**, where cobblestone streets and historic buildings hide the next part of the puzzle.
  Here, in the heart of Portland, youll need to visit **Shipyard Brewing Company**. Search for a special bottle thats been marked with an "X" and engraved with the final riddle. Its said to hold the key to where the treasure is buried.
  ## The Final Challenge
  With the final riddle in hand, you must travel to **Peaks Island**, a short ferry ride away. On the islands hidden beaches, your treasure lies buried, but there is one last challenge: solving the final riddle. The island has many hidden coves and secret spots—only the truly clever will be able to piece together Captain Blackwells puzzle.
  ---
  Good luck, adventurer! Portlands secrets are yours to uncover—if you dare!`'),
  ('Name of the game', 
  'Description of the game', 
  11,  -- Refers to the first location (starting location)
  'Overview of the game');

-- Insert game clues into the 'game_clues' table
INSERT INTO game_clues (location, question, answer, answer_reply, points, game_id) 
VALUES 
  (2, 
  'Where is the Earl from?', 
  'Derby', 
  'Although he can be found near Peckham these days, he was originally from Derby - as the name suggests!', 
  10, 
  1), 
  (3, 
  'What is the name of the pub?', 
  'The Old Nuns Head', 'The Old Nuns Head is a great place to stop for a drink or a bite to eat.', 
  10,
  1), 
  (5, 
  'What is the name of the iconic lighthouse that watches over Portland?', 
  'Portland Head Light', 
  'Correct! The Portland Head Light is one of the most iconic landmarks of the city and has been guiding sailors since 1791.', 
  15, 
  2), 
  (6, 
  'Which beach offers stunning views of Casco Bay and is a favourite local spot?', 
  'East End Beach', 
  'Exactly! East End Beach is a beloved spot for locals and offers beautiful views of Casco Bay.', 
  15, 
  2), 
  (7, 'Which well-known pub on Commercial Street offers a wide selection of local craft beers?', 
  'Gritty McDuffs', 
  'Thats right! Gritty McDuffs is a staple of Portlands craft beer scene and a must-visit for any beer lover.', 
  10, 
  2), 
  (8, 'Which brewery on the East End is famous for its Pumpkinhead Ale?', 
  'Shipyard Brewing Co.', 
  'Yes! Shipyard Brewing Co. is known for its seasonal Pumpkinhead Ale, loved by locals and visitors alike.', 
  10, 
  2), 
  (9, 'What is the name of the park that offers scenic views, trails, and a perfect picnic spot in Portland?', 
  'Eastern Promenade', 
  'Absolutely! The Eastern Promenade is a beautiful area for walking, picnicking, and enjoying views of the bay.', 15, 2), 
  (10, 
  'What is the name of the historic tower that offers panoramic views of Portland and its harbor?', 
  'Portland Observatory', 
  'Correct! The Portland Observatory is the last remaining maritime signal tower in the U.S. and offers spectacular views of the city.', 
  10, 
  2),
  (12,  -- Refers to the second location
  'Question 1', 
  'Answer 1', 
  'Answer on correct', 
  10, -- Integer for points
  3); -- Refers to the first game


-- NEXT STEPS
-- ENSURE TABLES ARE CREATED AND THEN ROWS INSERT
-- MIGHT HAVE TO DO IT ONE AT A TIME AND CHANGE THE REFERENCE ID FOR GAME AND ANSWER
-- AUTH EMAIL DISABLE EMAIL > PROVIDERS > CONFIRM EMAIL
-- ALLOW FOR REAL TIME DB UPDATES ENABLE REAL TIME FOR TABLE `game_session_clues_solved`