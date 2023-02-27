function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let differenceMs = new Date() - date;
  let differenceSec = Math.round(differenceMs / 1000);
  let differenceMin = differenceSec / 60;
  let differenceHour = differenceMin / 60;


  year = year.toString().slice(-2);

  month = month < 10 ? '0' + month : month;

  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;

  hour = hour < 10 ? '0' + hour : hour;

  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (differenceSec < 1) {
    return 'прямо сейчас';
  } else if (differenceMin < 1) {
    return differenceSec + " сек. назад"
  } else if (differenceHour < 1) {
    return differenceMin + " мин. назад"
  } else {
    return `${dayOfMonth}.${month}.${year}, ${hour}:${minutes}`
  }
}


console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // 16.02.23, 19:51