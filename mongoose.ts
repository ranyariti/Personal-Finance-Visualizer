import mongoose from "mongoose";

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("Missing MONGODB_URI in environment");

    await mongoose.connect(uri); // No need for options in Mongoose 7+
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectToDatabase;
