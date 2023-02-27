function aclean(arr) {
  let obj = {};
  let sortString;

  for (let i = 0; i < arr.length; i++) {
    sortString = arr[i].toLowerCase().split("").sort().join("");
    obj[sortString] = arr[i];
  }

  return Object.values(obj);
}



let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
