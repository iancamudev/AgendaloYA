import React from "react";
import Saly from "@assets/images/Saly-1.png";
import useWindowSize from "@hooks/useWindowSize";
import {
  CardContainer,
  ContentContainer,
  CustomTitle,
  MainDiv,
  StyledButton,
  StyledImg,
} from "./Plans.styled";
import { Typography } from "@mui/material";

const Plans = () => {
  const { width } = useWindowSize();
  return (
    <MainDiv>
      <CardContainer $width={width}>
        {width && width > 600 && <StyledImg $width={width} src={Saly} />}
        <ContentContainer $width={width}>
          <CustomTitle variant="h5" sx={{ fontWeight: "bold" }}>
            INICIA TU PRUEBA GRATUITA!
          </CustomTitle>
          <Typography variant="body1">
            Crea tu cuenta y te damos 5 dias de prueba completamente gratis, sin
            tarjetas ni compromisos de pago!
          </Typography>
          <StyledButton>COMENZAR</StyledButton>
        </ContentContainer>
      </CardContainer>
    </MainDiv>
  );
};

export default Plans;
