import { Router } from "express";
import { agregarTarea, borrarTarea, editarTarea, listaTareas } from "../controllers/tareas.controllers";
const router = Router();
router.route("/tareas").get(listaTareas).post(agregarTarea);
router.route("tareas/:id").put(editarTarea).delete(borrarTarea);

export default router;
