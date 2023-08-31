import readLineSync from 'readline-sync';
import getRandomNumber from '../index.js';

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

const getHideIndex = () => Math.floor(Math.random() * 10);

const hideIndex = getHideIndex();

const hideProgressionNumber = (progression, index) => {
  const p = [...progression];
  p[index] = '..';
  return p;
};

const startRoundProgression = () => {
  const progression = getProgression(getRandomNumber(100), progressionStep, 10);

  console.log(`Question: ${hideProgressionNumber(progression, hideIndex).join(' ')}`);

  const answer = readLineSync.question('Your answer: ');

  const correctAnswer = progression[hideIndex];

  if (Number(answer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer.toLowerCase()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default startRoundProgression;
