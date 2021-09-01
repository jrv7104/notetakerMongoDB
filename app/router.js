import Router from "express";

const router = new Router();

// TODO: Add routes here (maybe 🤔 start with a GET test route)
router.get("/", (_, res) => {
  res.send("Hello World from API");
});

router.post("/", (req, res) => {
  console.log(req.body);
});

export default router;
