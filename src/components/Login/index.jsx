import React from "react";
import { Header } from "./ComponentsLogin/Header";
import  Login  from "./ComponentsLogin/Login";
import { LearnMore } from "./ComponentsLogin/LearnMore";
import { VerticalWrap } from "../MainPage/VerticalWrap";

export const LoginPage = () => (
  <VerticalWrap style={loginPage}>
    <Header />
    <Login />
    <LearnMore />
  </VerticalWrap>
);

export const loginPage = {
  overflow: "hidden",
  borderRadius: 10,
  marginTop: 80
};
