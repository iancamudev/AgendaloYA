import { Modal } from "@mui/material";
import { styled } from "styled-components";

export const StyledProfileImg = styled.img`
  height: 6rem;
  width: 6rem;
  cursor: pointer;
  transition-duration: 200ms;
  &:hover {
    transform: scale(1.05);
    opacity: 0.5;
  }
`;

export const ModalImg = styled.img`
  width: 90%;
  max-width: 500px;
  height: auto;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
