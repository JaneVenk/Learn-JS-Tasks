let user = {
  name: 'John',
  age: 30
};

// function count(user){
//     let keysCount = 0;

//     for(key in user){
//         keysCount++;
//     }

//     return keysCount;
// }

// или

function count(user){
    return Object.keys(user).length;
}

console.log( count(user) ); // 2