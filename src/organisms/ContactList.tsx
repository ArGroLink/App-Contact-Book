import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { Contact } from "../store/types";
import { deleteContact } from "../store/reducer";
import { Button, ListGroup } from "react-bootstrap";
import ConfirmModal from "../molecules/ConfirmModal";

interface Props {
  filterType: string;
  onEditContact: (contact: Contact) => void;
}

const ContactList: React.FC<Props> = ({ filterType, onEditContact }) => {
  const contacts = useSelector(
    (state: RootState) => state.contacts.contactList
  );
  const dispatch = useDispatch();

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<string | null>(null);

  const filtered =
    filterType === "all"
      ? contacts
      : contacts.filter((c) => c.type === filterType);

  const grouped: Record<string, Contact[]> = {};
  filtered.forEach((c) => {
    if (!grouped[c.type]) grouped[c.type] = [];
    grouped[c.type].push(c);
  });

  interface TypeObj {
    address: string;
    phone: string;
    email: string;
  }

  const typeObj: TypeObj = {
    address: "Адрес",
    phone: "Телефон",
    email: "Электронная почта",
  };

  const handleDeleteClick = (contactId: string) => {
    setContactToDelete(contactId);
    setShowConfirmModal(true);
  };

  const handleConfirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete));
    }
    setContactToDelete(null);
  };

  const handleCloseModal = () => {
    setShowConfirmModal(false);
    setContactToDelete(null);
  };

  return (
    <>
      {Object.keys(grouped).length ? (
        Object.entries(grouped).map(([type, items]) => (
          <div key={type}>
            <h5>{typeObj[type as keyof TypeObj]}</h5>
            <ListGroup className="mb-3">
              {items.map((c) => (
                <ListGroup.Item
                  key={c.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{c.value}</strong> - {c.description}
                  </div>
                  <div>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                      onClick={() => onEditContact(c)}
                    >
                      Редактировать
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeleteClick(c.id)}
                    >
                      Удалить
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        ))
      ) : (
        <>Список пуст...</>
      )}

      <ConfirmModal
        show={showConfirmModal}
        onHide={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default ContactList;
