import React from 'react';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';

const StageConstruction = () => {
  return (
    <Container className="my-4">
      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>TRANCHE 1 COMPLETION DETAILS</h5>
        </div>
        <Card.Body>
          <Row>
            <Col md={6}>
              <p><strong>Percentage of property completed</strong><br />100%</p>
            </Col>
            <Col md={6}>
              <p><strong>Surrounding development details required</strong><br />40%</p>
            </Col>
          </Row>

          <div className="mt-4">
            <h6>ACTIVITY COMPLETED</h6>
            <Row>
              <Col md={6}>
                <p><span className="me-2">□</span> PLINTH</p>
                <p><span className="me-2">✓</span> R.C.C. ABOVE GROUND</p>
                <p><span className="me-2">□</span> BRICKWORK</p>
                <p><span className="me-2">✓</span> INTERNAL PLASTER</p>
                <p><span className="me-2">✓</span> EXTERNAL PLASTER</p>
              </Col>
              <Col md={6}>
                <p><span className="me-2">✓</span> FLOORING</p>
                <p><span className="me-2">✓</span> PLUMBING & ELECTRIC WORK</p>
                <p><span className="me-2">✓</span> DOOR, WINDOW AND PAINT</p>
                <p><span className="me-2">✓</span> FINISHING AND POSSESSION</p>
                <p><span className="me-2">✓</span> TOTAL COMPLETION</p>
              </Col>
            </Row>
          </div>

          <div className="mt-4">
            <h6>Remarks</h6>
            <p>Property image and Guideline value upload document</p>
            
            <Table bordered className="mt-3">
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Property Document</td>
                  <td>Not Uploaded</td>
                </tr>
                <tr>
                  <td>Map</td>
                  <td>Not Uploaded</td>
                </tr>
                <tr>
                  <td>Plan</td>
                  <td>Not Uploaded</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StageConstruction;