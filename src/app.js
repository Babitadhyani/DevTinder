const express = require("express");
const connectDB = require('./config/database')
const User = require("./models/user")
const app = express();
app.use(express.json());
app.post("/signup",async (req,res)=>{
    const user = new User(req.body);

    try{
        await user.save();
        res.send('user data are saved');
    
    }catch(err){
        res.status(400).send("Something error went gone", err.message);
    }
       
    

})

app.get("/user",async(req,res)=>{
    const userEmail = req.body.emailId;

    try{
        const user = await User.find({emailId: userEmail});
        if(user.length ===0){
            res.status(404).send("user not found")
        }
        else{
            res.send(user);
        }
        
    }
    catch(err){
        res.status(400).send("Something went wrong",err.message);
    }
})
//making feed api for get
app.get("/feed",async(req,res)=>{
        try{
            const users = await User.find({});
            res.send(users);
        }
        catch(err){
            res.status(400).send("Something went wrong");
        }

})

connectDB().then(()=>{
    console.log("Database connection establish");
    app.listen(3000,()=>{
        console.log("server is successfully listening on port 3000")
    });
}).catch((err)=>{
    console.log("Database connection can't be establish")
})



