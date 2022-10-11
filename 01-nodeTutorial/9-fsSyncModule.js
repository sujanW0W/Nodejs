//FileSystem module

//Sync approach

const {readFileSync, writeFileSync} = require('fs')

// console.log('start')

const first = readFileSync('./contents/firstFile.txt', 'utf8')
const second = readFileSync('./contents/secondFile.txt', 'utf8')

// console.log(first,second)

// writeFileSync('./contents/resultSync.txt',`Here is the result: First = ${first} & Second = ${second}`);

// console.log(readFileSync('./contents/resultSync.txt','utf8'))

//appending - For appending, one additional parameter is added  into the writeFileSync function which is flag = 'a'.

writeFileSync(
    './contents/resultSync.txt',
    'Appending the text. Successful.',
    {flag : 'a'}
    )

// console.log('done with the write')
// console.log('starting new task')