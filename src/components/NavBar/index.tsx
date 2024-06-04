"use client"

import { devices } from "@/app/utils/theme";
import { primaryStrokeColor } from "@/constants";
import Image from "next/image";
import styled from "styled-components";

const NavBar = () => {
  return <>
  <Container>
    <Image src="/logoWeb.svg" alt="Logo-Bhive" width={100} height={50}  unoptimized={true}/>
   <IconContainer>
   <Image src="/call-icon.svg" alt="Logo-Bhive" width={50} height={25}  unoptimized={true}/>
   </IconContainer>
    </Container></>;
};

export default NavBar;

const Container = styled.div`
  width: 100%;
  height: 90px;
  background: #fff;

  padding-left: 40px;
  padding-right: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${devices.mobile} {
    height:72px;
  }
`;

const IconContainer = styled.div`
width: 42px;
height: 42px;
border: solid 1px ${primaryStrokeColor};
border-radius: 4px;

display: flex;
align-items: center;
justify-content: center;

@media ${devices.mobile} {
    height:36px;
    width:36px;
  }`
