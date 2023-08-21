import readLineSync from 'readline-sync';

const greeting = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greeting;
