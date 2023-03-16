module.exports = app => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();
    // Login
    router.post("/login", user.login);

    // get user
    router.get("/", user.getUser);

    // Register
    router.post("/register", user.createlogin);

    // logout
    router.post("/logout", user.logout);

    // Delete a user with id
    router.delete("/:id", user.delete);


    app.use('/api/user', router);
  };