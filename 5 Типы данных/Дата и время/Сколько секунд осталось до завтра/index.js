function getSecondsToTomorrow() {
  let today = new Date();

  let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);

  let difference = tomorrow - today;
  return Math.round(difference / 1000);
}

console.log(getSecondsToTomorrow()); // now 19:35 15836