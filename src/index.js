import readlineSync from 'readline-sync';

const rules = (rule, getQuestionAndAnswer) => {
  if (rule === 'Answer "yes" if the number is even, otherwise answer "no".') {
    console.log('brain-even\n');
  }
  if (rule === 'What is the result of the expression?') {
    console.log('brain-calc\n');
  }
  if (rule === 'Find the greatest common divisor of given numbers.') {
    console.log('brain-gcd\n');
  }
  if (rule === 'What number is missing in the progression?') {
    console.log('brain-progression\n');
  }
  if (rule === 'Answer "yes" if given number is prime. Otherwise answer "no".') {
    console.log('brain-prime\n');
  }

  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rule);
  let countOfCorrectAnswers = 0;

  while (countOfCorrectAnswers < 3) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      countOfCorrectAnswers += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default rules;
