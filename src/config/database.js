const mongoose = require('mongoose');
const connectDB = async () =>{
    await mongoose.connect(
        "mongodb+srv://babitadhyani:usPIyd01gHYCjFJQ@devtinder.frjby.mongodb.net/"
    );
};

module.exports = connectDB;



