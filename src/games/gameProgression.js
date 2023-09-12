import rules from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';

const startProgression = () => {
  const firstNum = getRandomNumber(0, 101);
  const diffProgression = getRandomNumber(1, 10);
  const hideIndex = getRandomNumber(0, 10);
  const result = [];
  let value = firstNum;
  let i = 1;

  while (i <= 10) {
    result.push(value);
    value += diffProgression;
    i += 1;
  }
  const answer = result[hideIndex];
  result[hideIndex] = '..';
  const question = result.join(' ');
  return [question, String(answer)];
};

const startRoundProgression = () => {
  rules(rule, startProgression);
};

export default startRoundProgression;
