"use strict";
let express= require("express");
let app = express();
app.get('/sports', (request, response)=>{
    response.json(["Weightlifting","Cycling", "Swimming"]);
});



app.use(express.static(__dirname + "/../client"));
app.listen(8181,()=>console.log("listen on port 8181"));