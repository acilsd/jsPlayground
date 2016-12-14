'use strict';
const arrowSec = document.querySelecotr('.seconds');
const arrowMin = document.querySelecotr('.minutes');
const arrowHour = document.querySelecotr('.hours');


function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMitunes();
  const hours = now.getHours();
  const secDeg = ((seconds / 60) * 360) + 90;
  const minDeg = ((mins / 60) * 360) + 90;
  const hourDeg = ((mins / 12) * 360) + 90;

  arrowSec.style.transform = `rotate(${secDeg}deg)`;
  arrowMin.style.transform = `rotate(${minDeg}deg)`;
  arrowHour.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(setDate, 1000);
