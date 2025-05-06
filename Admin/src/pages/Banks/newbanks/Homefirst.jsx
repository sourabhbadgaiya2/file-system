import React, { useEffect, useRef, useState } from "react"
import { saveAs } from "file-saver"
import * as XLSX from "xlsx"
import jsPDF from "jspdf"
import "jspdf-autotable"
import ExcelHeader from "components/Header/ExcelHeader"
import { useParams } from "react-router-dom"

// import './HFFCValuationReport.css'; // your existing CSS for .text-danger, .text-primary, etc.

const HFFCValuationReport = () => {
  const [reportData, setReportData] = useState(null)

  const { id } = useParams()

  const reportRef = useRef()

  const handleExportPDF = () => {
    const doc = new jsPDF("p", "pt", "a4")
    doc.html(reportRef.current, {
      callback: doc => {
        doc.save("HFFC_Valuation_Report.pdf")
      },
      x: 10,
      y: 10,
      html2canvas: { scale: 0.57 }, // adjust to fit A4
    })
  }

  const handleExportExcel = () => {
    // 1) convert your entire report DIV to a workbook
    const wb = XLSX.utils.table_to_book(reportRef.current, { sheet: "Report" })
    const ws = wb.Sheets["Report"]

    // 2) compute how many columns there are
    const range = XLSX.utils.decode_range(ws["!ref"])
    const numCols = range.e.c - range.s.c + 1

    // 3) set each column to a nice wide width (in pixels)
    ws["!cols"] = Array.from({ length: numCols }, () => ({ wpx: 200 }))

    // 4) add a thin black border around every cell
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const addr = XLSX.utils.encode_cell({ r: R, c: C })
        const cell = ws[addr]
        if (cell) {
          cell.s = cell.s || {}
          cell.s.border = {
            top: { style: "thin", color: { rgb: "000000" } },
            bottom: { style: "thin", color: { rgb: "000000" } },
            left: { style: "thin", color: { rgb: "000000" } },
            right: { style: "thin", color: { rgb: "000000" } },
          }
        }
      }
    }

    // 5) write out, enabling cellStyles so borders & widths stick
    XLSX.writeFile(wb, "HFFC_Valuation_Report.xlsx", {
      bookType: "xlsx",
      bookSST: false,
      cellStyles: true,
    })
  }

  const handleExportCSV = () => {
    const wb = XLSX.utils.table_to_book(reportRef.current, { sheet: "Report" })
    const csv = XLSX.utils.sheet_to_csv(wb.Sheets["Report"])
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    saveAs(blob, "HFFC_Valuation_Report.csv")
  }
  // console.log("Get & Report:", reportData)

  const init = async id => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/first-bank/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      )

      const data = await response.json()

      if (response.ok) {
        const Data = data.data
        setReportData(Data)
      } else {
        console.error("Error:", data.message)
      }
    } catch (error) {
      console.error("Network Error:", error)
      alert("❌ Network Error. Please try again.")
    }
  }

  useEffect(() => {
    if (id) {
      init(id)
    }
  }, [id])

  // Fallback for hardcoded fields not in JSON
  const localityDetails = reportData?.localityDetails || {
    localityDevelopment: "Developing",
    occupancyPercentage: "30%",
    approachRoadType: "SOIL",
    habitationPercentage: "40%",
    approachRoadWidth: "12 FT",
    proposedRoadWidening: "No",
    distanceFromCityCentre: "5 KM",
    cityCentreName: "SEHORE",
    distanceFromRailwayStation: "5 KM",
    drainageLine: "Yes",
    distanceFromBusStand: "4 KM",
    waterElectricitySupply: "Yes",
    distanceFromHospital: "4 KM",
    nallahRiverHighTension: "NA",
  }

  const ndmaGuidelines = reportData?.ndmaGuidelines || {
    seismicZone: "III",
    floodZone: "NO",
    cycloneZone: "No",
    crZone: "NO",
    landslideZone: "No",
    followsNDMAGuidelines: "Yes",
    riskDegree: "High/Medium/Low",
    demolitionRisk: "Nil",
  }

  const documentDetails = reportData?.documentDetails || {
    naConverted: "No",
    naNumber: "NA",
    sanctionPlan: "Architect Plan",
    sanctionDetails: "ENGG MAP",
    layoutPlan: "Architect Plan",
    layoutDetails: "KEY PLAN",
    commencement: "",
    commencementDetails: "NA",
    occupancy: "",
    occupancyDetails: "NA",
    subPlotting: "",
    subPlottingDetails: "NA",
  }

  const structuralDetails = reportData?.structuralDetails || {
    qualityOfConstruction: "AVG",
    poorConstructionDetails: "NA",
    noOfFloorsActual: "NA",
    internalComposition: "NA",
    constructionAsPerPlan: "Yes",
    constructionStatus: "20%",
    buildingHeight: "3.75 MTR",
  }

  const violations = reportData?.violations || {
    deviationToPlan: "No",
    deviationDetails: "NA",
    demolitionRisk: "No",
    demolitionDetails: "NA",
    encroachment: "No",
    encroachmentDetails: "NA",
  }

  const observations = reportData?.observations || [
    "GIVEN XEROX COPY CO-OWNERSHIP DEED IN FAVOUR OF MR.JEEVAN LAL S/O MR.GHISILAL AND SMT.MAMTA W/O MR.JEEVAN LAL",
    "DURING PROPERTY VISIT MR.PHOOL SINGH JI MET AT THE PROPERTY WHO IS CUSTOMER CONTACT NO. 9200182821. IT WAS CLEARLY EXPLAINED TO HIM THAT THE PROPERTY VISIT IS BEING DONE FOR VALUATION PURPOSE IN RELATION WITH LOAN PROPOSAL.",
    "RATE HAS BEEN CONFIRM FORM MARKET ENQUIRY.",
    "PROPERTY IS SITUATED AT SURROUNDING AREA OF LOCALITY IS RESIDENTIAL CUM AGRICULTURE ZONING SURROUNDING AREA DEVELOPMENT IS 40%.",
    "AT SITE PROPERTY IS OPEN AND GF UNDER CONSTRUCTION PREMISES WHERE PLINTH WORK DONE.",
    "CONST COST CONSIDER AFTER COMPLETION OF WORK.",
    "<span className='font-boldi'>PROPERTY IS IDENTIFIED BY FOUR SIDE BOUNDARIES OF GIVEN CO-OWNERSHIP DEED AND PRIVATE KEY LOCATION PLAN WHICH IS DRAWN BY ARCHITECT.</span>",
    "AT SITE AREA OF UNDER CONSTRUCTION IS 15 X 30 = 450 SQFT AND OPEN AREA IS 15 X 30 = 450 SQFT.",
    "AS PER CO-OWNERSHIP DEED AND AS PER SITE LAND AREA IS 30 X 30 = 900 SQFT.",
    "<span className='font-boldi'>OBTAIN COPY OF ARCHITECT MAP GF – 500 SQFT.</span>",
    "AS PER DEED LAND USES IS RESIDENTIAL.",
    "SUGGEST TO CREDIT TEAM TO BE CHECK PROPER OWNERSHIP DOCUMENT PRIOR DISBURSEMENT.",
    "VALUER IS NOT RESPONSIBLE FOR ANY LEGAL DISPUTE.",
  ]

  return (
    <div>
      <div style={{ margin: "20px 0", textAlign: "right" }}>
        <button onClick={handleExportPDF} style={{ marginRight: 8 }}>
          Download PDF
        </button>
        <button onClick={handleExportExcel} style={{ marginRight: 8 }}>
          Download Excel
        </button>
        <button onClick={handleExportCSV}>Download CSV</button>
      </div>
      <ExcelHeader />
      {/* Export buttons */}

      {/* The report to export */}
      <div id="report" ref={reportRef} className="valuation-report">
        {/* ====== TABLE 1 ====== */}
        <table
          cellSpacing="0"
          cellPadding="0"
          style={{ width: "80%", height: "100%" }}
        >
          <colgroup>
            <col width="35" />
            <col width="163" />
            <col width="298" />
            <col width="130" />
            <col width="155" />
            <col width="177" />
          </colgroup>
          <tbody>
            <tr style={{ backgroundColor: "#F0F8FF" }} className="text-center">
              <td colSpan="6">
                <b>
                  VALUATION REPORT <br />
                  FOR <br />
                  HOME FIRST FINANCE COMPANY (HFFC){" "}
                  <span className="text-primary">(WWW.HFFC.IN)</span>
                </b>
              </td>
            </tr>
            <tr>
              <td rowSpan="8">1</td>
              <td className="text-danger text-center" colSpan="5">
                <b>L & T ASSIGNMENT DETAILS</b>
              </td>
            </tr>
            <tr>
              <td>Customer Name</td>
              <td colSpan="2">{reportData?.customerName || "N/A"}</td>
              <td>Date of Report</td>
              <td className="font-boldi">
                {reportData?.dateOfReport || "N/A"}
              </td>
            </tr>
            <tr>
              <td>Property Name</td>
              <td colSpan="2">{reportData?.propertyName || "NA"}</td>
              <td>Ref No.</td>
              <td>{reportData?.refNo || "N/A"}</td>
            </tr>
            <tr>
              <td>Customer No.</td>
              <td colSpan="2">{reportData?.customerNo || "N/A"}</td>
              <td>Evaluation Type</td>
              <td>{reportData?.evaluationType || "N/A"}</td>
            </tr>
            <tr>
              <td>Person Met during visit</td>
              <td colSpan="2">{reportData?.personMetDuringVisit || "N/A"}</td>
              <td>Unit Type</td>
              <td>{reportData?.unitType || "N/A"}</td>
            </tr>
            <tr>
              <td>Person Contact No.</td>
              <td colSpan="4">{reportData?.personContactNo || "N/A"}</td>
            </tr>
            <tr>
              <td>Type of Loan</td>
              <td colSpan="4">{reportData?.typeOfLoan || "N/A"}</td>
            </tr>
            <tr>
              <td>
                Documents
                <br />
                Available for perusal
              </td>
              <td colSpan="4">
                <p className="text-danger text-center">
                  <b>{reportData?.documentsAvailable || "N/A"}</b>
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 2: GENERAL DETAILS ====== */}
        <table
          cellSpacing="0"
          cellPadding="0"
          style={{ width: "80%", height: "100%" }}
        >
          <colgroup>
            <col width="163" />
            <col width="298" />
            <col width="130" />
            <col width="155" />
            <col width="177" />
          </colgroup>
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>GENERAL DETAILS</b>
              </td>
            </tr>
            <tr>
              <td>Address as per Legal Document</td>
              <td colSpan="4">
                <b>{reportData?.addressLegal || "N/A"}</b>
              </td>
            </tr>
            <tr>
              <td>Address As per Site</td>
              <td colSpan="4">
                <b>{reportData?.addressSite || "N/A"}</b>
              </td>
            </tr>
            <tr>
              <td>Nearby landmark (within 500m)</td>
              <td>{reportData?.nearbyLandmark || "N/A"}</td>
              <td>Project Pin Code</td>
              <td colSpan="2">{reportData?.projectPinCode || "N/A"}</td>
            </tr>
            <tr>
              <td>Zone</td>
              <td>{reportData?.zone || "N/A"}</td>
              <td>Project State</td>
              <td colSpan="2">{reportData?.projectState || "N/A"}</td>
            </tr>
            <tr>
              <td>Name on society board:</td>
              <td>{reportData?.nameOnSocietyBoard || "N/A"}</td>
              <td>Name on door of the premises</td>
              <td colSpan="2">{reportData?.nameOnDoor || "N/A"}</td>
            </tr>
            <tr>
              <td>Latitude</td>
              <td>
                <b>{reportData?.latitude || "N/A"}</b>
              </td>
              <td>Longitude</td>
              <td colSpan="2">
                <b>{reportData?.longitude || "N/A"}</b>
              </td>
            </tr>
            <tr>
              <td>Population as per Census 2011</td>
              <td>{reportData?.populationCensus2011 || "N/A"}</td>
              <td>Rural/ Urban</td>
              <td colSpan="2">{reportData?.ruralUrban || "N/A"}</td>
            </tr>
            <tr>
              <td>Status of Occupancy</td>
              <td>{reportData?.statusOfOccupancy || "N/A"}</td>
              <td>Occupied by</td>
              <td colSpan="2">{reportData?.occupiedBy || "N/A"}</td>
            </tr>
            <tr>
              <td>Usage of the property</td>
              <td colSpan="4">{reportData?.usageOfProperty || "N/A"}</td>
            </tr>
            <tr>
              <td>RERA (If applicable)</td>
              <td>{reportData?.eraApplicable || "N/A"}</td>
              <td>Number & Date</td>
              <td colSpan="2">{reportData?.numberAndDate || "N/A"}</td>
            </tr>
            <tr>
              <td>Ownership Type</td>
              <td colSpan="4">{reportData?.ownershipType || "N/A"}</td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 3: DOCUMENT DETAILS ====== */}
        <table
          cellSpacing="0"
          cellPadding="0"
          style={{ width: "80%", height: "100%" }}
        >
          <colgroup>
            <col width="163" />
            <col width="298" />
            <col width="130" />
            <col width="155" />
            <col width="177" />
          </colgroup>
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>DOCUMENT DETAILS</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>TYPE</b>
              </td>
              <td>
                <b>Approving Authority / Applicability</b>
              </td>
              <td>
                <b>Date of approval and Number</b>
              </td>
              <td colSpan="2">
                <b>Details of the approval.</b>
              </td>
            </tr>
            <tr>
              <td>NA Converted</td>
              <td>{documentDetails.naConverted}</td>
              <td>Number & Date</td>
              <td colSpan="2">{documentDetails.naNumber}</td>
            </tr>
            <tr>
              <td>Approved Sanction Plan</td>
              <td>{documentDetails.sanctionPlan}</td>
              <td>Number & Date</td>
              <td colSpan="2">{documentDetails.sanctionDetails}</td>
            </tr>
            <tr>
              <td>Approved Layout Plan</td>
              <td>{documentDetails.layoutPlan}</td>
              <td>Number & Date</td>
              <td colSpan="2">{documentDetails.layoutDetails}</td>
            </tr>
            <tr>
              <td>Commencement Certificate (If any)</td>
              <td>{documentDetails.commencement}</td>
              <td>Number & Date</td>
              <td colSpan="2">{documentDetails.commencementDetails}</td>
            </tr>
            <tr>
              <td>Occupancy/ Completion/ Building usage certificate</td>
              <td>{documentDetails.occupancy}</td>
              <td>Number & Date</td>
              <td colSpan="2">{documentDetails.occupancyDetails}</td>
            </tr>
            <tr>
              <td>Approved Sub Plotting Plan</td>
              <td>{documentDetails.subPlotting}</td>
              <td>Number & Date</td>
              <td colSpan="2">{documentDetails.subPlottingDetails}</td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 4: LOCALITY DETAILS ====== */}
        <table
          cellSpacing="0"
          cellPadding="0"
          style={{ width: "80%", height: "100%" }}
        >
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>LOCALITY DETAILS</b>
              </td>
            </tr>
            <tr>
              <td>Locality Development</td>
              <td>{localityDetails.localityDevelopment}</td>
              <td>Occupancy of Project/Area (%)</td>
              <td colSpan="2">{localityDetails.occupancyPercentage}</td>
            </tr>
            <tr>
              <td>Type of Approach Road</td>
              <td>{localityDetails.approachRoadType}</td>
              <td>Habitation in surrounding Area (%)</td>
              <td colSpan="2">{localityDetails.habitationPercentage}</td>
            </tr>
            <tr>
              <td>Approach Road Width (In Feet)</td>
              <td>{localityDetails.approachRoadWidth}</td>
              <td>Proposed Road Widening</td>
              <td colSpan="2">{localityDetails.proposedRoadWidening}</td>
            </tr>
            <tr>
              <td>Distance from city centre (in KM)</td>
              <td>{localityDetails.distanceFromCityCentre}</td>
              <td>Name of City Centre Considered</td>
              <td colSpan="2">{localityDetails.cityCentreName}</td>
            </tr>
            <tr>
              <td>Distance from Railway Station (in KM)</td>
              <td>{localityDetails.distanceFromRailwayStation}</td>
              <td>Drainage Line connection</td>
              <td colSpan="2">{localityDetails.drainageLine}</td>
            </tr>
            <tr>
              <td>Distance from Bus Stand (in KM)</td>
              <td>{localityDetails.distanceFromBusStand}</td>
              <td>Water & Electricity Supply Connection</td>
              <td colSpan="2">{localityDetails.waterElectricitySupply}</td>
            </tr>
            <tr>
              <td>Distance from Hospital (in KM)</td>
              <td>{localityDetails.distanceFromHospital}</td>
              <td>Nallah, River, High tension line if any</td>
              <td colSpan="2">
                <b>{localityDetails.nallahRiverHighTension}</b>
              </td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 5: NDMA GUIDELINE ====== */}
        <table
          cellSpacing="0"
          cellPadding="0"
          style={{ width: "80%", height: "100%" }}
        >
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>NDMA GUIDELINE</b>
              </td>
            </tr>
            <tr>
              <td>Property Falls under Sesimic Zone</td>
              <td>{ndmaGuidelines.seismicZone}</td>
              <td>Property Falls under Flood Zone</td>
              <td colSpan="2">{ndmaGuidelines.floodZone}</td>
            </tr>
            <tr>
              <td>Property Falls under Cyclone Zone</td>
              <td>{ndmaGuidelines.cycloneZone}</td>
              <td>Property Falls in CR Zone</td>
              <td colSpan="2">{ndmaGuidelines.crZone}</td>
            </tr>
            <tr>
              <td>Property Falls under Landslide Prone Zone</td>
              <td>{ndmaGuidelines.landslideZone}</td>
              <td>Follows NMDA Guidelines</td>
              <td colSpan="2">{ndmaGuidelines.followsNDMAGuidelines}</td>
            </tr>
            <tr>
              <td>Degree of Risk Associated</td>
              <td>{ndmaGuidelines.riskDegree}</td>
              <td>Any Demolition Risk with Details</td>
              <td colSpan="2">
                <b>{ndmaGuidelines.demolitionRisk}</b>
              </td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 6: PROPERTY DETAILS ====== */}
        <table
          cellSpacing="0"
          cellPadding="0"
          style={{ width: "80%", height: "100%" }}
        >
          <colgroup>
            <col width="163" />
            <col width="298" />
            <col width="130" />
            <col width="155" />
            <col width="177" />
          </colgroup>
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>PROPERTY DETAILS</b>
              </td>
            </tr>
            <tr>
              <td rowSpan="5">Boundaries on Site</td>
              <td>
                <b>Directions</b>
              </td>
              <td>
                <b>As per Document/ATS</b>
              </td>
              <td>
                <b>Actual at site</b>
              </td>
              <td>
                <b>As per plan</b>
              </td>
            </tr>
            {["North", "South", "East", "West"].map(direction => (
              <tr key={direction}>
                <td>
                  <b>{direction}</b>
                </td>
                <td>
                  <b>{reportData?.directions?.[direction] || "N/A"}</b>
                </td>
                <td>
                  <b>{reportData?.directions?.[direction] || "N/A"}</b>
                </td>
                <td>NA</td>
              </tr>
            ))}
            <tr>
              <td>Boundaries Matching</td>
              <td>{reportData?.boundariesMatching || "N/A"}</td>
              <td>If No - Detail Remark</td>
              <td>NA</td>
              <td>Dimension:</td>
            </tr>
            <tr>
              <td>Plot Area (Sq. ft)</td>
              <td>{reportData?.plotArea || "N/A"}</td>
              <td>Property is Demarcated</td>
              <td>{reportData?.isPropertyDemarcated || "Yes"}</td>
              <td>{reportData?.dimension || "30 * 30"}</td>
            </tr>
            <tr>
              <td>Is the property within which limit</td>
              <td>{reportData?.isPropertyWithinLimit || "N/A"}</td>
              <td>Property Easily Identifiable</td>
              <td colSpan="2">
                {reportData?.propertyIdentifiable || "If no, Remarks:"}
              </td>
            </tr>
            <tr>
              <td>Marketability</td>
              <td>{reportData?.marketability || "Good/ Average/ Poor"}</td>
              <td>{reportData?.marketability ? "Yes" : "N/A"}</td>
              <td colSpan="2">NA</td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 7: STRUCTURAL DETAILS ====== */}
        <table
          cellSpacing="0"
          cellPadding="0"
          style={{ width: "80%", height: "100%" }}
        >
          <colgroup>
            <col width="163" />
            <col width="298" />
            <col width="130" />
            <col width="155" />
            <col width="177" />
          </colgroup>
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>STRUCTURAL DETAILS</b>
              </td>
            </tr>
            <tr>
              <td>Type of Structure</td>
              <td>{reportData?.typeOfStructure || "NA"}</td>
              <td>Quality of Construction</td>
              <td colSpan="2">{structuralDetails.qualityOfConstruction}</td>
            </tr>
            <tr>
              <td>Unit / Flat Configuration</td>
              <td>{reportData?.unitFlatConfiguration || "NA"}</td>
              <td>If quality of construction is poor</td>
              <td colSpan="2">{structuralDetails.poorConstructionDetails}</td>
            </tr>
            <tr>
              <td>No. Of Floors Permissible</td>
              <td>{reportData?.noOfFloorsPermissible || "NA"}</td>
              <td>No. Of Floors Actual</td>
              <td colSpan="2">{structuralDetails.noOfFloorsActual}</td>
            </tr>
            <tr>
              <td>No. of Unit / Flat on each Floor</td>
              <td>{reportData?.noOfUnitFlatOnEachFloor || "NA"}</td>
              <td>Internal composition of the property</td>
              <td colSpan="2">{structuralDetails.internalComposition}</td>
            </tr>
            <tr>
              <td>Approx. Age of Property (Years)</td>
              <td>{reportData?.approxAgeOfProperty || "0"}</td>
              <td>
                Whether construction is as per plan / permission / building by
                laws
              </td>
              <td colSpan="2">{structuralDetails.constructionAsPerPlan}</td>
            </tr>
            <tr>
              <td>Residual Age (Years)</td>
              <td>{reportData?.residualAge || "50"}</td>
              <td>Current Construction Status (in % only)</td>
              <td colSpan="2">{structuralDetails.constructionStatus}</td>
            </tr>
            <tr>
              <td>Whether Lift Available</td>
              <td>{reportData?.liftAvailable || "No"}</td>
              <td>Height of the building (Approx in Meters)</td>
              <td colSpan="2">{structuralDetails.buildingHeight}</td>
            </tr>
            <tr>
              <td>Construction stage</td>
              <td colSpan="4">{reportData?.constructionStage || "Plinth"}</td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 8: VIOLATION & VALUATION ====== */}
        <table
          cellSpacing="0"
          cellPadding="0"
          style={{ width: "80%", height: "100%" }}
        >
          <colgroup>
            <col width="163" />
            <col width="298" />
            <col width="130" />
            <col width="155" />
            <col width="177" />
          </colgroup>
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>VIOLATION OBSERVED, IF ANY</b>
              </td>
            </tr>
            <tr>
              <td>Deviation to Plan</td>
              <td>{violations.deviationToPlan}</td>
              <td>If yes</td>
              <td colSpan="2">{violations.deviationDetails}</td>
            </tr>
            <tr>
              <td>Demolition Risk</td>
              <td>{violations.demolitionRisk}</td>
              <td>If yes</td>
              <td colSpan="2">{violations.demolitionDetails}</td>
            </tr>
            <tr>
              <td>Encroachment of Land</td>
              <td>{violations.encroachment}</td>
              <td>If yes</td>
              <td colSpan="2">{violations.encroachmentDetails}</td>
            </tr>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>VALUATION</b>
              </td>
            </tr>
            <tr>
              <td rowSpan="3">Land area (Sq. ft)</td>
              <td>Document</td>
              <td colSpan="3">{reportData?.document || "N/A"}</td>
            </tr>
            <tr>
              <td>Plan</td>
              <td colSpan="3">{reportData?.landAreaPlan || "0"}</td>
            </tr>
            <tr>
              <td>Site</td>
              <td colSpan="3">{reportData?.landAreaSite || "N/A"}</td>
            </tr>
            <tr>
              <td rowSpan="3">Built Up Area (Proposed)</td>
              <td>GF</td>
              <td colSpan="3">{reportData?.landAreaGF || "N/A"}</td>
            </tr>
            <tr>
              <td>FF</td>
              <td colSpan="3">{reportData?.builtUpAreaFF || "0"}</td>
            </tr>
            <tr>
              <td>SF</td>
              <td colSpan="3">{reportData?.builtUpAreaSF || "0"}</td>
            </tr>
            <tr>
              <td>Land Area considered for Valuation</td>
              <td colSpan="2">Deed / ATS</td>
              <td colSpan="2">{reportData?.landAreaForValuation || "N/A"}</td>
            </tr>
            <tr>
              <td>Land Rate considered per sq. Ft.</td>
              <td colSpan="4">{reportData?.landRate || "N/A"}</td>
            </tr>
            <tr>
              <td>Total Land Valuation</td>
              <td colSpan="4">{reportData?.totalLandValuation || "N/A"}</td>
            </tr>
            <tr>
              <td>Construction Area considered for Valuation</td>
              <td colSpan="2">Plan</td>
              <td colSpan="2">{reportData?.landAreaGF || "N/A"}</td>
            </tr>
            <tr>
              <td>Construction Rate considered per sq. Ft</td>
              <td>BUA</td>
              <td colSpan="3">{reportData?.constructionRate || "N/A"}</td>
            </tr>
            <tr>
              <td>Total Construction Valuation</td>
              <td colSpan="4">
                {reportData?.totalConstructionValuation || "N/A"}
              </td>
            </tr>
            <tr>
              <td>
                Fair Market Value / Total Value of the unit after completion
              </td>
              <td colSpan="4">{reportData?.fairMarketValue || "N/A"}</td>
            </tr>
            <tr>
              <td>Valuation at Present Stage</td>
              <td colSpan="4">{reportData?.presentStageValuation || "N/A"}</td>
            </tr>
            <tr>
              <td>Valuation as per Govt. Guideline</td>
              <td colSpan="4">{reportData?.govtGuidelineValuation || "N/A"}</td>
            </tr>
          </tbody>
        </table>

        {/* ====== TABLE 9: OBSERVATIONS ====== */}
        <table
          cellSpacing="0"
          cellPadding="0"
          style={{ width: "80%", height: "100%" }}
        >
          <tbody>
            <tr>
              <td className="text-danger text-center" colSpan="5">
                <b>OBSERVATION AND REMARKS</b>
              </td>
            </tr>
            <tr>
              <td id="catching" colSpan="5" rowSpan="2">
                {Array.isArray(observations)
                  ? observations.map((obs, index) => (
                      <React.Fragment key={index}>
                        {index + 1}. {obs}
                        <br />
                      </React.Fragment>
                    ))
                  : observations}
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HFFCValuationReport
