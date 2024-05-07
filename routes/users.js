const app = require("express");
const router = app.Router();

const userController = require("../controllers/userController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/getusers", userController.getusers);
router.post("/getuser", userController.getuser);


module.exports = router