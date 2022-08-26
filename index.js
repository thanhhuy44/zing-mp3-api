import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ejs from "ejs";
import webRoutes from "./src/routes/webRoutes.js";

const app = new express();
dotenv.config();

const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(cors());
app.get("/", (req, res) => res.render("PlaylistMusic-main/index"));
app.listen(port, () => {
  console.log("app listen on port " + port);
});

webRoutes(app);
