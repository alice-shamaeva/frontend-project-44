import getRandomNumber from '../getRandomNumber.js';
import rules from '../index.js';

const rule = 'What is the result of the expression?';
const calculate = (num1, num2, char) => {
  let answer;
  switch (char) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      answer = undefined;
  }
  return answer;
};

const chars = ['+', '-', '*'];

const generateRound = () => {
  const randomNumber1 = getRandomNumber(0, 101);
  const randomNumber2 = getRandomNumber(0, 101);
  const randomChar = chars[getRandomNumber(0, 2)];

  const question = `${randomNumber1} ${randomChar} ${randomNumber2}`;

  const answer = calculate(randomNumber1, randomNumber2, randomChar);
  return [question, String(answer)];
};

const startRoundCalc = () => {
  rules(rule, generateRound);
};

export default startRoundCalc;
