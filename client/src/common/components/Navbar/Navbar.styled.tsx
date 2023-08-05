import { styled } from "styled-components";
import { colors } from "../../../utils/Variables";
import { Link } from "react-router-dom";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  background-color: ${colors.salmon};
  height: auto;
`;

export const StyledLogo = styled.img`
  height: 2rem;
  cursor: pointer;
  transition-duration: 100ms;
  &:hover {
    transform: scale(1.05);
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-self: center;
`;

export const NavButton = styled.button`
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  font-weight: bold;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  color: ${colors.salmon};
  transition-duration: 300ms;
  &:hover {
    background-color: ${colors.salmon};
    color: ${colors.white};
    outline: 2px solid ${colors.white};
  }
`;
