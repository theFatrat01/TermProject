var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(function (req,res,next){
    console.log("i amin the middle");
    console.log(req.body);
    next();
    

    })
app.get('/',function (req,res){
    res.send('<h1>get hello world</h1>')
});
app.post('/',function (req,res){
    console.log(reg.body)
    res.send('<h1>post sent</h1>')
});
app.put('/',function (req,res){
    res.send('PUT send')
});
app.delete('/',function (req,res){
    res.send('DELETE sent')
});
app.listen(3000);