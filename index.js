const express = require("express")

const app =express()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.use(express.json());



app.listen(8000,()=>console.log('Server running on port 8000'))