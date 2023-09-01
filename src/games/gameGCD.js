import readLineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const getNOD = (num1, num2) => {
  let n1 = num1;
  let n2 = num2;
  while (n1 !== n2) {
    if (n1 > n2) {
      n1 -= n2;
    } else {
      n2 -= n1;
    }
  }
  return n1;
};

const startRoundGCD = () => {
  const randomNumber1 = getRandomNumber(0, 101);
  const randomNumber2 = getRandomNumber(0, 101);

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);

  const answer = readLineSync.question('Your answer: ');

  const correctAnswer = getNOD(randomNumber1, randomNumber2);

  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default startRoundGCD;
