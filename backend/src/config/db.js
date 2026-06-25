const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
         await mongoose.connect(process.env.MONGODB_URL);
         console.log("MongoDB succesfully running")
    } catch (error) {
        console.log("MongoDB is not a running successfully",error.message);
        process.exit(1);
    }
}

module.exports = connectDB;