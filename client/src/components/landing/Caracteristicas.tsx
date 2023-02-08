import React from "react";
import { AiFillStar } from "react-icons/ai";
import Dashboard from "../../assets/Dashboard.png";
import Calender from "../../assets/Calender.png";
import Star from "../../assets/Star.png";
import Coins from "../../assets/Coins.png";
import Bell from "../../assets/Bell.png";
import Clock from "../../assets/clock.png";
import Pin from "../../assets/Pin.png";
import CaracteristicasCard from "./CaracteristicasCard";
import useWindowSize from "../../hooks/useWindowSize";

const Caracteristicas = () => {
  const { width } = useWindowSize();
  return (
    <div
      className={
        width && width > 850
          ? "flex flex-col items-center h-screen"
          : "flex flex-col items-center h-auto mb-20"
      }
    >
      <div className="flex flex-row items-center gap-4 mt-4">
        <img src={Star} className="h-12" />
        <p className="text-4xl">Caracteristicas</p>
      </div>
      <div
        className={
          width && width > 850
            ? "grid grid-cols-2 gap-10 mt-10 mx-4"
            : "grid grid-cols-1 gap-10 mt-10 mx-4"
        }
      >
        <CaracteristicasCard
          img={Dashboard}
          title="Tienes el control"
          body="Dashboard con datos sobre clientes turnos e ingresos."
        />
        <CaracteristicasCard
          img={Calender}
          title="Maneja tus horarios"
          body="Calendario de turnos personalizado elige que dias y horarios
          trabajas."
        />
        <CaracteristicasCard
          img={Coins}
          title="Reservas con seña"
          body="Para reservar, el cliente debe pagar 
          una seña del 20%."
        />
        <CaracteristicasCard
          img={Bell}
          title="Todo automatico"
          body="Cuando un cliente reserva te llega 
          un mensaje por WhatsApp."
        />
        <CaracteristicasCard
          img={Clock}
          title="Confirmacion"
          body="24 horas antes, el cliente recibe la confirmacion por WhatsApp."
        />
        <CaracteristicasCard
          img={Pin}
          title="Ahorra tiempo"
          body="Tendras tus propias preguntas frecuentes que podras editar tu mismo!"
        />
      </div>
    </div>
  );
};

export default Caracteristicas;
