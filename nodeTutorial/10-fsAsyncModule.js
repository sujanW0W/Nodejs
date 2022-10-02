//Async approach

const {readFile, writeFile} = require('fs')

readFile('./contents/firstFile.txt', 'utf8', (err,result) => {
    if(err){
        console.log(err)
        return;
    }
    // console.log(result)
    const first = result;
    readFile('./contents/secondFile.txt', 'utf8', (err,result)=> {
        if(err){
            console.log(err)
            return;
        }
        // console.log(result)
        const second = result;
        writeFile('./contents/resultAsync.txt',`Result : ${first} & ${second}`, (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result)
        })
    })
})