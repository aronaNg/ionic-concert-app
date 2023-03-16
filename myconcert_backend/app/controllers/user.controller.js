// Create and Save a new Categorie
const bcrypt = require("bcrypt");
const db = require("../models");
const Concert = db.concerts;
const jwt = require('jsonwebtoken');
const User = db.users;

exports.login = async(req, res) => {
    // Validate request
    if (!req.body.login || !req.body.password) {
      res.status(400).send({
        message: "login and password can not be empty!"
      });
      return;
    }
    else{

      const user = await User.findOne({ where : {login : req.body.login }});
      if(user){
          const password_valid = await bcrypt.compare(req.body.password,user.password);
          if(password_valid){
              token = jwt.sign({ "id" : user.id,"login" : user.login},"privatekey");
              res.status(200).json({ token : token,id:user.id,role:user.role,login:user.login });
          } else {
            return res.status(400).json({ error : "Password Incorrect" });
          }
        
        }else{
          return res.status(404).json({ error : "User does not exist" });
        }


      

       

         
  
          }
};

exports.getUser = async(req, res) => {
  

    User.findAll({
      attributes: ['login', 'id']
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Users."
        });
      });

    


    

     

       


};



exports.createlogin = async(req, res) => {
  


    const salt = await bcrypt.genSalt(10);
    var usr = {
      login : req.body.login,
      password : await bcrypt.hash(req.body.password, salt),
      role: req.body.role
    };
    created_user = await User.create(usr);
    res.status(201).json(created_user);

      
};
  
exports.logout = (req, res) => {
    // Validate request
    

    res.status(200).send({
        message: "logout successfull!"
    });
  
          
};


  // Delete a Todo with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;

    Concert.destroy({
      where: { user_id: id }
    });

    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {

          

          res.status(200).send({
            message: "User was deleted successfully!"
          });
        } else {
          res.status(404).send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
  };
  

  