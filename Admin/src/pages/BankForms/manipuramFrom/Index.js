import React, { useState } from 'react';
import ManipuramFrom from "pages/BankForms/manipuramFrom/ManipuramFormOne"
import Manipuram from "pages/BankForms/manipuramFrom/ManipuramFormTwo"

const Index = () => {
  const [ManipuramData, setManipuramData] = useState({});
  const [ManipuramTwo, setManipuramTwo] = useState({});

//   const [PropertyData, setPropertyData] = useState({})
//   const [FloorData, setFloorData] = useState({})
//   const [BoundaryData, setBoundaryData] = useState({})




  const handleSubmitAll = () => {
    const finalData = {
    ManipuramFrom: ManipuramData,
    manipuram: ManipuramTwo

      
    };

    // Print the data to the console in a structured format
    console.log("Submitted Data:");
  
    
    // Show an alert to confirm submission
    alert("All data submitted ✅");

    
  };

  return (
    <div className="container mt-4">
      <h3>Complete Valuation Report</h3>
      <ManipuramFrom onDataChange={setManipuramData}  />
      <Manipuram  onDataChange={setManipuramTwo} />


      <div className="text-end mt-2 mb-2">
        <button className="btn btn-dark" onClick={handleSubmitAll}>
          Submit Report
        </button>
      </div>
    </div>
  );
};

export default Index;
