-- Delete the games_clues table
DROP TABLE IF EXISTS game_clues CASCADE;

-- Delete the user_purchase_credits table
DROP TABLE IF EXISTS user_purchase_credits CASCADE;

-- Delete the game_session_clues_solved table
DROP TABLE IF EXISTS game_session_clues_solved CASCADE;

-- Delete the game_sessions table
DROP TABLE IF EXISTS game_sessions CASCADE;

-- Delete the games table
DROP TABLE IF EXISTS games CASCADE;

-- Delete the locations table
DROP TABLE IF EXISTS locations CASCADE;

-- Delete the users table
DROP TABLE IF EXISTS users CASCADE;

-- -- Delete the games_clues table
-- DELETE FROM game_clues CASCADE;
-- ALTER SEQUENCE game_clues_seq RESTART WITH 1;

-- -- Delete the user_purchase_credits table
-- DELETE FROM user_purchase_credits CASCADE;
-- ALTER SEQUENCE user_purchase_credits_seq RESTART WITH 1;

-- -- Delete the game_session_clues_solved table
-- DELETE FROM game_session_clues_solved CASCADE;
-- ALTER SEQUENCE game_session_clues_solved_seq RESTART WITH 1;

-- -- Delete the game_sessions table
-- DELETE FROM game_sessions CASCADE;
-- ALTER SEQUENCE game_sessions_seq RESTART WITH 1;

-- -- Delete the games table
-- DELETE FROM games CASCADE;
-- ALTER SEQUENCE game_seq RESTART WITH 1;

-- -- Delete the locations table
-- DELETE FROM locations CASCADE;
-- ALTER SEQUENCE locations_seq RESTART WITH 1;

-- -- Delete the users table
-- DELETE FROM users CASCADE;
-- ALTER SEQUENCE users_seq RESTART WITH 1;