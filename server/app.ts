import express, { Express, Request } from "express";
import cors from "cors";

import appRoutes from "./routes/app.routes";

export const app: Express = express();

app.use(appRoutes)
app.use(cors<Request>())