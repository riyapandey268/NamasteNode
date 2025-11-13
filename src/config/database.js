const mongoose = require ("mongoose");
// mongoose.connect (
//     "mongodb+srv://riyapandey2608:riyapandey2608@cluster0.sewopkt.mongodb.net/"
// );
// Mongoose.connect is not a good way to connect to cluster it returns us a promise 
// we wrap this inside async await 
const connectDB = async () => {
    await mongoose.connect (
       "mongodb+srv://riyapandey2608:riyapandey2608@cluster0.sewopkt.mongodb.net/devTinder"
    )
};
// connectDB()
// .then (() =>{
//     console.log("Database connection successful.....")
// })
// .catch ( err =>{
//     console.log("Database cannot be connected");
// })

module.exports = connectDB;
