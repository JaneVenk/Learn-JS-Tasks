const age = 15;

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return console.log('Родители разрешили?');
//   }
// }

// оператор ?

function checkAge(age){
    return age>18 ? true:console.log('Родители разрешили?')
}

checkAge(age);


// оператор ||

function checkAge(age){
    return (age>18) || console.log('Родители разрешили?')
}

checkAge(age);