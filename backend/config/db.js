import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(
      `Something went wrong while connecting to the database ${error}`
    );
    process.exit(1);
  }
};

export default connectDB;
