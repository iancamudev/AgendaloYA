import { styled } from "styled-components";
import { colors } from "@utils/Variables";

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

export const ContentDiv = styled.div<{ $width: number }>`
  margin-top: 2rem;
  display: flex;
  flex-direction: ${(props) => (props.$width > 800 ? "row" : "column")};
  align-items: ${(props) => props.$width < 800 && "center"};
  gap: 2rem;
  width: 95%;
  min-height: 85%;
`;

export const StyledImg = styled.img`
  max-width: 20rem;
  height: fit-content;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 2rem 0 1rem 0;
  justify-content: flex-end;
  gap: 1rem;
`;

export const ClarificationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledUl = styled.ul`
  list-style-type: square;
  color: #525252;
  margin-left: 1rem;
  font-size: 14px;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
