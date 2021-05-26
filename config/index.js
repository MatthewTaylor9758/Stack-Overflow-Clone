module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    url: 'postgres://pajrvzlfeqcake:a42ab53efa724f89223fce09e751e3715e72100bef744e8dd1de65a9b1b3a340@ec2-54-224-124-241.compute-1.amazonaws.com:5432/dbka7gm7lbgu3u',
  },
  jwtConfig: {
    secret: process.env.JWT_SECRET_KEY,
    expiresIn: process.env.JWT_EXPIRES_IN
  }
};
