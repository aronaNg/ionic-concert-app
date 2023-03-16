const db = require("../models");
const Categorie = db.categories;
const Op = db.Sequelize.Op;
// Create and Save a new Categorie
exports.create = (req, res) => {
    // Validate request
    if (!req.body.libelle) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    console.log(req.body)
 
    // Create a Categorie
    const categorie = {
      libelle: req.body.libelle,
      user_id: req.body.user_id
    };
    // Save Categorie in the database
    Categorie.create(categorie)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the categorie."
        });
      });
  };
// Retrieve all Categorie from the database.
exports.findAll = (req, res) => {
    const user_id = req.body.user_id;
    var condition = user_id ? { user_id: user_id } : null;
    Categorie.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving categorie."
        });
      });
  };
// Find a single Categorie with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Categorie.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Categorie with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Categorie with id=" + id
        });
      });
  };
// Update a Categorie by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Categorie.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Categorie was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Categorie with id=${id}. Maybe Categorie was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Categorie with id=" + id
        });
      });
  };
// Delete a Categorie with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Categorie.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Categorie was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Categorie with id=${id}. Maybe Categorie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Categorie with id=" + id
        });
      });
  };
// Delete all Categorie from the database.
exports.deleteAll = (req, res) => {
  
};
