module.exports = app => {
    const concerts = require("../controllers/concerts.controller.js");
    var router = require("express").Router();
    // Create a new concerts
    router.post("/", concerts.create);
    // Retrieve all concerts
    router.get("/", concerts.findAll);

    // Retrieve a single concerts with id
    router.get("/:id", concerts.findOne);
    // Update a produits with id
    router.put("/:id", concerts.update);
    // Delete a produits with id
    router.delete("/:id", concerts.delete);

    app.use('/api/concerts', router);
  };