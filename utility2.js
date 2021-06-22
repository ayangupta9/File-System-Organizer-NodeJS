// const ts = require('table-scraper')

// ts.get('https://fileinfo.com/filetypes/common').then(function (tableData) {
//   tableData.forEach(element => {
//     let exttable = ''
//     element.forEach(e => {
//       exttable += `"${e.Extension}",`
//     })
//     console.log(exttable)
//     console.log('\n')
//   })
// })

const docsAndDataFileFormats = [
  '.DOC',
  '.DOCX',
  '.LOG',
  '.MSG',
  '.ODT',
  '.PAGES',
  '.RTF',
  '.TEX',
  '.TXT',
  '.WPD',
  '.WPS',
  '.INDD',
  '.PCT',
  '.PDF',
  '.XLR',
  '.XLS',
  '.XLSX',
  '.CSV',
  '.DAT',
  '.GED',
  '.KEY',
  '.KEYCHAIN',
  '.PPT',
  '.PPTX',
  '.SDF',
  '.TAR',
  '.TAX2016',
  '.TAX2020',
  '.VCF',
  '.XML'
]

const audioFileFormats = [
  '.AIF',
  '.IFF',
  '.M3U',
  '.M4A',
  '.MID',
  '.MP3',
  '.MPA',
  '.WAV',
  '.WMA'
]

const videoFileFormats = [
  '.3G2',
  '.3GP',
  '.ASF',
  '.AVI',
  '.FLV',
  '.M4V',
  '.MOV',
  '.MP4',
  '.MPG',
  '.RM',
  '.SRT',
  '.SWF',
  '.VOB',
  '.WMV'
]

const rasterImageFiles = [
  '.BMP',
  '.DDS',
  '.GIF',
  '.HEIC',
  '.JPG',
  '.PNG',
  '.PSD',
  '.PSPIMAGE',
  '.TGA',
  '.THM',
  '.TIF',
  '.TIFF',
  '.YUV'
]

const vectorimageFileFormats = ['.AI', '.EPS', '.SVG']

const databaseFileFormats = ['.ACCDB', '.DB', '.DBF', '.MDB', '.PDB', '.SQL']

const executablesFileFormats = [
  '.APK',
  '.APP',
  '.BAT',
  '.CGI',
  '.COM',
  '.EXE',
  '.GADGET',
  '.JAR',
  '.WSF',
  '.B',
  '.DEM',
  '.GAM',
  '.NES',
  '.ROM',
  '.SAV'
]

const fontFileFormats = ['.FNT', '.FON', '.OTF', '.TTF']

const sysFileFormats = [
  '.CAB',
  '.CPL',
  '.CUR',
  '.DESKTHEMEPACK',
  '.DLL',
  '.DMP',
  '.DRV',
  '.ICNS',
  '.ICO',
  '.LNK',
  '.SYS',
  '.CFG',
  '.INI',
  '.PRF'
]

const compressedFileFormats = [
  '.7Z',
  '.CBR',
  '.DEB',
  '.GZ',
  '.PKG',
  '.RAR',
  '.RPM',
  '.SITX',
  '.TAR.GZ',
  '.ZIP',
  '.ZIPX'
]

const diskImageFiles = [
  '.BIN',
  '.CUE',
  '.DMG',
  '.ISO',
  '.MDF',
  '.TOAST',
  '.VCD'
]

const developerFileFormats = [
  '.C',
  '.CLASS',
  '.CPP',
  '.CS',
  '.DTD',
  '.FLA',
  '.H',
  '.JAVA',
  '.LUA',
  '.M',
  '.PL',
  '.PY',
  '.SH',
  '.SLN',
  '.SWIFT',
  '.VB',
  '.VCXPROJ',
  '.XCODEPROJ',
  '.ASP',
  '.ASPX',
  '.CER',
  '.CFM',
  '.CRDOWNLOAD',
  '.CSR',
  '.CSS',
  '.DCR',
  '.HTM',
  '.HTML',
  '.JS',
  '.JSP',
  '.PHP',
  '.RSS',
  '.XHTML',
  '.DART',
  '.JSON'
]



module.exports.formats = {
  'Documents and Data Files': docsAndDataFileFormats,
  'Audio Files': audioFileFormats,
  'Video Files': videoFileFormats,
  'Raster Image Files': rasterImageFiles,
  'Vector Images Files': vectorimageFileFormats,
  'Database Files': databaseFileFormats,
  'Executable Files': executablesFileFormats,
  'Font Files': fontFileFormats,
  'System Files': sysFileFormats,
  'Compressed Files': compressedFileFormats,
  'Disk Image Files': diskImageFiles,
  'Developer Files': developerFileFormats
}
