import { colors } from "@utils/Variables";
import { styled } from "styled-components";

export const StyledDiv = styled.div<{ $hover: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.salmon};
  padding: 0.5rem 1rem;
  transition-duration: 200ms;
  cursor: pointer;
  opacity: ${(props) => props.$hover && "0.9"};
  transform: ${(props) => props.$hover && "scale(1.03)"};
  max-width: 320px;
  width: 100%;
`;

export const Radio = styled.span<{ $hover: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background-color: ${(props) =>
    props.$hover ? colors.white : colors.salmonLight};
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 1rem;
  transition-duration: 200ms;
`;

export const CardsContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
