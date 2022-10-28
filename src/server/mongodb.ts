import mongoose from "mongoose";

export const startMongoConnection = async (): Promise<mongoose.Mongoose> => {
  const url = process.env.MONGODB_URI;
  if (url === undefined)
    throw Error("You should provide MONGODB_URI env variable");

  return await mongoose.connect(url, {dbName: 'food-store'});
};
