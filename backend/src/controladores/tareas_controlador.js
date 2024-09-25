import Tarea from '../modelos/tareas.js';

export const agregar_tarea = async (req, res) => {
    try {
        await Tarea.validate(req.body); 
        const nueva_Tarea = new Tarea(req.body); 
        const Tarea = await nueva_Tarea.save(); 
        res.status(201).json(Tarea);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al agregar la Tarea', error: error.message });
    }
};

export const ver_Tareas = async (req, res) => {
    try {
        const Tareas = await Tarea.find({}); 
        res.status(200).json(Tareas); 
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener Tareas', error: error.message });
    }
};

export const ver_Tarea_tal = async (req, res) => {
    const { id } = req.params;
    try {
        const Tarea = await Tarea.findOne({ id }); 
        if (!Tarea) {
            return res.status(404).json({ mensaje: `Tarea con ID ${id} no encontrada` });
        }
        res.status(200).json(Tarea); 
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la Tarea', error: error.message });
    }
};

export const actualizar_Tarea = async (req, res) => {
    const { id } = req.params;
    const actualizaciones = req.body;
    try {
        const TareaActualizado = await Tarea.findOneAndUpdate(
            { id },
            actualizaciones,
            { new: true, runValidators: true } 
        );
        if (!TareaActualizado) {
            return res.status(404).json({ mensaje: `Tarea con ID ${id} no encontrado` });
        }
        res.status(200).json(TareaActualizado); 
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el Tarea', error: error.message });
    }
};

export const eliminar_Tarea_tal = async (req, res) => {
    const { id } = req.params;
    try {
        const eliminar = await Tarea.deleteOne({ id }); 
        if (eliminar.deletedCount === 0) {
            return res.status(404).json({ mensaje: `Tarea con ID ${id} no encontrado` });
        }
        res.status(200).json({ mensaje: `Tarea con ID ${id} eliminado exitosamente` }); 
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el Tarea', error: error.message });
    }
};
