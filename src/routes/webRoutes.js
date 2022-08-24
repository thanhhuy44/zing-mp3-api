import express from "express";
import cors from "cors";
import { controllers } from "../controllers/ZingMp3Controllers.js";

const router = express.Router();

const webRoutes = (app) => {
  router.get("/home", controllers.handleGetHome);
  router.get("/playlist/:id", controllers.handleGetDetailPlaylist);
  //
  router.get("/chart/home", controllers.handleGetChartHome);
  router.get("/chart/new-release", controllers.handleGetNewReleaseChart);
  router.get("/chart/week/:id", controllers.handleGetWeekChart);
  //
  router.get("/song/:id", controllers.handleGetSong);
  router.get("/song/info/:id", controllers.handleGetInfoSong);
  router.get("/song/lyric/:id", controllers.handleGetLyricSong);
  //
  router.get("/top100", controllers.handleGetTop100);
  //
  router.get("/artist/:name", controllers.handleGetArtist);
  router.get("/artist/songs/:id", controllers.handleGetArtistSongs);
  //
  router.get("/search", controllers.handleSearchAll);
  router.get("/search/:type", controllers.handleSearchByType);
  //
  router.get("/radio", controllers.handleGetRadio);
  //
  router.get("/category", controllers.handleGetCategoryHome);
  router.get("/category/:id", controllers.handleGetDetailCategory);
  //
  router.get("/mv/:id", controllers.handleGetMV);
  router.get("/mv/list", controllers.handleGetListMV);
  router.get("/mv/category", controllers.handleGetCategoryMV);
  //
  router.get("*", controllers.handlePageError);

  return app.use("/api", cors(), router);
};

export default webRoutes;
