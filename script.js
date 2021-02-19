const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const spanTag =document.getElementsByClassName("bottom")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];
// console.log(stopWatchTag);
let milliseconds=0,seconds=58,minutes=59,hours=0;

const startTime = ()=>{
    milliseconds += 10;
    if(milliseconds === 1000){
        milliseconds = 0;
        seconds += 1;
        if(seconds === 60){
            seconds = 0;
            minutes += 1;
            if(minutes === 60){
                minutes = 0;
                hours += 1;
            }
        }
    }
    const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hoursText = hours < 10 ? "0" + hours.toString() : hours;
    stopWatchTag.textContent = hoursText + ":" + minutesText + ":" + secondsText;
    spanTag.textContent = milliseconds.toString();

};
let intervalID;
startButtonTag.addEventListener('click',()=>{
    intervalID = setInterval(startTime,1);
});

pauseButtonTag.addEventListener('click',()=>{
    clearInterval(intervalID);
});

continueButtonTag.addEventListener('click',()=>{
    clearInterval(intervalID);
    intervalID = setInterval(startTime,1);
});

restartButtonTag.addEventListener('click',()=>{
    clearInterval(intervalID);
    (milliseconds = 0),(seconds = 0),(minutes = 0),(hours = 0);
    intervalID = setInterval(startTime,1);
});

