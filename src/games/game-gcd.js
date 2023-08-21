import readLineSync from 'readline-sync';
import getRandomNumber from '../index.js';

const getNOD = (num1, num2) => {
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};

const startRoundGCD = () => {
  const randomNumber1 = getRandomNumber();
  const randomNumber2 = getRandomNumber();

  console.log(`Question: ${randomNumber1}, ${randomNumber2}`);

  const answer = readLineSync.question('Your answer: ');

  const correctAnswer = getNOD(randomNumber1, randomNumber2);

  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  if (Number(answer) !== correctAnswer) {
    console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
};

export default startRoundGCD;
