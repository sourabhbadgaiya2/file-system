import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

const Amenities = () => {
  const [formData, setFormData] = useState(null); // State to store fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/form-amenities"); // Your API URL
        const data = await response.json();
        console.log(data); // Check the structure of your data
        setFormData(data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs only once when the component mounts

  if (!formData) {
    return <div>Loading...</div>; // Show loading state until data is fetched
  }

  return (
    <div className="mb-4 col-md-12" style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px", background: "#f9f9f9" }}>
      <div className="p-4">
        <h4 style={{ color: "#AC2321" }}>Surrounding Amenities</h4>

        <h5>Public Transport in 1 Km Vicinity</h5>
        <Row>
          <Col md={3}><p>Airport: {formData?.airport ? "Yes" : "No"}</p></Col>
          <Col md={3}><p>Rickshaw Stop: {formData?.rickshawStop ? "Yes" : "No"}</p></Col>
          <Col md={3}><p>Bus Stop: {formData?.busStop ? "Yes" : "No"}</p></Col>
          <Col md={3}><p>Metro Station: {formData?.metroStation ? "Yes" : "No"}</p></Col>
        </Row>
        <Row>
          <Col md={3}><p>Railway Station: {formData?.railwayStation ? "Yes" : "No"}</p></Col>
        </Row>

        <h5>Other Amenities in 1 Km Vicinity</h5>
        <Row>
          <Col md={3}><p>College: {formData?.college ? "Yes" : "No"}</p></Col>
          <Col md={3}><p>School: {formData?.school ? "Yes" : "No"}</p></Col>
          <Col md={3}><p>Hospital: {formData?.hospital ? "Yes" : "No"}</p></Col>
          <Col md={3}><p>Super Market: {formData?.superMarket ? "Yes" : "No"}</p></Col>
        </Row>
        <Row>
          <Col md={3}><p>Mall: {formData?.mall ? "Yes" : "No"}</p></Col>
          <Col md={3}><p>Place Of Worship: {formData?.placeOfWorship ? "Yes" : "No"}</p></Col>
        </Row>

        <h5>Infra Surroundings</h5>
        <Row>
          <Col md={3}><p>Infrastructure: {formData?.infra ?"Developed": "Developing"}</p></Col>
        </Row>

        <h5>Amenities Images</h5>
        <div style={{ border: "1px dashed #ddd", padding: "20px", textAlign: "center" }}>
          {formData?.image ? <img src={formData.image} alt="Uploaded" style={{ maxWidth: "100%", marginTop: "10px" }} /> : <p>No Image Uploaded</p>}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
