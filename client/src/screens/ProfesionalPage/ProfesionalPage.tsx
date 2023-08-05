import { Typography } from "@mui/material";
import React from "react";
import image from "@assets/images/demo-prefsional-image.png";
import imagePxp from "@assets/images/demo-servicio-pxp.jpeg";
import imageSemi from "@assets/images/demo-servicio-semipermanente.jpeg";
import imageSoft from "@assets/images/demo-servicio-softgel.jpeg";
import {
  MainDiv,
  ProfileContainer,
  ServiceContainer,
  StyledProfileImg,
} from "./ProfesionalPage.styled";
import CardService from "../../common/components/CardService/CardService";
import { colors } from "../../utils/Variables";

const ProfesionalPage = () => {
  const displayName = "Michi Nails";
  const category = "Manicurista";
  return (
    <MainDiv>
      <ProfileContainer>
        <StyledProfileImg src={image}></StyledProfileImg>
        <Typography>{displayName}</Typography>
        <Typography variant="body2">{category}</Typography>
      </ProfileContainer>
      <Typography variant="h5" style={{ marginTop: "2rem" }}>
        SERVICIOS
      </Typography>
      <ServiceContainer>
        <CardService
          title={"Pelo por pelo"}
          image={imagePxp}
          price="1900"
        ></CardService>
        <CardService
          title={"Semipermanente"}
          image={imageSemi}
          price="1900"
        ></CardService>
        <CardService
          title={"Soft gel"}
          image={imageSoft}
          price="1900"
        ></CardService>
      </ServiceContainer>
    </MainDiv>
  );
};

export default ProfesionalPage;
