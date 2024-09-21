const express = require("express");

const app = express();
const {adminAuth} = require("./middlewares/auth");

app.use("/admin",adminAuth)
app.get("/user",(req,res)=>{
    res.send("user data");
})
app.get("/admin/getAllData",(req,res)=>{
    res.send(" All data");
})



app.listen(3000);