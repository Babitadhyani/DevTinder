const express = require("express");

const app = express();
// app.use("/",(req,res)=>{
//     res.send("hello");
// })

app.use("/test",(req,res)=>{
    res.send("tested the node");
})

app.use("/hello",(req,res)=>{
    res.send("hello the node");
})

app.listen(3000);