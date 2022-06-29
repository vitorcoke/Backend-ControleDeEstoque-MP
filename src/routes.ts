import express from "express";
import NotebooksCampinasController from "./controllers/campinas/NotebooksCampinasController";
import UsersCampinasController from "./controllers/campinas/UsersCampinasController";
import NotebooksSPController from "./controllers/sao_paulo/NotebooksSPController";
import PerifericosSPController from "./controllers/sao_paulo/PerifericosSPController";
import UsersSPController from "./controllers/sao_paulo/UsersSPController";

const router = express.Router();

router.post("/notebooksSP", NotebooksSPController.create);

router.get("/notebooksSP", NotebooksSPController.findAll);

router.get("/notebooksSP/:id", NotebooksSPController.findOne);

router.put("/notebooksSP/:id", NotebooksSPController.update);

router.delete("/notebooksSP/:id", NotebooksSPController.delete);

router.get("/usersSP", UsersSPController.findAll);

router.get("/usersSP/:id", UsersSPController.findOne);

router.post("/usersSP", UsersSPController.create);

router.put("/usersSP/:id", UsersSPController.update);

router.delete("/usersSP/:id", UsersSPController.delete);

router.post("/perifericosSP", PerifericosSPController.create);

router.get("/perifericosSP", PerifericosSPController.findAll);

router.get("/perifericosSP/:id", PerifericosSPController.findOne);

router.put("/perifericosSP/:id", PerifericosSPController.update);

router.delete("/perifericosSP/:id", PerifericosSPController.delete);

router.post("/notebooksCampinas", NotebooksCampinasController.create);

router.get("/notebooksCampinas", NotebooksCampinasController.findAll);

router.get("/notebooksCampinas/:id", NotebooksCampinasController.findOne);

router.put("/notebooksCampinas/:id", NotebooksCampinasController.update);

router.delete("/notebooksCampinas/:id", NotebooksCampinasController.delete);

router.get("/usersCampinas", UsersCampinasController.findAll);

router.get("/usersCampinas/:id", UsersCampinasController.findOne);

router.post("/usersCampinas", UsersCampinasController.create);

router.put("/usersCampinas/:id", UsersCampinasController.update);

router.delete("/usersCampinas/:id", UsersCampinasController.delete);

router.get("/login", function (req, res, next) {
  res.render("login");
});

export { router };
