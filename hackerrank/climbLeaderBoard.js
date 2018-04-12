

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the climbingLeaderboard function below.
 */
function climbingLeaderboard(scores, alice) {
  const results = [];
    
  // IIFE arrow to remove duplicates from scores   
  const uniqueScores = ((arr) => Array.from(new Set(arr)))(scores);
    
  // set j index outside of first loop so that it can be updated   
  let j = uniqueScores.length;
    
  // for each of alice's scores
  for (let i = 0; i < alice.length; i++) {
    // if her score is highest, push rank 1 to results
    if (alice[i] > uniqueScores[0]) {
      results.push(1);
            
      // check against other scores and push appropriate rank to results
    } else {
      // this loop is running in reverse along array
      while (j >= 0) {
        const rank = j + 1;
        console.log('j & rank', j, rank);
        // if tied, push and break the loop
        if (alice[i] === uniqueScores[j]) {
          // set j to rank above this tied rank so we don't check the scores below this from now on
          j = rank - 1;
          console.log('---- j updated to: ', j, ' ------');
          // console.log(j, rank);
          results.push(rank);
          break;
        }

        // if less than score, push and break the loop
        if (alice[i] < uniqueScores[j]) {
          // set j to rank so we don't check the scores below this from now on
          j = rank;
          console.log('---- j updated to: ', j, ' ------');
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

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const scoresCount = parseInt(readLine(), 10);

  const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

  const aliceCount = parseInt(readLine(), 10);

  const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

  const result = climbingLeaderboard(scores, alice);

  ws.write(`${result.join("\n")  }\n`);

  ws.end();
}
