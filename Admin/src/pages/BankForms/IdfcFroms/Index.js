import React, { useState } from 'react';
import TechnicalDeatils from "pages/BankForms/IdfcFroms/TechnicalAppraisalReport"
import Propertydeatils from "pages/BankForms/IdfcFroms/PropertyDetails"
import FloorRevenue from "pages/BankForms/IdfcFroms/FloorRevenue"
import Boundary from 'pages/BankForms/IdfcFroms/BoundriesDetails';


const Index = () => {
  const [TechnicalData, setTechnicalDeatilsData] = useState({});
  const [PropertyData, setPropertyData] = useState({})
  const [FloorData, setFloorData] = useState({})
  const [BoundaryData, setBoundaryData] = useState({})




  const handleSubmitAll = () => {
    const finalData = {
      TechnicalDeatils: TechnicalData,
      Propertydeatils: PropertyData,
      FloorRevenue: FloorData,
      Boundary: BoundaryData

      
    };

    // Print the data to the console in a structured format
    console.log("Submitted Data:");
  
    
    // Show an alert to confirm submission
    alert("All data submitted ✅");

    // Clear the data
    // setBasicData({});
    
  };

  return (
    <div className="container mt-4">
      <h3>Complete Valuation Report</h3>

    <TechnicalDeatils onDataChange={setTechnicalDeatilsData}/> 
    <Propertydeatils onDataChange={setPropertyData} />
    <FloorRevenue onDataChange={setFloorData} />
    <Boundary onDataChange={setBoundaryData} />


      <div className="text-end mt-2 mb-2">
        <button className="btn btn-dark" onClick={handleSubmitAll}>
          Submit Report
        </button>
      </div>
    </div>
  );
};

export default Index;
