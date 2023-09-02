import getRandomNumber from '../getRandomNumber.js';
import rules from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) return false;
  if (num % 2 === 0 && num > 2) return false;

  const s = Math.sqrt(num);

  for (let i = 3; i <= s; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const startPrime = () => {
  const num = getRandomNumber(0, 7) + 2;

  const answer = isPrime(num) ? 'yes' : 'no';

  const question = `${num}`;
  return [question, String(answer)];
};

const startRoundPrime = () => {
  rules(rule, startPrime);
};

export default startRoundPrime;
