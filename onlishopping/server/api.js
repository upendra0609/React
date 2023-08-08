var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var url = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());

app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());

app.get("/getproducts", function(request , response){
    mongoClient.connect(url, function(err, clientObject){
        var dbo = clientObject.db("productsdb");

        dbo.collection("tblproducts").find().toArray(function(err, documents){
            if(!err){
                response.send(documents);
            }
        })
    })
});

app.listen(8081);
console.log("server Started: http://127.0.0.1:8081");