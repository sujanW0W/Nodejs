//nodemon - it watches the file. If some changes are detected, it will automatically restart the application immediately. So, I wont need to "node app.js" everytime.

//The "scripts" in package.json
//Basically, we set up the scirpts and run it using "npm [command]"
//Some scripts might need "npm run [command]"

//Here, I have set the scirpts- start and dev.
//nodemon is installed as devDependencies. 
//devDependencies means those that will be used during development stage, not during the production.
//a script for nodemon is set.

const smth = "Hello World"

console.log(smth)

//Global dependencies
//The dependencies can be installed globally. 
//By installing the packages globally, it can be used by multiple projects.
