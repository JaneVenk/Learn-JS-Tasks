function sumInput(){
    const userNumbers = [];
    let userInput = prompt("Введите число");

    while(isFinite(userInput)){
        if(userInput === null || userInput === ""){
            break;
        }
        userNumbers.push(+userInput);
        userInput = prompt("Введите число");
    }

    return userNumbers.reduce((accumulator, currentValue) => {return accumulator + currentValue},0);
}

alert(sumInput());
