import { devices } from "@/app/utils/theme";
import {
  primaryColor,
  primaryStrokeColor,
  primaryTextColor,
  secondaryTextColor,
} from "@/constants";
import Image from "next/image";
import styled from "styled-components";

interface PrimaryButtonProps{
  price?:String;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <MainText>Day Pass</MainText>
        <PriceText>
          ₹{props?.price}
          <LightText>/ Day</LightText>
        </PriceText>
      </div>
      <Image
        src="/rightIconButton.svg"
        width={20}
        height={20}
        alt="Icon"
        unoptimized={true}
      />
    </Container>
  );
};

export default PrimaryButton;

const Container = styled.div`
  width: 100%;
  max-width: 166px;
  height: 66px;

  border-radius: 6px;
  background: ${primaryColor};
  border: 1px solid ${primaryStrokeColor};

  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  overflow-y: hidden;

  @media ${devices.tablet} {
    width: 140px;
    height: 50px;
  }

  @media ${devices.mobile} {
    width: 140px;
    height: 58px;
  }
`;

const MainText = styled.span`
  font-size: 14px;
  color: ${primaryTextColor};
  
  @media ${devices.tablet} {
    font-size: 12px;
  }

  @media ${devices.mobile} {
    font-size: 12px;
  }
`;

const PriceText = styled.div`
  font-size: 20px;
  color: ${secondaryTextColor};
  font-weight: 600;

  @media ${devices.tablet} {
    font-size: 14px;
  }

  @media ${devices.mobile} {
    font-size: 16px;
  }
`;
const LightText = styled.span`
  font-size: 12px;
  color: ${secondaryTextColor};
  font-weight: 600;

  @media ${devices.tablet} {
    font-size: 10px;
  }

  @media ${devices.mobile} {
    font-size: 10px;
  }
`;
