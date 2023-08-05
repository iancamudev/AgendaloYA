import { useState } from "react";
import Waves2 from "@assets/images/Waves2.png";
import Waves from "@assets/images/Waves.png";
import Profile from "@assets/imagess/Profile.png";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useWindowSize from "../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MdReportGmailerrorred } from "react-icons/md";

const Register = () => {
  const { width } = useWindowSize();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [showPass, setShowPass] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const stageHandler = () => {
    if (currentStage === 0) {
      setCurrentStage(1);
    }
  };
  const navigate = useNavigate();
  const submitHandler = (data: any) => {
    console.log(data);
    if (currentStage === 0) {
      stageHandler();
    } else {
      console.log(data);
    }
  };
  return (
    <div className="w-full">
      <img
        src={width && width > 800 ? Waves2 : Waves}
        alt=""
        className="absolute w-full h-auto"
      />
      <body className="flex flex-row h-[35rem] justify-around items-center">
        <div className="flex flex-col mt-4 gap-4 h-auto justify-start">
          <IoIosArrowBack
            className="h-10 w-10 z-10 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          <div className="flex flex-row gap-2 items-center">
            <p className="text-2xl font-bold">Registro</p>
            <span
              className="h-6 w-6 rounded-full bg-salmon cursor-pointer
              "
              onClick={() => setCurrentStage(0)}
            />
            <span
              className={`h-6 w-6 rounded-full ${
                currentStage === 1 ? "bg-salmon" : "bg-gray-300"
              }`}
            />
          </div>
          {currentStage === 0 ? (
            <form
              action=""
              className="flex flex-col gap-2"
              onSubmit={handleSubmit(submitHandler)}
            >
              <div className="flex flex-col items-start">
                <label htmlFor="" className="text-sm text-gray-600 select-none">
                  Nombre
                </label>
                <input
                  type="text"
                  className="border-b border-gray-400 p-1 focus:outline-none w-[250px]"
                  {...register("name", {
                    required: "El campo nombre es obligatorio.",
                    maxLength: {
                      value: 24,
                      message:
                        "Tu nombre debe contener menos de 24 caracteres.",
                    },
                    pattern: {
                      value: /^[a-zA-Z\s]*$/,
                      message: "Tu nombre unicamente puede contener letras.",
                    },
                  })}
                />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="" className="text-sm text-gray-600 select-none">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="border-b border-gray-400 p-1 focus:outline-none w-[250px]"
                  {...register("email", {
                    required: "El campo email es obligatorio.",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "El email no es valido.",
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
                      required: "El campo contraseña es obligatorio.",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/i,
                        message:
                          "La contraseña debe ser una combinacion de numeros y letras (8 caracteres).",
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
          ) : (
            <form
              action=""
              className="flex flex-col gap-2 h-[236px] justify-center"
              onSubmit={handleSubmit(submitHandler)}
            >
              <div className="flex flex-col items-start">
                <label htmlFor="" className="text-sm text-gray-600 select-none">
                  Quiero registrarme como
                </label>
                <div className="flex flex-row items-center mt-2">
                  <input
                    type="radio"
                    className="border-b border-gray-400 focus:outline-none h-4 w-4 mr-1"
                    value="seller"
                    {...register("userType", {
                      required: true,
                    })}
                  />
                  <label htmlFor="" className="text-gray-600 text-sm">
                    Vendedor
                  </label>
                </div>
                <div className="flex flex-row items-center mt-2">
                  <input
                    type="radio"
                    className="border-b border-gray-400 focus:outline-none h-4 w-4 mr-1"
                    value="client"
                    {...register("userType", {
                      required: true,
                    })}
                  />
                  <label htmlFor="" className="text-gray-600 text-sm">
                    Cliente
                  </label>
                </div>
              </div>
              <div className="flex flex-col items-start mt-4">
                <label htmlFor="" className="text-sm text-gray-600 select-none">
                  Telefono
                </label>
                <input
                  type="text"
                  id="phone"
                  className="border-b border-gray-400 p-1 focus:outline-none w-[250px]"
                  placeholder="Ej: 1154419041"
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value: /^\d+$/,
                      message: "Formato telefonico erroneo.",
                    },
                  })}
                />
              </div>
              <div className="flex flex-row justify-center mt-4">
                <input
                  type="submit"
                  className="text-white py-1 px-2 duration-300 w-fit rounded-xl cursor-pointer bg-green-600 hover:duration-300 hover:scale-110 hover:bg-green-400"
                  value="Registrarse"
                />
              </div>
            </form>
          )}
          <div className="text-sm text-red-600 w-[250px] text-start flex flex-col gap-2">
            {Object.keys(errors).map((er) => (
              <div className="flex flex-row gap-1 items-center">
                <MdReportGmailerrorred className="h-4 w-4" />
                <p className="select-none">{errors[er]?.message?.toString()}</p>
              </div>
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

export default Register;
