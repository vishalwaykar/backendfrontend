// const express = require("express")

import express from "express";

const app = express();
const jokes = [
    {
        id: 1,
        content:"this is joke 1",
        title: "this is joke titile 1"
    },
    {
        id: 2,
        content:"this is joke 2",
        title: "this is joke titile 2"
    },
]
app.get('/', (req, res) => {
    console.log("server is ready");
})

app.get('/api/jokes', (req, res) => {
    console.log("server is ready");
    res.json(jokes)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server at  http:.localhost:${port}`);
})

// console.log("First file for server...");
// import express from "express";
// require('dotenv').config()
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get("/linkedin", (req, res) => {
//     res.send("vishalwaykardev");
// });

// app.get('/login', (req, res)=> {
//     res.send("<h1>Welcome to the login page of this application</h1>")
// });

// app.get('/user/info', (req, res) => {
//     res.json({
//         firstName: "vishal",
//         lastName: "waykar",
//         email: "v.waykar@iphone.com",
//         designation: "fullstack web developer"
//     })
// })
// app.listen(process.env.PORTs, () => {
//   console.log(`Example app listening on port ${port}`);
// });