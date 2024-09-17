import express from "express";
import cors from "cors";
import { getCollection } from "./mongodb.js";

import addTask from "./model.js";
import { ok } from "assert";
const app = express();
const port = 5173;

app.use(express.json()); //récupère données du client
app.use(cors());
//tsc pour traduire le ts en js

// var tasks = [findresult];

app.get("/task", async (req, res) => {
    res.json(await getCollection());
    // res.json(tasks);
});

app.post("/new", (req, res) => {
    let name = req.body.name;
    let description = req.body.description;
    console.log(name, description);
    addTask(tasks, name, description);
    res.json({ message: ok });
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/hello", (req, res) => {
    res.send("bonjour");
});

app.get("/json", (req, res) => {
    let test = { name: "SB" };
    res.json(test);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
