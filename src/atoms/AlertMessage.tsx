import React from "react";
import { Alert } from "react-bootstrap";

interface Props {
  message: string;
}

const AlertMessage: React.FC<Props> = ({ message }) => (
  <Alert
    variant="success"
    style={{
      position: "fixed",
      top: 20,
      right: 20,
      zIndex: 9999,
      minWidth: "300px",
    }}
  >
    {message}
  </Alert>
);

export default AlertMessage;
