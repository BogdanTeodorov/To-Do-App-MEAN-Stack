const todoModel = require('../src/models/todoModel.js');


const createToDo = async (req, res) => {

    const todo = new todoModel(req.body);

    try {
        await todo.save();
        res.status(201).send({
            "status": true,
            "message": `To Do task was successfully created!`
        })
    } catch (error) {
        res.status(400).send({
            "error": error.message,
            "status": true,
            "message": "Error occured when creating a To Do task"
        })
    }
}

const getAllToDos = async (req, res) => {
    try {
        const todos = await todoModel.find({});
        todos.forEach(todo => {
            todo.createdAtFormatted = todo.createdAt.toISOString().split('T')[0];
        });
        res.status(200).send(todos);
    } catch (error) {
        res.status(400).send({
            "error": error.message,
            "status": true,
            "message": "Errot occured when getting all todos!"
        })
    }
}

const getToDo = async (req, res) => {
    const _id = req.params.id;
    try {

        const todo = await todoModel.findById({ _id });
        res.status(200).send(todo);

    } catch (error) {
        res.status(404).send({
            "error": error.message,
            "status": true,
            "message": `To Do with id ${_id} is not found`
        })
    }
}

const updateToDo = async (req, res) => {
    const _id = req.params.id;
    const body = req.body;

    try {
        const todoToUpdate = await todoModel.findByIdAndUpdate(_id, body, { new: true });
        res.status(201).send({
            "todoToUpdate": todoToUpdate,
            "status": true,
            "message": "To Do task was updated!"
        })
    } catch (error) {

        res.status(404).send({
            "error": error.message,
            "status": true,
            "message": `To Do task with id ${_id} is not found`
        })
    }
}

const deleteToDo = async (req, res) => {
    const _id = req.params.id;
    try {
        await todoModel.findByIdAndDelete({ _id });

        res.status(201).send({
            "status": true,
            "message": `To Do task with id ${_id} was deleted!`
        })

    } catch (error) {
        res.status(404).send({
            "error": error.message,
            "status": true,
            "message": `To Do task with id ${_id} is not found`
        })
    }
}

// Export all functions
module.exports = {
    createToDo,
    getAllToDos,
    getToDo,
    updateToDo,
    deleteToDo
};