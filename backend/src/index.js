import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import rutaTareas from "./rutas/tareas_rutas.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/api", rutaTareas);

app.get("/", (req, res) => {
  res.send("Bienvenidos a mi aplicación");
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () =>
  console.log("El servidor está funcionando en el puerto", port)
);
