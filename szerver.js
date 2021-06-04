const { response } = require("express");

const express = require("express");
const mongoose = require("mongoose");
const config = require("./config.json");

mongoose.connect(config.databaseURL);

const app = express();

app.use(express.static("public"));

const schema = new mongoose.Schema({
    nev: String,
    szavazatok: Number
});

const model = mongoose.model('Opciok',schema,'Opciok');

app.use(express.urlencoded());

app.post("/szavazas", function(req, res){
    console.log(req.body);
    model.findOne({ nev: req.body.pizza }, function(err, doc){
        if(doc) {
            console.log(req.body.pizza + " már létezik");
            doc.szavazatok++;
            doc.save();
            //változtatjuk
        } else {
            console.log(req.body.pizza + " még nem létezik");
            new model({
                nev: req.body.pizza,
                szavazatok: 1
            }).save();
        }
    });

    res.redirect('/eredmeny.html');
});

app.get('/eredmenyek', function(req,res){
    model.find({}, function(error, dokumentumok){
        res.end(JSON.stringify(dokumentumok));
    });
});



/*app.get("/", function(req, res) {
    res.end("HELLO WORLD!!!")
});
*/
app.listen(9000);