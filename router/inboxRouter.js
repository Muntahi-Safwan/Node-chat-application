// exteranal imports
const express = require("express");
const router = express.Router();

// internal imports
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
// login page

router.get("/", getInbox);

module.exports = router;
