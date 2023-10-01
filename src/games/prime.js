import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) return false;
  if (num === 0) return false;
  if (num % 2 === 0 && num > 2) return false;
  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const num = getRandomNumber(0, 7);

  const answer = isPrime(num) ? 'yes' : 'no';

  return [num, String(answer)];
};

const startRoundPrime = () => {
  startGame(rule, generateRound);
};

export default startRoundPrime;
