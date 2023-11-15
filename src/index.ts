import express from "express";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import compression from "compression";
import mongoose from "mongoose";
import router from "./router";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("Server running on http://localhost:8000/");
});

const MONGO_URL =
  "mongodb+srv://vantuan25072001:vantuan25072001@cluster0.779he7u.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;

mongoose.connect(MONGO_URL).then(() => console.log("Connect DB successfull!!"));

mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
