const chalk = require('chalk')

function helpCommand () {
  console.log(
    chalk.hex('#ffffff')(
      `

A simple CLI based File System Organizer 
                            by ${chalk.hex('#E59668')('Ayan Gupta')}

command:  ${chalk.magentaBright.bold('fso tree {DIRECTORY_PATH} :')}  
    Presents a visual representation of the directory and it's children

command:  ${chalk.magentaBright.bold('fso organize {DIRECTORY_PATH} :')}    
    Files present in the DIRECTORY_PATH are segregated and moved into directories based on the format/extension
        Following are the formats based on which the subdirectories are created:
            Documents and Data Files
            Audio Files
            Video Files
            Raster Image Files
            Vector Images Files
            Database Files 
            Executable Files 
            Font Files
            System Files
            Compressed Files 
            Disk Image Files 
            Developer Files

        The directories created are stored in a common directory by the name of 'organized_files' in the source directory

command:  ${chalk.magentaBright.bold('fso help :')}  
    Simple guide to use File System Organizer
`
    )
  )
}

module.exports = {
  helpCommand: helpCommand
}
