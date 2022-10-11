//npm packages
//We need package.json that keeps record of the packages we install in our project.
//It can be done in various ways, one of which is npm init - sinmple automatic process.

// npmjs.com is the official site for the npm packages.

//First package that we install is lodash

const _ = require('lodash')

const array = [1,[2,3,[4,5]]];

const newArray = _.flattenDeep(array); //It returns a single array with items.

console.log(newArray);