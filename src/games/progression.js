import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';

const getProgression = (firstNum, difference, length) => {
  const result = [];
  let value = firstNum;
  let i = 1;

  while (i <= length) {
    result.push(value);
    value += difference;
    i += 1;
  }
  return result;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(0, 101);
  const step = getRandomNumber(1, 9);
  const progression = getProgression(firstNumber, step, 10);
  const hideIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[hideIndex];
  progression[hideIndex] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

const startRoundProgression = () => {
  startGame(rule, generateRound);
};

export default startRoundProgression;
