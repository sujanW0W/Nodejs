//Streams
//Sequential operation
//Four operations: Read, Write, Duplex, Transform
//Perform read or write or both or transform after read in sequential manner.
//Useful in performing opeartions in big files.


//Making big file
const {writeFile} = require('fs')
const util = require('util')
const writeFileUtil = util.promisify(writeFile);


for(let i=0; i<1000; i++){
    writeFileUtil("./contents/bigFile.txt", `Hello! I am learning Node js. This is getting interesting. ${i} \n`, {flag : 'a'})
}

