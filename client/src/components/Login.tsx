import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWindowSize from "../hooks/useWindowSize";
import Waves2 from "../assets/Waves2.png";
import Waves from "../assets/Waves.png";
import Profile from "../assets/Profile.png";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const { width } = useWindowSize();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [showPass, setShowPass] = useState(false);

  const submitHandler = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full">
      <img
        src={width && width > 800 ? Waves2 : Waves}
        alt=""
        className="absolute w-full h-auto"
      />
      <body className="flex flex-row h-[35rem] justify-around items-center">
        <div className="flex flex-col gap-4 h-auto justify-start">
          <Link to="/">
            <IoIosArrowBack className="h-10 w-10 mb-8 cursor-pointer" />
          </Link>

          <div className="flex flex-row gap-2 items-center">
            <p className="text-2xl font-bold">Inicio de sesion</p>
          </div>
          <form
            action=""
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="flex flex-col items-start">
              <label htmlFor="" className="text-sm text-gray-600 select-none">
                Email
              </label>
              <input
                type="text"
                className="border-b border-gray-400 p-1 focus:outline-none w-[250px]"
                {...register("email", {
                  required: "- El campo email es obligatorio.",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "- Email invalido.",
                  },
                })}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="" className="text-sm text-gray-600 select-none">
                Contraseña
              </label>
              <div className="flex flex-row w-[250px]">
                <input
                  type={showPass ? "text" : "password"}
                  className="border-b border-gray-400 p-1 focus:outline-none w-full"
                  {...register("password", {
                    required: "- El campo contraseña es obligatorio.",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/i,
                      message: "- Contraseña invalida.",
                    },
                  })}
                />
                {showPass ? (
                  <FaRegEye
                    className="text-gray-600 mt-2 cursor-pointer"
                    onClick={() => setShowPass(!showPass)}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="text-gray-600 mt-2 cursor-pointer"
                    onClick={() => setShowPass(!showPass)}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-row justify-center mt-4">
              <input
                type="submit"
                className="text-white py-1 px-2 duration-300 w-fit rounded-xl cursor-pointer bg-green-600 hover:duration-300 hover:scale-110 hover:bg-green-400"
                value="Continuar"
              />
            </div>
          </form>
          <div className="text-sm text-red-600 w-[250px]">
            {Object.keys(errors).map((er) => (
              <p className="select-none">{errors[er]?.message?.toString()}</p>
            ))}
          </div>
        </div>
        {width && width > 800 && <img src={Profile} alt="" className="w-2/5" />}
      </body>

      <img
        src={width && width > 800 ? Waves2 : Waves}
        alt=""
        className="absolute w-full h-auto bottom-0 rotate-180"
      />
    </div>
  );
};

export default Login;
