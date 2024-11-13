const fs = require('node:fs');

//console.log(fs)

fs.open('../test.md', 'r', (err, fd) => {
  console.log("open!", fd)
})
