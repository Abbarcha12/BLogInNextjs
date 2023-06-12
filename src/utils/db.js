import mongoose from "mongoose";

const DBconnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default DBconnect;