


import React, { useState, useEffect  } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import axios from 'axios';

const Aditya = () => {
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission

  const tableStyles = `
  #reportTable {
    width: 100% !important;
    max-width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    word-wrap: break-word;
  }
  #reportTable td, #reportTable th {
    border: 1px solid #000;
    padding: 4px;
    word-break: break-word;
    vertical-align: top;
  }
  #reportTable colgroup {
    display: none;
  }
`;

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/aditya");
        console.log("Fetched Data:", response.data);
        setReportData(response.data[0]); // Set the first item of the array
      } catch (error) {
        console.error("Error fetching report data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, [formSubmitted]); // Trigger re-fetch when formSubmitted changes


  if (loading) return <div>Loading...</div>;
  if (!reportData) return <div>No data available</div>;




  const handleExportPDF = () => {
    const input = document.getElementById('reportTable');
    html2canvas(input, { scale: 2, useCORS: true }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;

      const imgWidth = pageWidth - margin * 2;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let position = margin;
      let remainingHeight = imgHeight;

      if (imgHeight > pageHeight - margin * 2) {
        while (remainingHeight > 0) {
          pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
          remainingHeight -= pageHeight - margin * 2;
          if (remainingHeight > 0) {
            pdf.addPage();
            position = margin - (imgHeight - remainingHeight);
          }
        }
      } else {
        pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);
      }

      pdf.save('DmiFinanace_Report.pdf');
    });
  };

  const handleExportExcel = () => {
    const table = document.getElementById('reportTable');
    const workbook = XLSX.utils.table_to_book(table, { sheet: 'Report' });
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'Baja_Ameriya_Report.xlsx');
  };

  const handleExportCSV = () => {
    const table = document.getElementById('reportTable');
    const worksheet = XLSX.utils.table_to_sheet(table);
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'Baja_Ameriya_Report.csv');
  };

  return (
    <div style={{ padding: 10 }}>
            <style>{tableStyles}</style>

    <div style={{ marginBottom: 20, textAlign: 'right' }}>
      <button onClick={handleExportPDF} style={{ marginRight: 10 }}>Download PDF</button>
      <button onClick={handleExportExcel} style={{ marginRight: 10 }}>Download Excel</button>
      <button onClick={handleExportCSV}>Download CSV</button>
    </div>

    <div id="radio" className="w-100 h-100">
      
      <table id="reportTable" cellSpacing="0" cellPadding="0" style={{ width: "100%", height: "100%" }}>

        <colgroup>
          <col width="199" />
          <col width="194" />
          <col width="101" />
          <col width="117" />a
          <col width="192" />
        </colgroup>
        <tbody>
          <tr>
            <td className='text-center' colSpan="5"><b>Aditya Birla Finance Limited Valuation Report</b></td>
          </tr>
          <tr>
            <td className='text-center'  colSpan="5"><b>Basic Details</b></td>
          </tr>
          <tr>
            <td>Name of the Valuer</td>
            <td className='text-center'  colSpan="4">{reportData.valuerName}</td>
          </tr>
          <tr>
          <td>Name of the Client</td>
          <td width="194">{reportData.clientName}</td>
          <td>Initiation Date</td>
          <td colSpan="2">{reportData.initiationDate}</td>
        </tr>
        <tr>
          <td>Vertical</td>
          <td>{reportData.vertical}</td>
          <td>Visit Date</td>
          <td colSpan="2">{reportData.visitDate}</td>
        </tr>
        <tr>
          <td>Case Reference Number</td>
          <td>{reportData.caseReferenceNumber}</td>
          <td>Report Date</td>
          <td colSpan="2">{reportData.reportDate}</td>
        </tr>
        <tr>
          <td>Name of the Property Owner</td>
          <td colSpan="4" width="604">{reportData.propertyOwnerName}</td>
        </tr>

        <tr>
          <td className="text-center" colSpan="4"><b>Location Details</b></td>
          <td>&nbsp;</td>
        </tr>

        <tr>
          <td>Property Address as Per TRF</td>
          <td colSpan="4" width="604">{reportData.propertyAddressTRF}</td>
        </tr>
        <tr>
          <td>Property Address as Per Visit</td>
          <td colSpan="4" width="604">{reportData.propertyAddressVisit}</td>
        </tr>
        <tr>
          <td>Property Address as Per "Docs"</td>
          <td colSpan="4" width="604">{reportData.propertyAddressDocs}</td>
        </tr>
        <tr>
          <td>Main Locality</td>
          <td>{reportData.mainLocality}</td>
          <td>Sub Locality</td>
          <td colSpan="2">{reportData.subLocality}</td>
        </tr>
        <tr>
          <td>Micro Location</td>
          <td>{reportData.microLocation}</td>
          <td>Landmark</td>
          <td colSpan="2">{reportData.landmark}</td>
        </tr>
        <tr>
          <td>Latitude</td>
          <td>{reportData.latitude}</td>
          <td>Longitude</td>
          <td colSpan="2">{reportData.longitude}</td>
        </tr>
        <tr>
          <td>Type of Property</td>
          <td>{reportData.typeOfProperty}</td>
          <td>Current Usage</td>
          <td colSpan="2">{reportData.currentUsage}</td>
        </tr>
        <tr>
          <td>Has the Valuator Done Valuation for this property before?</td>
          <td>{reportData.valuatorDoneBefore}</td>
          <td>If yes, when</td>
          <td>{reportData.ifYesWhen}</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Property Type</td>
          <td className="text-center" colSpan="4">{reportData.propertyType}</td>
        </tr>
        <tr>
          <td>Property Sub Type</td>
          <td colSpan="4">{reportData.propertySubType}</td>
        </tr>
        <tr>
          <td>Locality</td>
          <td className="text-center" width="194">{reportData.locality}</td>
          <td width="101">Property Falling Within</td>
          <td colSpan="2" width="309">{reportData.propertyFallingWithin}</td>
        </tr>
        <tr>
          <td>Occupancy Level of the Surrounding</td>
          <td colSpan="4" width="604">{reportData.occupancyLevel}</td>
        </tr>
        <tr>
          <td>Condition of the Site of the Property</td>
          <td colSpan="4" width="604">{reportData.siteCondition}</td>
        </tr>
        <tr>
          <td>Distance to Railway/Metro Station</td>
          <td className="text-center" colSpan="4" width="604">{reportData.distanceToRailway}</td>
        </tr>
        <tr>
          <td>Distance to Bus Stop</td>
          <td colSpan="4" width="604">{reportData.distanceToBusStop}</td>
        </tr>
        <tr>
          <td>Distance of Plot from Main Road</td>
          <td className="text-center" colSpan="4" width="604">{reportData.distanceFromMainRoad}</td>
        </tr>
        <tr>
          <td>Distance from City Centre</td>
          <td className="text-center" colSpan="4" width="604">{reportData.distanceFromCityCentre}</td>
        </tr>

{/*  */}



<tr>
            <td>Distance from ABFL Branch</td>
            <td className="text-center" colSpan="4">{reportData.distanceFromBranch}</td>
          </tr>

          <tr>
            <td>Width of the Approach Road</td>
            <td className="text-center" colSpan="4">{reportData.approachRoadWidth}</td>
          </tr>

          <tr>
            <td>Dimensions of the Property</td>
            <td>{reportData.propertyLength}</td>
            <td>{reportData.propertyBreadth}</td>
            <td>Depth in Feet</td>
            <td>{reportData.propertyDepth}</td>
          </tr>

          <tr>
            <td>Physical Approach to the Property</td>
            <td className="text-center" colSpan="3">{reportData.physicalApproach}</td>
            <td>&nbsp;</td>
          </tr>

          <tr>
            <td>Legal Approach to the Property</td>
            <td colSpan="4">{reportData.legalApproach}</td>
          </tr>

          <tr>
            <td colSpan="4">Any other features like board of other financier...</td>
            <td>{reportData.otherFeatures}</td>
          </tr>

          <tr>
            <td className="text-center" colSpan="5"><b>Property Details</b></td>
          </tr>

          <tr>
            <td>Occupancy</td>
            <td>{reportData.occupancyStatus}</td>
            <td>Occupied By</td>
            <td colSpan="2">{reportData.occupiedBy}</td>
          </tr>

          <tr>
            <td>Occupied Since</td>
            <td className="text-end">{reportData.occupiedSince}</td>
            <td className="text-center" colSpan="2">Name of the Occupant</td>
            <td>{reportData.occupantName}</td>
          </tr>

          <tr>
            <td>Property Demarcated</td>
            <td>{reportData.propertyDemarcated}</td>
            <td className="text-center" colSpan="2">Property Identification</td>
            <td>{reportData.propertyIdentification}</td>
          </tr>

          <tr>
            <td>Identification through</td>
            <td className="text-center" colSpan="4">{reportData.identificationThrough}</td>
          </tr>

          <tr>
            <td>Project Category</td>
            <td colSpan="2">{reportData.projectCategory}</td>
            <td className="text-center">Flat Type</td>
            <td>{reportData.flatType}</td>
          </tr>

          <tr>
            <td>Flat Configuration</td>
            <td>{reportData.flatConfiguration}</td>
            <td colSpan="2">Property Holding</td>
            <td>{reportData.propertyHolding}</td>
          </tr>

          <tr>
            <td>Type of Structure</td>
            <td colSpan="2">{reportData.structureType}</td>
            <td>Area of PLOT</td>
            <td>{reportData.plotArea}</td>
          </tr>

          <tr>
            <td>Total No of Floors</td>
            <td colSpan="2">{reportData.totalFloors}</td>
            <td>Lift Facility</td>
            <td>{reportData.liftFacility}</td>
          </tr>

          <tr>
            <td>Amenities</td>
            <td>{reportData.amenities}</td>
            <td></td>
            <td>Marketability</td>
            <td>{reportData.marketability}</td>
          </tr>

          <tr>
            <td>Floor Rise</td>
            <td  >{reportData.floorRise}</td>
            <td>Type of Property</td>
            <td>{reportData.propertyType}</td>
            <td>Property Title</td>
            <td>{reportData.propertyTitle}</td>
          </tr>

          <tr>
            <td>Document Status</td>
            <td>{reportData.documentStatus}</td>
            <td>Encumbrances</td>
            <td>{reportData.encumbrances}</td>
            <td>Project Approval</td>
            <td>{reportData.projectApproval}</td>
          </tr>

          <tr>
            <td>Legal Title Validity</td>
            <td>{reportData.legalTitleValidity}</td>
            <td>Development Status</td>
            <td>{reportData.developmentStatus}</td>
            <td>Completion Status</td>
            <td>{reportData.completionStatus}</td>
          </tr>


          {/*  */}
          
          <tr>
        <td>Carpet Area (as per plan)</td>
        <td>{reportData.carpetAreaPlan}</td>
        <td colSpan="2">{reportData.carpetAreaMeasurement}</td>
        <td>{reportData.carpetAreaMeasurement}</td>
      </tr>
      <tr>
        <td>Built Up Area (as per Norms)</td>
        <td>{reportData.builtUpAreaNorms}</td>
        <td colSpan="2">{reportData.builtUpAreaMeasurement}</td>
        <td>{reportData.builtUpAreaMeasurement}</td>
      </tr>
      <tr>
        <td>Super Built-Up Area</td>
        <td>{reportData.superBuiltUpArea}</td>
        <td colSpan="2">{reportData.superBuiltUpArea}</td>
        <td>{reportData.superBuiltUpArea}</td>
      </tr>
      <tr>
        <td>Car Park</td>
        <td>{reportData.carPark}</td>
        <td colSpan="2">{reportData.carPark}</td>
        <td>{reportData.carPark}</td>
      </tr>
      <tr>
        <td>Amenities</td>
        <td>{reportData.amenities}</td>
        <td colSpan="2">{reportData.amenities}</td>
        <td>{reportData.amenities}</td>
      </tr>
      <tr>
        <td><b>Other Details</b></td>
        <td colSpan="4"></td>
      </tr>
      <tr>
        <td>Setbacks</td>
        <td>As per plan/ Bye laws</td>
        <td>Actual at site</td>
        <td>Deviation</td>
        <td>Remarks, if any</td>
      </tr>
      <tr>
        <td>Front</td>
        <td>{reportData.front}</td>
        <td>0 Ft</td>
        <td rowSpan="4">Usage Deviation</td>
        <td rowSpan="4"></td>
      </tr>
      <tr>
        <td>Side1(Left)</td>
        <td>{reportData.side1}</td>
        <td>0 Ft</td>
      </tr>
      <tr>
        <td>Side2(Right)</td>
        <td>{reportData.side2}</td>
        <td>0 Ft</td>
      </tr>
      <tr>
        <td>Rear</td>
        <td>{reportData.rear}</td>
        <td>0 Ft</td>
      </tr>
      <tr>
        <td>Total Value</td>
        <td colSpan="4">{reportData.totalValue}</td>
      </tr>
      <tr>
        <td>Distress Value (80%)</td>
        <td colSpan="4">{reportData.distressValue}</td>
      </tr>
      <tr>
        <td>Insurance Value</td>
        <td colSpan="4">{reportData.insuranceValue}</td>
      </tr>
      <tr>
        <td>Government Value</td>
        <td colSpan="4">{reportData.governmentValue}</td>
      </tr>
      <tr>
        <td>Percentage Completion</td>
        <td>{reportData.percentageCompletion}</td>
        <td colSpan="2">Percentage Recommendation</td>
        <td>{reportData.percentageRecommendation}</td>
      </tr>
      <tr>
        <td><b>Boundary Detailing</b></td>
        <td colSpan="4"></td>
      </tr>
      <tr>
        <td>Detailing</td>
        <td><b>North</b></td>
        <td><b>South</b></td>
        <td><b>East</b></td>
        <td><b>West</b></td>
      </tr>
      <tr>
        <td>As per docs.</td>
        <td>{reportData.north}</td>
        <td>{reportData.south}</td>
        <td>{reportData.east}</td>
        <td>{reportData.west}</td>
      </tr>
      <tr>
        <td>As per Actual</td>
        <td>{reportData.north}</td>
        <td>{reportData.south}</td>
        <td>{reportData.east}</td>
        <td>{reportData.west}</td>
      </tr>
      <tr>
        <td>Boundary Matching</td>
        <td colSpan="4">NO</td>
      </tr>
      <tr>
        <td><b>Remarks:</b></td>
        <td>{reportData.remarks}</td>
      </tr>
      <tr>
        <td colSpan="2">Name of the Engineer visited</td>
        <td colSpan="3">{reportData.engineerName}</td>
      </tr>
      <tr>
        <td colSpan="5">PHOTOGRAPHS OF PROPERTY</td>
      </tr>
      <tr>
        <td colSpan="2">Subject Property</td>
        <td colSpan="3">{reportData.photographs}</td>
      </tr>


        </tbody>

      </table>
    </div>





</div>

  );
};



export default Aditya;