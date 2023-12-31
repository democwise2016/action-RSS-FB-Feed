const axios = require('axios');
const cheerio = require('cheerio');

const ArticleRemoveAd = require('./ArticleRemoveAd.js')

async function extractMainArticleHTML(url, selectors = 'article,#main,body') {
  try {
    // Fetch the HTML content of the URL
    const response = await axios.get(url);
    let html = response.data;

    // Load the HTML content into cheerio for manipulation
    

    // Add your specific logic here to identify the main article content.
    // This might involve looking for certain HTML elements or classes that typically
    // contain the main article content.
    // For example, if the main content is usually contained in <article> elements:

    if (selectors && typeof(selectors) === 'string') {
      selectors = [selectors]
    }

    let $
    let article
    selectors.forEach(selector => {
      $ = cheerio.load(html);
      article = $(selector)
      // console.log({selector})
      // console.log(article.length)
      if (article.length > 0) {
        article = article.eq(0)
        html = article.html()
      }
    })
      

    if (article.length === 0) {
      return html
    }

    article = ArticleRemoveAd(article)

    const mainArticle = article.html();

    return mainArticle;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

// const targetURL = 'https://www.example.com'; // Replace with your target URL
// extractMainArticleHTML(targetURL)
//   .then(mainArticleHTML => {
//     if (mainArticleHTML) {
//       console.log('Main Article HTML:');
//       console.log(mainArticleHTML);
//     } else {
//       console.log('Failed to extract main article HTML.');
//     }
//   })
//   .catch(error => {
//     console.error('Error:', error.message);
//   });

module.exports = extractMainArticleHTML