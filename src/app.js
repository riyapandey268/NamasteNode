const {adminAuth }= require ("./middleswares/auth")

const express = require ("express");
const app = express();

app.use ("/admin", adminAuth)
//handle auth middleware for every request GET, POST, PATCH ECT
// app.use ("/admin", (req, res, next) =>{
//     console.log("Admin Auth is getting checked")
//     const token = "xyz";
//     const isAdminAuthorized = token === "xyz" 
//     if(!isAdminAuthorized) {
//         res.status (401).send ("You do not have the access of the data")
//     }
//    else{
//      next();
//    }
// })

app.get ("/admin/getAllData", (req, res) =>{
    //Logic for checking if the user os authorized 
       res.send ( "All data sent");
});

app.delete("/admin/deleteAllData", (req, res, next) =>{
    res.send ("all data deleted")
})
// request handler while working with req handlers order matters 
// when we use app.use it can handle all the routes like get post patch etc
app.use("/hello", (req, res) =>{
    res.send ("Hello from Another Server");
})
app.use("/test", (req, res) =>{
    res.send ("Hello from Server");
})
// app.use("/", (req, res) =>{
//     res.send ("Hello from Dashboard");
// })

app.use("/user", 
    (req, res, next) =>{
    console.log("response send");
    // res.send(" First response send");
    next();
}, 
// these functions are konwn as middlewares as they are getting called in the middle of the route 
(req, res) =>{
    res.send (" Second response send ");
    // express will not go to the second response it will send only the first one till we do not pass the next() parameter 
})

app.get("/user", (req, res) =>{
  res.send("Getting user data")
})
app.post("/user", (req, res) =>{
    //Saving data to to Database
    // console.log("save data to the database");
    res.send("data saved successfully to the database");
})
app.delete("/user", (req, res) =>{
    res.send ("Data Deleted successfully")
})
app.listen(3000, () =>{
    console.log("Server is Running on port 3000");
});

//http methods 
//POST--> TO ADD A NEW USER
//PATCH --> TO PARTIALLY UPDATE DATA
//PUT --> TO UPDATE EXISTING DATA
//GET --> TO GET ALL USERS
//DELETE --> TO DELETE DATA

