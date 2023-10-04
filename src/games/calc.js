import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const rule = 'What is the result of the expression?';
const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: ${operator}!`);
  }
};

const operators = ['+', '-', '*'];

const generateRound = () => {
  const number1 = getRandomNumber(0, 101);
  const number2 = getRandomNumber(0, 101);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${number1} ${operator} ${number2}`;

  const answer = calculate(number1, number2, operator);
  return [question, String(answer)];
};

const startRoundCalc = () => {
  startGame(rule, generateRound);
};

export default startRoundCalc;
