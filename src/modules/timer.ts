// import
import { timer } from "./helpers/domutils";

// set up default variables for timer
let totalSeconds = 0;
let active: boolean = false;
let minutes: number | string = 0;
let seconds: number | string = 0;
let time: string;

// if timer is active it should count seconds
//if seconds exceed 60, seconds start again at 1 and minutes will be set to 1
function countTime() {
  if (active) {
    ++totalSeconds;
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds - minutes * 60;
    // styles timer that it always has the format of 00:00
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    // save each second the time to be able to store it once timer is stopped
    time = `${minutes}:${seconds}`;
    // display timer in HTML
    timer.innerHTML = `<p class="timer">Time: ${minutes}:${seconds}</p>`;
    // timeout every 1000ms --> creates a count each second
    setTimeout(() => {
      countTime();
    }, 1000);
  }
}

// starts the timer
export function timerStart() {
  active = true;
  countTime();
}

// stops the timer
export function timerStop() {
  active = false;
  console.log("in timerStopNew", time);
}

// resets the timer for the new level / game to 00:00
// and resets timer variables
export function resetTimer() {
  timer.innerHTML = `<p>Time: 00:00</p>`;
  totalSeconds = 0;
  seconds = 0;
  minutes = 0;
}

// getter to get the needed time for a level
export function getTimer(): string {
  const levelTimer = time;
  return levelTimer;
}
