import React from "react";
import { Button } from "./ui/button";

const IconButton = ({ icon, handleClick }) => {
  return (
    <Button onClick={handleClick} variant="fill" size="icon">
      {icon}
    </Button>
  );
};

export default IconButton;
