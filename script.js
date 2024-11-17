const startButtonSelector = '.button__start';
const stopButtonSelector = '.button__stop';
const hoursInputSelector = '#hours';
const minutesInputSelector = '#minutes';
const secondsInputSelector = '#seconds';

const hoursInput = document.querySelector(hoursInputSelector);
const minutesInput = document.querySelector(minutesInputSelector);
const secondsInput = document.querySelector(secondsInputSelector);
const startButton = document.querySelector(startButtonSelector);
const stopButton = document.querySelector(stopButtonSelector);

const delaySeconds = 1;
let intervalId;

// const functionName = () => {
//     console.log('Hi');
// }

// functionName();

// startButton.addEventListener('click', () => {
//     console.log('Hi');
// });

let remainingTime;

let hours;
let minutes;
let seconds;

setTimeout(() => {
    console.log('Hi');
}, 3000);

function startTimer(event) {
    event.preventDefault();
    hours = parseInt(hoursInput.value);
    minutes = parseInt(minutesInput.value);
    seconds = parseInt(secondsInput.value);

    remainingTime = hours * 3600 + minutes * 60 + seconds;

    intervalId = setInterval(updateTimer, 1000 * delaySeconds);
    console.log(intervalId);

    // for (let i = remainingTime; i >= 0; i--) {
    //     updateTimer();
    //     console.log('remainingTime:', remainingTime);
    // }

    document.documentElement.requestFullscreen();
    hideElement(startButton);
    showElement(stopButton);
}
function updateTimer() {
    if (remainingTime > 0) {
        remainingTime = remainingTime - 1;

        hours = Math.floor(remainingTime / 3600);
        minutes = Math.floor(remainingTime % 3600 / 60);
        seconds = remainingTime % 60;
    
        hoursInput.value = hours.toString().padStart(2, '0');
        minutesInput.value = minutes.toString().padStart(2, '0');
        secondsInput.value = seconds.toString().padStart(2, '0');
    } else {
        stopTimer();
    }
}
function stopTimer() {
    clearInterval(intervalId);
    hideElement(stopButton);

    setTimeout(() => {
        document.exitFullscreen();
        showElement(startButton);
    }, 1000)
}

function hideElement(element) {
    element.classList.add('hide');
}

function showElement(element) {
    element.classList.remove('hide');
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
