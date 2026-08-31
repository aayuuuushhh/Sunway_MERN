//StringToarray
// split("")
// a a y u s h;
//arrayToString

// let str = ["Hi","Aayush"];
// console.log(str.join(" "));



// let strr = "Hii";
// console.log(strr.split(""));

//isPalindrome 
//check the string is palindrome or not
//value == reverse
//"wow"

let isPalindrome = (word) => {
    if(word === word.split("").reverse().join("")) {
        console.log("Is palindrome");
    } else{
        console.log("not palindrome");
    }
};
isPalindrome("sunny");

