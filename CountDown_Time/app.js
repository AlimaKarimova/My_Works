"use strict";
const daysEl = document.getElementById('days'),
    hoursEl = document.getElementById('hours'),
    minutesEl = document.getElementById('minutes'),
    secondsEl = document.getElementById('seconds');

const newBeginning = '22 May 2022'

function countdown() {
    const date = new Date(newBeginning);
    const currentDate = new Date();
    const totalSeconds = (date - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

}

countdown();
setInterval(countdown, 1000);