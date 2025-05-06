import React, { useState } from 'react';
// import Loanappliction from "pages/BankForms/PiramalNpa/LoanApplicationDetails"
import Basicdeatils from "pages/BankForms/Samstafln/BasicDetails"
import Surrondingdeatils from "pages/BankForms/Samstafln/SurroundingDetails"
import Propertydeatils from "pages/BankForms/Samstafln/PropertyDetails"
import Valuationdeatils from "pages/BankForms/Samstafln/ValuationDetails"



const Index = () => {
  const  [ BasicData, setBasicData] = useState({});
  const  [ SurrondingData, setSurrondingData] = useState({});
  const  [ PropertyData, setPropertyData] = useState({});
  const  [ ValuationData, setValuationData] = useState({});




 

  const handleSubmitAll = () => {
    const finalData = {
        Basicdeatils: BasicData  ,
        Surrondingdeatils: SurrondingData,
        Propertydeatils: PropertyData,
        Valuationdeatils: ValuationData,
        
      
       

    };

    console.log("Submitted Data:");
    alert("All data submitted ✅");

    setBasicData({});
    setSurrondingData({})
    setValuationData({})
   
    
  };

  return (
    <div className="container mt-4">
      <h3>Complete Valuation Report</h3>

      <Basicdeatils onDataChange={setBasicData} />
      <Surrondingdeatils onDataChange={setSurrondingData} />
      <Propertydeatils onDataChange={setPropertyData} />
      <Valuationdeatils onDataChange={setValuationData} />
    
  
     



      <div className="text-end mt-2 mb-2">
        <button className="btn btn-dark" onClick={handleSubmitAll}>
          Submit Report
        </button>
      </div>
    </div>
  );
};

export default Index;
