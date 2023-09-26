import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomNumber(0, 101);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, String(answer)];
};

const startRoundEven = () => {
  startGame(rule, generateRound);
};

export default startRoundEven;
