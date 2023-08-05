import { Typography } from "@mui/material";
import { styled } from "styled-components";

export const StyledImg = styled.img`
  height: 10rem;
  width: auto;
  border-radius: 1rem;
  transition-duration: 200ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    opacity: 0.5;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0.25rem 0.5rem 0;
`;

export const StyledPrice = styled(Typography)``;

export const StyledTitle = styled(Typography)`
  max-width: 150px;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: fit-content;
  height: auto;
`;
