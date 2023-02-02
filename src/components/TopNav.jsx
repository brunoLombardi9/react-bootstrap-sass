import React from "react";
import constants from "../constants";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import RequestInviteButton from "./RequestInviteButton";
import { Image } from "react-bootstrap";

const TopNav = () => {
  const logo = constants.logo;
  const navOptions = constants.topNav.options;

  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="./">
          <Image src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="mx-auto">
            {navOptions.map((option) => {
              return (
                <Nav.Link href="./" key={option}>
                  {option}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
        <RequestInviteButton hideOnCollapse={true}/>
      </Container>
    </Navbar>
  );
};

export default TopNav;
