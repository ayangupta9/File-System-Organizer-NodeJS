#!/usr/bin/env node
const chalk = require('chalk')
const figlet = require('figlet')
const org = require('./commands/organize_module.js')
const tree = require('./commands/tree_module.js')
const help = require('./commands/help_module.js')

let inputArr = process.argv.slice(2)

const command = inputArr[0]

switch (command) {
  case 'tree':
    try {
      console.log(chalk.greenBright.bold('FSO'))
      console.log(
        chalk.hex('#FFE300')(figlet.textSync('TREE', { font: 'Sub-Zero' }))
      )
      tree.treeCommand(inputArr[1])
    } catch (error) {
      console.log(chalk.redBright.bold('Some error has occured. Try Again!'))
    }
    break

  case 'organize':
    try {
      console.log(chalk.greenBright.bold('FSO'))
      console.log(
        chalk.hex('#FFE300')(figlet.textSync('ORGANIZE', { font: 'Sub-Zero' }))
      )
      org.organizeCommand(inputArr[1])
    } catch (errror) {
      console.log(chalk.redBright.bold('Some error has occured. Try Again!'))
    }
    break

  case 'help':
    try {
      console.log(chalk.greenBright.bold('FSO'))
      console.log(
        chalk.hex('#FFE300')(figlet.textSync('HELP', { font: 'Sub-Zero' }))
      )
      help.helpCommand()
    } catch (error) {
      console.log(chalk.redBright.bold('Some error has occured. Try Again!'))
    }
    break

  default:
    console.log(chalk.redBright.bold('ENTER A VALID COMMAND!'))
    break
}

/*
 * #0CBB81
 * #F8D5C1
 * #8BD7B8
 * #4419F8
 * #DCDA5F final
 * #E67594
 * #F04021
 * #3FDC43
 * #32D7C8
 * #0BDFB2
 * #24D41E
 * #1CFCC7
 * #C67069
 * #E59668
 */
