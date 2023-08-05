import { styled } from "styled-components";
import { colors } from "../../../utils/Variables";

export const StyledBtn = styled.button<{
  $variant?: string;
  $size?: string;
  $bold: boolean;
}>`
  background-color: ${(props) => {
    switch (props.$variant) {
      case "primary":
        return colors.salmon;
      case "secondary":
        return colors.white;
      case "sell":
        return colors.green;
    }
  }};
  padding: ${(props) => {
    switch (props.$size) {
      case "small":
        return "0.175rem 0.5rem";
      case "medium":
        return "0.375rem 1rem";
      case "large":
        return "0.75rem 2rem";
      default:
        return "0.375rem 1rem";
    }
  }};
  outline: ${(props) => props.$variant && `3px solid ${colors.salmon}`};
  color: ${(props) => {
    switch (props.$variant) {
      case "primary":
        return colors.white;
      case "secondary":
        return colors.salmon;
      default:
        return colors.white;
    }
  }};
  font-weight: ${(props) => (props.$bold ? "800" : "400")};
  border-radius: 100px;
  transition-duration: 100ms;
  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledP = styled.p``;
