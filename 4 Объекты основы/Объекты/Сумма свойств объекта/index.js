let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function getAmountOfSalaries(salaries){
    let sum = 0;
    for(key in salaries){
        sum +=salaries[key]; 
    }
    return sum;
}

let sum = getAmountOfSalaries(salaries);

console.log(sum);