import React, { useState, useEffect } from "react";
import { Alert } from "reactstrap";

const AlertItem = ({ color, body, timeout }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onDismiss = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      onDismiss();
    }, timeout);
  }, [timeout]);

  return (
    <Alert isOpen={isOpen} color={color} toggle={onDismiss}>
      {body}
    </Alert>
  );
};

export default AlertItem;
