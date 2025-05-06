import React, { useState } from 'react';
import TechnicalDeatils from "pages/BankForms/IdfcFroms/TechnicalAppraisalReport"
import Agirwise from 'pages/BankForms/AgriwiseForm/AgriwiseDeatils';



const Index = () => {
  const [TechnicalData, setTechnicalDeatilsData] = useState({});
  const [AgriwiseData, setAgriwiseData] = useState({});






  const handleSubmitAll = () => {
    const finalData = {
      TechnicalDeatils: TechnicalData,
      Agirwise: AgriwiseData
     

      
    };

    // Print the data to the console in a structured format
    console.log("Submitted Data:");
  
    
    // Show an alert to confirm submission
    alert("All data submitted ✅");

    // Clear the data
    // setBasicData({});
    setAgriwiseData({})
    
  };

  return (
    <div className="container mt-4">
      <h3>Complete Valuation Report</h3>

    <TechnicalDeatils onDataChange={setTechnicalDeatilsData}/> 
    <Agirwise onDataChange={setAgriwiseData} />
  


      <div className="text-end mt-2 mb-2">
        <button className="btn btn-dark" onClick={handleSubmitAll}>
          Submit Report
        </button>
      </div>
    </div>
  );
};

export default Index;
