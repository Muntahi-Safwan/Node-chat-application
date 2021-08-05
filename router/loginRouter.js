// exteranal imports
const express = require("express");
const router = express.Router();

// internal imports
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// login page

router.get("/", getLogin);

module.exports = router;
