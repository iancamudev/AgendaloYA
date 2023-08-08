import React from "react";
import {
  MainDiv,
  StyledImg,
  StyledPrice,
  StyledTitle,
  TextContainer,
} from "./CardService.styled";
import { Modal, Typography } from "@mui/material";
import Button from "../../ui/Button/Button";
import ModalService from "../ModalService";

interface CardServiceProps {
  title: string;
  image: any;
  price: string;
}
const CardService = ({ title, image, price }: CardServiceProps) => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <MainDiv>
      <ModalService openModal={openModal} setOpenModal={setOpenModal} />
      <StyledImg src={image} onClick={() => setOpenModal(true)} />
      <TextContainer>
        <StyledPrice variant="h6">${price}</StyledPrice>
        <StyledTitle variant="body2">{title}</StyledTitle>
      </TextContainer>
      <Button onClick={() => setOpenModal(true)}>Ver mas</Button>
    </MainDiv>
  );
};

export default CardService;
