import styled from "styled-components";
import FacilityCard from "../FacilityCard";
import { facilityData } from "@/app/utils/data";
import { devices } from "@/app/utils/theme";
import { useContext, useEffect, useState } from "react";
import SpaceCard from "../SpaceCard";
import { AppContext } from "@/store";
import Image from "next/image";

const BodySection = () => {
  const [spacesData, setSpacesData] = useState<any>();
  const { device }: any = useContext(AppContext);

  const getData = async () => {
    const url =
      "https://api.github.com/repos/MujtabaKably/bhive-interview-project-data/contents/data.json";

    try {
      const response = await fetch(url);
      const data = await response.json();
      // Extract and decode content from the response
      const content = Buffer.from(data.content, "base64").toString("utf-8");
      console.log(JSON.parse(content));
      setSpacesData(JSON.parse(content));
    } catch (error) {
      console.error("Error fetching data from GitHub:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <Header>Why Choose us?</Header>
          <Grid>
            {facilityData.map((item, index) => (
              <FacilityCard title={item.title} icon={item.icon} />
            ))}
          </Grid>
        </Wrapper>
      </Container>

      <Container>
        <Wrapper>
          {!(device === "mobile") ? (
            <Header>Our Spaces Overview</Header>
          ) : (
            <Header>
              Our Spaces{" "}
              <Image src="/rightArrow.svg" width={50} height={50} alt="Icon" />
            </Header>
          )}
          <SpaceGrid>
            {spacesData?.map((item: any, index: number) => (
              <SpaceCard data={item} />
            ))}
          </SpaceGrid>
        </Wrapper>
      </Container>
    </>
  );
};

export default BodySection;

const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${devices.mobile} {
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  width: 80%;
`;

const Header = styled.div`
  font-size: 32px;
  font-weight: 700;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  @media ${devices.mobile} {
    font-size: 24px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;

  padding-top: 45px;

  align-items: center;
  justify-content: center;

  @media ${devices.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  @media ${devices.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    padding-top: 20px;
  }
`;

const SpaceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  padding-top: 45px;

  align-items: center;
  justify-content: center;

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  @media ${devices.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
    padding-top: 20px;

    & > div:nth-child(n + 4) {
      display: none;
    }
  }
`;
