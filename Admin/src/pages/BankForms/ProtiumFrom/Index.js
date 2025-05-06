import React, { useState } from 'react';
import Valuetiondeatils from "pages/BankForms/ProtiumFrom/ValuationReportForm"
import SideBoundaries from 'pages/BankForms/ProtiumFrom/SideBoundaries';
import Planapproval from "pages/BankForms/ProtiumFrom/PlanApproval"
import  ActulPlan from "pages/BankForms/ProtiumFrom/ActualPlan"

const Index = () => {
 const[  ValuetionData, setValuetionData] = useState({})
 const[  SideData, setSideData] = useState({})
 const[  PlanData, setPlanData] = useState({})
 const[  ActulData, setActulData] = useState({})






  const handleSubmitAll = () => {
    const finalData = {
     Valuetiondeatils: ValuetionData,
     SideBoundaries:  SideData,
     Planapproval:  PlanData,
     ActulPlan:  ActulData

      
    };

    // Print the data to the console in a structured format
    console.log("Submitted Data:");
  
    
    // Show an alert to confirm submission
    alert("All data submitted ✅");

    // Clear the data
    // setBasicData({});
    setValuetionData({})
    setSideData({})
    setPlanData({})
    setActulData({})
  };

  return (
    <div className="container mt-4">
      <h3>Complete Valuation Report</h3>
      <Valuetiondeatils onDataChange={setValuetionData}/>
      <SideBoundaries onDataChange={setSideData} />
      <Planapproval onDataChange={setPlanData}/>
      <ActulPlan onDataChange={setActulData} />

   


      <div className="text-end mt-2 mb-2">
        <button className="btn btn-dark" onClick={handleSubmitAll}>
          Submit Report
        </button>
      </div>
    </div>
  );
};

export default Index;
