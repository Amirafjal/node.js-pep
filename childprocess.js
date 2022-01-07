// child process
const cp = require("child_process")
// console.log('opening calculator')
// cp.execSync('date')
// console.log('opened calculator')

// cp.execSync('chrome')
// console.log('opening chrome')

// cp.execSync('code')
// cosole.log('trying to open VS code')
console.log("output" + cp.execSync('node index.js'))
