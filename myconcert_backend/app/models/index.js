const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.categories = require("./categorie.model.js")(sequelize, Sequelize);
db.concerts = require("./concerts.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize, Sequelize);

db.todos = require("./todos.model.js")(sequelize, Sequelize);


//
db.concerts.belongsTo(db.categories, {
    foreignKey: "categorie_id",
    as: "categorie",
});

db.concerts.belongsTo(db.users, {
    foreignKey: "user_id",
    as: "user",
});




module.exports = db;