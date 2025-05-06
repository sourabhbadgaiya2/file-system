import React, { useState } from "react";
import { Card, Form, Button, ListGroup, Alert } from "react-bootstrap";

const RemarksForm = () => {
  // Pre-filled data (from the image)
  const initialRemarks = [
    "1. GIVEN XEROX COPY OF SALE DEED IT IS FAVOUR OF MR. ROOPAN SEWAN SOJMR, MOTILAL SEWANI.",
    "2. DURING PROPERTY VISIT MR. QAQAM KUMAR JI MET AT THE PROPERTY WHO IS CUSTOMER WIFE CONTACT NO. 7666888270. IT WAS CLEARLY EXPLAINED TO HIM THAT THE PROPERTY VISIT IS BEING DONE FOR VALUATION PURPOSE IN RELATION WITH LOAN PROPOSAL.",
    "3. RATE HAS BEEN CONFIRM FORM MARKET ENQUIRY.",
    "4. PROPERTY IS SITUATED AT SURROUNDING AREA OF LOCALITY IS UNDER DEV. RESI-CUM AGRICULTURE ZONING SURROUNDING AREA DEVELOPMENT IS 30%.",
    "5. AT SITE PROPERTY IS UNDER CONST. RESIDENTIAL HOUSE WHICH IS WORK DONE UP TO SLAB, BRICK & INTERIOR PLASTER WORK COMPLETE AND FLOORING ELECTRIFICATION AND OUTSIDE PLASTER WORKS W.I.P.",
    "6. PROPERTY IS IDENTIFIED BY FOUR SIDE BOUNDARIES OF GIVEN SALE DEED AND LOCAL ENQUIRE.",
    "7. LAYOUT PLAN, BUILDING PERMISSION, MAP ESTIMATE RECEIVED, WHICH IS APPROVED BY BMC."
  ];

  const [remarks, setRemarks] = useState(initialRemarks);
  const [newRemark, setNewRemark] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleAddRemark = () => {
    if (newRemark.trim()) {
      setRemarks([...remarks, newRemark]);
      setNewRemark("");
    }
  };

  const handleSubmit = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    console.log("Submitted Remarks:", remarks); // Replace with API call
  };

  return (
    <Card className="p-4 shadow-sm">
      <Card.Body>
        <h5 className="text-primary mb-4">Remarks and Declaration *</h5>

        {showAlert && (
          <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
            Remarks submitted successfully!
          </Alert>
        )}

        <ListGroup className="mb-4">
          {remarks.map((item, index) => (
            <ListGroup.Item key={index}>{item}</ListGroup.Item>
          ))}
        </ListGroup>

        <Form.Group className="mb-3">
          <Form.Label><strong>Add New Remark</strong></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={newRemark}
            onChange={(e) => setNewRemark(e.target.value)}
            placeholder="Type additional remarks here..."
          />
        </Form.Group>

        <div className="d-flex gap-3 flex-wrap">
          <Button variant="primary" onClick={handleAddRemark}>
            Add Remark
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            SUBMIT
          </Button>
          <Button variant="info">Chat</Button>
          <Button variant="danger">DELETE TRANSACTION</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RemarksForm;