 
import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const ProfectusBank = () => {
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

      pdf.save('Profectus_Technical_Report.pdf');
    });
  };

  const handleExportExcel = () => {
    const table = document.getElementById('reportTable');
    const workbook = XLSX.utils.table_to_book(table, { sheet: 'Report' });
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'Profectus_Technical_Report.xlsx');
  };

  const handleExportCSV = () => {
    const table = document.getElementById('reportTable');
    const worksheet = XLSX.utils.table_to_sheet(table);
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'Profectus_Technical_Report.csv');
  };
  return (
    <div style={{ padding: 10 }}>
      <div style={{ marginBottom: 20, textAlign: 'right' }}>
        <button onClick={handleExportPDF} style={{ marginRight: 10 }}>Download PDF</button>
        <button onClick={handleExportExcel} style={{ marginRight: 10 }}>Download Excel</button>
        <button onClick={handleExportCSV}>Download CSV</button>
      </div>

      <div id="radio" className="w-100 h-100">
        <table id="reportTable" cellSpacing="0" cellPadding="0" style={{ width: "100%", height: "100%" }}>
        <colgroup>
          <col width="436" />
          <col width="67" />
          <col width="121" />
          <col width="67" span="3" />
          <col width="155" />
          <col width="185" />
          <col width="167" />
          <col width="25" />
          <col width="67" />
          <col width="196" />
        </colgroup>
        <tbody>
          <tr>
            <td className='fw-bold' colSpan="12" width="1620">PROFECTUS CAPITAL VALUATION REPORT</td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan="12" width="1620">Basic Details</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Name of the Client</td>
            <td  colSpan="5" width="389">GAURAV KUMAR GUPTA</td>
            <td className='fw-bold' width="155">Initiation Date</td>
            <td colSpan="5" width="640">20.02.2025</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">SR no</td>
            <td colSpan="5" width="389">2.02502E+15</td>
            <td className='fw-bold' width="155">Visit Date</td>
            <td colSpan="5" width="640">20.02.2025</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Case Refernce Number</td>
            <td colSpan="5" width="389">PLPTBHO0077735</td>
            <td className='fw-bold' width="155">Report Date</td>
            <td colSpan="5" width="640">20.02.2025</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Name of the Property Owner</td>
            <td colSpan="11" width="1184">M/S RADHIKA STEELS (PROPERTIER NAME : SHRI GAURAV GUPTA S/O SHRI RAMESH BABU GUPTA)</td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan="12" width="1620">Location Details</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Property Address As Per TRF</td>
            <td colSpan="11" width="1184">PROPERTY AT PLOT NO.62 IS SITUATED AT SECTOR-F , INDUSTRIAL AREA, GOVINDPURA,BHOPAL,TESHIL-HUZUR,DIST-BHOPAL,MP,462023</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Property Address As Per Visit</td>
            <td colSpan="11" width="1184">PROPERTY AT PLOT NO.62 IS SITUATED AT SECTOR-F , INDUSTRIAL AREA, GOVINDPURA,BHOPAL,TESHIL-HUZUR,DIST-BHOPAL,MP,462023</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Property Address As Per Legal Documents</td>
            <td colSpan="11" width="1184">PROPERTY AT PLOT NO.62 IS SITUATED AT SECTOR-F , INDUSTRIAL AREA, GOVINDPURA,BHOPAL,TESHIL-HUZUR,DIST-BHOPAL,MP,462023</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Main Locality</td>
            <td colSpan="5" width="389">GOVINDPURA</td>
            <td className='fw-bold' width="155">Sub Locality</td>
            <td colSpan="5" width="640">INDUSTRIAL AREA</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Micro Location</td>
            <td colSpan="5" width="389">SECTOR-F</td>
            <td className='fw-bold' width="155">Landmark</td>
            <td colSpan="5" width="640">NEAR ANAND ICE CREAM BHOPAL</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Latitude</td>
            <td colSpan="5" width="389">23.264111</td>
            <td className='fw-bold' width="155">Longitude</td>
            <td colSpan="5" width="640">77.441278</td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan="3" width="624">Has the Valuator Done Valuation for this property before?</td>
            <td colSpan="3" width="201">Yes</td>
            <td className='fw-bold' width="155">If Yes, when</td>
            <td colSpan="5" width="640">10.07.2024</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Property Type</td>
            <td colSpan="11" width="1184">Industrial</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Property Sub Type</td>
            <td colSpan="11" width="1184">Factory</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Locality</td>
            <td colSpan="3" width="255">Developing</td>
            <td className='fw-bold' colSpan="4" width="474">Property Falling Within</td>
            <td colSpan="4" width="455">Municipal Corporation</td>
          </tr>
          <tr>
            <td  className='fw-bold' width="436">Occupancy Level of the Surrounding</td>
            <td colSpan="11" width="1184">Low Population Density</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Condition of the Site of the Property</td>
            <td colSpan="11" width="1184">Under Developed</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Distance to Railway Station</td>
            <td colSpan="11" width="1184">5 KM</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Distance to Bus Stop</td>
            <td colSpan="11" width="1184">5 KM</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Distance of Plot From Main Road</td>
            <td colSpan="11" width="1184">above 500 m</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Distance from City Center</td>
            <td colSpan="11" width="1184">5 KM</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Distance from Branch</td>
            <td colSpan="11" width="1184">5 KM</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Width of the Approach Road</td>
            <td colSpan="11" width="1184">Width 10 to 20ft</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Dimensions of the Property</td>
            <td className='fw-bold' colSpan="4" width="322">EAST (Facing Road Side) in feet</td>
            <td colSpan="2" width="222">EAST</td>
            <td className='fw-bold' colSpan="3" width="377">Depth in Feet</td>
            <td colSpan="2" width="263">0</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Physical Approach to the Property</td>
            <td colSpan="11" width="1184">Clear</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Legal Approach to the Property</td>
            <td colSpan="11" width="1184">Clear</td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan="9" width="1332">Any other features like board of other financier indicating mortgage, notice of Court/any authority which may affect the security</td>
            <td colSpan="3" width="288">No</td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan="12" width="1620">Property Details</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Occupancy</td>
            <td colSpan="5" width="389">Occupied</td>
            <td className='fw-bold' colSpan="2" width="340">Occupied By</td>
            <td colSpan="4" width="455">Self</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Occupied Since</td>
            <td colSpan="5" width="389">2003</td>
            <td className='fw-bold' colSpan="2" width="340">Name of the Occupant</td>
            <td colSpan="4" width="455">RADHIKA STEELS</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Property Demarcated</td>
            <td colSpan="5" width="389">YES</td>
            <td className='fw-bold' colSpan="2" width="340">Property Identification</td>
            <td colSpan="4" width="455">Yes</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Project Category</td>
            <td colSpan="5" width="389">Not Applicable</td>
            <td className='fw-bold' colSpan="2" width="340">Flat Type</td>
            <td colSpan="4" width="455">Not Applicable</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Flat Configuration</td>
            <td colSpan="5" width="389">Not Applicable</td>
            <td className='fw-bold' colSpan="2" width="340">Property Holding</td>
            <td colSpan="4" width="455">Leasehold</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Type of Structure</td>
            <td colSpan="5" width="389">Fully Steel</td>
            <td className='fw-bold' colSpan="2" width="340">Area of Plot</td>
            <td colSpan="4" width="455">7,280</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Total No of Floors</td>
            <td colSpan="5" width="389">G.F.</td>
            <td className='fw-bold' colSpan="2" width="340">Lift Facility</td>
            <td colSpan="4" width="455">No</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Amenities</td>
            <td colSpan="5" width="389">NA</td>
            <td className='fw-bold' colSpan="2" width="340">Marketability</td>
            <td colSpan="4" width="455">Average</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">View of the Property</td>
            <td colSpan="5" width="389">Normal Veiw / Not Applicable</td>
            <td className='fw-bold' colSpan="2" width="340">Parking Facility</td>
            <td colSpan="4" width="455">Not Applicable</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Quality of Construction</td>
            <td colSpan="5" width="389">Class B</td>
            <td className='fw-bold' colSpan="2" width="340">Type of Parking</td>
            <td colSpan="4" width="455">Open CP</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Shape of the Property</td>
            <td colSpan="5" width="389">Regular</td>
            <td className='fw-bold' colSpan="2" width="340">Placement of the Property</td>
            <td colSpan="4" width="455">NA</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Exteriors of the Property</td>
            <td colSpan="5" width="389">Average</td>
            <td className='fw-bold' colSpan="2" width="340">Interiors of the Property</td>
            <td colSpan="4" width="455">Average</td>
          </tr>
          <tr>
            <td className='fw-bold'  width="436">Age of the Property</td>
            <td colSpan="5" width="389">2</td>
            <td className='fw-bold' colSpan="2" width="340">Residual Age</td>
            <td colSpan="4" width="455">58</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Maintenance of the Property</td>
            <td colSpan="5" width="389">Good</td>
            <td className='fw-bold' colSpan="2" width="340">Cautious Location</td>
            <td colSpan="4" width="455">Not Applicable</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Unit Details</td>
            <td className='fw-bold' colSpan="2" width="188">Hall</td>
            <td className='fw-bold' colSpan="2" width="134">Bedroom</td>
            <td className='fw-bold' colSpan="2" width="222">ROOM AND HALL</td>
            <td className='fw-bold' colSpan="2" width="352">Kitchen</td>
            <td className='fw-bold' colSpan="2" width="92">Bathroom</td>
            <td className='fw-bold' width="196">Balcony</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Ground Floor</td>
            <td colSpan="2" width="188">2</td>
            <td colSpan="2" width="134">1</td>
            <td colSpan="2" width="222">&nbsp;</td>
            <td colSpan="2" width="352">&nbsp;</td>
            <td colSpan="2" width="92">&nbsp;</td>
            <td width="196">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">First Floor</td>
            <td colSpan="2" width="188">&nbsp;</td>
            <td colSpan="2" width="134">&nbsp;</td>
            <td colSpan="2" width="222">&nbsp;</td>
            <td colSpan="2" width="352">&nbsp;</td>
            <td colSpan="2" width="92">&nbsp;</td>
            <td width="196">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">2nd Floor</td>
            <td colSpan="2" width="188">&nbsp;</td>
            <td colSpan="2" width="134">&nbsp;</td>
            <td colSpan="2" width="222">&nbsp;</td>
            <td colSpan="2" width="352">&nbsp;</td>
            <td colSpan="2" width="92">&nbsp;</td>
            <td width="196">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">3rd Floor</td>
            <td colSpan="2" width="188">&nbsp;</td>
            <td colSpan="2" width="134">&nbsp;</td>
            <td colSpan="2" width="222">&nbsp;</td>
            <td colSpan="2" width="352">&nbsp;</td>
            <td colSpan="2" width="92">&nbsp;</td>
            <td width="196">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan="12" width="1620">Documentation Details</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Sale Deed</td>
            <td colSpan="5" width="389">Fully Available</td>
            <td className='fw-bold' width="155">Details</td>
            <td colSpan="5" width="640">NA</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Sanctioned Plan</td>
            <td colSpan="5" width="389">Not Available</td>
            <td className='fw-bold' width="155">Details</td>
            <td colSpan="5" width="640">NA</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">CC/OC</td>
            <td colSpan="5" width="389">Not Available</td>
            <td className='fw-bold' width="155">Details</td>
            <td colSpan="5" width="640">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Agreement to Sale</td>
            <td colSpan="5" width="389">Not Available</td>
            <td className='fw-bold' width="155">Details</td>
            <td colSpan="5" width="640">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Mutation</td>
            <td colSpan="5" width="389">&nbsp;</td>
            <td className='fw-bold' width="155">Details</td>
            <td colSpan="5" width="640">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Tax</td>
            <td colSpan="5" width="389">&nbsp;</td>
            <td className='fw-bold' width="155">Details</td>
            <td colSpan="5" width="640">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Electricity Bill</td>
            <td colSpan="5" width="389">Not Applicable</td>
            <td className='fw-bold' width="155">Details</td>
            <td colSpan="5" width="640">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Conversion</td>
            <td colSpan="5" width="389">Not Applicable</td>
            <td className='fw-bold' width="155">Details</td>
            <td colSpan="5" width="640">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Set Back in Case of L+B</td>
            <td className='fw-bold' colSpan="3" width="255">As per Plan</td>
            <td className='fw-bold' colSpan="3" width="289">As per Site</td>
            <td className='fw-bold' colSpan="2" width="352">Deviations</td>
            <td className='fw-bold' colSpan="3" width="288">Remarks</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Front</td>
            <td colSpan="3" width="255">&nbsp;</td>
            <td colSpan="3" width="289">&nbsp;</td>
            <td colSpan="2" width="352">&nbsp;</td>
            <td colSpan="3" width="288">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Side (L)</td>
            <td colSpan="3" width="255">&nbsp;</td>
            <td colSpan="3" width="289">&nbsp;</td>
            <td colSpan="2" width="352">&nbsp;</td>
            <td colSpan="3" width="288">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Side(R)</td>
            <td colSpan="3" width="255">&nbsp;</td>
            <td colSpan="3" width="289">&nbsp;</td>
            <td colSpan="2" width="352">&nbsp;</td>
            <td colSpan="3" width="288">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Back</td>
            <td colSpan="3" width="255">&nbsp;</td>
            <td colSpan="3" width="289">&nbsp;</td>
            <td colSpan="2" width="352">&nbsp;</td>
            <td colSpan="3" width="288">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan="12" width="1620">Valuation</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Detailing</td>
            <td colSpan="5" width="389">Area in Sqft</td>
            <td colSpan="3" width="507">Rate psqft</td>
            <td colSpan="3" width="288">Value</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Plot Area (AS PER LEASE DEED)</td>
            <td colSpan="5" width="389">7,280</td>
            <td colSpan="3" width="507">800</td>
            <td colSpan="3" width="288">5824000</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Plot Area(as per physical)</td>
            <td colSpan="5" width="389">7,280</td>
            <td colSpan="3" width="507">0</td>
            <td colSpan="3" width="288">0</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Carpet Area (as per plan)</td>
            <td colSpan="5" width="389">0</td>
            <td colSpan="3" width="507">0</td>
            <td colSpan="3" width="288">0</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Carpet Area (as per measurement)</td>
            <td colSpan="5" width="389">0</td>
            <td colSpan="3" width="507">0</td>
            <td colSpan="3" width="288">0</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Built Up Area (RCC)</td>
            <td colSpan="5" width="389">0</td>
            <td colSpan="3" width="507">0</td>
            <td colSpan="3" width="288">0</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Built Up Area TIN SHED</td>
            <td colSpan="5" width="389">3,252</td>
            <td colSpan="3" width="507">0</td>
            <td colSpan="3" width="288">0</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Super Built Up Area</td>
            <td colSpan="5" width="389">0</td>
            <td colSpan="3" width="507">0</td>
            <td colSpan="3" width="288">0</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Car Park</td>
            <td colSpan="5" width="389">0</td>
            <td colSpan="3" width="507">0</td>
            <td colSpan="3" width="288">0</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Amenities</td>
            <td colSpan="5" width="389">0</td>
            <td colSpan="3" width="507">0</td>
            <td colSpan="3" width="288">0</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Total Value</td>
            <td colSpan="11" width="1184">5824000</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Distress Value</td>
            <td colSpan="11" width="1184">4659200</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Insurance Value</td>
            <td colSpan="11" width="1184">0</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Government Value</td>
            <td colSpan="11" width="1184">0</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Percentage Completion</td>
            <td colSpan="4" width="322">100%</td>
            <td className='fw-bold' colSpan="4" width="574">Percentage Recommendation</td>
            <td colSpan="3" width="288">100%</td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan="12" width="1620">Boundary Detailings</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Detailing</td>
            <td className='fw-bold' colSpan="3" width="255">North</td>
            <td className='fw-bold' colSpan="3" width="289">South</td>
            <td className='fw-bold' colSpan="3" width="377">East</td>
            <td className='fw-bold' colSpan="2" width="263">West</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">As per deed</td>
            <td colSpan="3" width="255">PLOT NO.61-A(M/S K.C.ENTERPRISES)</td>
            <td colSpan="3" width="289">M/S TAJ ENTERPISES</td>
            <td colSpan="3" width="377">ROAD</td>
            <td colSpan="2" width="263">RESIDENCE COLONY</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">As per Actual</td>
            <td colSpan="3" width="255">PLOT NO.61-A</td>
            <td colSpan="3" width="289">TAJ ENTERPISES</td>
            <td colSpan="3" width="377">ROAD</td>
            <td colSpan="2" width="263">OTHER COLONY</td>
          </tr>
          <tr>
            <td className='fw-bold' width="436">Boundaries Matching</td>
            <td colSpan="11" width="1184">Yes</td>
          </tr>
          <tr>
            <td rowSpan="3" width="436">&nbsp;</td>
            <td id="catching" colSpan="11" rowSpan="3" width="1184">
             <p className='fw-bold' >
                 PROVIDED COPY OF OLD VALUATION REPORT, ALL DATA HAS BEEN TAKEN FROM SAME AND REPORT IS RELEASED ON THE BASIS OF OLD REPORT. <br />
              OLD REMARKS <br /> </p>
              1. GIVEN XEROX COPY OF LEASE DEED IN FAVOUR OF M/S RADHIKA STEELS (PROPERTIER NAME : SHRI GAURAV GUPTA S/O SHRI RAMESH BABU GUPTA) STARTED FROM ON DATE 26.03.2016 TO 25.03.2046 FOR THIRTY YEARS WHICH IS LEASED BY DISTRICT TRADE &amp; INDUSTRIES CENTER ,BHOPAL. TOTAL AREA 7280 SQFT.<br />
              2. DURING PROPERTY VISIT MR.GAURAV KUMAR GUPTA MET AT THE PROPERTY WHO IS LESSEE WITH CONTACT NO. 9981014987. IT WAS CLEARLY EXPLAINED TO HIM THAT THE PROPERTY VISIT IS BEING DONE FOR VALUATION PURPOSE IN RELATION WITH LOAN PROPOSAL.<br />
              3. RATE HAS BEEN CONFIRM FORM MARKET ENQUIRY.<br />
              4. PROPERTY IS SITUATED AT SURROUNDING AREA OF LOCALITY IS INDUSTRIAL ZONING SURROUNDING AREA DEVELOPMENT MORE THAN 50% AND HABITATION IS MORE THAN 60%.<br />
              5. AT SITE PROPERTY IS TIN SHED STRUCTURED FACTORY WHICH IS OCCUPIED BY OWNER.<br />
              6. PROPERTY IS IDENTIFIED BY FOUR SIDE BOUNDARIES OF GIVEN LEASE DEED AND LOCAL ENQUIRY.<br />
              <p className='fw-bold'>

              7. THIS IS CAUTION PROPERTY HIGH TENSION ELECTRIC LINE OF 132 KV IS PASSING THROUGH THE WHOLE PROPERTY. HENCE REGISTRY VALUE (GOV. GUIDLINE VALUE) IS CONSIDERED IN REPORT <br />
              </p>
              8. ACTUAL AT SITE BUILT-UP AREA OF TIN SHED IS 3,252 SQFT.<br />
              9. AS PER LEASE DEED LAND AREA IS 7280 SQFT. BUT ACTUAL AT SITE LAND AREA OF THE PROPERTY IS 8,436 SQFT. LOWER SIDE AREA OF THE PROPERTY IS CONSIDERED IN REPORT. <br />
              10. BUILDING PERMISSION AND MAP IS NOT PROVIDED.<br />
              <p className='fw-bold'>

              11. SALEABILITY OF THE SUBJECTED PROPERTY IS VERY LOW SAME SHOULD BE NOTE. <br />
              12. REPORT IS RELEASED WITH LAND ENCROACHMENT CONCERN AND HIGH TENSION ELECTRIC LINE CONCERN TO TECHNICAL TEAM APPROVAL.<br />
              </p>
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td width="436">Name of the Engineer visited</td>
            <td colSpan="11" width="1184">ER. BHAGWAT</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ProfectusBank;