import { devices } from "@/app/utils/theme";
import Image from "next/image";
import styled from "styled-components";

interface FacilityCardProps {
  title?: string;
  icon?: any;
}

const FacilityCard = ({ title, icon }: FacilityCardProps) => {
  return (
    <Container>
      <Image src={icon} height={30} width={30} alt="Icon" />
      {title}
    </Container>
  );
};

export default FacilityCard;

const Container = styled.div`
  max-width: 300px;
  width: 100%;

  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  background: #fff;

  @media ${devices.mobile} {
    max-width: 155px;
    width: 100%;

    height: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    box-shadow: 0px 2px 4px 0px #0000000f;
    border-radius: 6px;
  }

  @media ${devices.tablet} {
    max-width: 155px;
    width: 100%;

    height: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    font-size: 12px;

    box-shadow: 0px 2px 4px 0px #0000000f;
    border-radius: 6px;
  }
`;
