let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// function revese(list){
//       let array = [];
//   let currentObject = list;

//   while (currentObject) {
//     array.push(currentObject.value);
//     currentObject = currentObject.next;
//   }

//   const reverseArray = array.reverse();

//   reverseArray.map(el=>{console.log(el)});

// }

// revese(list); //  4 3 2 1

function revese(list) {
  if (list.next) {
    revese(list.next);
  }

  console.log(list.value);
}

revese(list); //  4 3 2 1
