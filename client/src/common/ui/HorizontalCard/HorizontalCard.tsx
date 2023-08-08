import React from "react";
import {
  CardsContainer,
  Radio,
  StyledDiv,
  StyledRadioGroup,
} from "./HorizontalCard.styled";
import { Typography } from "@mui/material";
import { BsCheck } from "react-icons/bs";

interface Props {
  values: String[];
}

const HorizontalCard = (props) => {
  const [selected, setSelected] = React.useState(-1);
  const [hover, setHover] = React.useState(-1);

  return (
    <CardsContainer>
      {props.values.map((value, index) => (
        <StyledDiv
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(-1)}
          onClick={() => {
            setSelected(index);
            props.onChange(props.values[index]);
          }}
          $hover={hover === index && true}
        >
          <Typography>{value}</Typography>
          <Radio
            $hover={hover === index && true}
            children={selected === index && <BsCheck />}
          />
        </StyledDiv>
      ))}
    </CardsContainer>
  );
};

export default HorizontalCard;
