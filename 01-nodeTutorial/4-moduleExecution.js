//require is like import keyword
//the require imports data or content that is exported by the module specified.
//the variable gets assigned with the imported object, which is the "exports" object of the module.
//Basically, anything that is exported by the specified module gets imported and assigned to the variable.

const names = require('./2-moduleContent');
const printName = require('./3-moduleMethod');

printName(names.first)
printName(names.second)

//Two modules exported.
//First module got us the contents.
//Second module got us the method to be invoked using the data from first module.