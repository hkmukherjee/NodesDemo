const http = require('http');

const getData = (url, callback) => {
    http
    .get(url, (res) => {
        res.setEncoding('utf8');
        res.on('data', (data) => {
            callback(JSON.parse(data));
        })

        res.on('error', (err) => {
            console.log(err);

            throw new Error(err);
        })
    });
}

export default getData;