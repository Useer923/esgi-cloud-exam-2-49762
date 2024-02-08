const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  //'postgres://fakeurl', // TODO
  process.env.KEY_DB_EXAM, // TODO: database connection string
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;
