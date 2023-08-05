import { Modal } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { UseFormStateProps } from "react-hook-form";
import {
  ContentDiv,
  FlexLayout,
  MainDiv,
  StyledImg,
} from "./ModalService.styled";
import Button from "../../ui/Button/Button";

import image from "@assets/images/demo-servicio-pxp.jpeg";

interface Props {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}
const ModalService = ({ openModal, setOpenModal }: Props) => {
  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <FlexLayout>
        <MainDiv>
          <ContentDiv>
            <StyledImg src={image} />
          </ContentDiv>
          <Button variant="secondary" bold onClick={() => setOpenModal(false)}>
            Cerrar
          </Button>
        </MainDiv>
      </FlexLayout>
    </Modal>
  );
};

export default ModalService;
