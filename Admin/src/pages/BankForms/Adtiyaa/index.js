import React, { useState } from 'react';
import axios from 'axios';

// Importing the form sections
import BasicDetails from 'pages/BankForms/Adtiyaa/BasicDeatils';
import LocationDetails from 'pages/BankForms/Adtiyaa/LocationDetails';
import PropertyDetails from 'pages/BankForms/Adtiyaa/PropertyDetails';
import UnitsDetails from 'pages/BankForms/Adtiyaa/UnitsDeatils';
import BoundaryDetails from 'pages/BankForms/Adtiyaa/BoundaryDetails';
import OtherDetails from 'pages/BankForms/Adtiyaa/OthersDeatils';

const Index = () => {
  // States for holding data for each section
  const [formData, setFormData] = useState({
    BasicDetails: {},
    LocationDetails: {},
    PropertyDetails: {},
    UnitsDetails: {},
    OtherDetails: {},
    BoundaryDetails: {}
  });

  // Handle Data Change Dynamically: Updates state for each form section
  const handleDataChange = (section, data) => {
    setFormData(prevData => ({
      ...prevData,
      [section]: data
    }));
  };

  // Handle Submit Function: Sends data to backend
  const handleSubmitAll = async () => {
    console.log('FormData to be sent:', formData);  // Log the formData to check if it's correct

    // Flattening the formData to send as a single object
    const mergedData = {
      ...formData.BasicDetails,
      ...formData.LocationDetails,
      ...formData.PropertyDetails,
      ...formData.UnitsDetails,
      ...formData.OtherDetails,
      ...formData.BoundaryDetails
    };

    console.log('Merged Data:', mergedData);  // Check merged data

    try {
      const response = await axios.post('http://localhost:5000/api/aditya', mergedData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.status === 200 || response.status === 201) {
        console.log('✅ Successfully Submitted:', response.data);
        alert('✅ Data successfully submitted!');
        // window.location.reload();

        // Reset the state after successful submission
        setFormData({
          BasicDetails: {},
          LocationDetails: {},
          PropertyDetails: {},
          UnitsDetails: {},
          OtherDetails: {},
          BoundaryDetails: {}
        });
      } else {
        console.error('Response Error:', response.data);
        alert('❌ Failed to submit data.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Error submitting data. Check console for details.');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Complete Valuation Report</h3>

      {/* Component to capture Basic Details */}
      <BasicDetails 
        onDataChange={(data) => handleDataChange('BasicDetails', data)} 
        initialData={formData.BasicDetails}
      />

      <LocationDetails 
        onDataChange={(data) => handleDataChange('LocationDetails', data)}
        initialData={formData.LocationDetails}
      />

      <PropertyDetails 
        onDataChange={(data) => handleDataChange('PropertyDetails', data)}
        initialData={formData.PropertyDetails}
      />

      <UnitsDetails 
        onDataChange={(data) => handleDataChange('UnitsDetails', data)}
        initialData={formData.UnitsDetails}
      />

      <OtherDetails 
        onDataChange={(data) => handleDataChange('OtherDetails', data)}
        initialData={formData.OtherDetails}
      />

      <BoundaryDetails 
        onDataChange={(data) => handleDataChange('BoundaryDetails', data)}
        initialData={formData.BoundaryDetails}
      />

      {/* Submit Button */}
      <div className="text-end mt-2 mb-2">
        <button className="btn btn-dark" onClick={handleSubmitAll}>
          Submit Report
        </button>
      </div>
    </div>
  );
};

export default Index;
