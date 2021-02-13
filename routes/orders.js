const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("orders", {
    isOrder: true,
    title: "Заказы",
  });
});

module.exports = router;
