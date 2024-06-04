import { devices } from "@/app/utils/theme";
import { primaryColor } from "@/constants";
import { AppContext } from "@/store";
import Image from "next/image";
import { useContext } from "react";
import styled from "styled-components";

const HeroSection = () => {
  const { device }: any = useContext(AppContext);

  return (
    <>
      <Container>
        <Wrapper>
          <Right>
            {!(device === "mobile") && (
              <WrapText>
                <Header>Host your meeting with</Header>
                <Header> world-class amenities.</Header>
                <Header>
                  Starting at <ColorText>₹199/-!</ColorText>
                </Header>
              </WrapText>
            )}
          </Right>
        </Wrapper>
      </Container>
      {device === "mobile" && (
        <MobileContent>
          <Header>Host your meeting with world-class</Header>
          <Header>
            amenities <ColorText>₹199/-!</ColorText>
          </Header>
        </MobileContent>
      )}
    </>
  );
};

export default HeroSection;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url("/herobg.svg"), url("/herobg.svg"),
    url("/rightVector.svg");
  background-position: left top, center, right top;
  background-repeat: no-repeat, no-repeat;
  background-size: contain, contain, contain; /* Adjust the size as needed */

  height: 400px;

  @media ${devices.mobile} {
    background-image: url("/rightVector.svg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain; /* Adjust the size as needed */
    height: 450px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  @media ${devices.desktop} {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const Right = styled.div`
  width: 70%;
  height: 100%;
  display: flex;

  @media ${devices.tablet} {
    width: 50%;
  }

  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  border: 1px solid blue;
`;
const WrapText = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
`;

const Header = styled.div`
  font-size: 45px;
  font-weight: 700;

  @media ${devices.tablet} {
    font-size: 32px;
  }

  @media ${devices.mobile} {
    font-size: 20px;
    gap: 5px;
  }

  gap: 10px;
  color: #263238;
  align-items: left;
  display: flex;
`;

const ColorText = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${primaryColor};

  @media ${devices.tablet} {
    font-size: 32px;
  }

  @media ${devices.mobile} {
    font-size: 20px;
  }
`;

const MobileContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
