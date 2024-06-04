import { devices } from "@/app/utils/theme";
import {
  primaryTextColor,
  secondaryColor,
  secondaryStrokeColor,
  secondaryTextColor,
} from "@/constants";
import Image from "next/image";
import styled from "styled-components";

interface SecondaryButtonProps{
  price?:String;
  discount:any
}
const SecondaryButton = (props: SecondaryButtonProps) => {
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <MainText>Day Pass </MainText>
        <PriceText>
          ₹{(Number(props?.price) * 10 * (100 - props?.discount["10"].value)) / 100}
          <LightText>/ 10 Days</LightText>
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

export default SecondaryButton;

const Container = styled.div`
  width: 166px;
  height: 66px;
  position: relative;
  border-radius: 6px;
  background: ${secondaryColor};
  border: 1px solid ${secondaryStrokeColor};

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
  display: flex;
  gap: 10px;
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

const DiscountTag = styled.div`
  width: 100%;
  max-width: 60px;
  height: 15px;

  border-radius: 3px;
  background: #263238;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  color: #fff;
`;
