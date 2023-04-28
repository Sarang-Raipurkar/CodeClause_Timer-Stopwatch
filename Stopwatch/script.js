const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const millisecondsDisplay = document.querySelector('.milliseconds');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let intervalId;

function startTimer() {
  intervalId = setInterval(() => {
    milliseconds += 10;

    if (milliseconds === 1000) {
      seconds += 1;
      milliseconds = 0;
    }

    if (seconds === 60) {
      minutes += 1;
      seconds = 0;
    }

    updateDisplay();
  }, 10);
}

function pauseTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}

function updateDisplay() {
  minutesDisplay.textContent = pad(minutes);
  secondsDisplay.textContent = pad(seconds);
  millisecondsDisplay.textContent = pad(milliseconds);
}

function pad(number) {
  return number.toString().padStart(2, '0');
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
