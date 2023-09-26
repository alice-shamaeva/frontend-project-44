import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';

const firstNumber = getRandomNumber(0, 101);
const diffProgression = getRandomNumber(1, 9);

const getProgression = (firstNum, difference) => {
  const result = [];
  let value = firstNum;
  let i = 1;

  while (i <= 10) {
    result.push(value);
    value += difference;
    i += 1;
  }
  return result;
};

const maxIndexCount = 9;

const generateRound = () => {
  const hideIndex = getRandomNumber(0, maxIndexCount);
  const progression = getProgression(firstNumber, diffProgression);
  const answer = progression[hideIndex];
  progression[hideIndex] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

const startRoundProgression = () => {
  startGame(rule, generateRound);
};

export default startRoundProgression;
