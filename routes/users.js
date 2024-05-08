const app = require("express");
const router = app.Router();
const auth = require("../middleware/auth");

const userController = require("../controllers/userController");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/getusers",auth, userController.getusers);
router.post("/getuser",auth, userController.getuser);


module.exports = router