import React, { useState } from "react";
import ContactBookTemplate from "../../templates/ContactBookTemplate";
import { Button, Container, Toast, Row, Col } from "react-bootstrap";

const ContactsPage: React.FC = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleClose = () => setShowCanvas(false);
  const handleShow = () => setShowCanvas(true);

  const handleAlert = (msg: string) => {
    setAlertMessage(msg);
    setTimeout(() => setAlertMessage(null), 2000);
  };

  return (
    <>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="text-center">
              <h1 className="mb-4">Контактная книжка</h1>
              <Button onClick={handleShow} className="mb-4">
                Добавить контакт
              </Button>
            </div>
            <ContactBookTemplate
              show={showCanvas}
              handleClose={handleClose}
              handleAlert={handleAlert}
            />
          </Col>
        </Row>
      </Container>

      {alertMessage && (
        <Toast
          onClose={() => setAlertMessage(null)}
          show={!!alertMessage}
          delay={2000}
          autohide
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 9999,
          }}
        >
          <Toast.Body>{alertMessage}</Toast.Body>
        </Toast>
      )}
    </>
  );
};

export default ContactsPage;
