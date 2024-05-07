const app = require("express");
const router = app.Router();

const userController = require("../controllers/userController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);


module.exports = router