const express = require("express")
const authController = require("../controllers/restaurant")



const router = express.Router()

router.get('/all',authController.getall)
router.get('/:restaurantId/menu/all',authController.getMenuAll)
router.get('/menu/:menuId',authController.getMenuId)

module.exports = router;