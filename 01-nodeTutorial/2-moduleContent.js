//module contents

//Every file is a module. (CommonJS)
//module is an object which consists of an property named exports.
//The exports is itself and object which consist of data or contents that the module exports.
//Any data of this module that has to be imported or used by other file or module, this moudle must export them by placing them into the exports property.

const first = "Sujan"
const second = "Maharjan"

module.exports = {first,second}

//module.exports.prop = {first,second}
//This creates one property in the exports which is an object with the data.

//module.exports.items = ["item1", "item2"]
//Another way.

//All these methods are same.
