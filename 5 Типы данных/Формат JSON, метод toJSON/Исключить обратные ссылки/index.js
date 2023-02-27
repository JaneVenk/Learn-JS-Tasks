let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(meetup);

// <ref *1> {
//   title: 'Совещание',
//   occupiedBy: [ { name: 'Иванов' }, { name: 'Петров' } ],
//   place: { number: 23, occupiedBy: [Circular *1] },
//   self: [Circular *1]
// }

console.log( JSON.stringify(meetup, function replacer(key, value) {
 return (key != "" && value == meetup) ? undefined : value;
}));

/* в результате :
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/