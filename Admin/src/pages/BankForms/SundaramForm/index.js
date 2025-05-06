import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlanApprovalForm from './PlanApprovalForm';
import CharacteristicForm from './CharacteristicForm';
import ValuationForm from './ValuationFrom';
import ImageOrDocument from './ImageOrDocument';
import SubmissionFrom from './SubmissionFrom';
import { Container, Nav, Tab, Row, Col, Table, Card } from 'react-bootstrap';

const PropertyDetailsPage = () => {
  const [activeTab, setActiveTab] = useState('property-details');

  return (
    <div className="my-4">
      <h1 className="text-center mb-4">Property Details</h1>
      
      {/* टैब नेविगेशन - यहाँ controlled टैब का उपयोग किया गया है */}
      <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
      <Nav variant="tabs" className="mb-4 custom-tabss">
  <Nav.Item>
    <Nav.Link eventKey="property-details">Property Details</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="characteristics">Characteristics</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="valuation">Valuation</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="images">Images</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="submission">Submission</Nav.Link>
  </Nav.Item>
</Nav>


        <Tab.Content>
          <Tab.Pane eventKey="property-details">
          <Card>
              <Card.Body>
                <PlanApprovalForm/>
              </Card.Body>
            </Card>
          </Tab.Pane>

          {/* Characteristics Tab */}
          <Tab.Pane eventKey="characteristics">
            <Card>
              <Card.Body>
                <CharacteristicForm/>
              </Card.Body>
            </Card>
          </Tab.Pane>

          <Tab.Pane eventKey="valuation">
            <Card>
              <Card.Body>
              {/* <ValuationDetails/> */}
              <ValuationForm/>
              </Card.Body>
            </Card>
          </Tab.Pane>

          <Tab.Pane eventKey="images">
            <Card>
              <Card.Body>
              <ImageOrDocument/>
              </Card.Body>
            </Card>
          </Tab.Pane>

          <Tab.Pane eventKey="submission">
            <Card>
              <Card.Body>
              {/* <Submission/> */}
              <SubmissionFrom/>
              </Card.Body>
            </Card>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default PropertyDetailsPage;