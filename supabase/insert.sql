-- NOTES
-- ENSURE TABLES ARE CREATED AND THEN ROWS INSERT
-- MIGHT HAVE TO DO IT ONE AT A TIME AND CHANGE THE REFERENCE ID FOR GAME AND ANSWER

-- Insert locations into the 'locations' table
INSERT INTO locations (lat, lng) 
VALUES 
(51.505, -0.09), -- Starting Location 1
(51.4709229, -0.0502218); -- Clue 1


-- Insert game into the 'games' table
INSERT INTO games (name, description, location, overview) 
VALUES 
('Name of the game', 
'Description of the game', 
 1,  -- Refers to the first location (starting location)
 'Overview of the game');

-- Insert game clues into the 'game_clues' table
INSERT INTO game_clues (location, question, answer, answer_reply, points, game_id) 
VALUES 
(2,  -- Refers to the second location
 'Question 1', 
 'Answer 1', 
 'Answer on correct', 
 10, -- Integer for points
 3); -- Refers to the first game


-- NEXT STEPS
-- AUTH EMAIL DISABLE EMAIL > PROVIDERS > CONFIRM EMAIL
-- ALLOW FOR REAL TIME DB UPDATES