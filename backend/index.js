const express = require("express")
// const fetch = require("node-fetch")

const app = express();

const {usersController} = require("./routes/user.routes")
const {connection} = require("./config/db")
require('dotenv').config()


const PORT = process.env.PORT ||  8080;
const jwt = require("jsonwebtoken")
const cors = require("cors");


app.use(express.json())

app.get("/", (req, res)=>{  
    res.send("Home page")
})

app.use(cors());

// async function getPosts(){
//     const myPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const res = await myPosts.json();
//     console.log(res)
// }
// getPosts();
app.use("/users", usersController)


app.listen(PORT, async(req, res)=>{
    try{
        await connection;
        console.log("connected to db")
    }
    catch(err){
        console.log("error in connection", err)
    }
    console.log(`listening on port  ${PORT}`)
})