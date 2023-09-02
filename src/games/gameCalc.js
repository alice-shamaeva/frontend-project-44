import getRandomNumber from '../getRandomNumber.js';
import rules from '../index.js';

const rule = 'What is the result of the expression?';
const getExpression = (num1, num2, char) => {
  switch (char) {
    case '+':
      return num1 + num2;
    case ('-'):
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const chars = ['+', '-', '*'];

const getRandomChar = () => chars[getRandomNumber(0, 3)];

const startCalc = () => {
  const randomNumber1 = getRandomNumber(0, 101);
  const randomNumber2 = getRandomNumber(0, 101);
  const randomChar = getRandomChar();

  const question = `${randomNumber1} ${randomChar} ${randomNumber2}`;

  const answer = getExpression(randomNumber1, randomNumber2, randomChar);

  return [question, String(answer)];
};

const startRoundCalc = () => {
  rules(rule, startCalc);
};

export default startRoundCalc;
