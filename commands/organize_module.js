const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const utiltiy = require('../utility2.js')
let rd = require('readline-sync')

function organizeCommand (directoryPath) {
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

  let copyOrcut = rd.question(
    chalk.hex('#BBE8FF')('Press 0 to copy files or 1 to cut files: ')
  )

  if (copyOrcut == 0 || copyOrcut == 1) {
    organizeHelper(directoryPath, copyOrcut)
  } else {
    console.log(chalk.redBright.bold('Enter valid choice to copy or cut!'))
    return
  }
}

function organizeHelper (source, copyCut) {
  let sourceFilePath
  let destinationPath = path.join(source, 'organized_files')
  let destinationExists = fs.existsSync(destinationPath)
  if (destinationExists === false) {
    fs.mkdirSync(destinationPath)
  } else {
    console.log(chalk.hex('#f4c2c2')('Path already exists'))
    return
  }

  console.log(chalk.hex('#f4c2c2')(destinationPath))

  let children = fs.readdirSync(source, 'utf8')

  if (children.length === 0) {
    console.log(chalk.redBright('Source directory is empty'))
    return
  }

  children.forEach(file => {
    let isFile = fs.lstatSync(path.join(source, file)).isFile()
    if (isFile) {
      sourceFilePath = path.join(source, file)

      let category = getCategory(file)
      let categoryDestinationPath = path.join(destinationPath, category)

      let categoryDirectoryExists = fs.existsSync(categoryDestinationPath)
      if (categoryDirectoryExists === false) {
        fs.mkdirSync(categoryDestinationPath)
      }

      let filename = path.basename(file)
      let fileDestinationPath = path.join(categoryDestinationPath, filename)
      if (copyCut == 0) {
        fs.copyFileSync(sourceFilePath, fileDestinationPath)
      } else if (copyCut == 1) {
        fs.copyFileSync(sourceFilePath, fileDestinationPath)
        fs.unlinkSync(sourceFilePath)
      }
      // fs.unlinkSync(sourceFilePath)
      console.log(file, chalk.blueBright(' copied to '), category)
    }
  })
}

function getCategory (name) {
  let extension = path.extname(name).toUpperCase()
  for (let type in utiltiy.formats) {
    let typeArray = utiltiy.formats[type]
    let typeIncludes = typeArray.includes(extension)
    if (typeIncludes) {
      return type
    }
  }
  return 'others'
}

module.exports = {
  organizeCommand: organizeCommand
}
