var express = require('express'); module.exports = function() { 
    var app = express();
    app.set('view engine', 'pug'); 
    app.set('views', './public/views');
    app.use('/css', express.static('./public/css')); 
    app.use('/js', express.static('./public/js')); 
    app.use('/img', express.static('./public/img'));     return app; 
}; 
