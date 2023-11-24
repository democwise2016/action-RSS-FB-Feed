const cheerio = require('cheerio')

let main = async function (item, rss) {
  // console.log(item)
  let content = item.content

  // console.log(item)
  // process.exit(0)

  if (!content) {
    return item
  }

  // content = content.replace(/<br>\n<br>\n/g, '<br>\n')
  content = content.replace(/"><br>\n<br>\n<img src="/g, '"><img src="')
  
  // ----------------------------------------------------------------

  let tempContent = content

  if (tempContent.startsWith('#')) {
    tempContent = tempContent.slice(1)
  }
  if (tempContent.startsWith(item.title)) {
    content = tempContent.slice(item.title.length).trim()
    if (content.startsWith('<br>')) {
      content = content.slice(4)
    }
  }

  // ----------------------------------------------------------------
  // 20231124-1516 把圖片移到前面
  const $ = cheerio.load(content)

  // let list = $(`img`)
  // // console.log(list.length)
  // for (let i = list.length -1; i >= 0; i--) {
  //   let ele = list.eq(i)
  //   ele.append
  //   // let src = ele.attr('src')
  //   // // ele.before(`<p><a href="${src}" target="_blank">${src}</a></p>`)
  //   // // ele.remove()
  //   // // console.log({src})
  //   // if (src) {
  //   //   // ele.replaceWith(`<p><a href="${src}" target="_blank">${src}</a></p>`);
  //   //   // ele.replaceWith(`<iframe src="${item.link}"></iframe>`);
  //   //   ele.replaceWith(`<p><a href="${item.link}" target="_blank">[VIDEO] ${item.link}</a></p>`);
  //   // }
  // }
  $('img').prependTo('body')
  
  $('img').each((index, element) => {
    // Append <br /> after each img
    $(element).after('<br />');
  });

  content = $('body').html()

  while (content.indexOf('<br />\n<br />') > -1) {
    content = content.split('<br />\n<br />').join('<br />')
  }

  while (content.indexOf('<br /><br />') > -1) {
    content = content.split('<br /><br />').join('<br />')
  }

  while (content.indexOf('<br>\n<br>') > -1) {
    content = content.split('<br>\n<br>').join('<br />')
  }

  while (content.indexOf('<br><br>') > -1) {
    content = content.split('<br><br>').join('<br />')
  }

  // ----------------------------------------------------------------

  item.content = content

  return item
}

module.exports = main