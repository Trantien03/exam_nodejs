const express = require("express");
const router = express.Router();
const controller = require("../controller/auth.controller");

router.get("/addProduct",controller.product);
router.post("/addProduct",controller.postProduct);


module.exports = router;
