require("dotenv").config()
const express = require("express")
const cors = require("cors")
const authRouters = require("./routes/auth-route")
const userRouters = require("./routes/user-route")
const restaurantRouters = require("./routes/restaurant-router")
const hdlErr = require("./middlewares/error")
const notFoundHandler = require("./utils/not-found")

const app =express()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.use(express.json());
app.use(cors());

app.use("/auth", authRouters)

app.use("/user", userRouters)

app.use("/restaurant", restaurantRouters)

app.use(hdlErr)
app.use("*",notFoundHandler)


app.listen(8000,()=>console.log('Server running on port 8000'))