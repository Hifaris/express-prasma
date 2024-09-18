const createError = require("../utils/createError")

exports.getall = (req,res,next)=> {
    res.json({message: "All restaurant"})
}
exports.getMenuAll = (req,res,next)=> {
    res.json({message: "Get all menu"})
}
exports.getMenuId = (req,res,next)=> {
    res.json({message: "All menu detail"})
}