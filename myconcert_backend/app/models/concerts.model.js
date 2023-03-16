module.exports = (sequelize, Sequelize) => {
    const Concert = sequelize.define("concert", {
      nom: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE(6)
      },
      heure: {
        type: Sequelize.TIME
      },
      categorie_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
    });
    return Concert;
  };