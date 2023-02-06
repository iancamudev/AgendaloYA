import { config } from "dotenv";
config()

type InitConfig = {
    MONGODB_URI: string
}

export const initConfig: InitConfig = {
    MONGODB_URI: process.env.MONGO_URI || 'mongodb://localhost/test-agendaloya-db'
}