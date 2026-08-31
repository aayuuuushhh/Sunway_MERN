/*
create a function isEven to check the number is odd or even
*/

let isEven = (num) => {
    if (num % 2 ==0 ) {
        return "Even";
    } else {
        return "Odd";
    }
};
console.log(isEven(5));