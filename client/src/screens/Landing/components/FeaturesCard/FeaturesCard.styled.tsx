import { Typography } from "@mui/material";
import { styled } from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d4d4d4;
  border-radius: 2rem;
  padding: 1rem;
  max-width: 500px;
  text-align: start;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const TitleText = styled(Typography)`
  color: #ff9a9a;
  font-weight: bold;
`;

export const BodyText = styled(Typography)`
  color: #474747;
  font-weight: bold;
  padding: 0.5rem;
`;

export const StyledImg = styled.img`
  height: 3.5rem;
`;
