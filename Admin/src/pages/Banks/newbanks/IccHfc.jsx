import React from "react";
import { Container, Row, Col, Form, Table , Card } from "react-bootstrap";

// import 'bootstrap/dist/css/bootstrap.min.css';

const IccHfc = () => {
  return (
    <Container fluid className="p-3" style={{ backgroundColor: "#fff8e5", border: "1px solid #eee" }}>
      
      {/* Header */}
      <div className="text-center fw-bold  mb-3" style={{ backgroundColor: "#fedc8c", padding: "8px" , color: 'darkred' }}>
        INDIVIDUAL TECHNICAL REPORT
      </div>

      {/* Section 1: Report Details */}
      <Row className="mb-3">
        <Col md={6}>
          <p><strong>Request ID:</strong> HRQ-25-43007</p>
          <p><strong>Customer Name:</strong> ARUNA</p>
          <p><strong>Channel Name:</strong> LOS_CHANNEL</p>
          <p><strong>Report Type:</strong> HFC</p>
          <p><strong>Product Type:</strong> NON HOME LOAN</p>
        </Col>
        <Col md={6}>
          <p><strong>Application No:</strong> 77000018122</p>
          <p><strong>Branch:</strong> (10070) DEHRADUN</p>
          <p><strong>Business Group:</strong> HFCMORTGAGES</p>
          <p><strong>Product Name:</strong> BALANCE TRANSFER+TOP-UP</p>
          <p><strong>Loan Property Type:</strong> REGULAR</p>
        </Col>
      </Row>

      {/* Section 2: Property Details */}
      <div className="fw-bold  text-center mb-2" style={{ backgroundColor: "#fedc8c", padding: "6px",  color: 'darkred' }}>
        Property Details
      </div>
      <Row>
        <Col md={6}>
          <p><strong>Property Type:</strong> RESIDENTIAL</p>
          <p><strong>Unit No:</strong> 01</p>
          <p><strong>Property Address:</strong></p>
          <p className="ms-3">
            KHATA KHATAUNI NO. 654 KHASRA NO. 418,<br />
            SITUATED MAUZA CENTRAL HOPE TOWN<br />
            PARGANA PACHWADOON TEHSIL VIKASNAGAR<br />
            DISTT. DEHRADUN UTTARAKHAND
          </p>
          <p><strong>Collateral Id:</strong> I25DEH198-026527</p>
          <Form.Group>
            <Form.Label><strong>Legal Address:</strong></Form.Label>
            <Form.Control as="textarea" rows={3} readOnly defaultValue={
              "KHATA KHATAUNI NO. 654 KHASRA NO. 418, SITUATED MAUZA CENTRAL HOPE TOWN PARGANA PACHWADOON TEHSIL VIKASNAGAR DISTT. DEHRADUN UTTARAKHAND"
            } />
          </Form.Group>
        </Col>
        <Col md={6}>
          <p><strong>Unit Type:</strong> ROW HOUSE</p>
          <p><strong>Road Width (Feet):</strong> 20</p>
          <p><strong>Country:</strong> INDIA</p>
          <p><strong>State:</strong> UTTARAKHAND</p>
          <p><strong>City:</strong> DEHRADUN</p>
          <p><strong>Nearby Landmark:</strong> NUKKAD CAFE</p>
          <p><strong>Pincode:</strong> 248198</p>
        </Col>
      </Row>

      {/* Section 3: Contact Details */}
      <div className="fw-bold text-center mt-4 mb-2" style={{ backgroundColor: "#fedc8c", padding: "6px", color: 'darkred' }}>
        Contact Details
      </div>
      <Row>
        <Col md={6}>
          <p><strong>Name:</strong> ARUNA</p>
          <p><strong>Customer Mobile No:</strong> 9389214172</p>
          <p><strong>Req Initiator Id:</strong> 1611364</p>
        </Col>
        <Col md={6}>
          <p><strong>Sales Manager Mobile No:</strong> 9304023704</p>
          <p><strong>Req Initiator Name / CPC Code:</strong> LOS_CHANNEL</p>
        </Col>
      </Row>

      <h5 style={{color: 'darkred',}}  className="text-center fw-bold color:  mb-2">
        Attached Document Details
      </h5>
      <Table bordered>
        <thead className="bg-warning text-center text-danger">
          <tr>
            <th style={{color: 'darkred',}} >Document Name</th>
            <th style={{color: 'darkred',}} >Field Name</th>
            <th style={{color: 'darkred',}} >Field Value</th>
            <th style={{color: 'darkred',}}>Field Name</th>
            <th style={{color: 'darkred',}}>Field Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5" className="text-center"> {/* No data row */}</td>
          </tr>
        </tbody>
      </Table>

      {/* Boundaries on Site */}
      <h5 style={{color: 'darkred',}}  className="text-center fw-bold  my-3">
        Boundaries on Site
      </h5>
      <Table bordered className="mb-4">
        <thead>
          <tr className="bg-warning text-center fw-bold">
            <th style={{color: 'darkred',}} >Directions</th>
            <th style={{color: 'darkred',}} >As Per Sale Deed</th>
            <th style={{color: 'darkred',}} >Actual At Site</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>East :</strong></td>
            <td>PROPERTY OF SMT. ARTI / 28 FT</td>
            <td>NA</td>
          </tr>
          <tr>
            <td><strong>West :</strong></td>
            <td>20 FT WIDE ROAD / 28 FT</td>
            <td>NA</td>
          </tr>
          <tr>
            <td><strong>North :</strong></td>
            <td>20 FT WIDE ROAD / 41 FT</td>
            <td>NA</td>
          </tr>
          <tr>
            <td><strong>South :</strong></td>
            <td>PROPERTY OF NARENDRA AADI / 41 FT</td>
            <td>NA</td>
          </tr>
          <tr>
            <td><strong>Boundary Matching :</strong></td>
            <td>NA</td>
            <td></td>
          </tr>
        </tbody>
      </Table>

      {/* Property Details */}
      <div style={{color: 'darkred',}}  className="bg-warning  text-center fw-bold p-1 mb-3">
        Property Details
      </div>
      <Row className="mb-2">
        <Col><strong>Plot Area :</strong> 1148</Col>
        <Col><strong>Plot Demarcated At Site :</strong> YES</Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>Approved Land Use :</strong> RESIDENTIAL</Col>
        <Col><strong>Infrastructure Of The Surrounding Area :</strong> RESI</Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>Nature Of Locality :</strong> UNDER DEVELOPMENT</Col>
        <Col><strong>Class Of Locality :</strong> MIDDLE CLASS AREA</Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>Property Area :</strong> 0</Col>
        <Col><strong>Property Location :</strong> GRAM PANCHAYAT</Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>Distance From City Center(Km) :</strong> 23</Col>
        <Col><strong>Distance Travelled From Operating Office :</strong> 46</Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>No. Of Floors :</strong> 0</Col>
        <Col><strong>Type Of Property :</strong> ROW HOUSE</Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>Cost Of Construction :</strong> 0</Col>
        <Col><strong>Report Condition :</strong> PROPERTY VISITED NEGATIVE REPORT</Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>Carpet Area Measured :</strong> No</Col>
        <Col><strong>Green Housing :</strong> No</Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>Nature Of Location :</strong> Urban</Col>
        <Col><strong>Virtual Visit :</strong> No</Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>Finnone Project Id :</strong></Col>
        <Col><strong>Finnone Building Id :</strong></Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>Project Approval No :</strong></Col>
        <Col><strong>Builder Group :</strong></Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>Builder Company :</strong></Col>
        <Col><strong>Builder Grade :</strong></Col>
      </Row>
      <div style={{color: 'darkred',}}  className="bg-warning text-center fw-bold  p-1 mb-2">
        Unit Details
      </div>
      <Table bordered className="mb-4">
        <thead className="bg-light text-center text-danger">
          <tr>
            <th>Detail</th>
            <th>No. of Rooms</th>
            <th>No. of Kitchen</th>
            <th>No. of Bathrooms</th>
            <th>Usages and Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FIRST FLOOR</td>
            <td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td>SECOND FLOOR</td>
            <td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td>OTHER1</td>
            <td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td>OTHER2</td>
            <td></td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td>GROUND FLOOR</td>
            <td></td><td></td><td></td><td></td>
          </tr>
        </tbody>
      </Table>

      {/* NDMA Details */}
      <div style={{color: 'darkred',}}  className="bg-warning text-center fw-bold p-1 mb-2">
        NDMA Details
      </div>
      <Row className="mb-3">
        <Col><strong>Height Of Building(Above Ground Level):</strong> Less than 15 meter</Col>
        <Col><strong>Seismic Zone:</strong> 4</Col>
      </Row>
      <Row className="mb-3">
        <Col><strong>Flood Prone Area:</strong> No</Col>
        <Col><strong>CRZ:</strong> 1</Col>
      </Row>

      {/* Structure */}
      <div style={{color: 'darkred',}}  className="bg-warning text-center fw-bold  p-1 mb-2">
        Structure
      </div>
      <Row className="mb-2">
        <Col><strong>Structure:</strong> RCC STRUCTURE</Col>
        <Col><strong>Interior:</strong> GOOD</Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>Exterior:</strong> GOOD</Col>
        <Col><strong>Status Of Occupancy:</strong> OCCUPIED</Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>Approx Age Of Property For Home Improvement/ Home Extension:</strong> 0</Col>
        <Col><strong>Relationship Of Occupant With Customer:</strong> NA</Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>Occupied By:</strong> SELFNA</Col>
        <Col><strong>Residual Age Of Property:</strong> 0</Col>
      </Row>
      <Row className="mb-4">
        <Col><strong>Occupied Since:</strong> NA</Col>
      </Row>

      {/* Valuation */}
      <div style={{color: 'darkred',}}  className="bg-warning text-center fw-bold  p-1 mb-2">
        Valuation
      </div>
      <Table bordered>
        <thead className="bg-light text-center text-danger">
          <tr>
            <th style={{color: 'darkred',}} >Description</th>
            <th style={{color: 'darkred',}}>Area (in Sq.Ft)</th>
            <th style={{color: 'darkred',}}>Rate (Per Sq.Ft)</th>
            <th style={{color: 'darkred',}}> Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>LANDAREA</td><td>1148</td><td>0</td><td>0</td>
          </tr>
          <tr>
            <td>CARPET AREA</td><td>1</td><td>0</td><td>0</td>
          </tr>
          <tr>
            <td>SUPER BUILT UP/SELLABLE AREA</td><td>1</td><td>0</td><td>0</td>
          </tr>
          <tr>
            <td>OTHER 1</td><td>1</td><td>0</td><td>0</td>
          </tr>
          <tr>
            <td>OTHER 2</td><td>1</td><td>0</td><td>0</td>
          </tr>
          <tr>
            <td><strong>TOTAL</strong></td><td>0</td><td></td><td>0</td>
          </tr>
        </tbody>
      </Table>
      <Row className="mb-2">
        <Col><strong>Realizable Value:</strong> 0</Col>
      </Row>
      <Row className="mb-2">
        <Col><strong>Realizable Value in Words:</strong> zero</Col>
      </Row>
      <div style={{color: 'darkred',}}  className="bg-warning text-center fw-bold p-1 mb-2">
        Valuation as per Govt. approved rate
      </div>
      <Table bordered className="mb-4">
        <tbody>
          <tr>
            <td>Land Area/Building Area/Saleable Area(Sq.FL) : 1</td>
            <td>Land Area/Building Area/Saleable Area Rate(Pr: Sq. FL) : 1</td>
          </tr>
          <tr>
            <td>Constructed Area : 1</td>
            <td>Constructed Rate : 1</td>
          </tr>
          <tr>
            <td>Total Value : 11:49</td>
            <td>Piecewise Building Usage :</td>
          </tr>
        </tbody>
      </Table>
    
<Table bordered>
  <thead className="bg-light text-center text-danger">
    <tr>
      <th style={{color: 'darkred',}}  >Request Code</th>
      <th style={{color: 'darkred',}}  >Request Date</th>
      <th  style={{color: 'darkred',}}  >Parent Proc. Type</th>
      <th  style={{color: 'darkred',}}  >Product Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HBO-25-2007</td>
      <td>2025-09-17 17:23:13</td>
      <td>NON HOME LOW</td>
      <td>BALANCE TRANSFER+TOPLAP</td>
    </tr>
    <tr>
      <td>HBO-25-4009</td>
      <td>2025-05-22 11:06:49</td>
      <td>NON HOME LOW</td>
      <td>BALANCE TRANSFER+TOPLAP</td>
    </tr>
  </tbody>
</Table>

<Table bordered className="mt-4">
  <thead className="bg-light text-center text-danger">
    <tr  style={{color: 'darkred',}} >
      <th style={{color: 'darkred',}}  >Stage of Construction</th>
      <th style={{color: 'darkred',}}  >Description of Structure</th>
      <th style={{color: 'darkred',}}  > Description of stage</th>
      <th style={{color: 'darkred',}}  >% Completion</th>
      <th style={{color: 'darkred',}}  >% Recommended</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>RCC STRUCTURE</td>
      <td>NA</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</Table>

<div className="mt-3">
  <strong>Completion Status :</strong> CONSTRUCTION
</div>

<div className="mt-2">
  <strong>Remarks :</strong> CASE TYPE SIT TOP-UP, THE COOPINGLY LEVEL IN THE 20:30:00 M VENTRY OF THE SUBJECT PROPERTY IS 24 STEPSIGHT, COPY OF SEAL ESCRIBES FROM OVER AGAIN AND MR MANO FUMAR DESCUTED ON DATE 12 AM 2023 WITH DOCUMENT NO REMARKABLE LEGAL GLEAMAGE SHALL BE CHECKED BEFORE DISREGARDMENT.
</div>

<div className="mt-3">
  <strong>Vested By :</strong> BRANT SHARMA_UTTRU_JIFC BRANT SHARMA_UTTRU_JIFC<br />
  <strong>Vested Next Time:</strong> TECNRCALAGENCY<br />
  <strong>Entered By :</strong> BRANT SHARMA_UTTRU_JIFC BH<br />
  <strong>Approved On:</strong> REGIMEN
</div>

<div className="mt-2">
  <strong>Approved Disruptions :</strong> TECNRCALMANAGER
</div>

<div className="mt-2">
  <strong>Recommender Name :</strong><br />
  <strong>Recommender Flag :</strong> Not Recommended
</div>

<div className="mt-2">
  <strong>Ressent Resort Two :</strong> FRESH
</div>

<div className="mt-2">
  <strong>Vested On :</strong> 29-Mar-2025<br />
  <strong>Approved On :</strong> 21-Mar-2025<br />
  <strong>Entered On :</strong> 26-Mar-2025<br />
  <strong>Approved None :</strong> WPR-SEROM
</div>

<div className="mt-2">
  <strong>Approved Remarks :</strong> NOT RECOMMENDED, PLEASE REFER VOLATION COLLABIA AND REVANERS.
</div>

<div className="mt-2">
  <strong>Recommender Remark :</strong><br />
  <strong>Remark Confirmant Remark :</strong>
</div>

<div className="container-fluid" style={{ backgroundColor: '#fff9f0', fontSize: '14px' }}>
      <div className="row border">
        <div className="col  text-center border-end" style={{ backgroundColor: '#fddc9b', color: 'darkred',  }}>
          <b>Image / Document :1</b>
        </div>
        <div className="col text-center" style={{ backgroundColor: '#fddc9b', color: 'darkred', }}>
          <b>Image / Document :2</b>
        </div>
      </div>

      <div className="row text-center py-2">
        <div className="col border-end">
          <div><b>Attached Documents</b></div>
          <div>Attached Images</div>
          <div>Longitude</div>
          <div>Latitude</div>
          <div>Geo Location</div>
          <div>Image Taken Date</div>
        </div>
        <div className="col">
          <div>&nbsp;</div>
          <div style={{ color: 'red', cursor: 'pointer' }}>PAS_HRQ-25-43007_77000018122_1_11ZON.JPG</div>
          <div>77.863073</div>
          <div>30.364795</div>
          <div>NULL</div>
          <div>NULL</div>
        </div>
        <div className="col">
          <div>&nbsp;</div>
          <div style={{ color: 'red', cursor: 'pointer' }}>PAS_HRQ-25-43007_77000018122_2_11ZON.JPG</div>
          <div>77.863073</div>
          <div>30.364795</div>
          <div>NULL</div>
          <div>NULL</div>
        </div>
      </div>

      <div className="row text-center">
        <div className="col" style={{ color: 'darkred', fontWeight: 'bold' }}>
          OD Request List
        </div>
      </div>

      <div className="row text-center border mt-2" style={{    color: 'darkred', backgroundColor: '#fddc9b', fontWeight: 'bold' }}>
        <div className="col">Broker Details</div>
      </div>

      <div className="row py-2 text-start px-3">
        <div className="col"><b>Broker Name:</b> HARI PROPERTY</div>
        <div className="col"><b>Broker's Contact No:</b> 7351044495</div>
      </div>

      <div className="row text-start px-3 pb-2">
        <div className="col"><b>Broker's Email ID:</b></div>
      </div>

      <div className="row text-center border mt-2" style={{ backgroundColor: '#fddc9b', fontWeight: 'bold', color: 'darkred' }}>
        <div className="col">This property is funded to following customer(s)</div>
      </div>

      <div className="row text-center border mt-2 fw-bold">
        <div className="col">Application No.</div>
        <div className="col">Customer Name</div>
        <div className="col">Channel Name/Employee Name</div>
        <div className="col">Date</div>
      </div>
    </div>


    </Container>
  );
};

export default IccHfc;
