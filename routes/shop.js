const express = require("express");

const router = express.Router();

router.get("/products", (req, res, next) => {
  res.send(
    "<ul><li>Product 1</li><li>Product 2</li><li>Product 3</li><li>Product 4</li></ul>"
  );
});

module.exports = router;
