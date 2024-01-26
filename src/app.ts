import express from "express"
import { config } from "dotenv";
config();

const app = express(); 
// app variable holds the functionality of the express variable


// GET - want to get data from database
// PUT - modify or update data
// POST - send data
// DELETE - send some data to delete something

//middlewares
app.use(express.json());


export default app;

//nonlknln