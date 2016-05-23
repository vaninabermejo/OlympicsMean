"use strict";
let mongo = require('mongodb');
let client= mongo.MongoClient;
let _db;
module.exports ={
    connect(){
        client.connect('mongodb://localhost:27017/olympics-dev',(err, db) =>{
            if(err){
                console.log("Error connecting to mongo, check instance of mongod");
                process.exit(1);
            }
            _db=db;
            console.log("connected to mongodb");
        
        });
    },
    sports(){
      return  _db.collection('sports');
    }

}