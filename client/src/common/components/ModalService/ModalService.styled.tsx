import { styled } from "styled-components";
import { colors } from "../../../utils/Variables";

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
  align-self: center;
  width: 90%;
  max-width: 1000px;
  height: 600px;
  background-color: ${colors.white};
`;

export const ContentDiv = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  width: 90%;
`;

export const StyledImg = styled.img`
  max-width: 15rem;
`;
