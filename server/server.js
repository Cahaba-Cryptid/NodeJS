const path = require('path');
const fs = require('fs');

let chirpPath = path.join(__dirname, '../chirps.json' )

let chirps = [
    {
        name: 'TurtLuvR001',
        chirp: 'I like turltes.'
    },
    {
        name: 'JoeMan123',
        chirp: 'Weirdo.'
    },
    {
        name: 'TurtLuvR001',
        chirp: 'Turrles are the best. I wish I was a turtle. A box turtle would be sweet.'
    },
    {
        name: 'JoeMan123',
        chirp: 'Dude, wtf?'
    },
    {
        name: 'TurtLuvR001',
        chirp: 'Open your mind to the turtles! Turtles all the way down!'
    }
];

let chirpArr = JSON.stringify(chirps, null, 2);

fs.writeFileSync(chirpPath, chirpArr);

let readJsonChirps = fs.readFileSync(chirpPath);

console.log(JSON.parse(readJsonChirps));

