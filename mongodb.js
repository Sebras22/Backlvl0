import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "super";
await client.connect();
const db = client.db(dbName);
const collection = db.collection("tasks");

export const getCollection = async () => await collection.find({}).toArray();

// export default async function main() {
//     // Use connect method to connect to the server
//     console.log("Connected successfully to server");

//     // the following code examples can be pasted here...
//     console.log("Found documents =>", findResult);

//     const insertResult = await collection.insertMany([
//         { name: "slkjebfksjefhbkjsefbskj" },
//         { name: "qzdqzdqzdqzd" },
//         { name: "sefsefsefsefsef" },
//     ]);
//     console.log("Inserted documents =>", insertResult);
//     return "done.";
// }

// main()
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => client.close());

//------------------------------------DB------------------------------------------

// const { MongoClient } = require("mongodb");
// const uri = "mongodb://localhost:27017";

// const client = new MongoClient(uri);

// const tasks = client.db("super").collection("tasks");
// // async function connectToMongo(tasks) {
// //     try {
// //         await client.connect();
// //         console.log("Connecté à MongoDB");
// //         return client.db("local").collection(tasks);
// //     } catch (error) {
// //         console.error("Erreur de connexion à MongoDB:", error);
// //         throw error;
// //     }
// // }

// async function findAllTasks() {
//     // console.log(tasks);

//     // console.log(client.db("local").databaseName);
//     await tasks.insertOne({
//         name: "coucou",
//     });

//     return await tasks.find().toArray();
// }

// async function main() {
//     findAllTasks().then(console.log);
// }

// main();

// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
