import React, { useState } from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';

const NdmaAndValuation = () => {
  const [formData, setFormData] = useState({
    heightOfBuilding: 'Less than 15 meter',
    floodProneArea: 'No',
    seismicZone: '4',
    crz: '1',
    occupancyStatus: 'VACANT',
    customerRelationWithOccupant: 'VACANT LAND',
    occupiedSince: 'LAND',
    rates: [
      { description: 'LANDAREA', area: 882, ratePerSqFt: '', amount: '' },
      { description: 'CARPET AREA', area: 494, ratePerSqFt: '', amount: '' },
      { description: 'SUPER BUILT UP/SELLABLE AREA', area: 617, ratePerSqFt: '', amount: '' },
      { description: 'OTHER 1', area: 1, ratePerSqFt: '', amount: '' },
      { description: 'OTHER 2', area: 1, ratePerSqFt: '', amount: '' }
    ],
    realizableValue: '0',
    totalValueInWords: '',
    landArea: 882,
    landAreaRate: '1',
    constructedArea: 617,
    constructedRate: 1115,
    totalValue: 687955
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRateChange = (e, index) => {
    const { name, value } = e.target;
    const updatedRates = [...formData.rates];
    updatedRates[index] = {
      ...updatedRates[index],
      [name]: value
    };
    setFormData({
      ...formData,
      rates: updatedRates
    });
  };

  return (
    <div className="p-3" style={{ backgroundColor: '#fff3e0', border: '1px solid #ccc' }}>
      <h5  style={{ color:"#AA0009" }}  className=" fw-bold">NDMA and Valuation Details</h5>
      <Card>
        <Card.Body>
          <Form>
            <h6  style={{ color:"#AA0009" }}  className="mt-4 fw-bold">NDMA Details</h6>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formHeightOfBuilding">
                  <Form.Label>Height of Building (Above Ground Level)</Form.Label>
                  <Form.Control
                    type="text"
                    name="heightOfBuilding"
                    value={formData.heightOfBuilding}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formFloodProneArea">
                  <Form.Label>Flood Prone Area</Form.Label>
                  <Form.Control
                    type="text"
                    name="floodProneArea"
                    value={formData.floodProneArea}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formSeismicZone">
                  <Form.Label>Seismic Zone</Form.Label>
                  <Form.Control
                    type="text"
                    name="seismicZone"
                    value={formData.seismicZone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formCRZ">
                  <Form.Label>CRZ</Form.Label>
                  <Form.Control
                    type="text"
                    name="crz"
                    value={formData.crz}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <h6  style={{ color:"#AA0009" }}  className="mt-4 fw-bold">Occupancy Details</h6>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formOccupancyStatus">
                  <Form.Label>Status of Occupancy</Form.Label>
                  <Form.Select
                    name="occupancyStatus"
                    value={formData.occupancyStatus}
                    onChange={handleChange}
                  >
                    <option value="VACANT">VACANT</option>
                    <option value="OCCUPIED">OCCUPIED</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formCustomerRelation">
                  <Form.Label>Customer Relation With Occupant</Form.Label>
                  <Form.Select
                    name="customerRelationWithOccupant"
                    value={formData.customerRelationWithOccupant}
                    onChange={handleChange}
                  >
                    <option value="VACANT LAND">VACANT LAND</option>
                    <option value="OWNER">OWNER</option>
                    <option value="TENANT">TENANT</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formOccupiedSince">
                  <Form.Label>Occupied Since</Form.Label>
                  <Form.Control
                    type="text"
                    name="occupiedSince"
                    value={formData.occupiedSince}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <h6  style={{ color:"#AA0009" }}  className="mt-4 fw-bold">Valuation</h6>
            {formData.rates.map((rate, index) => (
              <Row key={index} className="mt-2">
                <Col md={4}>
                  <Form.Group controlId={`formDescription${index}`}>
                    <Form.Control
                      type="text"
                      name="description"
                      value={rate.description}
                      onChange={(e) => handleRateChange(e, index)}
                      placeholder="Description"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId={`formArea${index}`}>
                    <Form.Control
                      type="text"
                      name="area"
                      value={rate.area}
                      onChange={(e) => handleRateChange(e, index)}
                      placeholder="Area (Sq. Ft.)"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId={`formRatePerSqFt${index}`}>
                    <Form.Control
                      type="text"
                      name="ratePerSqFt"
                      value={rate.ratePerSqFt}
                      onChange={(e) => handleRateChange(e, index)}
                      placeholder="Rate (Per Sq. Ft.)"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId={`formAmount${index}`}>
                    <Form.Control
                      type="text"
                      name="amount"
                      value={rate.amount}
                      onChange={(e) => handleRateChange(e, index)}
                      placeholder="Amount"
                    />
                  </Form.Group>
                </Col>
              </Row>
            ))}

            <Row className="mt-3">
              <Col md={6}>
                <Form.Group controlId="formRealizableValue">
                  <Form.Label>Realizable Value</Form.Label>
                  <Form.Control
                    type="text"
                    name="realizableValue"
                    value={formData.realizableValue}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formTotalValueInWords">
                  <Form.Label>Total Value In Words</Form.Label>
                  <Form.Control
                    type="text"
                    name="totalValueInWords"
                    value={formData.totalValueInWords}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <h6 style={{ color:"#AA0009" }} className="mt-4  fw-bold">Valuation as per Govt. Approval</h6>
            <Row className="mt-2">
              <Col md={6}>
                <Form.Group controlId="formLandArea">
                  <Form.Label>Land Area/BuiltUp Area/Saleable Area (Sq.Ft)</Form.Label>
                  <Form.Control
                    type="text"
                    name="landArea"
                    value={formData.landArea}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formLandAreaRate">
                  <Form.Label>Land Area/BuiltUp Area/Saleable Area Rate (Per Sq. Ft.)</Form.Label>
                  <Form.Control
                    type="text"
                    name="landAreaRate"
                    value={formData.landAreaRate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={6}>
                <Form.Group controlId="formConstructedArea">
                  <Form.Label>Constructed Area</Form.Label>
                  <Form.Control
                    type="text"
                    name="constructedArea"
                    value={formData.constructedArea}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formConstructedRate">
                  <Form.Label>Constructed Rate</Form.Label>
                  <Form.Control
                    type="text"
                    name="constructedRate"
                    value={formData.constructedRate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={12}>
                <Form.Group controlId="formTotalValue">
                  <Form.Label>Total Value</Form.Label>
                  <Form.Control
                    type="text"
                    name="totalValue"
                    value={formData.totalValue}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NdmaAndValuation;