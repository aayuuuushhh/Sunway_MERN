/*Map */

let arr = [1,2,3,4,5];

let outputArray = arr.map((value,i)=>{
    return value *2;
});
console.log(outputArray);

//gender

let gender = ["Male","Female","Others","Male","Others"];

let newgender = gender.map((value,i)=>{
    if (value === "Male"){
        return "He";
    }
    else if (value === "Female"){
        return "She";
    }
    else{
        return "Gay";
    }
});
console.log(newgender);


let array = ["m", "A", "N", "I", "S", "H", "A"];

let newarray = array.map((value,i)=>{
    if (i == 0){
        return value.toLocaleUpperCase()
    }
    else{
        return value.toLocaleLowerCase()
    }
});
console.log(newarray);



let vowelcheck = ["m", "A", "N", "I", "S", "H", "A"];

let outputvowelcheck = vowelcheck.map((value,i)=>{
    if (
        value == "a" ||
        value == "e" ||
        value == "i" ||
        value == "o" ||
        value == "u" ||
        value == "A" ||
        value == "E" ||
        value == "I" ||
        value == "O" ||
        value == "U"
    ){
        return value.toUpperCase();
    }
    else{
        return value.toLowerCase();
    }
});
console.log(outputvowelcheck);