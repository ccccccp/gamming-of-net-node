const router = require("express").Router();
const getChannelList = require("./getChannelList")
const getRoomList = require("./getRoomList")
const getSignature = require("./getSignature")

router.post("/live/getChannelList",getChannelList)
router.post("/live/getRoomList",getRoomList)

router.post("/user/sign/getSignature",getSignature)

module.exports = router