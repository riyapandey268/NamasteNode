const express = require ("express");
const connectDB = require ("./config/database")
const User = require ("./models/user")
const app = express();

// app.get("/getUserData", (req, res) =>{
    
//     // try{
       
//     //Logic for DB call and gte user data 
//     // res.send("anything")
//     // }
//     // catch(err){
//     //    res.status(400).send("Error occurred")
//     // }
//     res.send("User data sent");
// })

app.post("/signup", async (req, res) => {
    try {
        const user = new User({
            firstName: "Sachin",
            lastName: "Tendulkar",
            emailId: "sachintendulkar@gmail.com",
            password: "sachintendulkar@12"
        });

    try{
         await user.save();
         res.status(201).send("User created successfully");
       }
    catch (err) {
        res.status(500).send("Error saving user");
    }
});


connectDB()
.then (() =>{
    console.log("Database connection successful.....");
    app.listen(4000, () =>{
    console.log("server is listening on port 4000");
})
})
.catch ((err) =>{
    console.log("Database cannot be Connected");
})

// app.listen(4000, () =>{
//     console.log("server is listening on port 4000");
// })