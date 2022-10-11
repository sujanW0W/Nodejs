const {readFile, writeFile} = require("fs").promises

/*
There are different way to return Promise.
    1. First is by creating function with blocks of code and returning 

const getText = (path) =>{
    return new Promise( (resolve,reject)=>{
        readFile(path,"utf-8", (err,result) => {
            if(err)
                reject(err)
            else
                resolve(result)
        })
    })
}

    2. By using a javaScript module- util. This util makes it simplier as we dont have to code manually all the blocks like above
    

    const util = require('util')
    const readFilePromise = util.promisify(readFile)
    const writeFilePromise = util.promisify(writeFile)

    const start = async () => {
        try {
            const first = await readFilePromise("./contents/firstFile.txt", "utf8")
            const second = await readFilePromise("./contents/secondFile.txt", "utf8")
            console.log(first,second)

            await writeFilePromise("./contents/writePromise.txt",`Util technique : ${first} + ${second}`)
        } catch (error) {
            console.log(error)
        }
    }

    start();

    3. Third is as below. This is much cleaner. For this, we import the "fs" module with promise. Done by adding .promises as done above.
    
*/

const start = async () => {
    try {
        const first = await readFile("./contents/firstFile.txt", "utf8")
        const second = await readFile("./contents/secondFile.txt", "utf8")
        console.log(first,second)

        await writeFile("./contents/writePromise.txt",`fs.Promises technique : ${first} + ${second}` , {flag : 'a'})
    } catch (error) {
        console.log(error)
    }
}

start();


/*
getText("./contents/firstFile.txt")
    .then( (result) => {
        console.log(result)
    })
    .catch( (err)=> {
        console.log(err)
    })

    This is an approach to get the Promise and access it.
    However, a more cleaner approach is using async-await method.
    Remember, while using async-await, it is always preffered to use within try-catch block as it provides control over the code, even if it fails.
*/

/*
    const data = getText("./contents/firstFile.txt")
    console.log(data)

    This logs Proimise <Pending>.
    As we know that the Promise is asynchronous, it takes some time to get resolved.
    In this case, the Promise while it is getting executed, that is in Pending state gets assigned to data and then logged to the console.

    This can be solved by using async-await approach. The function is assigned with "await" in order to wait until the Promise gets resolved. The result of the Promise is then assigned to the variable only after the Promise gets resolved. 
    It is done below.

    */

    /*
    Preffered way to work while using first approach of setting the readFile or writeFile (First approach above)
    const start = async () => {
        try {
            const first = await getText("./contents/firstFile.txt")
            const second = await getText("./contents/secondFile.txt")
            console.log(first, second)
        } catch (error) {
            console.log(error)
        }
    }

    start()

    */