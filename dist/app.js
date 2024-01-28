import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();
// app variable holds the functionality of the express variable
// GET - want to get data from database
// PUT - modify or update data
// POST - send data
// DELETE - send some data to delete something
//middlewares  
/*
middlewares are functions which gets executed before a request is processed.
In Node and Express, middeware can be used to check JSON body validations, tokens or cookies validation,
Params Validations and more according to requirements.
*/
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors());
//remove it in production
app.use(morgan("dev"));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map