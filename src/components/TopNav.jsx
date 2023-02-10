import React, { useLayoutEffect } from "react";
import constants from "../constants";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import RequestInviteButton from "./RequestInviteButton";
import { Image } from "react-bootstrap";
import { useState } from "react";

const TopNav = () => {
  const logo = constants.logo;
  const navOptions = constants.topNav.options;
  const hamburguerBtn = constants.topNav.hamburguerButton;
  const closeBtn = constants.topNav.closeButton;
  const [navIcon, setNavIcon] = useState();
  const [collapsedMenuSeperation, setCollapsedMenuSeparation] = useState();
  const [windowsHeight, setWindowsHeight] = useState(window.innerHeight);
  const [isActive, setIsActive] = useState(false);

  useLayoutEffect(() => {
    isActive ? setNavIcon(closeBtn) : setNavIcon(hamburguerBtn);
  }, [isActive]);

  useLayoutEffect(() => {
    windowsHeight < 480
      ? setCollapsedMenuSeparation("top-60")
      : setCollapsedMenuSeparation("top-40");
  }, [windowsHeight]);

  function handleNavOptions() {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  const Options = () => {
    return navOptions.map((option) => {
      return (
        <Nav.Link href="./" key={option} className="pt-1 pb-1">
          {option}
        </Nav.Link>
      );
    });
  };

  const OptionsContainer = () => {
    return (
      <Container
        className={`d-sm-block d-lg-none position-absolute ${collapsedMenuSeperation} start-50 translate-middle bg-white text-center w-75 p-3 rounded`}
      >
        <Options />
      </Container>
    );
  };

  window.onresize = () => setWindowsHeight(window.innerHeight);

  return (
    <>
      <Navbar bg="white" expand="lg" className="w-100 position-absolute">
        <Container fluid className="pt-3 pb-3 px-4">
          <Image src={logo} />
          <Image
            src={navIcon}
            onClick={handleNavOptions}
            className="p-2 d-block d-lg-none"
          />

          <Nav className="mx-auto d-none d-lg-flex">
            <Options />
          </Nav>

          <RequestInviteButton hideOnCollapse={true} />
        </Container>
      </Navbar>
      {isActive && <OptionsContainer />}
    </>
  );
};

export default TopNav;
