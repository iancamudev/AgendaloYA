import { Router, Request, Response } from "express";
import { protectAdmin, protectUser } from "./protectionMiddlewares";
import User from "../models/User";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .send({
      msg: "Hola Mundo",
    })
    .status(200);
});

router.post("/register", async (req: Request, res: Response) => {
  const { username, email, password, role, phone } = req.body;

  if (!username || !email || !password || !role || !phone) {
    res.status(400).send("Faltan parametros");
  }

  // Check if already exist an registered user with these email and username
  const matchEmail = await User.findOne({ email });
  const matchUsername = await User.findOne({ username });

  if (matchEmail) {
    res.status(400).send("Email already exists");
  } else if (matchUsername) {
    res.status(400).send("Username already exists");
  }

  // Continue to register user
  try {
    const user = await User.create(req.body);
    console.log(user);
    const accessToken = jwt.sign({ email }, process.env.SECRET || "random", {
      expiresIn: "1h",
    });
    console.log("Acesstoken creado");
    res.status(200).send({ user, accessToken });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/admin", protectAdmin, (req: Request, res: Response) => {
  res.status(200).send("Eres admin!");
});
export default router;
