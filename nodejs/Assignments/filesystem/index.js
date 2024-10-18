const express = require('express');
const fs = require('fs');
const path = require('path');

const app =express();
const fileDir =path.join(__dirname,"./files");



app.get("/", (req, res) =>{
    // read the file

    fs.readdir(fileDir,(err,file)=>{
        if(err){
            return res.status(500).json({ error:"failed to gettiing file"})
        }

        res.json(file);
    })
})


// get the content of the file

app.get("/file/:filename", (req, res) =>{


    const filename =req.params.filename

    const fileaPath = path.join(fileDir,filename)

    fs.readFile(fileaPath,"utf8",(err,filedata)=>{
        if(err){
            return res.status(500).json({ error:"failed to gettiing file"})
        }

        res.send(filedata)
    })
})





app.listen(3000,()=>{
    console.log("server listening on the port 3000")
})