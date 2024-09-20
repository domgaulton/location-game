-- -- Delete the games_clues table
DELETE FROM game_clues CASCADE;
ALTER SEQUENCE game_clues_id_seq RESTART WITH 1;

-- -- Delete the user_purchase_credits table
DELETE FROM user_purchase_credits CASCADE;
ALTER SEQUENCE user_purchase_credits_id_seq RESTART WITH 1;

-- -- Delete the game_session_clues_solved table
DELETE FROM game_session_clues_solved CASCADE;
ALTER SEQUENCE game_session_clues_solved_id_seq RESTART WITH 1;

-- -- Delete the game_sessions table
DELETE FROM game_sessions CASCADE;
ALTER SEQUENCE game_sessions_id_seq RESTART WITH 1;

-- -- Delete the games table
DELETE FROM games CASCADE;
ALTER SEQUENCE games_id_seq RESTART WITH 1;

-- -- Delete the locations table
DELETE FROM locations CASCADE;
ALTER SEQUENCE locations_id_seq RESTART WITH 1;