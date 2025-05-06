import React from 'react';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';

const PropertyDetails = () => {
  return (
    <Container className="my-4">
      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>PROPERTY DETAILS AS PER SITE</h5>
        </div>
        <Card.Body>
          <Row>
            <Col md={6}>
              <p><strong>Property Owner / Sales Name</strong><br />SHT NANTA TYAGI WO YIB. C</p>
              <p><strong>Survey No</strong><br />P/O ISLAR, 85/1/12</p>
            </Col>
            <Col md={6}>
              <p><strong>Builder Name</strong><br />Builder Content No</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>ADDRESS AS PER SITE</h5>
        </div>
        <Card.Body>
          <Row>
            <Col md={6}>
              <p><strong>Date No / Home No / File No</strong><br />N.MO. 129</p>
              <p><strong>Celebrity / Server / Locality</strong><br />WARD NO.TR.SAL.A.J.LAKE CITY</p>
            </Col>
            <Col md={6}>
              <p><strong>Landmark</strong><br />NEAR HATA TEMPLE</p>
              <p><strong>Village</strong><br />LABBANGERA</p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <p><strong>State</strong><br />INIZUR</p>
              <p><strong>City</strong><br />BRIPALL</p>
            </Col>
            <Col md={6}>
              <p><strong>District</strong><br />BRIPALL</p>
              <p><strong>Pincode</strong><br />462033</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p><strong>Whether Boundaries Meetings</strong><br />NO</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>ADDRESS AS PER DOCUMENT</h5>
        </div>
        <Card.Body>
          <p><strong>Address Line 1</strong><br />128.Ward no TB tumbahedo huzur.Birpall.</p>
          <p><strong>Address Line 2</strong><br />Bike J city., 85/1/12,Birpall/MADING PRANCISH</p>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>LOCATION</h5>
        </div>
        <Card.Body>
          <Row>
            <Col md={6}>
              <p><strong>Latitude</strong><br />22.33844</p>
            </Col>
            <Col md={6}>
              <p><strong>Longitude</strong><br />77.38559</p>
            </Col>
          </Row>
          <p><strong>Nearest branch</strong><br />BRIPALL</p>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>BOUNDARIES</h5>
        </div>
        <Card.Body>
          <Row>
            <Col md={6}>
              <div className="mb-2"><strong>As per DECED</strong></div>
              <Table striped bordered size="sm">
                <tbody>
                  <tr><td>East</td><td>PLOT NO. 130</td></tr>
                  <tr><td>West</td><td>PLOT NO. 140</td></tr>
                  <tr><td>North</td><td>PLOT NO. 120</td></tr>
                </tbody>
              </Table>
            </Col>
            <Col md={6}>
              <div className="mb-2"><strong>As per Actual Site</strong></div>
              <Table striped bordered size="sm">
                <tbody>
                  <tr><td>East</td><td>OPEN PLOT</td></tr>
                  <tr><td>West</td><td>OPEN PLOT</td></tr>
                  <tr><td>North</td><td>NOISE OF ATTERDRA JJ</td></tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>DIMENSIONS</h5>
        </div>
        <Card.Body>
          <Row>
            <Col md={6}>
              <div className="mb-2"><strong>As per DECED</strong></div>
              <Table striped bordered size="sm">
                <tbody>
                  <tr><td>East</td><td>30</td></tr>
                  <tr><td>South</td><td>20</td></tr>
                  <tr><td>West</td><td>20</td></tr>
                  <tr><td>North</td><td>20</td></tr>
                </tbody>
              </Table>
            </Col>
            <Col md={6}>
              <div className="mb-2"><strong>As per Actual</strong></div>
              <Table striped bordered size="sm">
                <tbody>
                  <tr><td>East</td><td>30</td></tr>
                  <tr><td>South</td><td>20</td></tr>
                  <tr><td>West</td><td>20</td></tr>
                  <tr><td>North</td><td>20</td></tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PropertyDetails;