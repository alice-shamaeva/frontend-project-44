import readLineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const getExpression = (num1, num2, char) => {
  if (char === '+') {
    return num1 + num2;
  }
  if (char === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

const chars = ['+', '-', '*'];

const getRandomChar = () => chars[getRandomNumber(0, 3)];

const startRoundCalc = () => {
  const randomNumber1 = getRandomNumber(0, 101);
  const randomNumber2 = getRandomNumber(0, 101);
  const randomChar = getRandomChar();

  console.log(`Question: ${randomNumber1} ${randomChar} ${randomNumber2}`);

  const answer = readLineSync.question('Your answer: ');

  const correctAnswer = getExpression(randomNumber1, randomNumber2, randomChar);

  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default startRoundCalc;
