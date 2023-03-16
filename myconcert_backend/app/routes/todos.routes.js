module.exports = app => {
    const todos = require("../controllers/todos.controller.js");
    var router = require("express").Router();
  
    // Get TODO
    router.get("/", todos.findAll);

    router.post("/", todos.create);

    router.put("/:id", todos.update);

    router.delete("/:id", todos.delete);


    app.use('/api/todos', router);
  };