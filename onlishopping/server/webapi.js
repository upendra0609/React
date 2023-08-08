var mongoCkient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");
const { MongoClient } = require("mongodb");

var url = "mongodb://127.0.0.1:27017";

var app = express();

app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());
app.use(cors());

app.get('/getcategories',function(req,res){
    MongoClient.connect(url,function(err,clientObject){
        if(!err){
            var dbo = clientObject.db("onlinestore");
            dbo.collection("tblproducts").find().toArray(function(err,documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
});

app.listen(8081);
console.log("server started");