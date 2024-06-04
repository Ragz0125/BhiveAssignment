import Image from "next/image";
import styled from "styled-components";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import { devices } from "@/app/utils/theme";

interface SpaceCardProps {
  data: {
    name: String;
    images: any;
    day_pass_price: String;
    day_pass_discounts_percentage: String;
  };
}

const SpaceCard = (props: SpaceCardProps) => {
  return (
    <Container>
      <WrapHeader>
        <Header>{props?.data?.name}</Header>
        <DistanceBox>
          <Image src={"/distanceIcon.svg"} height={25} width={25} alt="Icon" />
          <DistanceText>6 kms</DistanceText>
        </DistanceBox>
      </WrapHeader>
      <ImageContainer ImageUrl={props?.data?.images[0]}></ImageContainer>
      <ButtonWrapper>
        <PrimaryButton price={props?.data?.day_pass_price} />
        <SecondaryButton
          price={props?.data?.day_pass_price}
          discount={props?.data?.day_pass_discounts_percentage}
        />
      </ButtonWrapper>
    </Container>
  );
};

export default SpaceCard;

const Container = styled.div`
  width: 100%;
  max-width: 365px;
  height: 400px;
  background: #fff;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0px 1.08px 8.63px 0px #0000000f;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;

  @media ${devices.tablet} {
    max-width: 320px;
    height: 340px;
  }

  @media ${devices.mobile} {
    max-width: 320px;
    height: 340px;
  }
`;

const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding-top: 5px;

  @media ${devices.tablet} {
    font-size: 16px;
  }

  @media ${devices.mobile} {
    font-size: 18px;
  }
`;

const DistanceBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 52px;
  height: 52px;
  background: #eee7e7;
  border-radius: 6px;

  @media ${devices.tablet} {
    width: 44px;
    height: 44px;
  }

  @media ${devices.mobile} {
    width: 44px;
    height: 44px;
  }

  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const DistanceText = styled.span`
  font-size: 8px;
  color: #26323880;
`;

const ImageContainer = styled.div<{ ImageUrl: string }>`
  background-image: url(${(props) => "/" + props.ImageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; /* Adjust the size as needed */
  height: 202px;

  border-radius: 5px;

  @media ${devices.mobile} {
    height: 175px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 5px;
`;
