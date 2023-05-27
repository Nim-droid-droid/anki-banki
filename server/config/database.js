const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
      }
    )

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(`ERROR: ${err}`)
    process.exit(1)
  }
}

module.exports = { connectDB }