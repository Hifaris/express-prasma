const createError = require("../utils/createError")

exports.login = (req,res,next)=>{
  
    try {
        const { username, password } = req.body
        if (!username) {
            // const error = new Error("Username should be provided")
            // error.statusCode = 400
            // throw error;
            return createError(400,"Username should be provided")
        }

        if(password.length <=10) {
            return createError(400, "Password length is not sufficient")
        }
    } catch (err) {
        next(err)
    }
};

exports.register = (req,res,next)=>{
    res.json({message: "Register"})
}
exports.forgetPassword = (req,res,next)=>{
    res.json({message: "Forgot password"})
}
exports.resetPassword = (req,res,next)=>{
    res.json({message: "Reset password"})
}