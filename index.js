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

// import express from 'express';
// import path from 'path'
// import home from './pages/home.js';
// import login from './pages/login.js';
// import submit from './pages/submit.js';

// const app = express();

// function  ageCheck(req,res,next){
//      if(!req.query.age || req.query.age<18){
//         res.send("Alert ! you cannot access this page")
//      } 
//      else {
//         next();
//      }
// }
// app.use((req,res,next)=>{
//     console.log("user is accessing"+req.url+" Page");
//     next();
// })

// app.use(ageCheck)
// app.get("/",(req,res)=>{
//     res.send(home());
// });

// app.get("/login",(req,res)=> {
//     res.send(login());
// })

// app.post("/submit",(req,res)=> {
//     res.send(submit());
// })
// app.use((req,res)=> {
//     const absPath= path.resolve('view/404.html')
//     res.status(404).sendFile(absPath)
// }) // used for middleware
// app.listen(3400)

// import express from 'express'

// const app = express(); 


// app.set('view engine','ejs')
// app.get("/",(req,res)=> {
//     res.render("home",{name:'madhu',ytChannnel:'code ko maro',age:2})
// })

// app.listen(3200)


// import express from 'express'

// const app = express();

// app.get("/",(req,res) => {
//     res.send("Home Page")
// });

// app.get("/users",(req,res) => {
//     res.send("Users12 Page")
// });

// app.get("/error",(req,res) => {
//     res.send("Error Page")
// });

// function errorHandling(error,req,res,next){
//     res.status(error.status || 500).send("Try after some time")
// }
// app.use(errorHandling)
// app.listen(3200)
 
// import express from 'express'
// const app = express();

// app.set("view engine","ejs")
// app.get("/",(req,res)=> {
//     // res.send("Home Page")
//     res.render('home',{name:'Madhu',ytChannel:'Code kro paise kmao'})
// })
// app.listen(3800)

// import express from 'express'

// const app = express();

// app.use(express.urlencoded({extended:false}))
// app.set('view engine','ejs')
// app.get('/add-user',(req,res)=> {
//     res.render('addUser')
// });

// app.post('/submit-user',(req,res)=> {
//     console.log(req.body)
// res.render('SubmitUser',req.body)
// });

// app.get("/users",(req,res)=>{
//     res.render("users")
// })

// app.listen(4900)


import express from 'express'
import { handleUsers } from './controller/usercontroller.js';


const app = express();


app.set('view engine',ejs)
app.get('/users',handleUsers)

app.listen(3200)