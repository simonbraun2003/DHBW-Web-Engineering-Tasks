const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

    //create new file and append text if file already exist
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved-1!');
    });

    //create new empty file
    fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved-2!');
    });

    //create new file or replace content if already exist
    fs.writeFile('mynewfile3.txt', 'Hello there 22!', function (err) {
        if (err) throw err;
        console.log('Saved-3!');
    });

    //delete files
    /*fs.unlink('mynewfile2.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });*/
}).listen(3000);