// const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
// const ConfigCheck = require('./app/config/ConfigCheck.js')
// const feedList = require('./config-list.js')

let CONFIG = {
  publicURL: `https://democwise2016.github.io/action-RSS-FB-Feed/`,
  // publicURL: `https://dangerous-lizard-99.telebit.io/`,
  publicURLShorten: `https://ppt.cc/f6Ddzx`,
  thumbnailBorderColor: 'CC3333',
  titleAppend: '[FB+]',
  idAppend: false,

  maxDownloadItemPerFeed: 50,
  maxDownloadFeed: 50,
  newArrialMax: 50,
  maxDownloadItems: 100,
  maxExcutionMinutes: 25,

  maxFileCache: 5000,
  maxSameTime: 10
  // feedList
}

// let testPrefix = '1784'

// CONFIG.publicURL = `https://odd-pug-74.telebit.io`
// CONFIG.titleAppend = '[RSS+] 20240815-' + testPrefix
// CONFIG.idAppend = '20240815-' + testPrefix
// CONFIG.maxDownloadItemPerFeed = 3
// CONFIG.debug = true

module.exports = CONFIG