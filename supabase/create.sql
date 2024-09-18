-- Create the example notes table
create table notes (
  id bigint primary key generated always as identity,
  title text not null
);