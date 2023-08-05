import { styled } from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-bottom: 5rem;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 2rem;
  align-items: center;
`;

export const StarImg = styled.img`
  height: 3rem;
`;

export const StyledGrid = styled.div<{ $width?: number }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$width && props.$width > 850 ? "1fr 1fr" : "1fr"};
  gap: 2.5rem;
  margin: 2.5rem 1rem 0 1rem;
`;
