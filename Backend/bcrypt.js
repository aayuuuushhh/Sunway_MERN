// (password, salt);
// salt => random  string added in password for hashing
import bcrypt from "bcrypt";

let password = "SunwayCoLLeGe";

const hashPassword = await bcrypt.hash(password, 10);
console.log(hashPassword);

const newPassword = "SunwayColleGe";
const checkPassword = await bcrypt.compare(newPassword, hashPassword);
console.log(checkPassword);