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

// function printList(list){
//     let currentObject = list;

//   while (currentObject) {
//     console.log(currentObject.value);
//     currentObject = currentObject.next;
//   }
// };

// printList(list); // 1 2 3 4

function printList(list) {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
}

printList(list); // 1 2 3 4
