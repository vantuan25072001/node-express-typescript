import express from "express";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import compression from "compression";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("Server running on http://localhost:8000/");
});
