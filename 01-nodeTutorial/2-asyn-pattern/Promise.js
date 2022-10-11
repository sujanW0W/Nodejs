const {readFile} = require("fs")

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

getText("./contents/firstFile.txt")
    .then( (result) => {
        console.log(result)
    })
    .catch( (err)=> {
        console.log(err)
    })