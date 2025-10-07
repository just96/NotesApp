import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MONGODB CONNECTED SUCESSFULLY!");
  } catch (e) {
    console.log("Error connecting to MONGODB", e);
    process.exit(1); // exit with failure
  }
};
