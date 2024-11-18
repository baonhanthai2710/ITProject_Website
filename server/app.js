import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import mongoose from "mongoose";
import "./db/conn.js";

const port = 8000;

import defaultData from "./defaultdata.js";
import Products from "./models/productSchema.js";
import cors from "cors";
import router from "./routes/router.js";

app.use(express.json());
app.use(cors());
app.use(router);


app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
});

defaultData();