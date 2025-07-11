import tareas from "../models/tareas.js"

const getAlltask = (req, res) => {
  res.status(200).json(tareas);
};

const createtask = (req, res) =>{
    let {id, title, description, completed, priority} = req.body;
    let tareaexistente = tareas.find((t) => t.id === id)

    if (priority < 1 || priority > 5){
        return res.status(400).json({message: "La prioridad debe ser entre 1 y 5"})
    }

    if (tareaexistente){
        return res.status(400).json({message: "Ya existe esa tarea con ese id"})
    }

    const tareanueva = {
        id,
        title,
        description,
        completed : completed || false,
        priority,
    };

    tareas.push(tareanueva);

    res.status(201).json(tareanueva);

};

const updatetask = (req, res) =>{
    const id = parseInt(req.params.id)
    const actualizar = req.body
    const tareaexistente = tareas.findIndex((t) => t.id === id)

    tareas[tareaexistente] = {...tareas[tareaexistente], ...actualizar} 
    res.status(200).json(tareas[tareaexistente]);
};

const deleteTasks = (req, res) =>{
    const id = parseInt(req.params.id)
    const tareaexistente = tareas.find((t) => t.id === id);

    tareas.splice(tareaexistente,1)
    res.status(200).json(tareas)
};


const getSummarytask = (req, res) => {
    const totalTareas = tareas.length
    const tareasCompletadas = tareas.filter((t) => t.completed === true).length
    const promedioTareas = tareas.reduce((sum, tarea) => sum + tarea.priority, 0)/totalTareas

    res.status(200).json({'total': totalTareas, 'completed': tareasCompletadas,'averagePriority': promedioTareas})
}
export default {getAlltask, createtask, updatetask, deleteTasks, getSummarytask};