const express = require("express");
const taskRoutes = require("./routes/tasks");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString();

    console.log(
        `${req.method} ${req.url} - ${timestamp}`
    );

    next();
});

app.use("/tasks", taskRoutes);

// Ana sayfa
app.get("/", (req, res) => {
    res.send("TaskFlow API çalışıyor!");
});

// Sunucuyu başlatma
app.listen(PORT, () => {
    console.log(`TaskFlow API http://localhost:${PORT} adresinde çalışıyor.`);
});