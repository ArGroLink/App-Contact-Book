import React from "react";
import { Form } from "react-bootstrap";

interface Props {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  [key: string]: any;
}

const DescriptionField: React.FC<Props> = ({
  value,
  onChange,
  placeholder = "",
  ...rest
}) => (
  <Form.Control
    as="textarea"
    rows={2}
    value={value || ""}
    onChange={onChange}
    placeholder={placeholder}
    {...rest}
  />
);

export default DescriptionField;
