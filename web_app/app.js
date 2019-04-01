var express = require('express');
var app = express();
var fs = require('fs');
var Papa = require('papaparse');
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('index.html');
});

app.get('/favicon.ico', function (req, res) {
  res.send('./public/logo2.png');
});

app.get('/test_data', function (req, res) {

	var file = './public/x_test';
	var content = fs.readFileSync(file, "utf8");

	var rows;
	Papa.parse(content, {
	    skipEmptyLines: true,
	    dynamicTyping: true,
	    delimiter: ",",
	    complete: function(results) {
	    rows = results.data;
	    }
	});
	final_data = [].concat.apply([], rows)
	res.send(final_data)
	console.log('From GET --', final_data)

})

app.listen(port, function () {
  console.log('Onnx app listening on port -- ',port);
});