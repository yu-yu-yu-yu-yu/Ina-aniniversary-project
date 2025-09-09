import React from "react";
import styled from "styled-components";
import HomeFooter from "./HomeFooter";
import Logo from "./Logo";
import Lore from "./Lore";
import Quote from "./Quote";

const Home = styled.div``;

const HomeContent = (): JSX.Element => {
  return (
    <Home>
      <Logo />
      <Quote />
      <Lore />
      <HomeFooter />
    </Home>
  );
};

export default HomeContent;
