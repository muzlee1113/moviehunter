const router = require("express").Router();
const emailController = require("../../controllers/emailController");


// Matches with "/api/email"
router.route("/email")
    .post(emailController.email)


module.exports = router;