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

  item.content = content

  return item
}

module.exports = main