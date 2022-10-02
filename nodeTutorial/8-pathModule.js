//File system module - path module

const path = require('path')
// console.log(path.sep)

const filePath = path.join('contents', 'subFolder', 'test.txt');
// console.log(filePath);

const base = path.basename(filePath)
// console.log(base);

const absolutePath = path.resolve(__dirname,'contents','subFolder','test.txt')
console.log(absolutePath);