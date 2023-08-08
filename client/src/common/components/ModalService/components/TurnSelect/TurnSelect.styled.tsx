import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { colors } from "@utils/Variables";
import { styled } from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
  align-items: center;
`;

export const StyledCalendar = styled(DateCalendar)`
  background-color: ${colors.grayLight};
  border-radius: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  margin: 2rem 0 1rem 0;
  justify-content: flex-end;
  gap: 1rem;
`;
