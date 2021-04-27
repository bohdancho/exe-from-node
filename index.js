const request = require('request');
const fs = require('fs');

request('http://www.google.com', function (error, response, body) {
    fs.writeFile('google.html', body, function (err) {
        if (err) throw err;
        console.log('Voila!');
    });
});
