import React from "react";
import MobileViewTemplate from "../components/MobileViewTemplate";
import SmallButton from "../components/SmallButton";
import Label from "../components/Label";
import Input from "../components/Input";
import { SignInTitle } from "../components/SignIn.styled";
import styled from "styled-components";
import MediaQuery from "react-responsive";

const SlideItem = styled.span`
  font-size: 2rem;
`;

const SlideItemActive = styled(SlideItem)`
  color: #fbbb9a;
  font-size: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
  align-items: center;
`;

const SignUpFull6FormMobile = () => {
  return (
    <MediaQuery maxDeviceWidth={1024}>
      <MobileViewTemplate>
        <SignInTitle>Podstawowe Dane</SignInTitle>
        <Label>{"Imię"}</Label>
        <Input type={"text"} />
        <Label>{"Nazwisko"}</Label>
        <Input type={"text"} />
        <Label>{"Email"}</Label>
        <Input type={"email"} />
        <Label>{"Hasło"}</Label>
        <Input type={"password"} />
        <ButtonContainer>
          <SmallButton type={"submit"} label={"Dalej"} />
        </ButtonContainer>
        <SlideContainer>
          <SlideItemActive>•</SlideItemActive>
          <SlideItem>•</SlideItem>
          <SlideItem>•</SlideItem>
          <SlideItem>•</SlideItem>
        </SlideContainer>
      </MobileViewTemplate>
    </MediaQuery>
  );
};

export default SignUpFull6FormMobile;
