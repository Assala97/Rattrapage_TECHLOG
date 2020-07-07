// ---- EXPRESS JS - Framework
let express = require('express'),
    app = express();

// ------------------------
// middleware
// ------------------------
// - body-parser needed to catch and to treat information inside req.body
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


// ------------------------
// LIST ROUTE
// ------------------------
app.get("/",(req,res)=>{
    console.log("hello M1 Miage");
    res.status(200).json({"message" : "Hello World !"})
});

// START SERVER
// ------------------------
app.listen(3000,function(){
    console.info('HTTP server started on port 3000');
});
