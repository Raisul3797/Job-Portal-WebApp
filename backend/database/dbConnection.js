import mongoose from "mongoose";

export const dbConnection = () => {
  const connectionParams = { useNewUrlParser: true };
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
    })
    .then(() => {
      console.log("MongoDB is Connected Successfully!");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
