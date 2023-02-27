const age = 15;

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Родители разрешили?');
//     }
//   }

function checkAge(age) {
    if (age > 18) {
      return true;
    } 
      // ...
      return confirm('Родители разрешили?'); // без else работать тоже будет 

  }

  checkAge(age);