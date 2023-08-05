import logoGrande from "@assets/images/logoGrande.png";
import fondoImg from "@assets/images/Fondo.png";
import useWindowSize from "@hooks/useWindowSize";
import {
  FullDiv,
  ImageCalendar,
  ImageLogo,
  TextWrapper,
} from "./Welcome.styled";
import { Typography } from "@mui/material";

const Bienvenida = () => {
  return (
    <FullDiv>
      <TextWrapper>
        <ImageLogo src={logoGrande} />
        <Typography variant="h6">Tu sistema de turnos ideal</Typography>
      </TextWrapper>
      <ImageCalendar src={fondoImg} />
    </FullDiv>
  );
};

export default Bienvenida;
