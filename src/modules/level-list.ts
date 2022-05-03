const LevelOne = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

const LevelTwo = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

const LevelOneRICHTIG = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 2, 2,
  3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

const LevelTwoRICHTIG = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 2, 2, 1, 1, 2, 0, 0, 0, 1, 2, 3, 3,
  2, 1, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

const LevelThree = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 0, 4, 3, 2, 1, 1,
  2, 3, 4, 0, 0, 0, 3, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

const LevelFour = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 1, 1,
  2, 2, 2, 0, 0, 3, 3, 3, 2, 2, 3, 3, 3, 0, 0, 0, 4, 4, 3, 3, 4, 4, 0, 0, 0, 0,
  1, 1, 0, 0, 1, 1, 0, 0,
];

const LevelFive = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2,
  2, 2, 2, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0,
  5, 5, 0, 0, 5, 5, 0, 0,
];

export { LevelOne, LevelTwo, LevelThree, LevelFour, LevelFive };

export function changeBallAndPaddle(
  button: HTMLButtonElement,
  level: number,
  ballSpeed: number,
  paddleSpeed: number
) {
  button.innerHTML = "Next Level";
  level += 1;
  switch (level) {
    case 2:
      ballSpeed = 6;
      paddleSpeed = 12;
      return level && ballSpeed && paddleSpeed;
      break;
    case 4:
      ballSpeed = 6;
      paddleSpeed = 12;
      return level && ballSpeed && paddleSpeed;
      break;
    case 3:
        ballSpeed = 10;
        paddleSpeed = 20;
        return level && ballSpeed && paddleSpeed;
        break;
    default:
        ballSpeed = ballSpeed;
        paddleSpeed = paddleSpeed;
        return level && ballSpeed && paddleSpeed;
  }
}
