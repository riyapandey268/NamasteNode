const express = require ("express");

const app = express();
// request handler 
app.use("/", (req, res) =>{
    res.send ("Hello from Dashboard");
})
app.use("/hello", (req, res) =>{
    res.send ("Hello from Another Server");
})
app.use("/test", (req, res) =>{
    res.send ("Hello from Server");
})
app.listen(3000, () =>{
    console.log("Server is Running on port 3000");
});



