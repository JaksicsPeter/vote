const { response } = require("express");
const express = require("express");
const app = express();
/*app.get("/", function(req, res) {
    res.end("HELLO WORLD!!!")
});
*/
app.use(express.static("public"));

app.use(express.urlencoded());
app.post("/szavazas", function(req, res){
    console.log(req.body);

    res.redirect('/');
});



app.listen(9000);