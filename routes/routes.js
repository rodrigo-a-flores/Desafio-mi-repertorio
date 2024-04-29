import {Router} from "express";
import { getAllCanciones, createCancion, updateCancion, deleteCancion } from "../controller/controller.js";
const routes = Router();

routes.get("/canciones", getAllCanciones);
routes.post("/cancion", createCancion);
routes.put("/cancion/:id", updateCancion);
routes.delete("/cancion/:id", deleteCancion);

routes.use('*', (req, res) => {
    res.status(404).send('Not Found');
});

export default routes;