const minValue = 2;
const maxValue = 10;

function isPrimeNumber(number){
    for(let i = 2; i<number; i++){
        if(number%i === 0){
            return false
        }
    }
    return true;
}

for(let i = minValue; i<=maxValue; i++){
    if(isPrimeNumber(i)){
        console.log(i);
    }
}