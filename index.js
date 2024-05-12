const express = require('express')

const app = express()

const ejs = require("ejs")

let PORT = 2000

app.set("view engine", "ejs")

app.use(express.static("public"));

app.get("/ejs", (req, res)=>{
    const imageUrl = "/images/cartoon11.jpg";
    res.render('index', {imageUrl})
})

app.get("/signin.ejs", (req, res)=>{
    res.render('signin')
})

app.get("/index", (req , res) =>{
    res.sendFile(__dirname + '/index.html')
    // console.log(__dirname);
})

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`);
})