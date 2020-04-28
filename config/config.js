module.exports = { // Not being used atm but left here for reference if needed 
    port: process.env.PORT || 5000,
    secret: process.env.SECRET || "whatever your secret is",
    db: process.env.MONGO_DB_URI
  }