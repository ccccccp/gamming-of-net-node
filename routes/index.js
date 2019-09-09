const router = require("express").Router();

const loginRouter = require("./login");
const logoutRouter = require("./logout");

router.post("/user/login",loginRouter)
router.get("/logout",logoutRouter)


module.exports = router