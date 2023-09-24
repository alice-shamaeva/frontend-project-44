import rules from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';

const getProgression = () => {
  const firstNum = getRandomNumber(0, 101);
  const diffProgression = getRandomNumber(1, 9);
  const result = [];
  let value = firstNum;
  let i = 1;

  while (i <= 10) {
    result.push(value);
    value += diffProgression;
    i += 1;
  }
  return result;
};

const generateRound = () => {
  const hideIndex = getRandomNumber(0, 9);
  const progression = getProgression();
  const answer = progression[hideIndex];
  progression[hideIndex] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

const startRoundProgression = () => {
  rules(rule, generateRound);
};

export default startRoundProgression;
