import { devices } from "@/app/utils/theme";
import { primaryTextColor, secondaryTextColor } from "@/constants";
import { AppContext } from "@/store";
import Image from "next/image";
import { useContext } from "react";
import styled from "styled-components";

const Footer = () => {
  const { device }: any = useContext(AppContext);
  return (
    <>
      <Contain>
        <WrapTitle>
          <Header>Download our app now</Header>
        </WrapTitle>
      </Contain>
      <Container>
        <Wrapper>
          <CustomizedImage />
          <div style={{ width: "60%" }}>.</div>
          <WrapContent>
            {!(device === "mobile") && (
              <>
                <Content>
                  Boost your productivity with the BHIVE Workspace app. Elevate
                  your workspace, collaborate efficiently, and unlock exclusive
                  perks.
                </Content>

                <div style={{ width: "100%", display: "flex", gap: "10px" }}>
                  <Image
                    src="/googlePlayImage.svg"
                    width={110}
                    height={100}
                    alt="Img"
                  />

                  <Image
                    src="/appStore.svg"
                    width={100}
                    height={100}
                    alt="Img"
                  />
                </div>
              </>
            )}
            {device === "mobile" && (
              <MobileIcons>
                <Image
                  src="/googlePlayImage.svg"
                  width={110}
                  height={100}
                  alt="Img"
                />

                <Image src="/appStore.svg" width={100} height={100} alt="Img" />
              </MobileIcons>
            )}
          </WrapContent>
        </Wrapper>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  padding: 50px;
  padding-top: 170px;

  position: relative;

  display: flex;
  //   flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${devices.mobile} {
    padding: 20px;
  }
`;

const Contain = styled.div`
  width: 100%;
  padding: 50px;

  @media ${devices.mobile} {
    padding: 20px;
  }

  display: flex;

  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 265px;
  box-shadow: 0px 1px 8px 0px #0000000f;
  background: #fff;

  display: flex;
  justify-content: space-between;

  border-radius: 18px;
  width: 80%;
`;

const WrapTitle = styled.div`
  width: 80%;
`;

const CustomizedImage = styled.div`
  background-image: url(/footerImage.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; /* Adjust the size as needed */
  height: 400px;
  width: 400px;

  @media ${devices.mobile} {
    height: 200px;
    width: 200px;
    position: absolute;
    top: 10%;
    left: 20%;
  }

  position: absolute;
  top: 20px;
  left: 15%;
  z-index: 10;
  border-radius: 5px;
`;

const Header = styled.span`
  color: ${primaryTextColor};
  font-size: 32px;
  font-weight: 700;

  @media ${devices.tablet} {
    font-size: 24px;
    padding: 0;
  }

  @media ${devices.mobile} {
    font-size: 24px;
    padding: 0;
  }
`;

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-right: 50px;

 
`;

const Content = styled.div`
  font-size: 16px;
  color: ${secondaryTextColor};
  font-weight: 500;
  width: 100%;

   @media ${devices.tablet} {
    visibility: hidden;
  }
`;

const MobileIcons = styled.div`
  width: 100%;
  padding-left: 4%;
  padding-top: 10px;
  position: absolute;
  bottom: 0;
`;
