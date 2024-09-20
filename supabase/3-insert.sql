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
(51.520774, -0.077455);     -- 16 Game 3 Clue 5 -- The Blind Beggar pub

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
  The journey ends at **The Blind Beggar**, where the true terror of London''s underworld await''s. Enjoy the chilling atmosphere as you learn about the Ripper''s final victims. Can you solve the mystery?');

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
  (12,
  'Question 1', 
  'Answer 1', 
  'Answer on correct', 
  10,
  3),
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
  3);


-- NEXT STEPS
-- ENSURE TABLES ARE CREATED AND THEN ROWS INSERT
-- MIGHT HAVE TO DO IT ONE AT A TIME AND CHANGE THE REFERENCE ID FOR GAME AND ANSWER
-- AUTH EMAIL DISABLE EMAIL > PROVIDERS > CONFIRM EMAIL
-- ALLOW FOR REAL TIME DB UPDATES ENABLE REAL TIME FOR TABLE `game_session_clues_solved`


-- ADD THIS LATER
-- -- Insert game into the "games" table
-- INSERT INTO "public"."games" ("id", "created_at", "name", "description", "startingLocation", "overview") 
-- VALUES 
-- ("3", "2024-09-17 12:00:00", "Jack the Ripper: London Pub Tour", 
-- "Explore the dark streets of Victorian London and follow the footsteps of Jack the Ripper while visiting historic pubs in the East End.", 
-- "11", 
-- "**Step into Victorian London**
-- ---
-- ## Introduction
-- In the late 19th century, Jack the Ripper terrorized the streets of Whitechapel. This tour takes you through historic locations linked to his crimes, including infamous pubs where you can stop for a pint while uncovering the dark history of the East End.
-- ## The Journey
-- Starting at **Whitechapel**, you'll explore key sites connected to the Ripper, visiting spots like **The Ten Bells Pub** and **Christ Church Spitalfields**, while solving clues about the notorious serial killer.
-- ## Conclusion
-- The journey ends at **The Blind Beggar**, where the true terror of London's underworld await''s. Enjoy the chilling atmosphere as you learn about the Ripper's final victims. Can you solve the mystery?");

-- -- Insert locations into the "locations" table
-- INSERT INTO "public"."locations" ("id", "created_at", "lat", "lng") 
-- VALUES 
-- ("11", "2024-09-17 12:00:00", "51.517706", "-0.073559"), -- Whitechapel starting location
-- ("12", "2024-09-17 12:01:00", "51.515444", "-0.072304"), -- The Ten Bells pub
-- ("13", "2024-09-17 12:02:00", "51.516224", "-0.073678"), -- Christ Church Spitalfields
-- ("14", "2024-09-17 12:03:00", "51.518475", "-0.071596"), -- The White Hart pub
-- ("15", "2024-09-17 12:04:00", "51.519078", "-0.076492"), -- Aldgate East station
-- ("16", "2024-09-17 12:05:00", "51.520774", "-0.077455"); -- The Blind Beggar pub

-- -- Insert game clues into the "game_clues" table
-- INSERT INTO "public"."game_clues" ("id", "created_at", "location", "question", "answer", "answerReply", "points", "game_id") 
-- VALUES 
-- (11, "What is the name of the notorious serial killer who terrorized London in 1888?", "Jack the Ripper", "Correct! Jack the Ripper is one of history's most infamous killers, and his identity remains a mystery to this day.", 10, 3),
-- (12, "Which pub, associated with two of Jack the Ripper's victims, still stands today in Spitalfields?", "The Ten Bells", "Exactly! The Ten Bells is a historic pub tied to the victims of Jack the Ripper, offering both mystery and a pint of ale.", 15, 3),
-- (13, "What is the name of the iconic church near where some of the Ripper's victims were found?", "Christ Church Spitalfields", "Correct! Christ Church Spitalfields is a prominent landmark in the Ripper tour, and it''s surrounding areas were key in the 1888 murders.", 15, 3),
-- (14, "Which pub on Whitechapel High Street is rumored to have once been a haunt of the Ripper?", "The White Hart", "Yes! The White Hart is a historic pub believed to have been frequented by none other than Jack the Ripper himself.", 10, 3),
-- (15, "Which underground station is closest to one of the key Ripper sites and offers easy access to other East End locations?", "Aldgate East", "Absolutely! Aldgate East is a major stop on the Ripper tour, providing access to various pubs and historic sites.", 10, 3),
-- (16, "Which East End pub, famous for more than just the Ripper, is also known for it''s association with notorious gangster Ronnie Kray?", "The Blind Beggar", "Correct! The Blind Beggar is a historic pub with a darker side, tied not only to Jack the Ripper but also to London's gangster history.", 15, 3);
