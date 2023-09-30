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
      console.log(operator);
      throw new Error(`Unknown operator!`);
  }
};

const operators = ['+', '-', '*'];

const generateRound = () => {
  const maxOperatorsIndexCount = operators.length;
  const number1 = getRandomNumber(0, 101);
  const number2 = getRandomNumber(0, 101);
  const char = operators[getRandomNumber(0, maxOperatorsIndexCount)];

  const question = [String(number1), String(char), String(number2)].join(' ');

  const answer = calculate(number1, number2, char);
  return [question, String(answer)];
};

const startRoundCalc = () => {
  startGame(rule, generateRound);
};

export default startRoundCalc;
