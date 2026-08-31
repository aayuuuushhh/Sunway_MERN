/* 
push- adds elements from last
pop- delete the elements from last
unshift- add the element from the first
shift-delete the element from the first
*/

let arr = ["hello","world","1",2,3];
console.log(arr.push("6"));
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("namaste");
console.log(arr);
arr.shift();
console.log(arr);