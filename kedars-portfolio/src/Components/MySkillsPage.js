import React from "react";
import styled, { ThemeProvider } from "styled-components";
import BackgroundTitle from "../subComponents/BackgroundTitle";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponent from "../subComponents/ParticleComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { LightTheme } from "../Theme";
import { Design, Develope } from "./AllSvgs";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.3em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
  }
  ul,
  p {
    margin-transform: uppercase;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} /> FRONTEND
          </Title>
          <Description>Interactive UI</Description>
          <Description>
            <strong>I Like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description style={{fontSize:"1"}}>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
              <li>WordPress</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Styled-Components</li>
              <li>Tailwind</li>
              <li>React</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Backend
          </Title>
          <Description>I design using the latest tech applications</Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Postgres, Postman, Maven, NodeJS, SpringBoot, MongoDB, SQL, ect.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p> VScode, Github, Eclipse, etc.</p>
          </Description>
        </Main>
        <BackgroundTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
