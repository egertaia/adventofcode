const { calculateScore, getMyPlayedPoints } = require('./utils');
const { input } = require('./input');

let score = 0;

input.forEach((game) => {
    const [opponent, me] = game;
    const playedPoints = getMyPlayedPoints(me);
    const resultPoints = calculateScore(me, opponent);

    score += playedPoints + resultPoints;
});

console.log(score);
