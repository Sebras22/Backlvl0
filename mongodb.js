import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "super";
await client.connect();
const db = client.db(dbName);
const collection = db.collection("tasks");

export const getCollection = async () => await collection.find({}).toArray();

export const addTaskToDb = async (name, description) => {
    const newTask = {
        name: name,
        description: description,
        createdAt: new Date(),
    };
    return await collection.insertOne(newTask);
};
