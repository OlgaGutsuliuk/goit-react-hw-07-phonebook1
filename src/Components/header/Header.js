import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./HederStyled";
import Navigation from "./navigation/Navigation";


const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">PHONE_BOOK</Link>
        <Navigation />
    </HeaderContainer>
  );
};

export default Header;
