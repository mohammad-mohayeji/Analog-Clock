const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");
let deg = 6;

setInterval(clockHandler, 1000);

function clockHandler() {
  let myDate = new Date();
  let seconds = myDate.getSeconds() * deg;
  let minutes = myDate.getMinutes() * deg;
  let hours = myDate.getHours() * 30;

  sec.style.transform = `rotateZ(${seconds}deg)`;
  min.style.transform = `rotateZ(${minutes}deg)`;
  hour.style.transform = `rotateZ(${hours + minutes / 12}deg)`;
}
