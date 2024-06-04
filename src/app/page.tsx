"use client";

import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import styled from "styled-components";
import { backgroundColor } from "@/constants";
import HeroSection from "@/components/HeroSection";
import BodySection from "@/components/BodySection";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import { AppProvider } from "@/store";

export default function Home() {
  return (
    <>
      <AppProvider>
        <PageContainer>
          <NavBar />
          <HeroSection />
          <BodySection />
          <Footer />
          <Copyright />
        </PageContainer>
      </AppProvider>
    </>
  );
}

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: ${backgroundColor};

  position: relative;
`;
