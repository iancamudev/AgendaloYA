import { app } from "./app";
import "./database";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`⚡️ [server]: Server is running in http://localhost:${PORT}`);
})