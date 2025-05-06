import React from 'react';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';

const Conditions = () => {
  return (
    <Container className="my-4">
      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>AUTHENTICITY & APPROVALS</h5>
        </div>
        <Card.Body>
          <Row>
            <Col md={6}>
              <p><strong>Authenticity Limit</strong><br />MUNICIPAL CORPORATION</p>
              <p><strong>Approving Authority</strong><br />NASAR NIGAMI</p>
              <p>
                <strong>Bearerment Applicable</strong><br />
                <span className="me-3">YES</span>
                <span>NO</span>
              </p>
            </Col>
            <Col md={6}>
              <p>
                <strong>Occupied By</strong><br />
                <span className="me-2">TENANT</span>
                <span className="me-2">SELF-OCCUPIED</span>
                <span className="me-2">VACANT</span><br />
                <span className="me-2">NA</span>
                <span className="me-2">SELLER OCCUPIED</span>
                <span>SELF + TENANT</span>
              </p>
              <p><strong>Seller Name/Owner Name</strong><br />SNT HANTA TYAGI WO NR DE DEEPAK</p>
              <p><strong>Person met at Site</strong><br />SNT HANTA TYAGI WO NR DE DEEPAK</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>PROPERTY CHARACTERISTICS</h5>
        </div>
        <Card.Body>
          <Row>
            <Col md={6}>
              <p><strong>Condition of Approach Roads</strong><br />20 FT WBN ROAD</p>
              <p>
                <strong>Is Property Approved</strong><br />
                <span className="me-3">YES</span>
                <span>NO</span>
              </p>
              <p><strong>Residual Age of the Property</strong><br />57 3 ~ 0 ~</p>
              <p>
                <strong>Usage of Property</strong><br />
                <span className="me-2">RESIDENTIAL</span>
                <span className="me-2">COMMERCIAL</span>
                <span>MIXED USAGE</span>
              </p>
            </Col>
            <Col md={6}>
              <p><strong>Age of Refinance Property</strong><br />38</p>
              <p><strong>Latest Sale Deed Registration Date</strong><br />-</p>
              <p>
                <strong>Land Type / Property / Dwelling unit type</strong><br />
                <span className="me-2">RESIDENTIAL</span>
                <span>6+1 RESI HOUSE</span>
              </p>
              <p>
                <strong>Storey Type</strong><br />
                <span className="me-2">STAYUDA</span>
                <span className="me-2">LOUE</span>
                <span>MULTISTOREY</span>
              </p>
              <p>
                <strong>Is Property REBA Approved</strong><br />
                <span className="me-3">YES</span>
                <span>NO</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p><strong>Brief On Conditions</strong><br />6+1 RESI HOUSE</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>SURROUNDING EXTERNAL AMENITIES</h5>
        </div>
        <Card.Body>
          <Table striped bordered>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>PREMISES LIST</th>
                <th>APPROX DIST. FROM PROPERTY</th>
                <th>NAME OF THE PREMISES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>NEAREST HIGHWAY/MAJOR ROAD</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>2</td>
                <td>NEAREST BUS STOP</td>
                <td>1-3 KM</td>
                <td>BUS STOP</td>
              </tr>
              <tr>
                <td>3</td>
                <td>NEAREST HOSPITAL</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>4</td>
                <td>NEAREST SCHOOL/COLLEGE</td>
                <td>3-5 KM</td>
                <td>CHITRANSH PUBLIC HR. SEC SCHOOL</td>
              </tr>
              <tr>
                <td>5</td>
                <td>NEAREST RAILWAY STATION</td>
                <td>5 KM</td>
                <td>BHOPAL_UN</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Conditions;