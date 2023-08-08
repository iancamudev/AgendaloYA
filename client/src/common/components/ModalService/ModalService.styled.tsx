import { styled } from "styled-components";
import { colors } from "../../../utils/Variables";
import { Stepper } from "@mui/material";

export const FlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  max-width: 1000px;
  background-color: ${colors.white};
`;

export const StyledStepper = styled(Stepper)<{ $width: number }>`
  align-self: ${(props) => (props.$width > 600 ? "center" : "start")};
  margin: 1rem 1rem 0 1rem;
`;
