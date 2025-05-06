import React, { useState } from 'react';
import Customer from 'pages/BankForms/Federal/CustomerDetails'
import  PropertyAndDocument from "pages/BankForms/Federal/PropertyAndDocumentDetails"
import PhysicalDetails from 'pages/BankForms/Federal/PhysicalDetails';
import OccupancyFrom from 'pages/BankForms/Federal/OccupancyDetails';
import ValuationFrom from 'pages/BankForms/Federal/ValuationFedForm'
import StageConstructionFrom from 'pages/BankForms/Federal/StageOfConstructionForm';


const Index = () => {
  const  [ CustomerData, setCustomerData] = useState({});
  const  [ PropertyData, setPropertyData] = useState({});
  const  [ PhysicalData, setPhysicalData] = useState({});
 const [OccupancyData, setOccupancyData] = useState({})
 const [ValuationData, setValuationData] = useState({})
 const [StageData, setStageData] = useState({})



  const handleSubmitAll = () => {
    const finalData = {
        Customer: CustomerData,
        PropertyAndDocument: PropertyData,
        PhysicalDetails:  PhysicalData,
        OccupancyFrom:    OccupancyData,
        ValuationFrom:    ValuationData,
        StageConstructionFrom: StageData,

    };

    console.log("Submitted Data:");
    console.log("Customer:", JSON.stringify(CustomerData, null, 2));
    alert("All data submitted ✅");

    setCustomerData({});
    setPropertyData({})
    setPhysicalData({})
    setOccupancyData({})
    setValuationData({})
    setStageData({})
    
    
  };

  return (
    <div className="container mt-4">
      <h3>Complete Valuation Report</h3>

      <Customer onDataChange={setCustomerData} />
      <PropertyAndDocument onDataChange={setPropertyData}/>
       <PhysicalDetails onDataChange={setPhysicalData} />
       <OccupancyFrom onDataChange={setOccupancyData} />
       <ValuationFrom onDataChange={setValuationData} />
       <StageConstructionFrom onDataChange={setStageData} />
  
     



      <div className="text-end mt-2 mb-2">
        <button className="btn btn-dark" onClick={handleSubmitAll}>
          Submit Report
        </button>
      </div>
    </div>
  );
};

export default Index;
