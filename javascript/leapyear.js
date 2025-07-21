function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return year + " is a leap year.";
            } else {
                return year + " is not a leap year.";
            }
        } else {
            return year + " is a leap year.";
        }
    } else {
        return year + " is not a leap year.";
    }
}

console.log(isLeap(2024));  
console.log(isLeap(1900));  
console.log(isLeap(2000));  
