const express = require("express")
const app = express()
/*app.get("/", function(req, res) {
    res.end("HELLO WORLD!!!")
})
*/
app.use(express.static("public"))


app.listen(9000)