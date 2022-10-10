//event loop example 1

console.log("first")

setTimeout(
    () =>{
        console.log("second")
    },0
)

console.log("third")

//Basically a portion of the code that are asynchronous or callbacks gets offloaded and executed at the end after all the immediate code have been executed.
//The setTimeout, which is an asynchronous gets offloaded even though the time is set to zero, and get executed at the end.

//This happens even though JavaScript is single-threaded and synchronous.

//This is important for serving multiple users that are requesting to perform certain task at the same time.
//The task that takes longer time to get executed is offloaded and gets executed after all other users' task have been executed.