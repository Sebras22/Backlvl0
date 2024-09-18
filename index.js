import express from "express";
import cors from "cors";
import { getCollection, addTaskToDb, deleteTaskToDb } from "./mongodb.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/task", async (req, res) => {
    res.json(await getCollection());
});

app.delete("/task/:id", async (req, res) => {
    res.json({
        result: await deleteTaskToDb(req.params.id),
        newData: await getCollection(),
    });
});

app.post("/new", async (req, res) => {
    let { name, description } = req.body;
    console.log(name, description);

    const result = await addTaskToDb(name, description);

    if (result.acknowledged) {
        res.json({ message: "Tâche ajoutée avec succès !" });
    } else {
        res.status(500).json({
            message: "Erreur lors de l'ajout de la tâche.",
        });
    }
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`App en écoute sur le port ${port}`);
});
