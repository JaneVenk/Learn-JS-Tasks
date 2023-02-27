function readNumber(){
    let userValue = prompt("Введите число");

    if(userValue === "" || userValue === null){
        return null;
    }

    if(isFinite(userValue)){;
        return null;
    }else{
        readNumber();
    }
}

readNumber();