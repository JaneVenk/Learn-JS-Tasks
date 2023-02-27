function getSecondsToday() {
  let today = new Date();
  return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
}

console.log(getSecondsToday()); // now 19:30 = 70261
