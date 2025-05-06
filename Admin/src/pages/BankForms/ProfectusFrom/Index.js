import React, { useState } from 'react';
import Profecutsdeatils from "pages/BankForms/ProfectusFrom/ProfecutsDeatils"
import Propertydeatil from 'pages/BankForms/ProfectusFrom/PropertyDetails'
import Valuationdeatils from 'pages/BankForms/ProfectusFrom/ValuationDetails';
// 

const Index = () => {
  const [ ProfecutsData, setProfecutsdeatilsData] = useState({});
  const [ PropertyData, setPropertyData] = useState({});
  const [ ValuationData, setValuationData] = useState({});


//   const [PropertyData, setPropertyData] = useState({})
//   const [FloorData, setFloorData] = useState({})
//   const [BoundaryData, setBoundaryData] = useState({})




  const handleSubmitAll = () => {
    const finalData = {
        Profecutsdeatils: ProfecutsData,
        PropertyData: PropertyData,
        Valuationdeatils: ValuationData
        
      

      
    };

    // Print the data to the console in a structured format
    console.log("Submitted Data:");
    
    
    // Show an alert to confirm submission
    alert("All data submitted ✅");
    setProfecutsdeatilsData({})
    setPropertyData({})
    setValuationData({})
    // Clear the data
    // setBasicData({});
    
  };

  return (
    <div className="container mt-4">
      <h3>Complete Valuation Report</h3>
      <Profecutsdeatils onDataChange={setProfecutsdeatilsData}/>
      <Propertydeatil onDataChange={setPropertyData} />
      <Valuationdeatils onDataChange={setValuationData}/>



      <div className="text-end mt-2 mb-2">
        <button className="btn btn-dark" onClick={handleSubmitAll}>
          Submit Report
        </button>
      </div>
    </div>
  );
};

export default Index;
