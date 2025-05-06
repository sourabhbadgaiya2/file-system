import React, { useState } from "react"

import HomeDetails from "pages/BankForms/Homefirst/HomeDetails"
import DocumentDetails from "pages/BankForms/Homefirst/DocumentDetails"
import ValuationDetails from "pages/BankForms/Homefirst/ValuationDetails"
import PropertyFieldDetails from "pages/BankForms/Homefirst/SpecialRemark"
import { useNavigate } from "react-router-dom"

const Index = () => {
  const [BasicData, setBasicData] = useState({})
  const [SurrondingData, setSurrondingData] = useState({})
  const [ValuationData, setValuationData] = useState({})
  const [PropertyData, setPropertyData] = useState({})

  const navigate = useNavigate()

  const handleSubmitAll = async () => {
    const finalData = {
      ...BasicData,
      ...SurrondingData,
      ...ValuationData,
      ...PropertyData,
    }

    try {
      const response = await fetch("http://localhost:5000/api/first-bank", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      })

      const data = await response.json()

      if (response.ok) {
        alert("✅ Valuation Report Created Successfully!")
        console.log("Saved Report:", data)
        // Clear all form data
        setBasicData({})
        setSurrondingData({})
        setValuationData({})
        setPropertyData({})
        navigate(`/Homefirst/${data.data._id}`)
      } else {
        console.error("Error:", data.message)
        alert("❌ Failed to submit report: " + data.message)
      }
    } catch (error) {
      console.error("Network Error:", error)
      alert("❌ Network Error. Please try again.")
    }
  }

  return (
    <div className="container mt-4">
      <h3>Complete Valuation Report</h3>
      <HomeDetails onDataChange={setBasicData} />
      <DocumentDetails onDataChange={setSurrondingData} />
      <ValuationDetails onDataChange={setValuationData} />
      <PropertyFieldDetails onDataChange={setPropertyData} />

      <div className="text-end mt-2 mb-2">
        <button className="btn btn-dark" onClick={handleSubmitAll}>
          Submit Report
        </button>
      </div>
    </div>
  )
}

export default Index
