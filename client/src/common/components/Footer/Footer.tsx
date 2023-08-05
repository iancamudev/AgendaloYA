import { IoLogoWhatsapp } from "react-icons/io";
import logoGrande from "@assets/images/logoGrande.png";
import useWindowSize from "@hooks/useWindowSize";
import {
  ButtonContainer,
  MainDiv,
  StyledImg,
  StyledLogo,
} from "./Footer.styled";
import { Typography } from "@mui/material";

const Footer = () => {
  const { width } = useWindowSize();
  return (
    <MainDiv $width={width}>
      <StyledImg src={logoGrande} />
      <ButtonContainer>
        <StyledLogo />
        <Typography variant="body1">Contactate con nosotros!</Typography>
      </ButtonContainer>
    </MainDiv>
  );
};

export default Footer;
