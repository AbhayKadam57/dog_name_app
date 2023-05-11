import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7em 1.5em;
  height: 4em;
  background-color: #210070;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const Logo = styled.div`
  flex: 1;

  h1 {
    font-size: 1.5em;
  }
`;

const Navgation = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2em;
  justify-content: flex-end;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <h1>DOGOFIND</h1>
      </Logo>
      <Navgation>
        <Links to="/">Random Image</Links>
        <Links to="/breed">Image by Breed</Links>
      </Navgation>
    </Container>
  );
};

export default Navbar;
