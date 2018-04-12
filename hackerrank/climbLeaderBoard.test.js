const climbingLeaderboard = require('./climbLeaderBoard');

const scores = [
  [160, 100, 100, 90, 80, 60, 50, 50, 40, 40, 30, 20, 10],
  [110, 70, 60, 50, 50, 40, 30, 30, 20],
];

const alice = [
  [5, 20, 50, 50, 70, 90, 100, 120],
  [20, 30, 60, 90, 120, 140, 150],
];

// console.log(climbingLeaderboard(scores[0], alice[0]));

describe('Solution', () => {
  it('Should pass and return array of player\'s rankings for each game played', () => {
    expect(climbingLeaderboard(scores[0], alice[0])).toEqual([11, 9, 6, 6, 5, 3, 2, 2]);
  });

  it('Should test the maximum ranking', () => {
    expect(climbingLeaderboard(scores[1], alice[1])).toEqual([7, 6, 3, 2, 1, 1, 1]);
  });
});