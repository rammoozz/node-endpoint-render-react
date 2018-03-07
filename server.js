// server.js
const express = require('express');

// right after `app` is initialized...
const app = express();

app.engine('js', require('./engine'));

// the view files are JavaScript files, hence the extension
app.set('view engine', 'js');

// the directory containing the view files
app.set('views', './views');

// server.js

app.get('/', function(request, response, next) {
  response.render('App', { name: 'Rob!!' });
});
console.log('listening on 3000');
app.listen(3000);
