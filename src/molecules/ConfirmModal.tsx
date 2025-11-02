import React from "react";
import { Modal, Button } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

const ConfirmModal: React.FC<Props> = ({
  show,
  onHide,
  onConfirm,
  title = "Подтверждение удаления",
  message = "Вы уверены, что хотите удалить этот контакт? Это действие нельзя отменить.",
}) => {
  const handleConfirm = () => {
    onConfirm();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Отмена
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
