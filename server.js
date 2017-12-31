const express = require('express'); 
const favicon = require("serve-favicon");
const app = express(); 
const staticAssets = __dirname + "/public";

const faviconPath = __dirname + "/public/favicon.ico"; 

app
    .use(express.static(staticAssets))
    .use(favicon(faviconPath))
    .get('/',(req,res) =>{
        var title = "some other title"; 

        var tweets= [
            "my first tweet", 
            "other tweet ", 
            "yet another tweet", 
        ];
        var tweetsHTML = tweets.reduce((html, tweet) =>`${html}<li>${tweet}</li>`, "")


        res.send(`
        <html>
        <head>
            <link rel="stylesheet" href="/css/main.css">
        </head>
        <body>
            <h1>${title}</h1>
            <ul>${tweetsHTML}</ul>
            <script src='js/main.js'></script>
        </body>
        </html>
        `)

    });

    app.listen(3000); 