var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/guardarPontuacao", function (req, res) {
  medidaController.guardarPontuacao(req, res);
});

module.exports = router;
