var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/mostrar", function (req, res) {
  dashController.mostrar(req, res);
});

module.exports = router;
