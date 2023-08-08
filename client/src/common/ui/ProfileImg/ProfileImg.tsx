import React, { useState } from "react";
import { ModalImg, StyledModal, StyledProfileImg } from "./ProfileImg.styled";
import { Modal } from "@mui/material";

interface Props {
  image: string;
}

const ProfileImg = ({ image }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledModal open={open} onClose={() => setOpen(false)}>
        <ModalImg src={image} />
      </StyledModal>
      <StyledProfileImg src={image} onClick={() => setOpen(true)} />
    </>
  );
};

export default ProfileImg;
