import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/usersRoutes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(userRoutes);

export default app;

