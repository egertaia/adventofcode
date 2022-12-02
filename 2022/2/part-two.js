const { calculateScore, getMyPlayedPoints } = require('./utils');
const { input } = require('./input');

let score = 0;

const getWhatIShouldPlay = (opponent, outcome) => {
    if (outcome.is('Y') && opponent.is('A')) return 'X';
    if (outcome.is('Y') && opponent.is('B')) return 'Y';
    if (outcome.is('Y') && opponent.is('C')) return 'Z';

    if (outcome.is('Z') && opponent.is('A')) return 'Y';
    if (outcome.is('Z') && opponent.is('B')) return 'Z';
    if (outcome.is('Z') && opponent.is('C')) return 'X';

    if (outcome.is('X') && opponent.is('C')) return 'Y';
    if (outcome.is('X') && opponent.is('A')) return 'Z';
    if (outcome.is('X') && opponent.is('B')) return 'X';
}


input.forEach((game) => {
    const [opponent, outcome] = game;

    const me = getWhatIShouldPlay(opponent, outcome);
    const playedPoints = getMyPlayedPoints(me);
    const resultPoints = calculateScore(me, opponent);

    score += playedPoints + resultPoints;
});

console.log(score);
