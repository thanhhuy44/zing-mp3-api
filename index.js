import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ejs from "ejs";
import webRoutes from "./src/routes/webRoutes.js";

const app = new express();
dotenv.config();

const port = process.env.PORT || 3000;
app.set("view engine", "ejs");

app.use((req, res, next) => {
  cors();
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/public", express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  return res.render("homepage");
});

app.listen(port, () => {
  console.log("app listen on port " + port);
});

webRoutes(app);
