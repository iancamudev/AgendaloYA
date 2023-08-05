import React from "react";
import { AiFillStar } from "react-icons/ai";
import Dashboard from "@assets/images/Dashboard.png";
import Calender from "@assets/images/Calender.png";
import Star from "@assets/images/Star.png";
import Coins from "@assets/images/Coins.png";
import Bell from "@assets/images/Bell.png";
import Clock from "@assets/images/clock.png";
import Pin from "@assets/images/Pin.png";
import CaracteristicasCard from "../FeaturesCard";
import useWindowSize from "@hooks/useWindowSize";
import {
  MainDiv,
  StarImg,
  StyledGrid,
  TitleContainer,
} from "./Features.styled";
import { Typography } from "@mui/material";

const Caracteristicas = () => {
  const { width } = useWindowSize();
  return (
    <MainDiv>
      <TitleContainer>
        <StarImg src={Star} />
        <Typography variant="h4">Caracteristicas</Typography>
      </TitleContainer>
      <StyledGrid $width={width}>
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
      </StyledGrid>
    </MainDiv>
  );
};

export default Caracteristicas;
