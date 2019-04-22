const path = require("path");
const fs = require("fs");
const download = require('download');
const request = require("request");

let redditArray = [];

let dataPath = path.join(__dirname, 'popular-articles.json');
let mediaPath = path.join(__dirname, '/downloads/');

request('https://reddit.com/r/popular.json', (err, res, body) => {

    if (err) console.log(err);

    let id = 1;
    redditData = JSON.parse(body).data.children.forEach(item => {
        redditArray.push({
            "id": id,
            "title": item.data.title,
            "author": item.data.author,
            "url": item.data.url,
            "type": item.data.post_hint
        });

        let options = {
            directory: mediaPath,
            filename: id + path.extname(item.data.url)
        }

        if (item.data.post_hint == 'image') {
            download(item.data.url, options, function (err) {
                if (err) console.log(err);
            });
        }

        id++;
    });

    fs.writeFileSync(dataPath, JSON.stringify(redditArray), err => {
        if (err) console.log(err);
    });

});
