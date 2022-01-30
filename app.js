
require("dotenv").config()
const express = require("express");
const app = express()
const upload = require('./multer')
const cloudUpload = require('./cloudinary')
  app.use(express.json())
  app.use(express.urlencoded({extended:false}))





app.get('/',(req,res)=>{
    console.log("this is runnig")
    res.send("this is working")
})


app.post("/image",upload.array('image'),async(req,res)=>{
    // if you want use promise you can use like this
//   const uploader  = async (path)=> await cloudUpload.uploads(path,'Images')
  const url=[]
  const files = req.files;
  for(const file of files){
    const {path} = file
    await cloudUpload.uploader.upload(path,{
        resource_type:'auto',
        folder:"Images"
      }).then((result)=>{
        url.push({url:result.url, id: result.public_id})
    })
     

  }

  res.json({url})
})


app.delete('/image',(req,res)=>{
    const id = req.body.id
    cloudUpload.uploader.destroy(id).then((result)=>{
        res.json({result})
    }).catch((err)=>{
        res.json({err})
    })
})


app.listen(5656,()=>{
    console.log("this is runnign with 5656")
})