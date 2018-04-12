

/*
 * Complete the climbingLeaderboard function below.
 */
function climbingLeaderboard(scores, player) {
  const results = [];
    
  // IIFE arrow to remove duplicates from scores   
  const uniqueScores = ((arr) => Array.from(new Set(arr)))(scores);
    
  // set j index outside of first loop so that it can be updated   
  let j = uniqueScores.length;
  console.log('Ranks: ', j);
  console.log('Played Games: ', player.length);
    
  // for each of player's scores
  for (let i = 0; i < player.length; i++) {
    // if her score is highest, push rank 1 to results
    if (player[i] > uniqueScores[0]) {
      results.push(1);
            
      // check against other scores and push appropriate rank to results
    } else {
      // this loop is running in reverse along array
      while (j >= 0) {
        const rank = j + 1;
        // if tied, push and break the loop
        if (player[i] === uniqueScores[j]) {
          // set j to rank above this tied rank so we don't check the scores below this from now on
          j = rank - 1;
          // console.log(j, rank);
          results.push(rank);
          break;
        }

        // if less than score, push and break the loop
        if (player[i] < uniqueScores[j]) {
          // set j to rank so we don't check the scores below this from now on
          j = rank;
          // console.log(j, rank);
          results.push(rank + 1);
          break;
        }
        j--;
      }
    }
  }
  return results;
}

module.exports = climbingLeaderboard;
