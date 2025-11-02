import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../store/reducer";
import { Contact, ContactType } from "../store/types";

interface Props {
  handleClose: () => void;
  handleAlert: (msg: string) => void;
  editingContact?: Contact | null;
}

interface FormValues {
  type: ContactType;
  value: string;
  description: string;
}

const ContactForm: React.FC<Props> = ({
  handleClose,
  handleAlert,
  editingContact,
}) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue } = useForm<FormValues>({
    defaultValues: {
      type: "phone",
      value: "",
      description: "",
    },
  });

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (editingContact) {
      setValue("type", editingContact.type);
      setValue("value", editingContact.value);
      setValue("description", editingContact.description);
    }
  }, [editingContact, setValue]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const onSubmit = (data: FormValues) => {
    if (editingContact) {
      dispatch(editContact({ ...data, id: editingContact.id }));
      handleAlert("Контакт обновлен!");
    } else {
      dispatch(addContact(data));
      handleAlert("Контакт добавлен!");
    }

    reset();
    timeoutRef.current = setTimeout(handleClose, 1500);
  };

  const handleManualClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    reset();
    handleClose();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-2">
        <Form.Label>Тип</Form.Label>
        <Form.Select {...register("type")}>
          <option value="phone">Телефон</option>
          <option value="email">Электронная почта</option>
          <option value="address">Адрес</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Контакт</Form.Label>
        <Form.Control {...register("value")} placeholder="Введите контакт" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Описание</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          {...register("description")}
          placeholder="Введите описание"
        />
      </Form.Group>
      <div className="d-flex gap-2">
        <Button type="submit" variant="primary">
          {editingContact ? "Обновить" : "Добавить"}
        </Button>
        <Button variant="secondary" onClick={handleManualClose}>
          Отмена
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
