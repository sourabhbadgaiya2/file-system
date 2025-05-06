import React, { useState } from 'react';
import { Accordion, Card, Button, Form, Row, Col } from 'react-bootstrap';

const AgriwiseDetails = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState({
    valuationAgency: 'Unique engineering and associate',
    dateOfValuation: '08.01.2024',
    proposalNo: 'DSSECBH0001311',
    caseType: 'LAP',
    inspectionDate: '08.01.2024',
    nearestLandmark: 'SBI BANK',
    customerName: 'Mr. Narendra Chouhan',
    sellerName: 'Mrs. Jamvati bai w/o mr. pitam singh',
    propertyAddress: 'Property is resi cum commercial house situated at part of kh. No. 88/4, ph.no. 20, r.n.m.- 02, gram-Dobi, tehsil- Budni, dist. sehore, m.p. 466554',
    propertyStatus: 'PRESS HOLD',
    propertyType: 'COMMERCIAL AND RESIDENTIAL',
    developedBy: 'NA',
    typeOfLocality: 'RESIDENTIAL AND COMMERCIAL',
    inspectionSiteVisitDate: '08.01.2024',
    occupationStatus: 'OCCUPIED',
    propertyUsage: 'COMMERCIAL AND RESIDENTIAL',
    plotDemarcation: 'YES',
    propertyIdentifiable: 'NO',
    withinMC_GPLimit: 'GP LIMIT',
    typeOfStructure: 'RCC',
    floorsInBuilding: 'g+1',
    locatedOnFloorNo: 'G+1 FLOOR',
    yearOfCompletion: '2015',
    constructionStage: '100%',
    disbursementRecommended: '100%',
    ageOfProperty: 8,
    futurePhysicalLife: 42,
    saleDeed: 'SALE DEED',
    statusOfLandHolding: 'FRESS HOLD',
    typeOfProperty: 'COMMERCIAL AND RESIDENTIAL',
    occupationStatusInspection: 'OCCUPIED',
    propertyUsageInspection: 'COMMERCIAL AND RESIDENTIAL',
    plotDemarcationInspection: 'YES',
    identifiedThrough: 'NOT IDENTIFIED',
    internalFinishing: 'AVERAGE',
    noOfFloorsInBuildingInspection: 'g+1',
    totalNoOfFlatsUnitInBuilding: 'N/A',
    constructionStageOfPropertyInspection: '100%',
    ageOfThePropertyInYearInspection: 8,
    futurePhysicalLifeOfPropertyInYearInspection: 42,
    boundaries: {
      east: 'REMAINING LAND',
      west: 'B.K. SINGH',
      north: 'REMAINING LAND',
      south: 'ROAD',
    },
    boundariesMatching: 'NO',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
    onDataChange(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Edit'}
      </Button>
      {isOpen && (
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                A. Technical Initiation Request Form Data
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="valuationAgency">
                        <Form.Label>Name of Valuation Agency:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.valuationAgency}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="dateOfValuation">
                        <Form.Label>Date of Valuation:</Form.Label>
                        <Form.Control
                          type="date"
                          value={formState.dateOfValuation}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="proposalNo">
                        <Form.Label>Proposal No:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.proposalNo}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="caseType">
                        <Form.Label>Case Type:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.caseType}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="inspectionDate">
                        <Form.Label>Date of Inspection / Site visit:</Form.Label>
                        <Form.Control
                          type="date"
                          value={formState.inspectionDate}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="nearestLandmark">
                        <Form.Label>Nearest Landmark:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.nearestLandmark}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="customerName">
                        <Form.Label>Name of the Customer / Applicant & Contact Details:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.customerName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="sellerName">
                        <Form.Label>Name of Current Owner / Seller:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.sellerName}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>
                      <Form.Group controlId="propertyAddress">
                        <Form.Label>Address of the property being appraised:</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={formState.propertyAddress}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="propertyStatus">
                        <Form.Label>Property Status:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.propertyStatus}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="propertyType">
                        <Form.Label>Property Type:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.propertyType}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="developedBy">
                        <Form.Label>Developed By:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.developedBy}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="typeOfLocality">
                        <Form.Label>Type of Locality:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.typeOfLocality}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="inspectionSiteVisitDate">
                        <Form.Label>Inspection Site Visit Date:</Form.Label>
                        <Form.Control
                          type="date"
                          value={formState.inspectionSiteVisitDate}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="occupationStatus">
                        <Form.Label>Occupation Status:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.occupationStatus}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="propertyUsage">
                        <Form.Label>Property Usage:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.propertyUsage}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="plotDemarcation">
                        <Form.Label>Plot Demarcation:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.plotDemarcation}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="propertyIdentifiable">
                        <Form.Label>Property Identifiable:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.propertyIdentifiable}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="withinMC_GPLimit">
                        <Form.Label>Within MC / GP Limit:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.withinMC_GPLimit}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="typeOfStructure">
                        <Form.Label>Type of Structure:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.typeOfStructure}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="floorsInBuilding">
                        <Form.Label>No. of Floors in the Building:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.floorsInBuilding}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="locatedOnFloorNo">
                        <Form.Label>Located on Floor No.:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.locatedOnFloorNo}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="yearOfCompletion">
                        <Form.Label>Year of Completion of Property:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.yearOfCompletion}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="constructionStage">
                        <Form.Label>Construction Stage of the Property (%):</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.constructionStage}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="disbursementRecommended">
                        <Form.Label>Disbursement Recommended (%):</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.disbursementRecommended}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="ageOfProperty">
                        <Form.Label>Age of the Property in Year:</Form.Label>
                        <Form.Control
                          type="number"
                          value={formState.ageOfProperty}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="futurePhysicalLife">
                        <Form.Label>Future Physical Life of Property in Year:</Form.Label>
                        <Form.Control
                          type="number"
                          value={formState.futurePhysicalLife}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>
                      <Form.Group controlId="boundaries">
                        <Form.Label>Boundaries:</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={JSON.stringify(formState.boundaries)}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="boundariesMatching">
                        <Form.Label>Boundaries Matching:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.boundariesMatching}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>
                      <Form.Group controlId="saleDeed">
                        <Form.Label>Documents Provided by SFL:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.saleDeed}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="statusOfLandHolding">
                        <Form.Label>Status of Land Holding:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.statusOfLandHolding}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="typeOfProperty">
                        <Form.Label>Type of Property:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.typeOfProperty}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="occupationStatusInspection">
                        <Form.Label>Occupation Status:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.occupationStatusInspection}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="propertyUsageInspection">
                        <Form.Label>Property Usage:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.propertyUsageInspection}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="plotDemarcationInspection">
                        <Form.Label>Plot Demarcation:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.plotDemarcationInspection}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="identifiedThrough">
                        <Form.Label>Identified Through:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.identifiedThrough}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="internalFinishing">
                        <Form.Label>Internal Finishing:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.internalFinishing}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="noOfFloorsInBuildingInspection">
                        <Form.Label>No. of Floors in the Building:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.noOfFloorsInBuildingInspection}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="totalNoOfFlatsUnitInBuilding">
                        <Form.Label>Total No. of Flats / Unit in Building:</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.totalNoOfFlatsUnitInBuilding}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="constructionStageOfPropertyInspection">
                        <Form.Label>Construction Stage of the Property (%):</Form.Label>
                        <Form.Control
                          type="text"
                          value={formState.constructionStageOfPropertyInspection}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="ageOfThePropertyInYearInspection">
                        <Form.Label>Age of the Property in Year:</Form.Label>
                        <Form.Control
                          type="number"
                          value={formState.ageOfThePropertyInYearInspection}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="futurePhysicalLifeOfPropertyInYearInspection">
                        <Form.Label>Future Physical Life of Property in Year:</Form.Label>
                        <Form.Control
                          type="number"
                          value={formState.futurePhysicalLifeOfPropertyInYearInspection}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      )}
    </div>
  );
};

export default AgriwiseDetails;