// Just a simple static web server to dev on the index.html a bit.

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);
console.log('Listening on http://127.0.0.1:8080')
