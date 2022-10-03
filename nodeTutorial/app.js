//nodemon - it watches the file. If made some changes, it will execute it immediately. So, I wont need to "node app.js" everytime.

//The "scripts" in package.json
//Basically, we set up the scirpts and run it using "npm [command]"
//Some scripts might need "npm run [command]"

//Here, I have set the scirpts- start and dev.
//nodemon is installed as devDependencies. 
//devDependencies means those that will be used during development stage, not during the production.
//a script for nodemon is set.

const smth = "Hello People"

console.log(smth)