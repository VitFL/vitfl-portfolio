import React, { useState, useEffect } from 'react';
import { Alert } from 'reactstrap';

const AlertItem = ({ color, text, timeout }) => {
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
      {text}
    </Alert>
  );
};

export default AlertItem;
