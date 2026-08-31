import jwt from "jsonwebtoken";
//details, secretKey,expiryInfo

let details = {
    id: 1,
};

let secretKey = "L3";

let expiryInfo = {
    expiresIn : "1h",
};

const generateToken = jwt.sign(details, secretKey, expiryInfo);
console.log(generateToken);

const newTokne =
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzg3NTQwNDkwLCJleHAiOjE3ODc1NDQwOTB9.5i8dfR1-74LniX02SkOlvCydOo7TGGZB-SRIdtTAJZ0"

const verifyToken = jwt.verify(newTokne, secretKey);
console.log(verifyToken);