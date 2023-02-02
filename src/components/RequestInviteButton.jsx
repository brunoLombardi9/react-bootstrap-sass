import React, { useLayoutEffect, useState } from "react";
import { Button } from "react-bootstrap";
import constants from "../constants";
import "./RequestInviteButton.css";

const RequestInviteButton = ({ hideOnCollapse }) => {
  const buttonText = constants.requestButton;
  const [hideClasses, setHideClasses] = useState("");

  useLayoutEffect(() => {
    hideOnCollapse && setHideClasses("d-none d-lg-block");
  }, []);

  return (
    <Button
      variant=""
      className={`rounded-pill requestInviteBtn text-white ${hideClasses}`}
    >
      {buttonText}
    </Button> 
  );
};

export default RequestInviteButton;
