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
(51.517706, -0.073559),     -- 11 Game 3 Starting Location Game 3 -- Whitechapel 
(51.515444, -0.072304),     -- 12 Game 3 Clue 1 -- The Ten Bells pub
(51.516224, -0.073678),     -- 13 Game 3 Clue 2 -- Christ Church Spitalfields
(51.518475, -0.071596),     -- 14 Game 3 Clue 3 -- The White Hart pub
(51.519078, -0.076492),     -- 15 Game 3 Clue 4 -- Aldgate East station
(51.520774, -0.077455),     -- 16 Game 3 Clue 5 -- The Blind Beggar pub
(51.6441, -2.6739),         -- 17 Game 4 Chepstow Castle Starting Location
(51.6445, -2.6740),         -- 18 The Great Tower
(51.6448, -2.6735),  -- 19 The Dungeon
(51.6442, -2.6744),  -- 20 The Gatehouse
(51.6438, -2.6737),  -- 21 The Barbican
(51.6440, -2.6741),  -- 22 The Chapel
(51.4516, -2.5975),  -- 23 Game 5 - Bristol Harbourside Starting Location
(51.4521, -2.5969),  -- 24 Pirate Clue 1
(51.4530, -2.5980),  -- 25 Pirate Clue 2
(51.4542, -2.5990),  -- 26 Pirate Ship
(51.4535, -2.5965),  -- 27 The Harbourside Statue
(51.4555, -2.5989),  -- 28 The Floating Harbour
(51.4592, -2.1156),  -- 29 Game 6 - Chippenham Park Starting Location
(51.4601, -2.1139),  -- 30 Wildlife Clue 1
(51.4599, -2.1128),  -- 31 Wildlife Clue 2
(51.4588, -2.1115),  -- 32 Riverbank Clue
(51.4576, -2.1104),  -- 33 The Meadow Clue
(51.4569, -2.1099);  -- 34 The Woodland Clue
(51.4619, -2.1150), -- 35 Game 7 - Monkton Park (starting location)
(51.4601, -2.1176), -- 36 The Buttercross
(51.4602, -2.1148), -- 37 Hidden Mural near High Street
(51.4608, -2.1140), -- 38 The Old Road Tavern
(51.4590, -2.1175); -- 39 The River Avon Path

-- Insert game into the 'games' table
INSERT INTO games (name, description, location, overview) 
VALUES 
  ('Pomeroy Street Classics', 'Explore Pomeroy Street and find the hidden treasure!', 
  1, 
  '**Unravel the secrets of South East London**
  ---
  ## Introduction
  Deep in the heart of Nunhead, South East London, a hidden treasure has been forgotten by time. For centuries, rumors of it''s existence have circulated, but few have dared to search for it. The treasure, buried beneath layers of history, has been protected by riddles and clues scattered across the quiet streets of Nunhead. Are you brave enough to begin the hunt?
  ## The Legend
  According to local folklore, the treasure once belonged to an eccentric Victorian inventor who lived in a grand house near Nunhead Cemetery. His inventions brought him wealth, but after his mysterious disappearance, his riches were never found.
  The treasure was said to be hidden in a series of underground tunnels that stretch from the cemetery to Peckham Rye Park. Over time, the inventor left behind cryptic clues to ensure that only the most clever could find his hidden wealth.
  ## The Journey Begins
  Your journey starts at **Nunhead Green**, a peaceful spot where locals gather for quiet walks. There, under the shade of the ancient oak tree, you''ll find your first clue: a riddle etched into a plaque.
  *"To find the key to the old mans gold, look to the gate where the stories are told."*
  From here, you must head toward **Nunhead Cemetery**, one of Londons "Magnificent Seven" cemeteries. The eerie, overgrown paths will lead you to the second clue, hidden among the gravestones.
  ## The Final Clue
  As you make your way past the old gravestones and mausoleums, you''ll encounter your final clue near the **South Gate** of Nunhead Cemetery. Here, among the forgotten tombs, is a hidden key. The key unlocks a secret door—one that leads to the underground tunnels where the treasure lies hidden.
  But beware: only those with a sharp mind and steady heart can navigate the labyrinth of tunnels. The journey will test your resolve, but the reward is beyond measure. Good luck, treasure hunter!`'), 
  ('Portland Sites and Pubs', 
  'Legends of pirate gold, lost artifacts, and hidden maps have passed down through generations of seafarers.', 
  4, 
  '**A Seaside Adventure Await''s!**
  ---
  ## Introduction
  Portland, Maine, a city known for it''s bustling seaport and rich history, holds more secrets than meets the eye. Somewhere along the cobbled streets and rocky shores, an ancient treasure lies hidden, waiting to be discovered by an adventurous soul. Legends of pirate gold, lost artifacts, and hidden maps have passed down through generations of seafarers. Will you be the one to uncover it?
  ## The Legend
  In the late 1700s, a notorious pirate, Captain Ezra Blackwell, sailed the coast of Maine, plundering ships and terrorizing ports. But when a fierce storm struck his ship near Portland, he made a secret pact to hide his treasure somewhere along the coastline. His crew vanished, the shipwreck never found, but rumors of the hidden loot remain.
  They say Captain Blackwell left behind a series of clues and puzzles to ensure only the cleverest adventurer would find his gold. From the Old Port to the Eastern Promenade, the search spans the city''s most iconic landmarks.
  ## The Adventure Begins
  Your adventure starts at **Portland Head Light**, one of the oldest and most iconic lighthouses in the United States. The waves crash against the cliffs as the wind whispers the first clue. Hidden near the lighthouses base is a weathered stone engraved with your first puzzle:
  *"The captains gold was not for the brave, but for those who see beyond the wave."*
  Follow the shoreline to **Fort Williams Park**, where old fortifications overlook the Atlantic. The ruins are filled with mystery, but look closely—you''ll find the second clue etched into a rusted cannon, directing you deeper into the city.
  ## The Hidden Trails
  Now, make your way to **Eastern Promenade**, a scenic trail that offers stunning views of Casco Bay. As you walk the winding paths, keep an eye on the rocky shores below. There''s a hidden marking on the rocks near the water—a symbol from Captain Blackwell''s crew. It''s a pirates mark pointing you towards the **Old Port**, where cobblestone streets and historic buildings hide the next part of the puzzle.
  Here, in the heart of Portland, you''ll need to visit **Shipyard Brewing Company**. Search for a special bottle that''s been marked with an "X" and engraved with the final riddle. It''s said to hold the key to where the treasure is buried.
  ## The Final Challenge
  With the final riddle in hand, you must travel to **Peaks Island**, a short ferry ride away. On the islands hidden beaches, your treasure lies buried, but there is one last challenge: solving the final riddle. The island has many hidden coves and secret spots—only the truly clever will be able to piece together Captain Blackwell''s puzzle.
  ---
  Good luck, adventurer! Portlands secrets are yours to uncover—if you dare!`'),
  ('Jack the Ripper: London Pub Tour', 
  'Explore the dark streets of Victorian London and follow the footsteps of Jack the Ripper while visiting historic pubs in the East End.', 
  11, 
  '**Step into Victorian London**
  ---
  ## Introduction
  In the late 19th century, Jack the Ripper terrorized the streets of Whitechapel. This tour takes you through historic locations linked to his crimes, including infamous pubs where you can stop for a pint while uncovering the dark history of the East End.
  ## The Journey
  Starting at **Whitechapel**, you''ll explore key sites connected to the Ripper, visiting spots like **The Ten Bells Pub** and **Christ Church Spitalfields**, while solving clues about the notorious serial killer.
  ## Conclusion
  The journey ends at **The Blind Beggar**, where the true terror of London''s underworld await''s. Enjoy the chilling atmosphere as you learn about the Ripper''s final victims. Can you solve the mystery?'),
  ('Chepstow Castle Adventure', 
 'A fun-filled treasure hunt inside the ancient Chepstow Castle. Solve the puzzles and uncover the secrets hidden within the castle walls!', 
 17, 
 '**Discover the History of Chepstow Castle!**
 ---
 ## Introduction
 Step back in time to explore Chepstow Castle, one of Wales'' oldest fortresses. Your adventure will take you through mysterious dungeons, secret passages, and towers filled with stories of knights and kings. Can you solve the castle''s mysteries and become a true castle explorer?'),
 ('Bristol Pirate Treasure Hunt', 
 'Follow the clues along Bristol''s harborside and discover hidden pirate treasure! Fun for families and kids of all ages.', 
 23, 
 '**Ahoy! Your Pirate Adventure Awaits!**
 ---
 ## Introduction
 Welcome to Bristol, home to legendary pirates! Sail through the harborside on a fun adventure where you''ll search for hidden treasures. Solve puzzles and decode pirate maps along the way. Will you find the treasure and claim the pirate gold?'),
 ('Chippenham Wildlife Adventure', 
 'Discover the hidden wildlife of Chippenham''s parks and rivers while solving fun nature-themed puzzles!', 
 29, 
 '**Explore Chippenham''s Natural Beauty!**
 ---
 ## Introduction
 In Chippenham, adventure is just a walk in the park! Solve clues about animals, trees, and rivers while enjoying the fresh air. Learn about local wildlife as you explore nature and become a wildlife detective.'),
 ('Chippenham Mysteries: The Lost Legends', 
'Uncover the hidden legends of Chippenham in this thrilling adventure for young adults!', 
35, 
'**Step into Chippenham''s Hidden History**
---
## Introduction
Chippenham, a town steeped in history, hides forgotten legends beneath its modern facade. Explore the town while solving quirky puzzles, visiting historic landmarks, and discovering hidden secrets along the way. Your journey begins at **Monkton Park** and takes you through local spots like **The Buttercross**, and hidden street art, and ends at Chippenham''s lively hangouts. Ready to unlock the mysteries?
## The Adventure Begins
Your journey starts at Monkton Park, where a forgotten symbol awaits discovery. Solve each clue to unravel Chippenham''s mysterious past.
## Conclusion
The final stop leads you to the **Neeld Community and Arts Centre**, where the ultimate surprise awaits—a hidden time capsule of Chippenham''s forgotten stories. Can you find it and uncover its secrets?');


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
  'That''s right! Gritty McDuffs is a staple of Portland''s craft beer scene and a must-visit for any beer lover.', 
  10, 
  2), 
  (8, 'Which brewery on the East End is famous for it''s Pumpkinhead Ale?', 
  'Shipyard Brewing Co.', 
  'Yes! Shipyard Brewing Co. is known for it''s seasonal Pumpkinhead Ale, loved by locals and visitors alike.', 
  10, 
  2), 
  (9, 'What is the name of the park that offers scenic views, trails, and a perfect picnic spot in Portland?', 
  'Eastern Promenade', 
  'Absolutely! The Eastern Promenade is a beautiful area for walking, picnicking, and enjoying views of the bay.', 15, 2), 
  (10, 
  'What is the name of the historic tower that offers panoramic views of Portland and it''s harbor?', 
  'Portland Observatory', 
  'Correct! The Portland Observatory is the last remaining maritime signal tower in the U.S. and offers spectacular views of the city.', 
  10, 
  2),
  (11, 
  'What is the name of the notorious serial killer who terrorized London in 1888?', 
  'Jack the Ripper', 
  'Correct! Jack the Ripper is one of history''s most infamous killers, and his identity remains a mystery to this day.', 
  10, 
  3),
  (12, 
  'Which pub, associated with two of Jack the Rippers victims, still stands today in Spitalfields?', 
  'The Ten Bells', 
  'Exactly! The Ten Bells is a historic pub tied to the victims of Jack the Ripper, offering both mystery and a pint of ale.', 
  15, 
  3),
  (13, 
  'What is the name of the iconic church near where some of the Rippers victims were found?',
  'Christ Church Spitalfields', 
  'Correct! Christ Church Spitalfields is a prominent landmark in the Ripper tour, and it''s surrounding areas were key in the 1888 murders.', 
  15, 
  3),
  (14, 
  'Which pub on Whitechapel High Street is rumoured to have once been a haunt of the Ripper?', 
  'The White Hart', 
  'Yes! The White Hart is a historic pub believed to have been frequented by none other than Jack the Ripper himself.', 
  10, 
  3),
  (15, 
  'Which underground station is closest to one of the key Ripper sites and offers easy access to other East End locations?', 'Aldgate East', 'Absolutely! Aldgate East is a major stop on the Ripper tour, providing access to various pubs and historic sites.', 
  10, 
  3),
  (16, 
  'Which East End pub, famous for more than just the Ripper, is also known for it''s association with notorious gangster Ronnie Kray?', 
  'The Blind Beggar', 
  'Correct! The Blind Beggar is a historic pub with a darker side, tied not only to Jack the Ripper but also to Londons gangster history.', 
  15, 
  3),
  (18, 'What is the highest tower in Chepstow Castle called?', 'The Great Tower', 'Correct! The Great Tower offers stunning views over the River Wye.', 10, 4),
  (19, 'Where did the prisoners in Chepstow Castle stay?', 'The Dungeon', 'Exactly! The dark and eerie dungeon was used to hold prisoners long ago.', 10, 4),
  (20, 'What was the main entrance of the castle called?', 'The Gatehouse', 'Correct! The Gatehouse was the main entrance to the castle, protecting it from invaders.', 10, 4),
  (21, 'What is the name of the defensive structure outside the gate?', 'The Barbican', 'Yes! The Barbican was built to defend the castle gate.', 10, 4),
  (22, 'What type of building in the castle was used for worship?', 'The Chapel', 'Correct! The castle chapel was a place of worship for the lords and their families.', 10, 4),
  (24, 'What famous pirate sailed from Bristol?', 'Blackbeard', 'Correct! Blackbeard was one of the most infamous pirates to sail from Bristol.', 10, 5),
  (25, 'Which ship can you find in Bristol''s Harbourside?', 'SS Great Britain', 'Exactly! The SS Great Britain was one of the most famous ships of its time.', 10, 5),
  (26, 'What was the name of the pirate ship in Bristol Harbour?', 'The Matthew', 'Correct! The Matthew is a replica of the ship that John Cabot sailed from Bristol.', 10, 5),
  (27, 'What does the statue in Bristol Harbourside commemorate?', 'The Merchant Venturers', 'Correct! The statue commemorates Bristol''s history of sea trade and exploration.', 10, 5),
  (28, 'What is the name of the area of water that the city of Bristol was built around?', 'The Floating Harbour', 'Yes! The Floating Harbour allowed ships to remain afloat, regardless of the tide.', 10, 5),
  (30, 'What bird is commonly seen by the riverside in Chippenham?', 'Kingfisher', 'Correct! The Kingfisher is a bright, beautiful bird often seen near rivers.', 10, 6),
  (31, 'What kind of trees can be found in Chippenham Park?', 'Oak trees', 'Exactly! Chippenham Park has many old oak trees that are home to all sorts of wildlife.', 10, 6),
  (32, 'What type of fish is commonly found in the River Avon that runs through Chippenham?', 'Trout', 'Correct! The River Avon is known for its trout.', 10, 6),
  (33, 'What flower blooms in the meadows of Chippenham in spring?', 'Daffodils', 'Yes! Daffodils can be seen blooming all over Chippenham during spring.', 10, 6),
  (34, 'What animal might you spot in the woodland area of Chippenham?', 'Squirrels', 'Correct! Chippenham woodlands are home to many playful squirrels.', 10, 6),
  (35, 'What creature is carved on the fountain at the center of Monkton Park?', 'A lion', 'Correct! The lion symbolizes Chippenham''s courage and strength throughout its history.', 10, 7),
  (36, 'What ancient item was traded most at Chippenham''s Buttercross?', 'Wool', 'Exactly! Chippenham''s wool trade brought wealth and fame to the town during the medieval period.', 15, 7),
  (37, 'Find the mural hidden on a nearby wall. What word is hidden in the colorful design?', 'Rebel', 'Well done! The word "Rebel" celebrates Chippenham''s free-spirited youth culture.', 15, 7),
  (38, 'Which legendary figure is said to have once visited The Old Road Tavern?', 'King Alfred', 'Correct! Local legend has it that King Alfred himself stopped at The Old Road Tavern during his travels.', 10, 7),
  (39, 'What famous event happened near the River Avon in the 10th century?', 'The Battle of Chippenham', 'Yes! The Battle of Chippenham was a key moment in the town''s history, fought between the Anglo-Saxons and Vikings.', 20, 7);





-- NEXT STEPS
-- ENSURE TABLES ARE CREATED AND THEN ROWS INSERT
-- MIGHT HAVE TODO IT ONE AT A TIME AND CHANGE THE REFERENCE ID FOR GAME AND ANSWER
-- AUTH EMAIL DISABLE EMAIL > PROVIDERS > CONFIRM EMAIL
-- ALLOW FOR REAL TIME DB UPDATES ENABLE REAL TIME FOR TABLE `game_session_clues_solved`