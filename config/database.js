// DB connection function so i can connect to DB
// Why not write this funct in server.js? Because it looks ugly.
  // Create it here, then export it, so i can call it in server.js

const mongoose = require('mongoose')

// async cuz i want to wait for a successfull/failure res before i move on & say connection successful/failed
const connectDB = async () => {
  // try this…
  try {
    // use mongoose built in funct to connect to DB
    // no need to import DB_STRING from env, just call it correctly
      // app process to env file & get DB_STRING
    const conn = await mongoose.connect(
      process.env.DB_STRING, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
      }
     )

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  // if what i tried to try goes wrong, catch the error & execute {…}
  } catch (err) {
    console.error(`ERROR: ${err}`)
    // Exit the function
    process.exit(1)
  }
}
// need to export the func so i can use it in other files
module.exports = connectDB