// const express = require('express')

// import express from 'express';
// import home from './pages/home.js';
// import about from './pages/about.js';

// const app = express();
// app.get("",(req,res)=>{
//     res.send(home())
// });

// app.get("/about",(req,res)=>{
//     res.send(about())
// });

// app.listen(3200)

import express from 'express';
import path from 'path'
import home from './pages/home.js';
import login from './pages/login.js';
import submit from './pages/submit.js';

const app = express();
app.get("/",(req,res)=>{
    res.send(home());
});

app.get("/login",(req,res)=> {
    res.send(login());
})

app.post("/submit",(req,res)=> {
    res.send(submit());
})
app.use((req,res)=> {
    const absPath= path.resolve('view/404.html')
    res.status(404).sendFile(absPath)
}) // used for middleware
app.listen(3400)