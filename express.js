const express=require("express");
const app=express();

app.get('/',function(req,res){
    res.send('<h1> hello to node js </h1>')
})

app.listen(1111,()=>{
    console.log(`sever run`)
})