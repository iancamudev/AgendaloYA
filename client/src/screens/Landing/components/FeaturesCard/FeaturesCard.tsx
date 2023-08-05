import {
  BodyText,
  MainDiv,
  TitleText,
  TitleContainer,
  StyledImg,
} from "./FeaturesCard.styled";

interface CardProps {
  title: string;
  body: string;
  img: string;
}

const CaracteristicasCard = ({ title, body, img }: CardProps) => {
  return (
    <MainDiv>
      <TitleContainer>
        <StyledImg src={img} />
        <TitleText variant="h5">{title}</TitleText>
      </TitleContainer>
      <BodyText variant="body1">{body}</BodyText>
    </MainDiv>
  );
};

export default CaracteristicasCard;
