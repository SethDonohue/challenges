// Bowling Interview Question
// CLI implementation that waits for the next throw and outputs the current score

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let frames = [];
let currentFrame = [];
// let currentScore = 0;
let lastThrow = 0;

const frameScore = (firstThrow, secondThrow) => {
  currentFrame.firstThrow = firstThrow;
  currentFrame.secondThrow = secondThrow;
  frames.push(currentFrame);
  console.log(frames);
};

// const spareFrame = (lastThrow, ) => {
//   if()
// }

const sumArr = (array) => array.reduce((a, b) => a + b);

const currentScore = (framesArr) => {
  framesArr.reduce((accum, currFrame) => accum + sumArr(currFrame));
};

// rl.question('Score for the First Throw of the Game?', (answer) => {
//   frames.push(frame.push(answer));
// });

const recursiveAsyncReadLine = () => {
  // Stop the readLine as the game is over!
  if (frames.length === 10) {
    console.log('Final Score: ', currentScore(frames));
    return rl.close();
  }

  // declare a few local variables
  let nextThrow = 0;
  let question = 'Score for First Throw?';
  // console.log('lastFrame Length: ', lastFrame.length);

  if (currentFrame.length < 2 && currentFrame.length > 0) {
    question = 'Score for Second Throw';
  }

  rl.question(question, (answer) => {
    if (answer == 'exit') {
      console.log('Game ended early...');
      if (frames.length < 1) {
        console.log('Final Score: ', 0);
      } else {
        if (frames.length < 1) frames = [0];
        console.log('Ending Score: ', currentScore(frames));      
      }
      return rl.close();
    }

    currentFrame.push(parseInt(answer));
    
    console.log('currentFrame', currentFrame);

    if (currentFrame.length > 1) {
      frames.push(currentFrame);
      console.log('Frames: ', frames);
      const lastFrame = currentFrame;
      lastThrow = currentFrame[1];

      const lastFrameScore = sumArr(lastFrame);

      // This logic lets us know that the last frame is a Spare
      if (lastFrameScore === 10 && lastThrow > 0) { 
        console.log('Last Frame was a Spare');
      }
      console.log('Last Throw: ', lastThrow);    
      console.log('Last Frame Score: ', lastThrow);    
      console.log('Current Score: ', currentScore(frames));
      currentFrame = [];
    }
    // Calling this function again to ask new question
    recursiveAsyncReadLine(); 
  });
};

recursiveAsyncReadLine();
