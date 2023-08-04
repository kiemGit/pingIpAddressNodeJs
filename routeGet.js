var express = require('express')
var app = express()
var ping = require('ping');
var host = '192.168.0.39';

const port = 3000

// respond with Get request made when a GET
// request is made to the homepage
app.get('/', function(req, res){
    ping.sys.probe(host, function(active){
            var info = active ? 'IP ' + host + ' = Active' : 'IP ' + host + ' = Non-Active';
            console.log(info);
			res.send(info)
	    });
})

app.listen(port, ()=> {
    console.log("Port listening at 3000")
})