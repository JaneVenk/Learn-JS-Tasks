function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

let date = new Date(); // today 17/02/2023 ПТ
console.log( getWeekDay(date) ); // ПТ

let date2 = new Date(2012, 0, 3);
console.log( getWeekDay(date2) ); // ВТ