import React from "react";
import { Form } from "react-bootstrap";

interface Props {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  [key: string]: any;
}

const TextInput: React.FC<Props> = ({
  value,
  onChange,
  placeholder = "",
  ...rest
}) => {
  return (
    <Form.Control
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default TextInput;
