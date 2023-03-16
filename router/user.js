const express = require("express");
const router = express.Router();
const userHandler = require("../router_handler/user");

router.post("/login", userHandler.login);

router.get("/list", userHandler.getList);

module.exports = router;
