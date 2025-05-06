import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const PiramalNpa = () => {
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

      pdf.save('Technical_Report.pdf');
    });
  };

  const handleExportExcel = () => {
    const table = document.getElementById('reportTable');
    const workbook = XLSX.utils.table_to_book(table, { sheet: 'Report' });
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, 'Technical_Report.xlsx');
  };

  const handleExportCSV = () => {
    const table = document.getElementById('reportTable');
    const worksheet = XLSX.utils.table_to_sheet(table);
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'Technical_Report.csv');
  };

  return (
    <div style={{ padding: 10 }}>
      <div style={{ marginBottom: 20, textAlign: 'right' }}>
        <button onClick={handleExportPDF} style={{ marginRight: 10 }}>Download PDF</button>
        <button onClick={handleExportExcel} style={{ marginRight: 10 }}>Download Excel</button>
        <button onClick={handleExportCSV}>Download CSV</button>
      </div>


      <div id="reportTable" >

      <table  id='radio' style={{ borderCollapse: 'collapse', width: '100%' }}>
        <colgroup>
          <col width="22" />
          <col width="95" />
          <col width="47" />
          <col width="55" />
          <col width="57" />
          <col width="41" />
          <col width="55" />
          <col width="191" />
          <col width="178" />
          <col width="130" />
          <col width="167" />
        </colgroup>
        <tbody>
          <tr>
            <td className='fw-bold' colSpan="11" width="1038"><a name="RANGE!A1:K144">TECHNICAL SECURTY REPORT</a></td>
          </tr>
          <tr>
            <td  className='fw-bold' colSpan="11">LOAN APPLICATION DETAILS</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3">Branch Name</td>
            <td className='fw-bold'  colSpan="4" width="208">BHOPAL</td>
            <td className='fw-bold'  > APPLICATION NO.</td>
            <td width="178">&nbsp;</td>
            <td className='fw-bold'  >CUSTOMER NO.</td>
            <td>NOT PROVIDED</td>
          </tr>
          <tr>
            <td className='fw-bold'  colSpan="3">APPLICATION STATUS</td>
            <td colSpan="4">Sanctioned</td>
            <td className='fw-bold'  width="191">APPLICANT NAME</td>
            <td className='fw-bold'  colSpan="2" width="308">ANJANI BHATNAHGAR</td>
            <td width="167">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'  colSpan="3">PRODUCT</td>
            <td colSpan="4">OTA</td>
            <td className='fw-bold' >TRANSACATION TYPE</td>
            <td colSpan="2">NPA</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'  colSpan="3">VISIT DONE BY</td>
            <td colSpan="4">MOD. SARFARAZ</td>
            <td className='fw-bold'  >DATE OF VISIT</td>
            <td colSpan="2">14.09.2023</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'  colSpan="11" width="1038">VALUATION GUIDELINE</td>
          </tr>
          <tr>
            <td className='fw-bold'  colSpan="3">LOCATON TYPE</td>
            <td colSpan="4">RESIDENTIAL</td>
            <td className='fw-bold'  >VALUATION APPROACHES</td>
            <td className='fw-bold'  >NA</td>
            <td className='fw-bold'  width="130">VALUATION METHODOLOGY</td>
            <td className='fw-bold'  >LAP - Residential</td>
          </tr>
          <tr>
            <td className='fw-bold'  colSpan="11">ADDRESS DETAILS</td>
          </tr>
          <tr>
            <td>1</td>
            <td className='fw-bold'  colSpan="4" width="254">ADDRESS DETAILS (AS PER SITE INSPECTION)</td>
            <td colSpan="4" width="465">&nbsp;</td>
            <td colSpan="2" width="297">(NON EDITABLE, FILL DETAILED ADDRESS FROM BELOW)</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td  colSpan="10" className='text-danger' >(PLEASE ENTER "NA" WHEREVER NOT APPLICABLE IN ADDRESS FILEDS)</td>
          </tr>
          <tr>
            <td rowspan="2">2</td>
            <td className='fw-bold'   colSpan="3">HOUSE/FLAT NO.</td>
            <td colSpan="3" width="153">NA</td>
            <td className='fw-bold'   > FLOOR NO.</td>
            <td>NA</td>
            <td className='fw-bold'   width="130">WING NAME &amp; NO.</td>
            <td>MA</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3" width="197">BUILDING NAME AND NUMBER</td>
            <td colSpan="3">D</td>
            <td className='fw-bold'   width="191">PLOT NO.</td>
            <td width="178">10 &amp; 11</td>
            <td className='fw-bold'   >SURVEY NO.</td>
            <td width="167">&nbsp;</td>
          </tr>
          <tr>
            <td rowspan="6">3</td>
            <td className='fw-bold'   colSpan="3" width="197">STREET NAME &amp;/ NO.</td>
            <td colSpan="3" width="153">&nbsp;</td>
            <td className='fw-bold'   width="191">STAGE/SECTOR/WARD NO.</td>
            <td width="178">NA</td>
            <td className='fw-bold'   width="130">LANDMARKS</td>
            <td width="167">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3" width="197">VILLAGE/LOCATION</td>
            <td colSpan="4" width="344">&nbsp;</td>
            <td className='fw-bold'   width="178">CITY/TULKA/TOWN</td>
            <td colSpan="2" width="297">BHOPAL</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3" width="197">DISTRICT</td>
            <td colSpan="4" width="344">BHOPAL</td>
            <td className='fw-bold'   width="178">STATE</td>
            <td colSpan="2" width="297">MADHYA PRADESH</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3" width="197">CUNTRY</td>
            <td colSpan="3" width="153">INDIA</td>
            <td>&nbsp;</td>
            <td className='fw-bold'  >PIN CODE</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3" width="197">TLATTITUDE &amp; LONGITUDE</td>
            <td colSpan="3">&nbsp;</td>
            <td className='fw-bold'  >PROPERTY LOCATED ON</td>
            <td>&nbsp;</td>
            <td className='fw-bold'   width="130">APPROCH ROAD TO PROPERTY</td>
            <td>MORE THAN 10 FT</td>
          </tr>
          <tr>
            <td colSpan="10" width="1016">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="11">BOUNDARIES</td>
          </tr>
          <tr>
            <td rowspan="9">4</td>
            <td className='fw-bold'   colSpan="2">DIRECTIONS</td>
            <td className='fw-bold'   colSpan="4">EAST</td>
            <td className='fw-bold'   >WEST</td>
            <td className='fw-bold'   >NOTH</td>
            <td className='fw-bold'   colSpan="2">SOUTH</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="2" width="142">AS PER APPROVED PLAN</td>
            <td colSpan="4" width="208">&nbsp;</td>
            <td width="191">&nbsp;</td>
            <td width="178">&nbsp;</td>
            <td colSpan="2" width="297">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="2" width="142">AS PER SITE INVESTICATION</td>
            <td colSpan="4" width="208">&nbsp;</td>
            <td width="191">&nbsp;</td>
            <td width="178">&nbsp;</td>
            <td colSpan="2" width="297">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="10" width="1016">GENERAL DETAILS</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="2" width="142">MUNICIPAL LIMIT</td>
            <td colSpan="4">YES</td>
            <td className='fw-bold'   width="191">MUNICIPAL AUTHORTY (NAME)</td>
            <td className='fw-bold'   >NAGAR NIGAM</td>
            <td className='fw-bold'   width="130">YEAR OF CONSTRUCTION</td>
            <td>2010</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="2">SALLER NAME</td>
            <td colSpan="4">NA</td>
            <td className='fw-bold'   >OCCUPANCY STATUS</td>
            <td  >OCCUPIED</td>
            <td className='fw-bold'   >AGE OF PROPERTY*</td>
            <td>13</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="2" width="142">OCCUPANT NAME*</td>
            <td colSpan="4" width="208">NA</td>
            <td className='fw-bold'   width="191">PROPERTY / DWELLING UNIT TYPE*</td>
            <td>NA</td>
            <td className='fw-bold'   width="130">RESIDUAL LIFE OF THE PROPERTY*</td>
            <td>47</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="2" width="142">PROPERTY FURNSHED / UNFURNISHED</td>
            <td className='fw-bold'   colSpan="4">FURNISHED</td>
            <td className='fw-bold'   width="191">PROPERTY FALLING IN CAUTION AREA</td>
            <td>NA</td>
            <td className='fw-bold'   width="130">REASON FOR CAUTION</td>
            <td>NA</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="10" width="1016">SURROUNDING EXTERNAL AMENITIES</td>
          </tr>
          <tr>
            <td  rowspan="17">5</td>
            <td className='fw-bold'   colSpan="3">SR. NO.</td>
            <td className='fw-bold'   colSpan="4" width="344">PREMISES LIST</td>
            <td className='fw-bold'   width="178">APPROX, DISTANCE FROM PROPERTY (IN KMS)</td>
            <td colSpan="2" width="297">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3">1</td>
            <td className='fw-bold'   colSpan="4" width="344">NEAREST BUS STOP</td>
            <td className='fw-bold'   width="178">2-5 KM</td>
            <td colSpan="2" width="297">MISHROAD BUS STOP</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="3">2</td>
            <td className='fw-bold'   colSpan="4">NEAREST RAILWAY STION</td>
            <td>7.3 KM</td>
            <td colSpan="2">RANIKAMLAPATI RAILWAY SATAION</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3">3</td>
            <td className='fw-bold'   colSpan="4">NEAREST AIRPORT</td>
            <td>25 KM</td>
            <td colSpan="2">RAJABHOJ AIRPORT</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3">4</td>
            <td className='fw-bold'    colSpan="4" width="344">NEAREST SCHOOL / COLLAGE</td>
            <td>2-05 KM</td>
            <td colSpan="2" width="297">RKDF INSTITUTE BHOPAL</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3">5</td>
            <td className='fw-bold'   colSpan="4">NEAREST BANK</td>
            <td width="178">2-3 KM</td>
            <td colSpan="2">HDFC BANK</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3">6</td>
            <td className='fw-bold'   colSpan="4">NEREST HIGHWAY / MAJOR ROAD</td>
            <td width="178">1-2 KM</td>
            <td colSpan="2">HOSHANGABAD ROAD</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3">7</td>
            <td className='fw-bold'   colSpan="4">NEAREST HOSPITAL</td>
            <td width="178">0-1 KM</td>
            <td colSpan="2" width="297">UBUNTU HART HOSPITAL</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3">8</td>
            <td className='fw-bold'   colSpan="4">NEAREST MUILTIPLEX / MALL / MARKET</td>
            <td width="178">2-5 KM</td>
            <td colSpan="2">ASHIMA MALL</td>
          </tr>
          <tr>
            <td colSpan="10" width="1016">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3" width="197">AREA DETAILS</td>
            <td className='fw-bold'   colSpan="4">ACTUAL AREA</td>
            <td className='fw-bold'   colSpan="2">APPROVED AREA</td>
            <td className='fw-bold'   rowspan="2" width="167">ACTUAL AREA/ APPROVED AREA FOR VALUATION PURPOSE</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3" width="197">AREA TYPE</td>
            <td className='fw-bold'   colSpan="3">SQURE FEET</td>
            <td className='fw-bold'   >SQURE METER</td>
            <td className='fw-bold'   >SQURE FEET</td>
            <td className='fw-bold'   >SQURE METER</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3" width="197">PLOT AREA</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td className='fw-bold'   >0</td>
            <td width="167">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3" width="197">CONSTRUCTION AREA</td>
            <td className='fw-bold'   colSpan="3">0</td>
            <td className='fw-bold'   >0.00</td>
            <td  >&nbsp;</td>
            <td className='fw-bold'   >0</td>
            <td rowspan="4" width="167">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3" width="197">CARPET AREA</td>
            <td className='fw-bold'   colSpan="3">&nbsp;</td>
            <td className='fw-bold'   >0.00</td>
            <td className='fw-bold'   >0</td>
            <td className='fw-bold'   >0</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3" width="197">BUILT-UP AREA</td>
            <td colSpan="3">&nbsp;</td>
            <td className='fw-bold'   >0.00</td>
            <td className='fw-bold'   >0</td>
            <td className='fw-bold'   >0</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3" width="197">SALE AREA</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td className='fw-bold'   >0</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="11">VALUATION DETAILS</td>
          </tr>
          <tr>
            <td  rowspan="3">6</td>
            <td className='fw-bold'   colSpan="5">AREA TYPE*</td>
            <td className='fw-bold'   colSpan="2">RESIDENTIAL</td>
            <td className='fw-bold'   width="178">AREA (SQFT)*</td>
            <td className='fw-bold'   width="130">RATE/SFT*</td>
            <td className='fw-bold'   width="167">VALUATION*</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3">A). AREA VALUATION</td>
            <td className='fw-bold'   colSpan="4">PLOT AREA</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td className='fw-bold'   align="right">0</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3">B). CONSTRUCTION COST</td>
            <td className='fw-bold'   colSpan="4" width="344">CONSTRUCTION AREA</td>
            <td width="178">&nbsp;</td>
            <td width="130">&nbsp;</td>
            <td className='fw-bold'    align="right">0</td>
          </tr>
          <tr>
            <td rowspan="10">7</td>
            <td className='fw-bold'   colSpan="3" width="197">C). EXTENSION/ IMPROVEMENT ESTIMATE</td>
            <td className='fw-bold'   colSpan="4">EXTENSION/ IMPROVEMENT AREA</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td className='fw-bold'   >RS.</td>
          </tr>
          <tr>
            <td colSpan="10">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="3">D). AMENITIES</td>
            <td className='fw-bold'   colSpan="3">DESCRIPTION</td>
            <td className='fw-bold'   >AREA/ QUANTITY</td>
            <td className='fw-bold'   >UNIT (LOV)</td>
            <td className='fw-bold'   >AMOUNT</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'   colSpan="3">1</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="3">2</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="3">3</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="3">4</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="3">5</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="3">6</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="8">TOTAL AMENITIES COST (D)</td>
            <td>_</td>
            <td className='fw-bold'    >RS.</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td colSpan="10">&nbsp;</td>
          </tr>
          <tr>
            <td rowspan="7">8</td>
            <td className='fw-bold'    colSpan="7">TOTAL FAIR MARKET VALUE (A+B+C+D)</td>
            <td colSpan="2">_</td>
            <td className='fw-bold'    align="right">0</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="10" width="1016">ADDITIONAL DETAILS</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="2" width="142">GOVT / CIRCLE VALUE OF THE PROPERTY (RS.)</td>
            <td className='fw-bold'    colSpan="3" width="153">0</td>
            <td className='fw-bold'    colSpan="2" width="246">% Variance (Total Fair Market Value to Govt Value</td>
            <td width="178">&nbsp;</td>
            <td className='fw-bold'    width="130">DISTRESS VALUE OF THE PROPERTY (RS.)</td>
            <td className='fw-bold'    >0</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="8">RENTAL VALUE OF THE PROPERTY (PER MONTH)</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="10">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="10">FLOOR DETAILS</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="6">FLOOR</td>
            <td className='fw-bold'    >APPROVED</td>
            <td className='fw-bold'    >PLANNED</td>
            <td className='fw-bold'    colSpan="2">REAMRKS ON NO. FLOORS</td>
          </tr>
          <tr>
            <td  rowspan="5" width="22">9</td>
            <td className='fw-bold'    width="95">(A)</td>
            <td className='fw-bold'    colSpan="5" width="255">NO OF BASEMENT (S)</td>
            <td width="191">&nbsp;</td>
            <td>&nbsp;</td>
            <td colSpan="2" rowspan="6">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    width="95">(B)</td>
            <td className='fw-bold'    colSpan="5" width="255">NO OF GROUND/PARKING/STILT</td>
            <td className='fw-bold'    align="right" width="191">1</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    width="95">(C.)</td>
            <td className='fw-bold'    colSpan="5" width="255">PODIUM(S)</td>
            <td width="191">&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td width="95">&nbsp;</td>
            <td width="47">&nbsp;</td>
            <td width="55">&nbsp;</td>
            <td width="57">&nbsp;</td>
            <td width="41">&nbsp;</td>
            <td width="55">&nbsp;</td>
            <td width="191">&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    width="95">(D)</td>
            <td className='fw-bold'    colSpan="5">NO OF UPPER FLOOR(S)</td>
            <td className='fw-bold'    align="right" width="191">1</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td className='fw-bold'    colSpan="6">(E.) = (A + B + C + D) TOTAL NO. OF FLOOR(S)</td>
            <td className='fw-bold'    align="right">0</td>
            <td className='fw-bold'    align="right">0</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td colSpan="10">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="11">TECHNICAL DOCUMENTS DETAILS</td>
          </tr>
          <tr>
            <td rowspan="12">&nbsp;</td>
            <td className='fw-bold'    colSpan="4">DOCUMENT NAME</td>
            <td className='fw-bold'    colSpan="3">RECD TYPE</td>
            <td className='fw-bold'    >REF NO.</td>
            <td className='fw-bold'    >REF DATE</td>
            <td className='fw-bold'     >DETAILS OF APPROVAL</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="4" width="254">APPROVED LAYOUT PLAN</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="4">APPROVED FLOOR PLAN</td>
            <td colSpan="3">&nbsp;</td>
            <td width="178">&nbsp;</td>
            <td width="130">&nbsp;</td>
            <td width="167">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="4" width="254">CONSTRUCTION PERMISSION / BUILDING</td>
            <td colSpan="3" width="287">&nbsp;</td>
            <td width="178">&nbsp;</td>
            <td width="130">&nbsp;</td>
            <td width="167">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="4" width="254">BUILDING COMPLETION CERTIFICATE / OCCUPATION PERMISSION / USE PERMISSION / POSSESSION CERTIFIACTE</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="4" width="254">NON AGRICULTURAL PERMISSION / LAND CONVERSION / DIVERSION ORDER</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="4" width="254">LOCATION SKETCH / CERTIFICATE</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="4" width="254">PROPERTY TEX RECIEPTS</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="4" width="254">AUTHORITY TAX RECIEPTS</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="4" width="254">CONSTRUCTION ESTIMATE FROM REGISTRED ENGINEEER / ARCHITECT</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="4" width="254">IMPROVEMENT / EXTENSION ESTIMATE FROM REGISTRED ENGINEER / ARCHITECT</td>
            <td colSpan="3">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="6" width="350">REMSRKS ON DOCUMENTS VERIFIED</td>
            <td colSpan="4">&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td colSpan="10" width="1016">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'    colSpan="11">NDMC PARAMETERS</td>
          </tr>
          <tr>
            <td rowspan="9">13</td>
            <td className='fw-bold'      colSpan="3" width="197">Nature of Building/Wing/ Tower</td>
            <td colSpan="3" width="153">Stand alone Structure/ <span className='fw-bold'>slab building</span> </td>
            <td colSpan="2" width="369">Type of structure</td>
            <td colSpan="2" width="297"><span className='fw-bold'>RCC Framed</span>  / Load Bearing / Steel /Composite/TEEN SHED</td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan="3" width="197">Function of Use</td>
            <td colSpan="3" width="153"> <span className='fw-bold'> Residential</span>  / Non- Residential /Critical Lifeline (Infrastructural development)</td>
            <td colSpan="2" width="369">Height of Building above ground level</td>
            <td colSpan="2" width="297"><span className='fw-bold'>Less than 15m tall</span> / between 15m to 45m / above 45m</td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan="3" width="197">Type of foundation</td>
            <td colSpan="3" width="153"> <span className='fw-bold'> Independent</span>  / Interconnected / Raft / Pile / Not able to assess since completed property</td>
            <td colSpan="2" width="369">Horizontal floor type</td>
            <td colSpan="2" width="297"><span className='fw-bold' > Beams and slabs </span> / waffles / ribbed floors / first slab with drops</td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan="3" width="197">Concrete Grade</td>
            <td colSpan="3" width="153"> <span className='fw-bold' >M25</span>/ M30 / M40 / M45 / Not able to assess since completed property</td>
            <td colSpan="2" width="369">Steel Grade</td>
            <td colSpan="2" width="297"> <span className='fw-bold' >FE 450</span> / FE 500 / Not able to assess since completed property</td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan="3" width="197">Seismic Zone</td>
            <td colSpan="3" width="153">Zone II/ <span className='fw-bold' > III </span> / IV/V</td>
            <td colSpan="2" width="369">Soil Slope vunerable to landslide</td>
            <td colSpan="2" width="297">Very High Hazard zone/ High Hazard Zone/ Moderately High Hazard Zone/ Low Hazard Zone/ Very <span className='fw-bold' >low Hazard zone</span>  </td>
          </tr>
          <tr>
            <td className='fw-bold' colSpan="3" width="197">Flood prone Area</td>
            <td colSpan="3" width="153">Y/N</td>
            <td colSpan="2" width="369">urban floods</td>
            <td colSpan="2" width="297">Upstream/ <span className='fw-bold'  >Downstream</span> </td>
          </tr>
          <tr>
            <td className='fw-bold'  colSpan="3" width="197">Environment Exposure Condition</td>
            <td colSpan="3" width="153"> <span className='fw-bold'  >Mild</span> / Moderate/ Severe/ Very severe/ Extreme</td>
            <td colSpan="2" width="369">Tsunami</td>
            <td colSpan="2" width="297">Y/N</td>
          </tr>
          <tr>
            <td className='fw-bold'  colSpan="3" width="197">Wind/Cyclones</td>
            <td colSpan="3" width="153">Very High Damage risk Zone A/ Very High Damage risk Zone B/ High Damage Risk Zone/ Moderate Damage Risk Zone A/ Moderate Damage Risk Zone B/ <span className='fw-bold' >Low Damage Risk Zone </span> </td>
            <td colSpan="2" width="369">Coastal Regulatory Zone</td>
            <td colSpan="2" width="297">CRZ I/ CRZ II/ <span className='fw-bold'> CRZ III</span>/ CRZ  IV/NA</td>
          </tr>
          <tr>
            <td colSpan="10">&nbsp;</td>
          </tr>
          <tr>
            <td  className='fw-bold' colSpan="11">SITE INVESTIGATION</td>
          </tr>
          <tr>
            <td rowspan="12">15</td>
            <td className='fw-bold'  >SR. NO.</td>
            <td className='fw-bold'  colSpan="5">ACTIVITY</td>
            <td className='fw-bold'  >ALLOTED % FOR ACTIVITY</td>
            <td className='fw-bold'  >PRESENT COMPLETION (%)</td>
            <td className='fw-bold'  colSpan="2">REMARKS ON PROGRESS</td>
          </tr>
          <tr>
            <td width="95">1</td>
            <td className='fw-bold'  colSpan="5">PLINTH</td>
            <td  align="right">20.00%</td>
            <td align="right">20.00%</td>
            <td colSpan="2" rowspan="9">RESIDENTIAL FLAT</td>
          </tr>
          <tr>
            <td width="95">2</td>
            <td className='fw-bold'  colSpan="5" width="255">R.C.C. BOVE GROUND</td>
            <td  align="right">40.00%</td>
            <td align="right">40.00%</td>
          </tr>
          <tr>
            <td width="95">3</td>
            <td className='fw-bold'  colSpan="5" width="255">BRICK WORK</td>
            <td align="right" width="191">10%</td>
            <td align="right">10.00%</td>
          </tr>
          <tr>
            <td width="95">4</td>
            <td className='fw-bold'  colSpan="5" width="255">INTERNAL PLASTER</td>
            <td align="right">5.00%</td>
            <td align="right">5.00%</td>
          </tr>
          <tr>
            <td width="95">5</td>
            <td className='fw-bold'  colSpan="5" width="255">EXTERNAL PLASTER</td>
            <td className='fw-bold'  align="right" width="191">5.00%</td>
            <td align="right">5.00%</td>
          </tr>
          <tr>
            <td width="95">6</td>
            <td className='fw-bold'  colSpan="5" width="255">FLOORING</td>
            <td className='fw-bold'  align="right" width="191">5.00%</td>
            <td align="right">5.00%</td>
          </tr>
          <tr>
            <td width="95">7</td>
            <td className='fw-bold'  colSpan="5" width="255">PLUMBING &amp; ELECTRIFC WORK</td>
            <td align="right">5.00%</td>
            <td align="right">5.00%</td>
          </tr>
          <tr>
            <td width="95">8</td>
            <td className='fw-bold'  colSpan="5">DOOR, WINDOW &amp; PAINT</td>
            <td align="right">5.00%</td>
            <td align="right">5.00%</td>
          </tr>
          <tr>
            <td width="95">9</td>
            <td className='fw-bold'  colSpan="5">FINISHING &amp; POSSESSION</td>
            <td className='fw-bold'  align="right" width="191">5.00%</td>
            <td align="right">5.00%</td>
          </tr>
          <tr>
            <td className='fw-bold'  colspan="6" width="350">TOTAL COMPLETION (%)</td>
            <td align="right">100.00%</td>
            <td>100.00%</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="10" width="1016">&nbsp;</td>
          </tr>
          <tr>
            <td rowspan="3">16</td>
            <td className='fw-bold'  colSpan="6" width="350">IS THE PROPERTY TECHNICALLY ACCEPTABLE ?</td>
            <td className='fw-bold'  width="191">YES</td>
            <td className='fw-bold'  colSpan="2" width="308">MARKETABILITY OF PROPERTY</td>
            <td className='fw-bold'   width="167">GOOD</td>
          </tr>
          <tr>
            <td colSpan="10">&nbsp;</td>
          </tr>
          <tr>
            <td className='fw-bold'  colSpan="10">REMARKS ON THE PROPERTY</td>
          </tr>
          <tr>
            <td className='fw-bold'  colSpan="11" width="1038">1. THIS NAP CASE, ONLY OUTSIDE VISIT IS DONE.<br />
              2. ALL DATA TAKEN AS PROVIDED BY BANK.<br />
              3. PROPERTY IS IDENTIFIED BY PRPERTY ADDRESS AND UNIT NO.<br />
              4. RATE HAS BEEN CONFIRM FROM MARKET ENQUIRY.<br />
              <br /></td>
          </tr>
          <tr>
            <td width="22">3</td>
            <td className='fw-bold'  colSpan="10" width="1016">TSR DEVIATION</td>
          </tr>
          <tr>
            <td className='fw-bold'  colspan="2" width="117">SR. NO.</td>
            <td className='fw-bold'  colspan="9" width="921">DEVIATIONS IN THE PROPERTY / DOCUMENTS AVAILABLE</td>
          </tr>
          <tr>
            <td width="22">&nbsp;</td>
            <td width="95">1</td>
            <td colspan="9" width="921">&nbsp;</td>
          </tr>
          <tr>
    <td width="22">&nbsp;</td>
    <td colspan="10" width="1016">&nbsp;</td>
  </tr>
  <tr>
    <td width="22">&nbsp;</td>
    <td className='fw-bold'  colspan="10" width="1016">TSR CONDTION </td>
  </tr>
  <tr>
    <td width="22">&nbsp;</td>
    <td className='fw-bold'  colspan="10" width="1016">TSR CONDTIONS FOR COMPLINCE</td>
  </tr>
  <tr>
    <td width="22">&nbsp;</td>
    <td className='fw-bold'  width="95">SR. NO.</td>
    <td colspan="9" width="921">&nbsp;</td>
  </tr>
  <tr>
    <td width="22">&nbsp;</td>
    <td width="95">1</td>
    <td colspan="9" width="921">&nbsp;</td>
  </tr>
  <tr>
    <td width="22">&nbsp;</td>
    <td width="95">2</td>
    <td colspan="9" width="921">&nbsp;</td>
  </tr>
  <tr>
    <td width="22">&nbsp;</td>
    <td className='fw-bold'  colspan="3" width="197">TSR PREPRADE BY</td>
    <td className='fw-bold'  colspan="4" width="344">UNIQUE ENGG    &amp;ASSOCIATES</td>
    <td className='fw-bold'  width="178">TSR SUBMITTED    TO</td>
    <td className='fw-bold'  colspan="2" width="297">PIRAMAL HOUSING FINANCE</td>
  </tr>
  <tr>
    <td width="22">&nbsp;</td>
    <td className='fw-bold'  colspan="3" width="197">TSR PREPRADE ON DATRE-</td>
    <td colspan="4">14.09.2023</td>
    <td className='fw-bold'  >SUBMITTED ON DATE </td>
    <td colspan="2">14.09.2023</td>
  </tr>
  <tr>
    <td className='fw-bold'  colspan="11" width="1038">Location Map:-</td>
  </tr>
  <tr>
    <td colspan="11">&nbsp;</td>
  </tr>
  <tr>
    <td className='fw-bold'  colspan="11">Photographs</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  </tbody>
</table>
      </div>

</div>
);
};

export default PiramalNpa;