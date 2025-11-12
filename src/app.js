const express = require ("express");

const app = express();
// request handler while working with req handlers order matters 

app.use("/hello", (req, res) =>{
    res.send ("Hello from Another Server");
})

app.use("/test", (req, res) =>{
    res.send ("Hello from Server");
})

// app.use("/", (req, res) =>{
//     res.send ("Hello from Dashboard");
// })

app.get("/user", (req, res) =>{
  res.send( " Getting user data")
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

