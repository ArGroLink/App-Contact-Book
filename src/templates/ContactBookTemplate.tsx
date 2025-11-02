import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import ContactForm from "../molecules/ContactForm";
import FilterPanel from "../organisms/FilterPanel";
import ContactList from "../organisms/ContactList";
import { Contact } from "../store/types";

interface Props {
  show: boolean;
  handleClose: () => void;
  handleAlert: (msg: string) => void;
}

const ContactBookTemplate: React.FC<Props> = ({
  show,
  handleClose,
  handleAlert,
}) => {
  const [filterType, setFilterType] = useState<string>("all");
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(show);

  const handleEditContact = (contact: Contact) => {
    setEditingContact(contact);
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setEditingContact(null);
    setIsFormOpen(false);
    handleClose();
  };

  React.useEffect(() => {
    setIsFormOpen(show);
    if (!show) {
      setEditingContact(null);
    }
  }, [show]);

  const formTitle = editingContact
    ? "Редактировать контакт"
    : "Добавить контакт";

  return (
    <>
      <FilterPanel filterType={filterType} setFilterType={setFilterType} />

      <ContactList filterType={filterType} onEditContact={handleEditContact} />

      <Offcanvas
        show={isFormOpen}
        onHide={handleFormClose}
        placement="end"
        style={{ width: "600px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{formTitle}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ContactForm
            handleClose={handleFormClose}
            handleAlert={handleAlert}
            editingContact={editingContact}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ContactBookTemplate;
