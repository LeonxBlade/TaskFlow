const express = require("express");
const router = express.Router();

let tasks = [];

let nextId = 1;

router.post("/", (req, res) => {
    const { title, description, priority, assignee } = req.body;

    const newTask = {
        id: nextId++,
        title,
        description,
        priority,
        assignee,
        status: "Beklemede",
        createdAt: new Date(),
        updatedAt: new Date()
    };

    tasks.push(newTask);

    res.status(201).json({
        message: "Görev başarıyla oluşturuldu.",
        task: newTask
    });
});

router.get("/", (req, res) => {
    res.status(200).json(tasks);
});
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Görev bulunamadı."
        });
    }

    res.status(200).json(task);
});
router.put("/:id", (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Görev bulunamadı."
        });
    }

    const { title, description, priority, assignee, status } = req.body;

    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.priority = priority ?? task.priority;
    task.assignee = assignee ?? task.assignee;
    task.status = status ?? task.status;
    task.updatedAt = new Date();

    res.status(200).json({
        message: "Görev başarıyla güncellendi.",
        task: task
    });
});
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({
            message: "Görev bulunamadı."
        });
    }

    tasks.splice(taskIndex, 1);

    res.status(200).json({
        message: "Görev başarıyla silindi."
    });
});
module.exports = router;