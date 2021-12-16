import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../Theme";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  z-index: 3;
  text-decoration: underline;
`;

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme} style={{ fontFamily: "lato" }}>
      K.H
    </Logo>
  );
};

export default LogoComponent;
