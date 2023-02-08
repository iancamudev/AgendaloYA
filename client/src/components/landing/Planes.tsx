import React from "react";
import Saly from "../../assets/Saly-1.png";
import useWindowSize from "../../hooks/useWindowSize";

const Planes = () => {
  const { width } = useWindowSize();
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={
          width && width > 850
            ? "flex flex-row h-[300px] bg-salmon rounded-[60px] max-w-[800px] w-4/5 mb-10 gap-10"
            : "flex flex-row h-[300px] bg-salmon  w-full mb-10 gap-10 items-center"
        }
      >
        {width && width > 600 && (
          <img
            src={Saly}
            alt=""
            className={
              width > 850 ? "w-auto h-full scale-125" : "w-1/3 h-fit scale-125"
            }
          />
        )}
        <div
          className={
            width && width > 600
              ? "text-start p-4 text-white flex flex-col justify-center gap-4"
              : "text-center p-4 text-white flex flex-col justify-center gap-4 items-center"
          }
        >
          <p className="font-bold text-2xl w-[250px]">
            INICIA TU PRUEBA GRATUITA!
          </p>
          <p className="text-lg">
            Crea tu cuenta y te damos 5 dias de prueba completamente gratis, sin
            tarjetas ni compromisos de pago!
          </p>
          <button
            className={`font-bold text-lg ${
              width && width > 600 && "self-start"
            } text-salmon p-2 px-4 bg-white rounded-3xl duration-300 hover:duration-300 hover:bg-salmon hover:text-white`}
          >
            EMPEZAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Planes;
