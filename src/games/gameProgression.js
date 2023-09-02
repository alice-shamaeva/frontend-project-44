import rules from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';

const getProgressionStep = () => Math.ceil(Math.random() * 6);

const progressionStep = getProgressionStep();

const getProgression = (base, diff, count) => {
  const result = [];
  let value = base;
  let i = 1;

  while (i <= count) {
    result.push(value);
    value += diff;
    i += 1;
  }
  return result;
};

const hideIndex = getRandomNumber(0, 10);

const hideProgressionNumber = (progression, index) => {
  const p = [...progression];
  p[index] = '..';
  return p;
};

const startProgression = () => {
  const progression = getProgression(getRandomNumber(0, 101), progressionStep, 10);
  const question = `${hideProgressionNumber(progression, hideIndex).join(' ')}`;
  const answer = progression[hideIndex];
  return [question, String(answer)];
};

const startRoundProgression = () => {
  rules(rule, startProgression);
};

export default startRoundProgression;
