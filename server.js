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

// --- Base de donnees
let mongoose = require('mongoose');

let database  = mongoose.connect("mongodb://localhost/demo",{
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true
});

// ---- Creation du schema
//--- Module dependencies
const Schema	= mongoose.Schema;

let UserSchema = new Schema({
    nom    : String,
    login    : String,
    password    : String
});

UserSchema.methods.toWebFormat = function(){
    return new Promise(((resolve, reject) => {
        let toWeb = {
            nom : this.nom,
            login : this.login,
            password : this.password
        };
        resolve(toWeb);
    }));
};

mongoose.model('User', UserSchema);


// ------------------------
// ROUTE TEST
// ------------------------
app.get("/",(req,res)=>{
    console.log("hello M1 Miage");
    res.status(200).json({"message" : "Hello World from assala soussi !"})
});

//-- LIST ROUTE



// START SERVER
// ------------------------
app.listen(3000,function(){
    console.info('HTTP server started on port 3000');
});
