import express, { Express, Request } from "express";
import cors from "cors";
import morgan from "morgan";

import appRoutes from "./routes/app.routes";

export const app: Express = express();

app.use(express.json());
app.use(cors<Request>());
app.use(morgan("dev"));
app.use(appRoutes);
