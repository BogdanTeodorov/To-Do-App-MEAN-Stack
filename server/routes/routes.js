const express = require('express');
const router = express.Router();
const { createToDo, getAllToDos, getToDo, updateToDo, deleteToDo } = require('../controllers/todo.controller');

router.post('/todoapp/create', createToDo);

router.get('/todoapps', getAllToDos)

router.get('/todoapp/:id', getToDo)

router.patch('/todoapp/:id', updateToDo)

router.delete('/todoapp/:id', deleteToDo)


module.exports = router;