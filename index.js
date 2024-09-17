const express = require("express")

const app =express()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


// const express = require("express")

// const app = express();

// app.use("/cc", (req,res)=> {
//    res.json({message: "Hello codecamp"})
// });

// app.use("/",(req,res)=>{
//     res.json({message: "cc18"})
// })
// app.listen(8000,()=>console.log("server is running on port 8000"))


// app.use("/",(req,res)=>{
//     res.json({message: "12345"})
// })

app.get("/codecamp/18",(req,res)=>{
   res.json({message: "Get data"})
})

// app.get("/restaurant/:id",(req,res)=>{
//     console.log(req.params)
//     const {id} = req.params;
//     res.json({restaurant: id})
// })

//lab
// app.get("/",(req,res)=>{
//     res.json({title:"My First Web App",message: "Our Web App API"})
// })

// app.get("/posts",(req,res)=>{
   
//     res.json({message: req.method + "products"})
// })
// app.post("/posts",(req,res)=>{
   
//     res.json({message: "Post products"})
// })
// app.put("/posts",(req,res)=>{
   
//     res.json({message: "Put products"})
// })
// app.delete("/posts",(req,res)=>{
   
//     res.json({message: "Delete products"})
// })

// app.get("/redirect",(req,res)=>{
//     res.redirect("https://google.com")
// })
// //lab finished

// app.get("/restaurant/:restaurantId/menu/:menuId",(req,res)=>{
//     const {restaurantId,menuId} = req.params;
//     res.json({restaurantId,menuId})
// })

// //lab2
// app.get("/sum/:a/:b",(req,res)=>{
//     const {a,b} = req.params
//     res.json({a,b})

// })
// app.get("/users/:id/bookings/:bid",(req,res)=>{
//     const {id,bid} = req.params

//     res.status(200).json({id,bid})
// })

// app.patch("/post/:postId",(req,res)=>{
//     const {postId} = req.params
//     res.json({postId})
// })
// app.delete("/post/:postId",(req,res)=>{
//     const {postId} = req.params
//     res.json({postId})
// })
// app.get("/post/:postId",(req,res)=>{
//     const {postId} = req.params
//     res.json({postId})
// })
// app.get("/auth/:userid",(req,res)=>{
//     const {userid} = req.params
//     res.json({userid})
// })






// app.post("/",(req,res)=>{
//     res.json({message: "Create data"})
// })

// app.put("/",(req,res)=>{
//     res.json({message: "Update partial data"})
// })

// app.delete("/",(req,res)=>{
//     res.json({message: "Delete data"})
// })

// app.get("/product",(req,res)=>{
//    const query = req.query
//    res.json({query})
// const {order,page,limit} = req.query
//    res.json({order,page,limit})
// })

//lab1 104
app.use(express.json());

const checkCodecamp = (req,res,next) =>{
    const{message} = req.body;

    if(message !=="Codecamp") {
        return res.json({message: "Unknown"})
    }
    req.user = {title: "Codecamp18"}
    next()
}

app.use(checkCodecamp)

app.get("/faris",(req,res)=>{
    const {message} = req.body
    res.json(req.user)
})

// app.get("/product",(req,res)=>{
//     const {page,limits,order} = req.query
//     res.json({page,limits,order})
// })

// app.post("/product",(req,res)=>{
//     const {name,price,description} = req.body
//     res.json({name,price,description})
// })

// app.put("/product/:id",(req,res)=>{
//     const{id} = req.params

//     const {name,price,description} = req.body

//     res.json({id,name,price,description})
// })
// app.delete("/product/:id",(req,res)=>{
//     const {id} = req.params
//     res.json({id})

// })





// const middlewareA = (req,res,next) => {
//     req.user = {id: 1, username: "john", role: "admin"}

//     next()
// }
// const middlewareB = (req,res,next) => {
//     req.name = "Faris"
//     next()
// }

// app.use(middlewareA)
// app.use(middlewareB)

// app.post("/product",middlewareA,middlewareB,(req,res)=>{
//     // const {title,description,price,stock} = req.body;
//     console.log(req.user)
//     console.log(req.name)
//     res.json({});
// })

// app.use(express.json());

// app.post("/product",upload.single("image"),(req,res)=>{
//     // const {title,description,price,stock} = req.body;
//     // res.json({title,description,price,stock});
// console.log(req.file)
//    res.json({})
// })
// app.post("/product",(req,res)=>{
//     // const {title,description,price,stock} = req.body;
//     // res.json({title,description,price,stock});
//     console.log(req.body)
       //res.json({})
// })






app.listen(8000,()=>console.log('Server running on port 8000'))