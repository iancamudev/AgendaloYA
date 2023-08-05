import React from "react";
import FaqCard from "../FaqCard";
import { CardsContainer, MainDiv } from "./Faq.styled";
import { Typography } from "@mui/material";

const Faq = () => {
  return (
    <MainDiv>
      <Typography variant="h4">Preguntas frecuentes</Typography>
      <CardsContainer>
        <FaqCard
          title="¿Cuanto cuesta?"
          body="Una vez finalizado el periodo de prueba, para seguir usando nuestro servicios deberas pagar una mensualidad de 500 ARS (pesos argentinos)"
        />
        <FaqCard
          title="¿Que pasa si el cliente cancela un turno?"
          body="El cliente solo puede cancelar el turno 24 horas antes, cuando este cancela se te avisa automaticamente mediante la app y por WhatsApp."
        />
        <FaqCard
          title="¿Que pasa si quiero cancelar un turno?"
          body="Deberas entrar a la App y rechazar el turno, se le avisara al cliente para que puedan acordar otro turno."
        />
        <FaqCard
          title="¿Como son los pagos?"
          body="Para reservar un turno el cliente debe realizar el pago del servicio o realizar una seña del 20%, en este caso el resto del pago queda pendiente y debera abonarte el restante en efectivo."
        />
      </CardsContainer>
    </MainDiv>
  );
};

export default Faq;
