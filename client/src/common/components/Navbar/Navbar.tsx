import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logoAgya from "@assets/images/logoAgya.png";
import logoChico from "@assets/images/logoChico.png";
import useWindowSize from "@hooks/useWindowSize";
import {
  AccountContainer,
  MainDiv,
  NavButton,
  NavigationContainer,
  StyledLink,
  StyledLogo,
} from "./Navbar.styled";

const Navbar = () => {
  const { width } = useWindowSize();
  const navigate = useNavigate();

  return (
    <MainDiv>
      <StyledLogo
        src={width && width > 500 ? logoAgya : logoChico}
        onClick={() => navigate("/")}
      />

      {width && width > 800 && (
        <NavigationContainer>
          <NavButton>Caracteristicas</NavButton>
          <NavButton>Planes</NavButton>
          <NavButton>Preguntas frecuentes</NavButton>
        </NavigationContainer>
      )}

      <AccountContainer>
        <StyledLink to="/login">
          {width && width > 500 ? "Inicia sesion" : "Iniciar"}
        </StyledLink>
        <StyledLink to="/register">Registrate</StyledLink>
      </AccountContainer>
    </MainDiv>
  );
};

export default Navbar;
