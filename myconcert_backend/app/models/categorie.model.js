module.exports = (sequelize, Sequelize) => {
    const Categorie = sequelize.define("categorie", {
      libelle: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
      }
    });
    return Categorie;
  };