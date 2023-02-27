const userNumber = prompt("Введите число");
const userDegree = prompt("Введите степень");

if(userDegree<1){
    alert(`Степень ${userDegree} должна быть больше 1`);
}else{
    alert(pow(userNumber,userDegree))
}


function pow(number, degree){
    let result = number;
    for(let i = 1; i<degree; i++){
        result = result*number;
    }
    return result;
}


