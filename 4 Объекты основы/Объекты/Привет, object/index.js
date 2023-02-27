const user = new Object();
user.name = "Jhon";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);