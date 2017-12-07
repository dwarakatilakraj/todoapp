var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
var todosList =["hello","lol","yo man","jujuuju","dufhdfhfhd"]



app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get("/showalllist", function(req, res){
    res.json(todosList);
})

app.post("/addtodolist", function(req, res){
    var data = req.body
    console.log(data);
    todosList.push(data.name)
    res.json(todosList);
}) 
app.delete("/todoindex", function(req,res)
{
     var data = req.body
    console.log(req.body)
    todosList.splice(data,1)
    res.json(todosList);
})
app.listen(3000);