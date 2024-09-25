import mongoose from 'mongoose';

const tareasSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
    },
    prioridad: {
        type: String,
        enum: ["alta", "media", "baja"],
        default: "media",
    },
    estado: {
        type: String,
        enum: ['Pendiente', 'En Progreso', 'Completada'],
        default: 'Pendiente'
    },
});

export default mongoose.model("Tarea", tareasSchema);


    // id: {
    //     type: String,
    //     required: true,
    //     unique: true 
    // },
    // nombre: {
    //     type: String,
    //     required: true
    // },
    // descripcion: {
    //     type: String,
    //     required: true
    // },
    // precio: {
    //     type: Number,
    //     required: true
    // },
    // stock: {
    //     type: Number,
    //     required: true
    // },
    // categoria: {
    //     type: String,
    //     required: true
    // },
    // fechaCreacion: {
    //     type: Date,
    //     default: Date.now
    // }