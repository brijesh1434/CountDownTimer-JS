const endDate = "10 April 2024 12:00 AM ";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const newDate = new Date();
  // console.log(end);
  // console.log(newDate);
  const diff = (end - newDate) / 1000;
  // console.log(diff);
  if (diff < 0) return;
  const days = Math.floor(diff / 24 / 3600);
  // console.log(days);
  inputs[0].value = days;

  const hours = Math.floor(diff / 60 / 60) % 24;
  // console.log(hours);
  inputs[1].value = hours;
  const minutes = Math.floor(diff / 60) % 60;
  // console.log(minutes);
  inputs[2].value = minutes;

  const seconds = Math.floor(diff) % 60;
  inputs[3].value = seconds;
}

clock();

setInterval(() => clock(), 1000);
