import { Typography } from "@mui/material";
import { styled } from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContainer = styled.div<{ $width: number | undefined }>`
  display: flex;
  flex-direction: row;
  height: 300px;
  background-color: #ff9a9a;
  border-radius: ${(props) => props.$width && props.$width > 850 && "60px"};
  max-width: 800px;
  width: ${(props) => (props.$width && props.$width > 850 ? "80%" : "100%")};
  gap: 2.5rem;
  margin-bottom: 2.5rem;
  align-items: ${(props) => props.$width && props.$width > 850 && "center"};
`;

export const StyledImg = styled.img<{ $width: number | undefined }>`
  width: ${(props) => (props.$width && props.$width > 850 ? "auto" : "30%")};
  height: ${(props) =>
    props.$width && props.$width > 850 ? "100%" : "fit-content"};
  transform: scale(1.25);
  margin-top: ${(props) => props.$width && props.$width < 850 && "2rem"};
`;

export const ContentContainer = styled.div<{ $width: number | undefined }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  color: #ffffff;
  padding: 1rem;
  text-align: ${(props) =>
    props.$width && props.$width > 600 ? "start" : "center"};
  align-items: ${(props) => props.$width && props.$width < 600 && "center"};
`;

export const CustomTitle = styled(Typography)`
  width: 250px;
`;

export const StyledButton = styled.button`
  background-color: #ffffff;
  width: fit-content;
  font-weight: bold;
  color: #ff9a9a;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  transition-duration: 300ms;
  &:hover {
    transform: scale(1.1);
  }
`;
