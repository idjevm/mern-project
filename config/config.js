module.exports = {
    port: process.env.PORT || 5000,
    secret: process.env.SECRET || "whatever your secret is",
    db: process.env.MONGO_DB_URI
  }