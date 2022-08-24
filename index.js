import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import webRoutes from "./src/routes/webRoutes.js";
import ejs from "ejs";

const app = new express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  cors();
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  return res.render("homepage.ejs");
});

app.use(cors());
app.listen(port, () => {
  console.log("app listen on port " + port);
});

webRoutes(app);
