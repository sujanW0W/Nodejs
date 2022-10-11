//Read Stream

const {createReadStream} = require("fs")

const readStream = createReadStream("./contents/bigFile.txt")

readStream.on( 'data', (result)=>{
    console.log(result)
})

readStream.on( 'end', () => {
    console.log("no more data to be read.")
})

//'data' event returns the data in chuncks in form of  buffer or string.
//by default, the size of the buffer is 64 KB.
//last buffer is the remainder.
//The size of buffer can be controlled by using highWaterMark.
//const readStream = createReadStream("./contents/bigFile.txt",{highWaterMark:90000})


//const readStream = createReadStream("./contents/bigFile.txt", {encoding: "utf8"});  For reading the file as written.

