import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const getNOD = (num1, num2) => {
  let n1 = num1;
  let n2 = num2;
  while (n1 !== n2) {
    if (n1 > n2) {
      n1 -= n2;
    } else {
      n2 -= n1;
    }
  }
  return n1;
};

const generateRound = () => {
  const randomNumber1 = getRandomNumber(0, 101);
  const randomNumber2 = getRandomNumber(0, 101);
  const question = `${String(randomNumber1)} ${String(randomNumber2)}`;
  const answer = getNOD(randomNumber1, randomNumber2);
  return [(question), String(answer)];
};

const startRoundGCD = () => {
  startGame(rule, generateRound);
};

export default startRoundGCD;
