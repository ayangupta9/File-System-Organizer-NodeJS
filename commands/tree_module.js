const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
let rd = require('readline-sync')

function treeCommand (directoryPath) {
  let directoryPathExists = fs.existsSync(directoryPath)
  if (directoryPath === undefined) {
    if (
      rd.keyInYN(
        chalk.hex('#BBE8FF')(
          'Path not mentioned! Use current directory? (Press Y to confirm)'
        )
      )
    ) {
      directoryPath = process.cwd()
    } else {
      console.log(chalk.redBright.bold('Enter valid path!'))
      return
    }
  } else if (directoryPathExists === false) {
    console.log(chalk.redBright.bold('Path does not exist! Enter valid path!'))
    return
  }
  treeHelper(directoryPath, '', 0)
}

function treeHelper (dirPath, indent, j) {
  // is file or folder
  let isFile = fs.lstatSync(dirPath).isFile()
  if (isFile == true) {
    let fileName = path.basename(dirPath)
    console.log(chalk.cyanBright(chalk.white(indent + '├──') + fileName))
  } else {
    let dirName = path.basename(dirPath)
    console.log(
      chalk.magentaBright(chalk.white(indent + '└──') + chalk.bold(dirName))
    )
    let childrens = fs.readdirSync(dirPath)
    // if (childrens.length <= 20) {
    for (let i = 0; i < childrens.length; i++) {
      let childPath = path.join(dirPath, childrens[i])
      treeHelper(childPath, indent + '|  ', i)
    }
    // }
  }
}

module.exports = {
  treeCommand: treeCommand
}
