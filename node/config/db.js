const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conct = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
        useNewUrlParser: true,
        autoIndex: true,
    });

    console.log(`MongoDB Connected: ${conct.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = connectDB;