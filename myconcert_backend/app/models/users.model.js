module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      login: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
        },
        role:{
            type: Sequelize.ENUM('admin', 'user')
        }
    });
    return Users;
  };