// images and logic from freeCodeCamp.org. (2021, 25. Februar). 
// TypeScript GameDev Tutorial – Create an Arkanoid Game [Video]. 
// YouTube. https://www.youtube.com/watch?v=7bejSTim38A

import {
  ballImg,
  blueBrickImg,
  greenBrickImg,
  purpleBrickImg,
  redBrickImg,
  yellowBrickImg,
  paddleImg,
} from "../modules/helpers/domutils";

//Set src to all image elements
ballImg.src = "src/images/ball.png";
blueBrickImg.src = "src/images/brick-blue.png";
greenBrickImg.src = "src/images/brick-green.png";
purpleBrickImg.src = "src/images/brick-purple.png";
redBrickImg.src = "src/images/brick-red.png";
yellowBrickImg.src = "src/images/brick-yellow.png";
paddleImg.src = "src/images/paddle.png";

export {
  ballImg,
  blueBrickImg,
  greenBrickImg,
  purpleBrickImg,
  redBrickImg,
  yellowBrickImg,
  paddleImg,
};
