fs = require('fs')

directoryPath = '/Users/joshmacsween/Desktop/Node/async'

fs.readdir(directoryPath, (err, fileList) => {
  if (err) return console.error(err)

  console.log(fileList)
})