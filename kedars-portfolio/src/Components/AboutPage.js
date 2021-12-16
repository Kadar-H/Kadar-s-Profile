import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponent from "../subComponents/ParticleComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { DarkTheme } from "../Theme";
import DevBuddy from "../assets/Images/ProfileBody.jpg";
import BackgroundTitle from "../subComponents/BackgroundTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% {transform: translateY(-10px)}
50% {transform: translateY(15px) translateX(15px)}
100% {transform: translateY(-10px)}

`;
const DevBuddyContainer = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubutntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <DevBuddyContainer>
          <img className="pic" src={DevBuddy} alt="DevBuddy"></img>
        </DevBuddyContainer>
        <Main>
          Hello World, I'm a Frontend developer working remotely.
          <br /> <br />
          Effectively putting my skills to the test to bring you great web
          designs.
          <br /> <br />I have a vast interest in Tech & like to learn new things
          about Web Apps, BlockChain, CryptoCurrency ect.
          <br /> <br />
          As a team player or independent DEV I Create. Click the power button,
          then click Contact me to say Hi.
        </Main>
        <BackgroundTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
