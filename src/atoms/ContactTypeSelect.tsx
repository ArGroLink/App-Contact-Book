import React from "react";
import { Form } from "react-bootstrap";
import { ContactType } from "../store/types";

interface Props {
  value?: ContactType;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  [key: string]: any;
}

const ContactTypeSelect: React.FC<Props> = ({ value, onChange, ...rest }) => {
  return (
    <Form.Select value={value} onChange={onChange} {...rest}>
      <option value="phone">Телефон</option>
      <option value="email">Электронная почта</option>
      <option value="address">Адрес</option>
    </Form.Select>
  );
};

export default ContactTypeSelect;
