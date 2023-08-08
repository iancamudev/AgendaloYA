import React from "react";
import {
  ClarificationContainer,
  ContentDiv,
  FlexLayout,
  MainDiv,
  RowDiv,
  StyledImg,
  StyledUl,
  TextContainer,
} from "./Appointment.styled";
import { Typography } from "@mui/material";
import useWindowSize from "@hooks/useWindowSize";
import { colors } from "@utils/Variables";
import image from "@assets/images/demo-servicio-pxp.jpeg";
const Appointment = () => {
  const { width = 1 } = useWindowSize();

  const title = "Extensiones pxp";
  const description =
    "Las extensiones pxp se realizan colocando una extension por cada pelo natural, se pueden realizar diferentes mapeos para favorecer la forma de tu ojo entre estas las mas conocidas son 'open eye' que agranda tu mirada, esta misma es recomendable para ojos pequeños o personas mayores, y cat eye que alarga tu mirada que es recomendada para casi todos los tipos de ojos, entre otros.";
  const clarification = [
    "Para realizarte este servicio no debes concurrir con maquillaje, de lo contrario se cobrara el retirado del mismo.",
    "No debes haberte realizado un lifting recientemente, si queres se puede realizar una bajada de lifting.",
    "Si tienes extensiones de otra profesional, se te cobrara el retirado",
    "No puedes realizarte el servicio si tienes irritacion, alergias o orzuelos en los ojos.",
  ];
  const price = "$1900";
  return (
    <FlexLayout>
      <MainDiv>
        <ContentDiv $width={width}>
          <StyledImg src={image} />
          <TextContainer>
            <RowDiv>
              <Typography variant="h5">{title}</Typography>
              <Typography
                variant="h6"
                style={{ fontWeight: "800", color: colors.gray }}
              >
                {price}
              </Typography>
            </RowDiv>

            <Typography variant="subtitle2">{description}</Typography>
            <ClarificationContainer>
              <Typography variant="subtitle1">
                Antes de reservar debes saber:
              </Typography>
              <StyledUl>
                {clarification.map((el) => (
                  <li>{el}</li>
                ))}
              </StyledUl>
            </ClarificationContainer>
          </TextContainer>
        </ContentDiv>
      </MainDiv>
    </FlexLayout>
  );
};

export default Appointment;
