let userNumber = prompt("Введите число");

while(userNumber<=100){
    if(userNumber === null){
        break;
    }
    userNumber = prompt("Введите число еще раз");
}