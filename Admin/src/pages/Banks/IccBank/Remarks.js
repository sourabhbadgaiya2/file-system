import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Table, Button, Form, Spinner } from 'react-bootstrap';
import axios from 'axios';

const Remarks = () => {
  const [remarksData, setRemarksData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data from the backend
  useEffect(() => {
    const fetchRemarksData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/get-Remarks');
        console.log('Fetched Remarks Data:', response.data);
        setRemarksData(response.data);
      } catch (err) {
        console.error('Error fetching remarks data:', err);
        setError('There was an error fetching the remarks data.');
      } finally {
        setLoading(false);
      }
    };

    fetchRemarksData();
  }, []);

  if (loading) return <div className="text-center"><Spinner animation="border" variant="primary" /></div>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mb" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', background: '#f9f9f9' }}>
      <div className="p-4">
        <h4 style={{ color: '#AC2321' }} className="mt-4">Remarks</h4>

        {/* Rendering NFA/Adherence Checks */}
        <h5 style={{ color: '#AC2321' }}>NFAs/Adherence Checks Required Based On Observations</h5>
        <Card className="mb-3">
          <Card.Body>
            <ul>
              {remarksData?.nfaChecks?.length > 0 ? (
                remarksData.nfaChecks.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <li>No NFA/Adherence Checks available</li>
              )}
            </ul>
          </Card.Body>
        </Card>

        {/* Rendering General Observations */}
        <h5 style={{ color: '#AC2321' }}>General Observations</h5>
        <Card className="mb-3">
          <Card.Body>
            <ul>
              {Array.isArray(remarksData?.generalObservations) && remarksData?.generalObservations.length > 0 ? (
                remarksData.generalObservations.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <li>No General Observations available</li>
              )}
            </ul>
          </Card.Body>
        </Card>

        {/* Rendering Rate Reference (if applicable) */}
        <h5 style={{ color: '#AC2321' }}>Rate Reference</h5>
        <Card className="mb-3">
          <Card.Header className="bg-light text-white">Rate Reference Details</Card.Header>
          <Card.Body>
            {remarksData?.rateReference ? (
              <p>{remarksData.rateReference}</p>
            ) : (
              <p>No Rate Reference available</p>
            )}
          </Card.Body>
        </Card>

        {/* Property Valuation Check */}
        <p><strong>Is the Property Valued Under Market Practice?</strong></p>
        <p>{remarksData?.isValuedUnderMarketPractice ? "Yes" : "No"}</p>

        {/* Rendering Documents Table */}
        <h5 style={{ color: '#AC2321' }}>Documents</h5>
        <Table bordered className="mb-3">
          <thead>
            <tr>
              <th>Document Name</th>
              <th>Document Reference</th>
              <th>Document Date</th>
              <th>Authority</th>
            </tr>
          </thead>
          <tbody>
            {remarksData?.documents && remarksData.documents.length > 0 ? (
              remarksData.documents.map((document, index) => (
                <tr key={index}>
                  <td>{document.name}</td>
                  <td>{document.reference}</td>
                  <td>{document.date}</td>
                  <td>{document.authority}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">No Data Available</td>
              </tr>
            )}
          </tbody>
        </Table>

        {/* Rendering Vetted Document Information */}
        <h5 style={{ color: '#AC2321' }}>Document Vetted</h5>
        <Table bordered>
          <thead>
            <tr>
              <th>Name Of The Person Met At Site</th>
              <th>Relationship Of The Person Met At Site</th>
              <th>Mobile No. Of The Person Met At Site</th>
            </tr>
          </thead>
          <tbody>
            {remarksData?.documentVetted && remarksData.documentVetted.length > 0 ? (
              remarksData.documentVetted.map((vetted, index) => (
                <tr key={index}>
                  <td>{vetted.name}</td>
                  <td>{vetted.relationship}</td>
                  <td>{vetted.mobile}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">No Data Available</td>
              </tr>
            )}
            <tr>
              <td colSpan="3">
                <strong>No Of Site Visits: </strong>1
              </td>
            </tr>
          </tbody>
        </Table>

        {/* Rendering User Information Table */}
        <h5 style={{ color: '#AC2321' }}>User Information</h5>
        <Table bordered>
          <thead>
            <tr>
              <th>Visited By</th>
              <th>Visited User Type</th>
              <th>Date Of Site Visit</th>
            </tr>
          </thead>
          <tbody>
            {remarksData?.userInfo && remarksData.userInfo.length > 0 ? (
              remarksData.userInfo.map((user, index) => (
                <tr key={index}>
                  <td>{user.visitedBy}</td>
                  <td>{user.visitedUserType}</td>
                  <td>{user.dateOfSiteVisit}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">No Data Available</td>
              </tr>
            )}
          </tbody>
        </Table>

        <Button style={{ background: '#AC2321' }} className="mb-2">Preview Report</Button>
      </div>
    </div>
  );
};

export default Remarks;
