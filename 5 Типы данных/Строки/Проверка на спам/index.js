function checkSpam(str){
    const string = str.toLowerCase();
    return (string.includes("viagra") || string.includes("xxx")) ? true : false;
}

console.log(checkSpam("buy ViAgRA now")); // true
console.log(checkSpam("free xxxxx")); // true
console.log(checkSpam("innocent rabbit")); // false
