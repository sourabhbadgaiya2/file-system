import React from 'react';
import { Card, Container, Table } from 'react-bootstrap';

const DocumentUpload = () => {
  return (
    <Container className="my-4">
      <Card className="mb-4">
        <div className="p-3 bg-light border-bottom">
          <h5>TECHNICAL DOCUMENTS DETAILS</h5>
        </div>
        <Card.Body>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Document Name</th>
                <th>Document Type</th>
                <th>Ref No</th>
                <th>Ref Date</th>
                <th>Details of Approval</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>APPROVED LAYOUT PLAN</td>
                <td>Original</td>
                <td>-</td>
                <td>DD/MMYYYYY</td>
                <td>-</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>APPROVED FLOOR PLAN</td>
                <td>Original</td>
                <td>-</td>
                <td>DD/MMYYYYY</td>
                <td>-</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>CONSTRUCTION PERMISSION / BUILDING PERMISSION / COMMENCIEMENT CERTIFICATE</td>
                <td>Original</td>
                <td>-</td>
                <td>DD/MMYYYYY</td>
                <td>-</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>BUILDING COMPLETION CERTIFICATE / OCCUPATION PERMISSION / USE PERMISSION / POSSESSION CERTIFICATE</td>
                <td>Original</td>
                <td>-</td>
                <td>DD/MMYYYYY</td>
                <td>-</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>NON-AGRICULTURAL PERMISSION / LAND CONVERSION / DIVERSION ORDER</td>
                <td>Original</td>
                <td>-</td>
                <td>DD/MMYYYYY</td>
                <td>-</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>LOCATION SKETCH/ CERTIFICATE</td>
                <td>Original</td>
                <td>-</td>
                <td>DD/MMYYYYY</td>
                <td>-</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>AGREEMENT FOR SALE / SALE DEED</td>
                <td>Copy</td>
                <td>MP019882024A107982</td>
                <td>YB/01/2024</td>
                <td>SALE DEED</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>PROPERTY TAX RECEIPTS</td>
                <td>Original</td>
                <td>-</td>
                <td>DD/MMYYYYY</td>
                <td>-</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>AUTHORITY ALLOTMENT LETTER</td>
                <td>Original</td>
                <td>-</td>
                <td>DD/MMYYYYY</td>
                <td>-</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>CONSTRUCTION ESTIMATE FROM REGISTERED ENGINEER/ARCHITECT</td>
                <td>Original</td>
                <td>-</td>
                <td>DD/MMYYYYY</td>
                <td>-</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>IMPROVEMENT/CATCHESION ESTIMATE FROM REGISTERED ENGINEER/ARCHITECT</td>
                <td>Original</td>
                <td>-</td>
                <td>DD/MMYYYYY</td>
                <td>-</td>
                <td>✓</td>
              </tr>
            </tbody>
          </Table>

          <div className="mt-4">
            <h6>Upload Document</h6>
            <Table bordered>
              <tbody>
                <tr>
                  <td><strong>Select Document Name</strong></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td><strong>Upload Status</strong></td>
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

export default DocumentUpload;