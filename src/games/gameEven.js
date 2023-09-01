import readLineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (num) => num % 2 === 0;

const startRoundEven = () => {
  const randomNumber = getRandomNumber(0, 101);

  console.log(`Question: ${randomNumber}`);

  const answer = readLineSync.question('Your answer: ');

  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  if (answer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default startRoundEven;
