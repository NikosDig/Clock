const hoursContainer = document.querySelector(".hours");
const minutesContainer = document.querySelector(".minutes");
const secondsContainer = document.querySelector(".seconds");
const time = new Date();
let hour = time.getHours();
let minute = time.getMinutes();
let second = time.getSeconds();

function getTime() {
  second += 1;
  if (second === 60) {
    minute++;
    second = 00;
  }
  if (minute === 60) {
    hour++;
    minute = 00;
  }
  if (hour === 24) {
    hour = 00;
  }
  if (hour < 10) {
    hoursContainer.innerText = "0" + hour;
  } else {
    hoursContainer.innerText = hour;
  }
  if (minute < 10) {
    minutesContainer.innerText = "0" + minute;
  } else {
    minutesContainer.innerText = minute;
  }
  if (second < 10) {
    secondsContainer.innerText = "0" + second;
  } else {
    secondsContainer.innerText = second;
  }
}

setInterval(getTime, 1000);
