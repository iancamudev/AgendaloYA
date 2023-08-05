import { Typography } from "@mui/material";
import React, { ReactNode, MouseEvent } from "react";
import { StyledBtn, StyledP } from "./Button.styled";

interface ButtonProps {
  variant?: string;
  size?: string;
  bold?: boolean;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  bold = false,
  onClick,
}: ButtonProps) => {
  return (
    <StyledBtn $variant={variant} $size={size} $bold={bold} onClick={onClick}>
      <StyledP>{children}</StyledP>
    </StyledBtn>
  );
};

export default Button;
