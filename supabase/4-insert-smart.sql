-- ADD GAMES WITH LOCATION AND CLUES

-- BEGIN;  -- Start transaction

-- -- Insert into 'locations' table and return the generated ids for multiple rows
-- WITH inserted_locations AS (
--   INSERT INTO locations (lat, lng) 
--   VALUES 
--     (51.00001, -0.00001), -- id 1 Game 1 Starting Location
--     (51.00002, -0.00002), -- id 2 Game 1 Clue 1
--     (51.00003, -0.00003)  -- id 3 Game 1 Clue 2
--   RETURNING id
-- )

-- -- Insert into 'games' table using the first returned location id
-- inserted_game AS (
--   INSERT INTO games (name, description, location, overview) 
--   VALUES 
--     ('Inserted Game', 'Inserted Game Description', (SELECT id FROM inserted_locations LIMIT 1 OFFSET 0), 'Inserted Game Overview');

--   RETURNING id
-- )
-- -- Insert into 'game_clues' table mapping over the locations above
-- INSERT INTO game_clues (location, question, answer, answer_reply, points, game_id) 
-- VALUES 
--   ((SELECT id FROM inserted_users LIMIT 1 OFFSET 1), 'Inserted Clue: Question 1', 'Inserted Clue: Answer 1', 'Inserted Clue: Answer Reply 1', 10, SELECT id FROM inserted_game LIMIT 1 OFFSET 0),
--   ((SELECT id FROM inserted_users LIMIT 1 OFFSET 2), 'Inserted Clue: Question 2', 'Inserted Clue: Answer 2', 'Inserted Clue: Answer Reply 2', 10, SELECT id FROM inserted_game LIMIT 1 OFFSET 0);

-- COMMIT;  -- End transaction


BEGIN;  -- Start transaction

-- Insert locations (Edinburgh Castle, Royal Mile, Grassmarket, Holyrood Palace, Greyfriars Bobby, and The World's End Pub)
WITH inserted_locations AS (
  INSERT INTO locations (lat, lng) 
  VALUES 
    (55.9486, -3.1999),  -- Edinburgh Castle
    (55.9506, -3.1883),  -- Royal Mile
    (55.9468, -3.1989),  -- Grassmarket
    (55.9527, -3.1729),  -- Holyrood Palace
    (55.9469, -3.1917),  -- Greyfriars Bobby Statue
    (55.9491, -3.1867)   -- The World's End Pub
  RETURNING id
),

-- Insert game details (Edinburgh Historical Pub Crawl)
inserted_game AS (
  INSERT INTO games (name, description, location, overview) 
  VALUES 
    ('Edinburgh Historical Pub Crawl', 'Explore the historic landmarks and pubs of Edinburgh while solving six fascinating clues.', (SELECT id FROM inserted_locations LIMIT 1 OFFSET 0), 'A journey through Edinburgh’s rich history, famous landmarks, and iconic pubs.')
  RETURNING id
)

-- Insert clues for each location
INSERT INTO game_clues (location, question, answer, answer_reply, points, game_id) 
VALUES 
  -- Clue 1 at Edinburgh Castle
  ((SELECT id FROM inserted_locations LIMIT 1 OFFSET 0), 
   'Edinburgh Castle sits atop a volcanic rock. What is the name of this rock?', 
   'Castle Rock', 
   'Correct! Edinburgh Castle sits on the historic Castle Rock.', 
   10, 
   (SELECT id FROM inserted_game LIMIT 1 OFFSET 0)),

  -- Clue 2 at Royal Mile
  ((SELECT id FROM inserted_locations LIMIT 1 OFFSET 1), 
   'The Royal Mile connects Edinburgh Castle and Holyrood Palace. What is the total length of the Royal Mile in Scottish miles?', 
   'One mile', 
   'Correct! The Royal Mile is one Scottish mile long.', 
   10, 
   (SELECT id FROM inserted_game LIMIT 1 OFFSET 0)),

  -- Clue 3 at Grassmarket
  ((SELECT id FROM inserted_locations LIMIT 1 OFFSET 2), 
   'The Grassmarket was once used for public executions. What infamous Scottish criminal was hanged here and then reportedly sat up in his coffin?', 
   'Half-Hangit Maggie', 
   'Correct! Half-Hangit Maggie is the legendary criminal of Grassmarket.', 
   10, 
   (SELECT id FROM inserted_game LIMIT 1 OFFSET 0)),

  -- Clue 4 at Holyrood Palace
  ((SELECT id FROM inserted_locations LIMIT 1 OFFSET 3), 
   'Holyrood Palace is the official residence of the monarch in Scotland. Which Scottish Queen lived here during her reign?', 
   'Mary, Queen of Scots', 
   'Correct! Mary, Queen of Scots resided at Holyrood Palace during her reign.', 
   10, 
   (SELECT id FROM inserted_game LIMIT 1 OFFSET 0)),

  -- Clue 5 at Greyfriars Bobby
  ((SELECT id FROM inserted_locations LIMIT 1 OFFSET 4), 
   'Greyfriars Bobby is the famous loyal dog who guarded his owner''s grave. How many years did Bobby stand vigil over the grave?', 
   '14 years', 
   'Correct! Greyfriars Bobby stood by his owner''s grave for 14 years.', 
   10, 
   (SELECT id FROM inserted_game LIMIT 1 OFFSET 0)),

  -- Clue 6 at The World’s End Pub
  ((SELECT id FROM inserted_locations LIMIT 1 OFFSET 5), 
   'The World’s End Pub gets its name from the city wall that separated Edinburgh from the rest of the world. What year was the Flodden Wall built?', 
   '1513', 
   'Correct! The Flodden Wall, marking the end of the city, was built in 1513.', 
   10, 
   (SELECT id FROM inserted_game LIMIT 1 OFFSET 0));

COMMIT;  -- End transaction