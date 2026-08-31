/* 
create a function name isVowel
a,e,i,o,u 
vowel 
consonent
*/

let isVowel = (str) => {
    if (str ==="a" ||str ==="e" ||str==="i"||str==="o"||str==="u"){
        return "Vowel";
    } else {
        return "consonent";
    }
};
console.log(isVowel("a"));