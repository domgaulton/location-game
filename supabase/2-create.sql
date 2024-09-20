-- Create the users table
CREATE TABLE users (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  user_id UUID NOT NULL UNIQUE,
  email TEXT NOT NULL
);

-- Create the locations table
CREATE TABLE locations (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  lat NUMERIC NOT NULL,
  lng NUMERIC NOT NULL
);

-- Create the games table
CREATE TABLE games (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  location BIGINT REFERENCES locations(id), -- TO DO starting_location
  overview TEXT NOT NULL
);

-- Create the game_clues table
CREATE TABLE game_clues (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  location BIGINT REFERENCES locations(id),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  answer_reply TEXT NULL, 
  points INT NOT NULL,
  game_id BIGINT REFERENCES games(id)
);


-- Create the game_sessions table
CREATE TABLE game_sessions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  user_id UUID NOT NULL REFERENCES users(user_id), -- Changed to UUID
  game_id BIGINT REFERENCES games(id),
  email TEXT NOT NULL, -- TODO Link to user table
  unique_key TEXT NULL
);


-- Create the user_purchase_credits table
CREATE TABLE user_purchase_credits (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  used_at TIMESTAMP WITH TIME ZONE NULL,
  purchase_id TEXT NOT NULL,
  user_id UUID NOT NULL REFERENCES users(user_id), -- Changed to UUID
  game_session_id BIGINT REFERENCES game_sessions(id) NULL
);

-- Create the game_session_clues_solved table
CREATE TABLE game_session_clues_solved (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  clue_id BIGINT REFERENCES game_clues(id),
  solved BOOLEAN NOT NULL,
  game_session_id BIGINT REFERENCES game_sessions(id)
);

-- Enable Row Level Security for the users table
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Enable Row Level Security for the locations table
ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;

-- Enable Row Level Security for the games table
ALTER TABLE public.games ENABLE ROW LEVEL SECURITY;

-- Enable Row Level Security for the game_clues table
ALTER TABLE public.game_clues ENABLE ROW LEVEL SECURITY;

-- Enable Row Level Security for the game_clues table
ALTER TABLE public.game_sessions ENABLE ROW LEVEL SECURITY;

-- Enable Row Level Security for the game_clues table
ALTER TABLE public.user_purchase_credits ENABLE ROW LEVEL SECURITY;

-- Enable Row Level Security for the game_clues table
ALTER TABLE public.user_purchase_credits ENABLE ROW LEVEL SECURITY;

-- Policy for insert access for users based on user_id
CREATE POLICY "Enable insert for users based on user_id"
ON users
FOR INSERT -- Changed from SELECT to INSERT
TO public
WITH CHECK (
  ((SELECT auth.uid() AS uid) = user_id)
);

-- Create policy for read access on the locations table
CREATE POLICY "Enable read access for all users"
ON locations
FOR SELECT
TO public
USING (true);

-- Create policy for read access on the games table
CREATE POLICY "Enable read access for all users"
ON games
FOR SELECT
TO public
USING (true);

-- Create policy for read access on the game_clues table
CREATE POLICY "Enable read access for all users"
ON game_clues
FOR SELECT
TO public
USING (true);

-- Create a policy to allow users to view their own data for user_purchase_credits
CREATE POLICY "Allow users to view their own data"
ON user_purchase_credits
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Create a policy to allow users to insert their own data for user_purchase_credits
CREATE POLICY "Allow users to insert their own data"
ON user_purchase_credits
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Create a policy to allow users to insert their own data for user_purchase_credits
CREATE POLICY "Allow users to update their own data"
ON user_purchase_credits
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Create a policy to guests to find data for game_sessions
CREATE POLICY "Enable read access for all users"
ON game_sessions
FOR SELECT
TO public
USING (true);

-- Create a policy to allow users to insert their own data for game_sessions
CREATE POLICY "Allow users to insert their own data"
ON game_sessions
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Create policy for read access on the game_session_clues_solved table
CREATE POLICY "Enable read access for all users"
ON game_session_clues_solved
FOR SELECT
TO public
USING (true);