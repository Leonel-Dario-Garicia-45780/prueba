import express from "express";
import {
    agregar_tarea,
    ver_Tareas,
    ver_Tarea_tal,
    actualizar_Tarea,
    eliminar_Tarea_tal,
} from "../controladores/tareas_controlador.js";

const router_tareas = express.Router();

router_tareas.post("/tareas", agregar_tarea);
router_tareas.get("/tareas", ver_Tareas);
router_tareas.get("/tareas/:id", ver_Tarea_tal);
router_tareas.put("/tareas/:id", actualizar_Tarea);
router_tareas.delete("/tareas/:id", eliminar_Tarea_tal);

export default router_tareas;
