import React from "react";
import { Contact } from "../store/types.js";
import { ListGroup, Button } from "react-bootstrap";

interface Props {
  contact: Contact;
  onDelete: (id: string) => void;
}

const ContactItem: React.FC<Props> = ({ contact, onDelete }) => (
  <ListGroup.Item className="d-flex justify-content-between align-items-center">
    <div>
      <strong>{contact.value}</strong> - {contact.description}
    </div>
    <Button variant="danger" size="sm" onClick={() => onDelete(contact.id)}>
      Удалить
    </Button>
  </ListGroup.Item>
);

export default ContactItem;
