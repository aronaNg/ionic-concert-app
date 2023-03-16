const db = require("../models");
const Todos = db.todos;

// Retrieve all Todo from the database.
exports.findAll = (req, res) => {
  
    Todos.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Todos."
        });
      });
  };


  // Create and Save a new Todos
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Save Todo in the database
    Todos.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the todo."
        });
      });
  };


  exports.update = (req, res) => {
    const id = req.body.id;
  
    Todos.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Todo was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Todo with id=${id}. Maybe Todo was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Todo with id=" + id,
          data:req.body
        });
      });
  };


  // Delete a Todo with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Todos.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Todo was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Todo with id=${id}. Maybe Todo was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Concert with id=" + id
      });
    });
};
