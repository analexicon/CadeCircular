import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());

import busRoute from "./routes/bus";
app.use("", busRoute);

import busStopRoute from "./routes/busStop";
app.use("", busStopRoute);

import driverRoute from "./routes/driver";
app.use("", driverRoute);

app.listen(port, () => console.log(`Server is running on port ${port} 🚀`));
