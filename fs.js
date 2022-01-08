
// *****Files===>


const fs = require('fs')

// let content = fs.readFileSync('f1.txt')
// console.log('this is f1 data : ' + content)

// fs.writeFileSync('f1.txt', 'this data will be written on f2')

// fs.writeFileSync('f3.txt', 'this data will be written on f3')
// console.log('Data written')

// fs.appendFileSync('f2.txt', 'This is new data')
// fs.appendFileSync('f1.txt', 'This is new data')

// fs.unlinkSync('f2.txt')
// console.log('f2 deleted')


// *****Directories(also called folders)===>

// fs.mkdirSync('myDirectory')
// console.log('Directory Created')

// fs.rmdirSync('myDirectory')
// console.log('Directory Removed')

// console.log(fs.existsSync('f1.txt'))
// //or
// let doesExist = fs.existsSync('f2.txt')
// console.log(doesExist);

// fs.mkdirSync('myDirectory')
// console.log('Directory Created')

// let statsOfDirectory = fs.lstatSync('myDirectory')
// console.log(statsOfDirectory)

// console.log('isFile?', statsOfDirectory.isFile())
// console.log('isDirectory', statsOfDirectory.isDirectory())

let folderPath = '/Users/amirafjal/Desktop/pepcoding/node/myDirectory'
let folderContent = fs.readdirSync(folderPath)
console.log('Directory Content : ' + folderContent)



