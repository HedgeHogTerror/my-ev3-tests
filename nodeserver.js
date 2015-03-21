
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
}
var connect = require('connect'),
    directory = 'index.html';

connect()
    .use(connect.static(directory))
    .listen(80);
