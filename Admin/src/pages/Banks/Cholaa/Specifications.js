import React from 'react';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';

const Specifications = () => {
  return (
    <Container className="my-4">
      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>AREA TYPE</h5>
        </div>
        <Card.Body>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Level</th>
                <th>600</th>
                <th>500</th>
                <th>ESG0</th>
                <th>S0000001</th>
                <th>S0000002</th>
                <th>S0000003</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ground floor</td>
                <td>600</td>
                <td>500</td>
                <td>NxO</td>
                <td>SA0000001</td>
                <td>SA0000002</td>
                <td>SA0000003</td>
              </tr>
              <tr>
                <td>Floor 1</td>
                <td>600</td>
                <td>500</td>
                <td>NxO</td>
                <td>SA0000001</td>
                <td>SA0000002</td>
                <td>SA0000003</td>
              </tr>
            </tbody>
          </Table>
          <Row className="mt-3">
            <Col md={4}>
              <p><strong>Built up Area</strong><br />1200</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>VALUATION DETAILS</h5>
        </div>
        <Card.Body>
          <Row>
            <Col md={4}>
              <p><strong>Total Value of Phone</strong><br />2</p>
            </Col>
            <Col md={4}>
              <p><strong>Total Market Value</strong><br />2580000</p>
            </Col>
            <Col md={4}>
              <p><strong>FSU/TAR</strong><br />-</p>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={4}>
              <p><strong>Permission</strong><br />2.00</p>
            </Col>
            <Col md={4}>
              <p><strong>AMENITIES</strong><br />-</p>
            </Col>
            <Col md={4}>
              <p><strong>Amendments</strong><br />-</p>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={4}>
              <p><strong>DBSTRESS</strong><br />-</p>
            </Col>
            <Col md={4}>
              <p><strong>DBstresses (Total No. 5)</strong><br />00</p>
            </Col>
            <Col md={4}>
              <p><strong>CONSIDER CARPET</strong><br />-</p>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={4}>
              <p><strong>Carpet Area (cc feet)</strong><br />980</p>
            </Col>
            <Col md={4}>
              <p><strong>REGYAL DETAILS</strong><br />-</p>
            </Col>
            <Col md={4}>
              <p><strong>Green Monthly Reward for Italian Properties in Locality</strong><br />-</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>ADDITIONAL DETAILS</h5>
        </div>
        <Card.Body>
          <Row>
            <Col md={4}>
              <p><strong>Number</strong><br />-</p>
            </Col>
            <Col md={4}>
              <p><strong>Name of Name</strong><br />1</p>
            </Col>
            <Col md={4}>
              <p><strong>Total Value (Total Market Value = Total Amendments Value)</strong><br />2580000</p>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={4}>
              <p><strong>Achieved</strong><br />2.00</p>
            </Col>
            <Col md={4}>
              <p><strong>Area Quantity</strong><br />1</p>
            </Col>
            <Col md={4}>
              <p><strong>Distance Value</strong><br />20%/0/0</p>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={4}>
              <p><strong>Carpet Area (cc mm)</strong><br />89,2785</p>
            </Col>
            <Col md={4}>
              <p><strong>Ordering Value</strong><br />47%</p>
            </Col>
            <Col md={4}>
              <p><strong>Amount</strong><br />0</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Specifications;