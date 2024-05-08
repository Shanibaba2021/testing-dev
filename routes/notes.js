const app = require("express");
const router = app.Router();
const auth = require("../middleware/auth");

const noteController = require("../controllers/noteController");

router.get("/getnotes",auth, noteController.getnotes);
router.post("/createnote",auth, noteController.createnote);
router.post("/updatenote",auth, noteController.updatenote);
router.post("/deletenote",auth, noteController.deletenote);



module.exports = router
