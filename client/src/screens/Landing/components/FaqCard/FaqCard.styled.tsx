import { Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { styled } from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  max-width: 700px;
  border-radius: 1rem;
  border: 1px solid #c0c0c0;
  padding: 1.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CustomQuestionIcon = styled(MdOutlineQuestionAnswer)`
  height: 1.5rem;
  width: 1.5rem;
`;

export const StyledTypography = styled(Typography)`
  width: 85%;
`;

export const StyledArrow = styled(IoIosArrowDown)<{ $deploy: Boolean }>`
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  transition-duration: 300ms;
  transform: rotate(${(props) => (props.$deploy ? "180deg" : "0deg")});
`;
