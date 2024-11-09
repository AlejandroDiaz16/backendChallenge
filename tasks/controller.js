// controller for tasks endpoints
const express = require('express');
const taskService = require('./service');

const router = express.Router();

router.get( '/getAllTasks', (req, res) => {
    const resp = taskService.getAllTasks()
    res.send(resp)
})

router.post( '/createTask', (req, res) => {
    const resp = taskService.createTask(req.body)
    res.send(resp)
})

router.put( '/updateTask/:id', (req, res) => {
    const resp = taskService.updateTask(req.params.id, req.body)
    res.send(resp)
})

router.delete( '/deleteTask/:id', (req, res) => {
    const resp = taskService.deleteTask(req.params.id)
    res.send(resp)
})

module.exports = router;
