-- Insert locations into the 'locations' table
INSERT INTO 'locations' ('lat', 'lng') 
VALUES 
('51.517706', '-0.073559'), -- 11 Whitechapel starting location
('51.515444', '-0.072304'), -- 12 The Ten Bells pub
('51.516224', '-0.073678'), -- 13 Christ Church Spitalfields
('51.518475', '-0.071596'), -- 14 The White Hart pub
('51.519078', '-0.076492'), -- 15 Aldgate East station
('51.520774', '-0.077455'); -- 16 The Blind Beggar pub

-- Insert game clues into the 'game_clues' table
INSERT INTO 'game_clues' ('location', 'question', 'answer', 'answerReply', 'points', 'game_id') 
VALUES 
('11', 'What is the name of the notorious serial killer who terrorized London in 1888?', 'Jack the Ripper', 'Correct! Jack the Ripper is one of history's most infamous killers, and his identity remains a mystery to this day.', '10', '3'),
('12', 'Which pub, associated with two of Jack the Ripper's victims, still stands today in Spitalfields?', 'The Ten Bells', 'Exactly! The Ten Bells is a historic pub tied to the victims of Jack the Ripper, offering both mystery and a pint of ale.', '15', '3'),
('13', 'What is the name of the iconic church near where some of the Ripper’s victims were found?', 'Christ Church Spitalfields', 'Correct! Christ Church Spitalfields is a prominent landmark in the Ripper tour, and its surrounding areas were key in the 1888 murders.', '15', '3'),
('14', 'Which pub on Whitechapel High Street is rumored to have once been a haunt of the Ripper?', 'The White Hart', 'Yes! The White Hart is a historic pub believed to have been frequented by none other than Jack the Ripper himself.', '10', '3'),
('15', 'Which underground station is closest to one of the key Ripper sites and offers easy access to other East End locations?', 'Aldgate East', 'Absolutely! Aldgate East is a major stop on the Ripper tour, providing access to various pubs and historic sites.', '10', '3'),
('16', 'Which East End pub, famous for more than just the Ripper, is also known for its association with notorious gangster Ronnie Kray?', 'The Blind Beggar', 'Correct! The Blind Beggar is a historic pub with a darker side, tied not only to Jack the Ripper but also to London's gangster history.', '15', '3');

-- Insert game into the 'games' table
INSERT INTO 'games' ('name', 'description', 'startingLocation', 'overview') 
VALUES 
('Jack the Ripper: London Pub Tour', 
'Explore the dark streets of Victorian London and follow the footsteps of Jack the Ripper while visiting historic pubs in the East End.', 
'11', 
'**Step into Victorian London**
---
## Introduction
In the late 19th century, Jack the Ripper terrorized the streets of Whitechapel. This tour takes you through historic locations linked to his crimes, including infamous pubs where you can stop for a pint while uncovering the dark history of the East End.
## The Journey
Starting at **Whitechapel**, you'll explore key sites connected to the Ripper, visiting spots like **The Ten Bells Pub** and **Christ Church Spitalfields**, while solving clues about the notorious serial killer.
## Conclusion
The journey ends at **The Blind Beggar**, where the true terror of London's underworld awaits. Enjoy the chilling atmosphere as you learn about the Ripper's final victims. Can you solve the mystery?');
