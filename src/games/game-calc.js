import readLineSync from 'readline-sync';
import getRandomNumber from '../index.js';

const getExpression = (num1, num2, char) => {
  if (char === '+') {
    return num1 + num2;
  }
  if (char === '-') {
    return num1 - num2;
  }
  if (char === '*') {
    return num1 * num2;
  }
};

const chars = ['+', '-', '*'];

const getRandomChar = () => {
  return chars[Math.floor(Math.random() * chars.length)];
};

const startRoundCalc = () => {
  const randomNumber1 = getRandomNumber(100);
  const randomNumber2 = getRandomNumber(100);
  const randomChar = getRandomChar();

  console.log(`Question: ${randomNumber1} ${randomChar} ${randomNumber2}`);

  const answer = readLineSync.question('Your answer: ');

  const correctAnswer = getExpression(randomNumber1, randomNumber2, randomChar);

  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  if (Number(answer) !== correctAnswer) {
    console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
};

export default startRoundCalc;
