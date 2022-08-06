import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import webRoutes from "./src/routes/webRoutes.js";

const app = new express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use(cors());
app.listen(port, () => {
  console.log("app listen on port " + port);
});

webRoutes(app);
