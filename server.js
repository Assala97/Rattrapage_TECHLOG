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
app.get("/users", (req, res)=>{
    mongoose.model('User').find({}).then((result)=>{
        res.status(200).json(result);
        console.log(result);
    },(err)=>{
        res.status(400).json(err)
    })
});

app.post("/users/",(req,res)=>{
    const myModel = mongoose.model('User');
    let newUser = new  myModel(req.body);
    newUser.nom = req.body.nom;
    newUser.login = req.body.login;
    newUser.password = req.body.password;
    let isValid = true;
    if (isValid)
    {
        newUser.save().then((result)=>{
            res.status(200).json({result : result, user : newUser});
            console.log(result);
        },(err)=>{
            res.status(400).json(err)
        })
    }else
        console.log("Votre truc est pas bon")
});

app.delete("/users/:id", (req, res)=>{
    mongoose.model('User').deleteOne({_id : req.params.id}).then((result)=>{
        res.status(200).json(result);
        console.log(result);
    },(err)=>{
        res.status(400).json(err)
    })
});


// START SERVER
// ------------------------
app.listen(3000,function(){
    console.info('HTTP server started on port 3000');
});
