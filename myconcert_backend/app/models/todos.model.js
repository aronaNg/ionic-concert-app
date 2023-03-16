module.exports = (sequelize, Sequelize) => {
    const Todos = sequelize.define("todos", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
    });
    return Todos;
  };