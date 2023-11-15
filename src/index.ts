import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", userRoutes);

const DB_URI =
  "mongodb+srv://vantuan25072001:vantuan25072001@cluster0.h6wi1mv.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB_URI);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
