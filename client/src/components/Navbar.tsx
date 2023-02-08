import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logoAgya from "../assets/logoAgya.png";
import logoChico from "../assets/logoChico.png";
import useWindowSize from "../hooks/useWindowSize";

const Navbar = () => {
  const { width } = useWindowSize();
  const navigate = useNavigate();

  return (
    <div className="h-auto bg-salmon w-full flex flex-row p-4 items-center justify-between">
      {width && width > 440 ? (
          <img src={logoAgya} className="h-8 hover:scale-105 cursor-pointer" onClick={() => navigate('/')} />
      ) : (
        <img src={logoChico} className="w-8 " />
      )}
      {width && width > 800 && (
        <div className="flex flex-row gap-4 justify-self-center">
          <button className="border-b-2 border-salmon hover:border-b-2 hover:border-black duration-300 hover:duration-300">
            Caracteristicas
          </button>
          <button className="border-b-2 border-salmon hover:border-b-2 hover:border-black duration-300 hover:duration-300">
            Planes
          </button>
          <button className="border-b-2 border-salmon hover:border-b-2 hover:border-black duration-300 hover:duration-300">
            Preguntas frecuentes
          </button>
        </div>
      )}
      {width && width > 440 ? (
        <div className="flex flex-row gap-4">
          <Link
            className="bg-white font-bold px-4 py-1 rounded-2xl text-salmon duration-300 hover:bg-salmon hover:text-white hover:shadow-lg hover:outline"
            to="/login"
          >
            Inicia sesion
          </Link>
          <Link
            className="bg-white font-bold px-4 py-1 rounded-2xl text-salmon duration-300 hover:bg-salmon hover:text-white hover:shadow-lg hover:outline"
            to="/register"
          >
            Registrate
          </Link>
        </div>
      ) : (
        <div className="flex flex-row gap-2">
          <Link
            className="bg-white font-bold px-2 py-1 rounded-2xl text-salmon duration-300 hover:bg-salmon hover:text-white hover:shadow-lg hover:outline"
            to="/login"
          >
            Inicia sesion
          </Link>
          <Link
            className="bg-white font-bold px-2 py-1 rounded-2xl text-salmon duration-300 hover:bg-salmon hover:text-white hover:shadow-lg hover:outline"
            to="/register"
          >
            Registrate
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
