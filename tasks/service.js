//storing data in memory
const tasks = [
    {
        id: 1,
        name: "task1",
        completed: false,
        priority: "high",
        dueDate: "2024-11-10"
    },
    {
        id: 2,
        name: "task2",
        completed: true,
        priority: "medium",
        dueDate: "2024-11-12"
    },
    {
        id: 3,
        name: "task3",
        completed: false,
        priority: "low",
        dueDate: "2024-11-15"
    },
    {
        id: 4,
        name: "task4",
        completed: true,
        priority: "medium",
        dueDate: "2024-11-08"
    },
    {
        id: 5,
        name: "task5",
        completed: false,
        priority: "high",
        dueDate: "2024-11-18"
    }
];

// service to handle tasks logic
function getAllTasks() {
    const resp = {}
    resp.data = tasks;
    return resp;
}

function createTask(task) {
    const resp = {}
    if (task.name && task.priority && task.dueDate) {
        const obj = {
            id: tasks.length,
            name: task.name,
            completed: false,
            priority: task.priority,
            dueDate: task.dueDate
        }
        tasks.push(obj)
        resp.data = obj
    } else {
        resp.error = 'Task is missing data'
    }
    return resp
}

function updateTask(id, task) {
    console.log(task)
    const resp = {}
    if (id && task.name && task.priority && task.dueDate) {
        const index = tasks.findIndex(el => el.id == id);
        if (index == -1) {
            resp.error = 'element not found'
        } else {
            tasks[index].name = task.name
            tasks[index].completed = task.completed
            tasks[index].dueDate = task.dueDate
            tasks[index].priority = task.priority

            resp.data = task[index]
        }
    } else {
        resp.error = 'Task is missing data'
    }
    return resp
}

function deleteTask(id) {
    const resp = {}
    if (id) {
        const index = tasks.findIndex(el => el.id == id);
        if (index == -1) {
            resp.error = 'element not found'
        } else {
            tasks.splice(index, 1);
            resp.data = "element was deleted"
        }
    } else {
        resp.error = 'Task id is missing'
    }
    return resp
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
}