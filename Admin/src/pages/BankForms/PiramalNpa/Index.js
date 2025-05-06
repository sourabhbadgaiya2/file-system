import React, { useState } from 'react';
import Loanappliction from "pages/BankForms/PiramalNpa/LoanApplicationDetails"
import Addressdetils from "pages/BankForms/PiramalNpa/AddressAndGeneralDetails"
import Generaldeatils from 'pages/BankForms/PiramalNpa/GeneralAmenitiesAreaForm'
import Valuationdeatils from 'pages/BankForms/PiramalNpa/ValuationDetailsForm'
import Technialdeatils from "pages/BankForms/PiramalNpa/TechnicalDocumentsForm"
import Npdsite from "pages/BankForms/PiramalNpa/NdpAndSiteDetails"
import RemarksProperty from "pages/BankForms/PiramalNpa/RemarksProperty"



const Index = () => {
  const  [ LoanapplictionData, setLoanapplictionData] = useState({});
  const [AddressData, setAddressData] = useState({})
  const [GeneralData, setGeneralData] = useState({})
  const [ValuationData, setValuationData] = useState({})
   const [TechnialData, setTechnialData] = useState({})
   const [NpdsiteData, setNpdsiteData] = useState({})
   const [RemarksPropertyData, setRemarksPropertyData] = useState({})

 



  const handleSubmitAll = () => {
    const finalData = {
        Loanapplictions: LoanapplictionData,
        Addressdetils: AddressData,
        Generaldeatils: GeneralData,
        Valuationdeatils: ValuationData, 
        Technialdeatils: TechnialData,
        Npdsite: NpdsiteData,
        RemarksProperty: RemarksPropertyData
       

    };

    console.log("Submitted Data:");
    alert("All data submitted ✅");

    setLoanapplictionData({});
   
    
  };

  return (
    <div className="container mt-4">
      <h3>Complete Valuation Report</h3>

      <Loanappliction onDataChange={setLoanapplictionData} />
    <Addressdetils onDataChange={setAddressData}/>
    <Generaldeatils onDataChange={setGeneralData}/>
    <Valuationdeatils onDataChange={setValuationData} />
    <Technialdeatils onDataChange={setTechnialData}/>
    <Npdsite onDataChange={setNpdsiteData}/>
    <RemarksProperty onDataChange={setRemarksPropertyData} />
  
     



      <div className="text-end mt-2 mb-2">
        <button className="btn btn-dark" onClick={handleSubmitAll}>
          Submit Report
        </button>
      </div>
    </div>
  );
};

export default Index;
