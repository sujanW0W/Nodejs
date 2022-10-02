//Async approach

const {readFile, writeFile} = require('fs')

// console.log('start')

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
            // console.log('done with the writing')
        })
    })
})
// console.log('starting new task')


//start, done and starting new task shows tht difference between sync and async.
//sync is blocking. Basically, following code is executed only after completion of the former code. Sequential approach.
//async is non-blocking. As we know, it does not follow sequential approach. Simply in this file, as the readFile function is being executed, it gets offload and next task gets executed.

//in sync, one user is served at a time.
//in async, multiple user can be served at the same time.