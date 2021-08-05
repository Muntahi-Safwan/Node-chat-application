// exteranal imports
const express = require("express");
const router = express.Router();

// internal imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
// login page

router.get("/", decorateHtmlResponse("Users"), getUsers);

module.exports = router;
