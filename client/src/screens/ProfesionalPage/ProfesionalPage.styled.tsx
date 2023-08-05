import { styled } from "styled-components";

export const MainDiv = styled.div`
  margin: auto;
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1300px;
`;

export const StyledProfileImg = styled.img`
  height: 6rem;
  width: 6rem;
`;

export const ServiceContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  place-self: start;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  background-color: #eeeeee;
`;

export const ProfileContainer = styled.div`
  align-self: center;
  margin-top: 2rem;
`;
