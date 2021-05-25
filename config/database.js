const config = require('./');
const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  test: {
    dialect: "sqlite",
    DB_CONN: "sqlite.memory",
    logging: false,
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'postgres://pajrvzlfeqcake:a42ab53efa724f89223fce09e751e3715e72100bef744e8dd1de65a9b1b3a340@ec2-54-224-124-241.compute-1.amazonaws.com:5432/dbka7gm7lbgu3u',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
};
