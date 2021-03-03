const express= require('express')
router = express.Router();
userRouter = require('../controller/usercontroller')
router.get("/",userRouter.usercontroller)
module.exports=router