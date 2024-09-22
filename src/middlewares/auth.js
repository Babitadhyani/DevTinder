const adminAuth = (req,res,next)=>{
    const token ="xyz";
const isAdminAuth = token === "xyz";
if(!isAdminAuth){
    res.status(401).send("unAuthorized");
}
else{
    next();
}
};

const userAuth = (req,res,next)=>{
    const token = "abc";
    const isUserAuth = token === "abc";
    if(!isUserAuth){
        res.send("unAuthorized user...");
    }
    else{
        next();
    }
}

module.exports = {
    adminAuth,userAuth
};
