import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import {
  SignInTitle,
  StyledParagraph,
  StyledAnchor,
} from "../components/SignIn.styled";
import MediaQuery from "react-responsive";
import MobileViewTemplate from "../components/MobileViewTemplate";
import MobileWiewTemplateWithExit from "../components/MobileWiewTemplateWithExit";

const PopUpContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.2);
  top: 0;
  left: 0;
`;

const SignInForm = () => {
  return (
    <>
      <SignInTitle>Zaloguj się</SignInTitle>
      <Label>{"Email"}</Label>
      <Input type={"email"} />
      <Label>{"Hasło"}</Label>
      <Input type={"password"} />
      <StyledParagraph>
        Nie masz konta? Założ je{" "}
        <Link to="../pages/SignUpDesktop">
          <StyledAnchor>tutaj</StyledAnchor>
        </Link>
      </StyledParagraph>
      <Button type={"submit"} label={"Zaloguj"} />
    </>
  );
};

const SignIn = () => {
  return (
    <>
      <MediaQuery maxWidth={1023}>
        <MobileViewTemplate>
          <SignInForm />
        </MobileViewTemplate>
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <PopUpContainer>
          <MobileWiewTemplateWithExit popUp>
            <SignInForm />
          </MobileWiewTemplateWithExit>
        </PopUpContainer>
      </MediaQuery>
    </>
  );
};

export default SignIn;
