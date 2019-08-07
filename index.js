const http =require('http');
const site = http.createServer(function(req,res){
    console.log("helo word");
    res.setHeader('Content-Type','text/html');
    console.log(req.rawHeaders);
    res.end('<h1> hello class</h1>');

});
site.listen(3000);