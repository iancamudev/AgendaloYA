import { Router, Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
const router = Router();

export const protectUser = (req: Request, res: Response, next: Function) => {
  // Verifica si el token está presente en el encabezado de la solicitud
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    // Verifica la firma del token
    const decoded = jwt.verify(token, process.env.SECRET || "random");

    // Añade la información del usuario decodificada a la solicitud

    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

export const protectAdmin = async (
  req: Request,
  res: Response,
  next: Function
) => {
  // Verifica si el token está presente en el encabezado de la solicitud
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    // Verifica la firma del token
    const decoded = JSON.stringify(
      jwt.verify(token, process.env.SECRET || "random")
    );
    // Buscamos al usuario y vemos si es admin
    const { email } = JSON.parse(decoded);
    const user = await User.findOne({ email });
    console.log(user);
    if (user?.role === "admin") {
      next();
    } else {
      return res.status(401).json({
        error: "[Admin auth]: Usuario no encontrado o usuario no es admin",
      });
    }
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
