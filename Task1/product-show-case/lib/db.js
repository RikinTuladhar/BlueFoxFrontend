const mongoose = require("mongoose");

let isConnected = 0; // Track connection status

async function dbConnect() {
  if (isConnected === 1) {
    console.log("Already connected to MongoDB");
    return;
  }
  
  if (!process.env.MongoDb_url) {
    throw new Error("MongoDB URL not found");
  }

  try {
    const db = await mongoose.connect(process.env.MongoDb_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState;
    if (isConnected === 1) {
      console.log("MongoDB connected successfully.");
    } else {
      console.log(`MongoDB connection state: ${isConnected}`);
    }
  } catch (error) {
    console.error("Error connecting to the database: ", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

export default dbConnect;
