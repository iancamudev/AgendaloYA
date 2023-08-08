import { Typography } from "@mui/material";
import React from "react";
import image from "@assets/images/demo-prefsional-image.png";
import imagePxp from "@assets/images/demo-servicio-pxp.jpeg";
import imageSemi from "@assets/images/demo-servicio-semipermanente.jpeg";
import imageSoft from "@assets/images/demo-servicio-softgel.jpeg";
import {
  FaqContainer,
  MainDiv,
  ProfileContainer,
  ServiceContainer,
  SocialContainer,
  StyledFacebook,
  StyledInstagram,
  StyledTwitter,
  StyledWhatsapp,
} from "./ProfesionalPage.styled";
import CardService from "../../common/components/CardService/CardService";
import { colors } from "../../utils/Variables";
import useWindowSize from "@hooks/useWindowSize";
import FaqCard from "../Landing/components/FaqCard/FaqCard";
import ProfileImg from "../../common/ui/ProfileImg/ProfileImg";

const ProfesionalPage = () => {
  const { width = 1 } = useWindowSize();
  const displayName = "Michi Nails";
  const category = "Manicurista";
  const socialMediaList = {
    twitter: "https://twitter.com/deviancamu",
    instagram: "https://www.instagram.com/ian.camu/",
    whatsapp: "https://www.instagram.com/ian.camu/",
    facebook: "https://www.instagram.com/ian.camu/",
  };
  return (
    <MainDiv>
      <ProfileContainer>
        <ProfileImg image={image} />
        <Typography>{displayName}</Typography>
        <Typography variant="body2" style={{ color: colors.gray }}>
          {category}
        </Typography>
        <SocialContainer>
          {socialMediaList?.twitter && (
            <a href={socialMediaList.twitter} target="blank">
              <StyledTwitter />
            </a>
          )}
          {socialMediaList?.instagram && (
            <a href={socialMediaList.instagram} target="blank">
              <StyledInstagram />
            </a>
          )}
          {socialMediaList?.whatsapp && (
            <a href={socialMediaList.whatsapp} target="blank">
              <StyledWhatsapp />
            </a>
          )}
          {socialMediaList?.facebook && (
            <a href={socialMediaList.facebook} target="blank">
              <StyledFacebook />
            </a>
          )}
        </SocialContainer>
      </ProfileContainer>
      <Typography variant="h5" style={{ marginTop: "2rem" }}>
        SERVICIOS
      </Typography>
      <ServiceContainer $width={width}>
        <CardService
          title={"Extensiones pxp"}
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
      <FaqContainer style={{ marginBottom: "4rem" }}>
        <Typography
          variant="h5"
          align="center"
          style={{ marginBottom: "1rem" }}
        >
          PREGUNTAS FRECUENTES
        </Typography>
        <FaqCard
          title="Cada cuanto debo hacerme el service?"
          body="El service de extensiones de pestañas y uñas debe realizarse cada 20 dias"
        />
        <FaqCard
          title="Cada cuanto debo hacerme el service?"
          body="El service de extensiones de pestañas y uñas debe realizarse cada 20 dias"
        />
        <FaqCard
          title="Cada cuanto debo hacerme el service?"
          body="El service de extensiones de pestañas y uñas debe realizarse cada 20 dias"
        />
      </FaqContainer>
    </MainDiv>
  );
};

export default ProfesionalPage;
