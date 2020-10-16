import express from "express"
import mongoose from "mongoose"
import Videos from './dbModel.js'

//import Data from "./data.js"

const app=express();
const port = process.env.PORT || 9000;

app.use(express.json())
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", '*');
     res.setHeader("Access-Control-Allow-Headers", '*');
    next();
  });
  
const connectionURL = 'mongodb+srv://admin:xc3VikKKlG07NPyo@cluster0.cdjjd.mongodb.net/tiktok?retryWrites=true&w=majority'
mongoose.connect(connectionURL,{
    useNewUrlParser:true,
    useCreateIndex : true,
    useUnifiedTopology : true
})

app.get('/',(req,res) => res.status(200).send("hello"))

app.get("/v1/posts",(req,res) => res.status(200).send("edgv"))
app.get('/v2/posts',(req,res) => {
    Videos.find((err,data)=>{
        if(err){res.status(500).send(err)}
        else {res.status(200).send(data)}
    })
})
app.post('/v2/posts',(req,res) => {
    const dbVideos = req.body
    Videos.create(dbVideos,(err,data) =>{
        if(err){res.status(500).send(err)}
        else{
            res.status(201).send(data)
        }
    })
})

app.listen(port,()=>console.log("listening..."))