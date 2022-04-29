import { timer } from './domutils';

let startTime: Date;
let stopTime: Date;
let active: boolean = false
let minutes: number = 0;
let seconds: number = 0;
export let time: string = `0${minutes}:${seconds}`;

function timercount() {
  if (active) {
    stopTime = new Date()
    displayTime();
    timer.innerHTML = `<p class="timer">Time: 0${minutes}:${seconds}</p>`
    setTimeout(()=>{
      timercount()
    }, 1000)
  }
}

function displayTime() {
    if(seconds<60){
        seconds +=1
    } else {
        minutes +=1;
        seconds = 0;
    }
}

export function timerStart() {
  startTime = new Date()
  stopTime = stopTime
  active = true
  timercount()
}

export function timerStop() {
  stopTime = new Date()
  active = false
}

export function resetTimer() {
    seconds=0;
    minutes=0;
}

// let timer2 = null;
// let totalTime = 0;
// // let time = new Date();
// let seconds = 0;

// export function countTime() {
//     timer2 = setInterval(increment, 100);
// }

// function increment() {
//     seconds += 1;
//     timer.innerHTML = `<p class="timer">Time: ${totalTime}</p>`;
// }


// export function countTime() {
//   let interval: number;
//   let seconds = 0;
//   incrementSeconds(seconds);
//   interval = setInterval(incrementSeconds, 1000);
//   setTimeout(() => {
//     clearInterval(interval),
//       (timer.innerHTML = `<p class="timer">Time: ${seconds}</p>`);
//   });
// }

// function incrementSeconds(seconds: number) {
//   seconds += 1;
//   timer.innerHTML = `<p class="timer">Time: ${seconds}</p>`;
// }

// var seconds = 0;
// var el = document.getElementById('seconds-counter');

// function incrementSeconds() {
//     seconds += 1;
//     el.innerText = "You have been here for " + seconds + " seconds.";
// }

// var cancel = setInterval(incrementSeconds, 1000);
