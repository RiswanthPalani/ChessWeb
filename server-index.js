import express from "express";
import bodyParser from "body-parser";
//import { wpawnc } from "./public/index.js";
 
 const app = express();
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(express.static("public"));
 const port=3000;
 var name1="";
 var name2="";
 app.post("/submit",(req,res)=>{
   
     name1 = req.body["name1"]; 
     name2 = req.body["name2"];
    console.log(name1+name2);
    //res.render("index.ejs",{name1: name1, name2: name2});
    const temp = 1;
    res.redirect(`/?temp=${temp}`);
 });

 app.get("/",(req,res)=>{
     res.render("index.ejs",{name1:name1,name2:name2});
 });
 app.listen(port,()=>{
    console.log(`listening on ${port}`);
 });    