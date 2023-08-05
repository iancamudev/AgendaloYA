import { useState } from "react";
import {
  CustomQuestionIcon,
  MainDiv,
  StyledArrow,
  StyledTypography,
  TitleContainer,
} from "./FaqCard.styled";

interface Faq {
  title: string;
  body: string;
}

const FaqCard = ({ title, body }: FaqProps) => {
  const [deploy, setDeploy] = useState(false);
  return deploy ? (
    <MainDiv onClick={() => setDeploy(!deploy)}>
      <TitleContainer>
        <CustomQuestionIcon />
        <StyledTypography variant="body1" align="left">
          {title}
        </StyledTypography>
        <StyledArrow $deploy={deploy} />
      </TitleContainer>
      <p className="w-full">{body}</p>
    </MainDiv>
  ) : (
    <MainDiv onClick={() => setDeploy(!deploy)}>
      <TitleContainer>
        <CustomQuestionIcon />
        <StyledTypography variant="body1" align="left">
          {title}
        </StyledTypography>
        <StyledArrow $deploy={deploy} />
      </TitleContainer>
    </MainDiv>
  );
};

export default FaqCard;
