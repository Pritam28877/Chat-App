const express = require("express");
const router = express.Router();
const { profilecontroller } = require("../controllers/profilecontroller");

router.get("/", profilecontroller);

module.exports = router;
