let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let myCollator = new Intl.Collator();
animals.sort(function (a, b) {
  return myCollator.compare(a, b);
});

console.log(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК
