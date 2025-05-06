import React, { useState } from 'react';
import Request from 'pages/BankForms/IcchfcFrom/RequestForm';
import UploadSitefrom from 'pages/BankForms/IcchfcFrom/UploadAndSiteVisitForm';
import Docomentfrom from 'pages/BankForms/IcchfcFrom/DocumentForm'
import PropertyAndnunits from "pages/BankForms/IcchfcFrom/PropertyAndUnitDetailsForm";
import NdmaAndValuation from "pages/BankForms/IcchfcFrom/NdmaAndValuation";
import Floorwise from "pages/BankForms/IcchfcFrom/FloorwiseBuildingUsageDetails"
// / / Import the Request component

const Index = () => {
  const [requestData, setRequestData] = useState({});
  const [UploadSite, setUploadSite] = useState({})
  const [Docoment, setDocoment] = useState({}) 
  const [Propertyfrom, setPropertyfrom] = useState({})
 const [ndmavalution, setndmavalution] = useState({})
 const [Floorwisedata, setFloorwisedata] = useState({})

  

  const handleSubmitAll = () => {
    const finalData = {
      Requestfrom: requestData,
      UploadSitefrom: UploadSite,
      Docomentfrom:   Docoment,
      propertyAndnunits: Propertyfrom,
      NdmaAndValuation:  ndmavalution,
      Floorwise: Floorwisedata

      // You can add other details here if needed
    };

    // Print the data to the console in a structured format
    console.log("Submitted Data:");
    console.log("Request Details:", JSON.stringify(requestData, null, 2));
    
    // Show an alert to confirm submission
    alert("All data submitted ✅");

    // Clear the data
    setRequestData({});
  };

  return (
    <div className="container mt-4">
      <h3>Complete Valuation Report</h3>

      <Request onDataChange={setRequestData} />
      <UploadSitefrom onDataChange={setUploadSite} />
      <Docomentfrom onDataChange={setDocoment} />
      <PropertyAndnunits onDataChange={setPropertyfrom} />
      <NdmaAndValuation onDataChange={setndmavalution}/>
      <Floorwise onDataChange={setFloorwisedata} />



      <div className="text-end mt-2 mb-2">
        <button className="btn btn-dark" onClick={handleSubmitAll}>
          Submit Report
        </button>
      </div>
    </div>
  );
};

export default Index;