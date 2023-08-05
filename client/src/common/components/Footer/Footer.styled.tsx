import { styled } from "styled-components";
import { colors } from "../../../utils/Variables";
import { IoLogoWhatsapp } from "react-icons/io";

export const MainDiv = styled.div<{ $width?: number }>`
  ${(props) =>
    props.$width && props.$width > 600
      ? `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around; 
      user-select: none;
      background-color: ${colors.salmon};
      height: 6rem;
      width: 100%;
      `
      : `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around; 
      user-select: none;
      padding: 1rem;
      background-color: ${colors.salmon};
      gap: 0.5rem;
      height: auto;
      width: 100%;
      `}
`;

export const StyledImg = styled.img`
  height: 2.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  background-color: #ffffff;
  padding: 1rem;
  height: fit-content;
  border-radius: 2rem;
  transition-duration: 300ms;
  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledLogo = styled(IoLogoWhatsapp)`
  color: #0f8b19;
  height: 2rem;
  width: 2rem;
`;
