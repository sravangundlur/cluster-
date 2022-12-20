var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello  Assert" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "this is sravan kumar" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, To be part of assretAI team" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
