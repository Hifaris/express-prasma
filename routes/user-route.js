const express = require("express")
const userController = require("../controllers/user-controllers")

const router = express.Router()

router.get('/',userController.getme)
router.post('/favorite',userController.addFavorite)

module.exports = router;