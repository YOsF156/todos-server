const express = require("express"),
  router = express.Router();
const todoLogic = require("../BL/todoLogic");
// const auth = require("../Middleware/auth");

router.get("/", async (req, res) => {
  try {
    res.send(await todoLogic.allTasks());
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    res.send(await todoLogic.addNewTask(req.body));
  } catch (err) {
    res.status(400).send({ errors: err });
  }
});

router.put("/", async (req, res) => {
  try {
    res.send(await todoLogic.updateTodo(req.body));
  } catch (err) {
    res.status(400).send({ errors: err });
  }
});

// router.get("/:name", async (req, res) => {
//   try {
//     res.send(await todoLogic.findUniqueRoom(req.params.name));
//   } catch (err) {
//     res.status(400).send({ errors: err.message.split(";") });
//   }
// });

router.delete("/:id", async (req, res) => {
  try {
    res.send(await todoLogic.deleteTodo(req.params.id));
  } catch (err) {
    res.status(400).send({ errors: err });
  }
});

module.exports = router;
