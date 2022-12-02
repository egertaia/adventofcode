String.prototype.is = function (comparable) {
    return String(this) === comparable;
}

const calculateScore = (me, opponent) => {
    if (opponent.is('A') && me.is('Y')) return 6;
    if (opponent.is('A') && me.is('X')) return 3;
    if (opponent.is('A') && me.is('Z')) return 0;

    if (opponent.is('B') && me.is('Y')) return 3;
    if (opponent.is('B') && me.is('X')) return 0;
    if (opponent.is('B') && me.is('Z')) return 6;

    if (opponent.is('C') && me.is('Y')) return 0;
    if (opponent.is('C') && me.is('X')) return 6;
    if (opponent.is('C') && me.is('Z')) return 3;
}

const getMyPlayedPoints = (me) => {
    if (me.is('X')) return 1;
    if (me.is('Y')) return 2;
    if (me.is('Z')) return 3;
}

module.exports = { calculateScore, getMyPlayedPoints }
