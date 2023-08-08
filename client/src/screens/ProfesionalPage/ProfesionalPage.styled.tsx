import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { styled } from "styled-components";

export const MainDiv = styled.div`
  margin: auto;
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1300px;
`;

export const ServiceContainer = styled.div<{ $width: number }>`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  place-self: start;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  place-items: center;

  gap: 2rem;
  background-color: #eeeeee;
`;

export const ProfileContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
  width: 100%;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const StyledTwitter = styled(FaTwitterSquare)`
  width: 2rem;
  height: 2rem;
  color: #1a8cd8;
  cursor: pointer;
  transition-duration: 200ms;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledInstagram = styled(FaInstagramSquare)`
  width: 2rem;
  height: 2rem;
  color: #d81a73;
  cursor: pointer;
  transition-duration: 200ms;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledWhatsapp = styled(FaWhatsappSquare)`
  width: 2rem;
  height: 2rem;
  color: #15c71e;
  cursor: pointer;
  transition-duration: 200ms;
  &:hover {
    transform: scale(1.1);
  }
`;
export const StyledFacebook = styled(FaFacebookSquare)`
  width: 2rem;
  height: 2rem;
  color: #0856bd;
  cursor: pointer;
  transition-duration: 200ms;
  &:hover {
    transform: scale(1.1);
  }
`;
