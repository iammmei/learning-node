console.log("Hi Barbie!");
console.log('Hi Ken')

const path = require('node:path')
console.log(__filename)
console.log(__dirname)

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));
console.log(path.parse(__dirname));
console.log(path.join("home", "safa", "index.html" ))

//Import core module 
const fs = require("fs");

//Create new txt file and write text in same file

fs.writeFileSync("test.txt", "This barbie is a mermaid.");

//Append file in last updated file 

fs.appendFileSync("test.txt", " A beautiful one")
 




