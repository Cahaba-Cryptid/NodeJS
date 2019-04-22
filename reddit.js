const path = require('path');
const fs = require('fs');
const request = require('request');

let redditPath = path.join(__dirname, './popular-articles.json');

// rp('https://reddit.com/r/popular.json')
// .then(raw => {
//     let data = JSON.parse(raw);
//     console.log(data);
// })

request('https://reddit.com/r/popular.json', (error, res, body) => {
    let articles = [];

    if (error) console.log(error);
    
    JSON.parse(body).data.children.forEach(article => {
        debugger;
        let extractedArticle = {
            "title": article.data.title,
            "url": article.data.url,
            "author": article.data.author
        }
        articles.push(JSON.stringify(extractedArticle));
    });

    fs.appendFileSync(redditPath, articles);
});