import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

 const  IndraKeela = () => {
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
      <div style={{ marginBottom: 20, textAlign: 'right' }}>
        <button onClick={handleExportPDF} style={{ marginRight: 10 }}>Download PDF</button>
        <button onClick={handleExportExcel} style={{ marginRight: 10 }}>Download Excel</button>
        <button onClick={handleExportCSV}>Download CSV</button>
      </div>

      <div id="radio" className="w-100 h-100">
   <table id="reportTable" cellSpacing="0" cellPadding="0" style={{ width: "100%", height: "100%" }}>
        <colgroup>
          <col width="67" />
          <col width="87" />
          <col width="67" />
          <col width="77" />
          <col width="79" />
          <col width="267" />
          <col width="88" span="2" />
          <col width="111" />
          <col width="67" span="3" />
        </colgroup>
        <tbody>
          <tr>
            <td colSpan="9"><a name="RANGE!A1:I184">VALUATION REPORT </a></td>
            <td colSpan="3" rowSpan="137"></td>
          </tr>
          <tr>
            <td colSpan="4">&nbsp;</td>
            <td colSpan="2">&nbsp;</td>
            <td>Date:    -</td>
            <td colSpan="2">29.05.2023</td>
          </tr>
          <tr>
            <td colSpan="4">1. Purpose  of valuation</td>
            <td colSpan="5">Fair Market value of the property as on date as per advice of    IKF Finance Limited.,</td>
          </tr>
          <tr>
            <td colSpan="4">2. Date of inspection and valuation  </td>
            <td colSpan="5">29.05.2023</td>
          </tr>
          <tr>
            <td colSpan="4">2a. App no. / Deal    No. / Ref No:</td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">2b. Product :</td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">3. Name of the    Applicants   :</td>
            <td colSpan="5">SATISH JAIN</td>
          </tr>
          <tr>
            <td colSpan="4">3a. Name of the owners / Seller   :</td>
            <td colSpan="5">MADHU TRADER'S THROUGH SMT. NIDHI JAIN    W/O.SHREE SATISH JAIN<br /></td>
          </tr>
          <tr>
            <td colSpan="4">4. Person met/Nos</td>
            <td colSpan="5">MR.SATISH JAIN, CONT NO.- 9425673781</td>
          </tr>
          <tr>
            <td colSpan="4">5. Whether customer    was present or not</td>
            <td colSpan="5">YES / NO</td>
          </tr>
          <tr>
            <td colSpan="4">6. Property Address    as per initiation </td>
            <td colSpan="5">LEASE HOLD PROPERTY AT COMMERCIAL PLOT    NO.G.Y.A.-06, PART OF    KH.NO.118,119,120,121,,179,183,185,187,188,189,191,GRAM-NISHATPURA AND    KAROD,  PART OF    KH.NO.31,34,35,38,39,NAVIN MANDI ,GALA MANDI BHANPUR, BHOPAL TEHSIL- HUZUR,    DIST.-BHOPAL (M.P.)- 462038</td>
          </tr>
          <tr>
            <td colSpan="4">7. Property Address    as per documents</td>
            <td colSpan="5">LEASE HOLD PROPERTY AT COMMERCIAL PLOT    NO.G.Y.A.-06, PART OF    KH.NO.118,119,120,121,,179,183,185,187,188,189,191,GRAM-NISHATPURA AND    KAROD,  PART OF    KH.NO.31,34,35,38,39,NAVIN MANDI ,GALA MANDI BHANPUR, BHOPAL TEHSIL- HUZUR,    DIST.-BHOPAL (M.P.)- 462038</td>
          </tr>
          <tr>
            <td colSpan="4">8. Property Address    as per site visit</td>
            <td colSpan="5">LEASE HOLD PROPERTY AT COMMERCIAL PLOT    NO.G.Y.A.-06, PART OF    KH.NO.118,119,120,121,,179,183,185,187,188,189,191,GRAM-NISHATPURA AND    KAROD,  PART OF    KH.NO.31,34,35,38,39,NAVIN MANDI ,GALA MANDI BHANPUR, BHOPAL TEHSIL- HUZUR,    DIST.-BHOPAL (M.P.)- 462038</td>
          </tr>
          <tr>
            <td colSpan="4">9. Documents Provided (Document type &amp; No.)</td>
            <td colSpan="5">LEASE DEED</td>
          </tr>
          <tr>
            <td colSpan="4">10. Brief    description of the property                </td>
            <td colSpan="5">G+1 COMMERCIAL HOUSE </td>
          </tr>
          <tr>
            <td colSpan="4">11. Classification    of locality  </td>
            <td colSpan="5">MED.</td>
          </tr>
          <tr>
            <td colSpan="4">12. Nature of    locality</td>
            <td colSpan="5">Slum / Under-Developed / Developing / Developed</td>
          </tr>
          <tr>
            <td colSpan="4" rowSpan="3">13. Proximity to civic amenities like school, market, college,    etc Hospital, office  :  </td>
            <td colSpan="2">Railway Station</td>
            <td colSpan="3">7 K.M </td>
          </tr>
          <tr>
            <td colSpan="2">Bus    Stand</td>
            <td colSpan="3">1-2 K.M </td>
          </tr>
          <tr>
            <td colSpan="2">SLE</td>
            <td colSpan="3">1 K.M </td>
          </tr>
          <tr>
            <td colSpan="4">14. Modes of transport to the property : </td>
            <td colSpan="5">ROAD TRANSPORT</td>
          </tr>
          <tr>
            <td colSpan="4">15. Name of the road    for access  : </td>
            <td colSpan="5">GALLA MANDI</td>
          </tr>
          <tr>
            <td colSpan="4">16. Area of land and other details : <br />
              (If  Flat UDS    &amp; Total Land area to be menttioned.)</td>
            <td colSpan="5">3000 SQFT </td>
          </tr>
          <tr>
            <td colSpan="4">17.Land freehold or leasehold, term of lease, period expired,    balance and lease rent : </td>
            <td colSpan="5">LEASE    HOLD</td>
          </tr>
          <tr>
            <td colSpan="4">18. Approvals for drawings from    Mun. authorities / occupation certificate    . ULC clearance /  F.S.I. available and    balance    for future use / F.S.I. from    T.D.R.                                                                                      </td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4" rowSpan="3">19. Name of the co-operative Housing      Society     : <br />
              Registration No. of society <br />
              No. of shares held and certificate No.:   <br />
              Outgoes per month      :                                                                                                                                                                                                                                     </td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">20.Boundaries of the property (LAND)</td>
            <td colSpan="2">As per Document</td>
            <td colSpan="2">Actual</td>
            <td>Dimensions</td>
          </tr>
          <tr>
            <td colSpan="4">East:</td>
            <td colSpan="2">ROAD</td>
            <td colSpan="2">ROAD</td>
            <td>NA</td>
          </tr>
          <tr>
            <td colSpan="4">West:</td>
            <td colSpan="2">G.Y.C.07</td>
            <td colSpan="2">OTHER LAND</td>
            <td>NA</td>
          </tr>
          <tr>
            <td colSpan="4">North :</td>
            <td colSpan="2">PLOT NO.07</td>
            <td colSpan="2">PLOT    NO.07</td>
            <td>NA</td>
          </tr>
          <tr>
            <td colSpan="4">South:</td>
            <td colSpan="2">PLOT NO. 05</td>
            <td colSpan="2">PLOT NO. 05</td>
            <td>NA</td>
          </tr>
          <tr>
            <td colSpan="4">20a.Boundaries of the property (FLAT)</td>
            <td colSpan="2">As per Document</td>
            <td colSpan="3">Actual</td>
          </tr>
          <tr>
            <td colSpan="4">East:</td>
            <td colSpan="2">&nbsp;</td>
            <td colSpan="3">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="4">West:</td>
            <td colSpan="2">&nbsp;</td>
            <td colSpan="3">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="4">North :</td>
            <td colSpan="2">&nbsp;</td>
            <td colSpan="3">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="4">South:</td>
            <td colSpan="2">&nbsp;</td>
            <td colSpan="3">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="4">21. Whether property falls in the list  published by MCD for unautorized    properties.</td>
            <td colSpan="5">NO</td>
          </tr>
          <tr>
            <td colSpan="4">22. Property is    demarcated</td>
            <td colSpan="5">YES / NO</td>
          </tr>
          <tr>
            <td colSpan="4">23.Prorperty is    easily identifiable</td>
            <td colSpan="5">YES / NO</td>
          </tr>
          <tr>
            <td colSpan="4">24. Distance from Branch (IKF Finance Ltd)</td>
            <td colSpan="5">10 K.M </td>
          </tr>
          <tr>
            <td colSpan="9">II)  DETAILS OF    STRUCTURE  AND SPECIFICATIONS:</td>
          </tr>
          <tr>
            <td colSpan="4">1. Year of    construction of the building </td>
            <td colSpan="5">2016</td>
          </tr>
          <tr>
            <td colSpan="4" rowSpan="2">2. Age of the building and anticipated  future life of the building. : </td>
            <td colSpan="2">Age of Building </td>
            <td colSpan="3">7</td>
          </tr>
          <tr>
            <td colSpan="2">Future    Life </td>
            <td colSpan="3">53</td>
          </tr>
          <tr>
            <td colSpan="4">3. Present condition of the flat and building and any last    repairs done painting done, immediate repairs required with cost of the    same.    <br /></td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">4. Type of  construction </td>
            <td colSpan="5">RCC</td>
          </tr>
          <tr>
            <td colSpan="4">4a. Completion Stage</td>
            <td colSpan="5">100%</td>
          </tr>
          <tr>
            <td colSpan="4">4b. Estimated Date    of Completion</td>
            <td colSpan="5">COMPLETE</td>
          </tr>
          <tr>
            <td colSpan="4"> 5. Permitted use of the property.</td>
            <td colSpan="5">COMMERCIAL</td>
          </tr>
          <tr>
            <td colSpan="4">6. Actual use of    the Property :</td>
            <td colSpan="5">COMMERCIAL</td>
          </tr>
          <tr>
            <td colSpan="4">7. No. of floors for building and additional    structures: </td>
            <td colSpan="5">G+1    COMMERCIAL </td>
          </tr>
          <tr>
            <td colSpan="4">8. No. of lifts with    capacity and type : </td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">9. Type of underground, overhead<br />
              tanks and pumps : <br /></td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">10. Flooring in open spaces and stilts and staircase  : </td>
            <td colSpan="5">YES</td>
          </tr>
          <tr>
            <td colSpan="4">11. Compound wall    and gates &amp; security   </td>
            <td colSpan="5">YES</td>
          </tr>
          <tr>
            <td colSpan="4">12. Building    elevation  : </td>
            <td colSpan="5">YES</td>
          </tr>
          <tr>
            <td colSpan="4">13. Other amenities and special amenities and features :  <br /></td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">14. General comments    on specifications </td>
            <td colSpan="5">AVERAGE</td>
          </tr>
          <tr>
            <td colSpan="4">&nbsp;</td>
            <td colSpan="5">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="9">III)  DETAILS FOR THE    PROPERTY UNDER REFERENCE : </td>
          </tr>
          <tr>
            <td colSpan="4">1. No. of floors and flats on each floor</td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">2.    No. of rooms /portions for the building</td>
            <td colSpan="5">G.F.- 1R+1H<br />
              F.F.-1H</td>
          </tr>
          <tr>
            <td colSpan="4">3. Balconies to    rooms separate or merged </td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">4. Walls, plaster    and painting : </td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">5. Doors and    windows    : </td>
            <td colSpan="5">YES</td>
          </tr>
          <tr>
            <td colSpan="4">6. Type of flooring in rooms, skirting  /cladding : </td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">7. Flooring in    toilets/ W.C./ Bath, Dado</td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">8. Kitchen platform    type and sink : </td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">9. Toilets plumbing lines concealed       /open Type of plumbing and san.       Fittings, any special fittings,    ceiling </td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">10. Electrical installation open or<br />
              concealed wiring Type of switches    tel. points, T.V./ cable points :</td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">Plot area</td>
            <td colSpan="5">3000 SQFT </td>
          </tr>
          <tr>
            <td colSpan="4" rowSpan="3">11.    Area of the property (actual) :         <br />
              Carpet Area : <br />
              Built up/Saleable Area  :</td>
            <td colSpan="5">3040</td>
          </tr>
          <tr>
            <td colSpan="5">5168</td>
          </tr>
          <tr>
            <td colSpan="5">6080</td>
          </tr>
          <tr>
            <td colSpan="4">12. Area of property (permitted as per approved plan/building    byelaws)</td>
            <td colSpan="5">0</td>
          </tr>
          <tr>
            <td colSpan="4">13. Area as per sale agreement / Sale Deed / Other docs            </td>
            <td colSpan="5">3000    SQFT </td>
          </tr>
          <tr>
            <td colSpan="4" rowSpan="7">14. Adherence to Sanction Plan/building bylaws</td>
            <td colSpan="2">Floor</td>
            <td>Actual</td>
            <td colSpan="2">Permissible</td>
          </tr>
          <tr>
            <td colSpan="2">GF</td>
            <td align="right">3040</td>
            <td colSpan="2">2280.00</td>
          </tr>
          <tr>
            <td colSpan="2">FF</td>
            <td align="right">3040</td>
            <td colSpan="2">2280.00</td>
          </tr>
          <tr>
            <td colSpan="2">SF</td>
            <td align="right">0</td>
            <td colSpan="2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="2">TF</td>
            <td>&nbsp;</td>
            <td colSpan="2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="2">IVF</td>
            <td>&nbsp;</td>
            <td colSpan="2">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="2">Total</td>
            <td align="right">6080</td>
            <td colSpan="2">4560.00</td>
          </tr>
          <tr>
            <td colSpan="4">15. Deviation from sanction Plan/building byelaws (if any)</td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">16. Risk of    Demolition (valuers views)</td>
            <td colSpan="5">Low/Medium/High</td>
          </tr>
          <tr>
            <td colSpan="4" rowSpan="7">17. Property Currently Occupied by (Owner Occupied or Tenanted)</td>
            <td>Floor</td>
            <td>No    of Units</td>
            <td>Occupied    by</td>
            <td>Prop.    Descriotion</td>
            <td>Rent    per floor/Unit</td>
          </tr>
          <tr>
            <td>GF</td>
            <td>G.F.- 1R+1H</td>
            <td>OWNER</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>FF</td>
            <td>F.F.-1H</td>
            <td>OWNER</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>SF</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>TF</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>IVF</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="9">IV)   ASSUMPTIONS, DATA AVAILABLE AND BASIS FOR    THE PURPOSE OF VALUATION ;</td>
          </tr>
          <tr>
            <td colSpan="4">1. Drawings and    approvals   </td>
            <td colSpan="5">YES FROM NAGAR NIGAM</td>
          </tr>
          <tr>
            <td colSpan="4">2. Area considered for the purpose of valuation : <br /></td>
            <td colSpan="5">0</td>
          </tr>
          <tr>
            <td colSpan="4" rowSpan="2">3. Age of    the building and   future life</td>
            <td colSpan="2">Age of Building </td>
            <td colSpan="3">7</td>
          </tr>
          <tr>
            <td colSpan="2">Future    Life </td>
            <td colSpan="3">53</td>
          </tr>
          <tr>
            <td colSpan="4">4. Present condition of building and structure: </td>
            <td colSpan="5">GOOD</td>
          </tr>
          <tr>
            <td colSpan="4">5. Comments on specifications and amenities:</td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">6. Market rates of properties in the vicinity and surrounding    area :  </td>
            <td colSpan="5">GOOD</td>
          </tr>
          <tr>
            <td colSpan="4">&nbsp;</td>
            <td colSpan="5">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="9">V) CONCLUSION AND VALUATION OF    THE PROPERTY :<br />
              In view of the data available and basis for valuation, the valuation of the    property under reference will as under .</td>
          </tr>
          <tr>
            <td colSpan="9">Fair Market Value of property:</td>
          </tr>
          <tr>
            <td colSpan="9">Cost of land : </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td></td>
            <td colSpan="2">Land</td>
            <td colSpan="2">Rate    per sft(Rs.)</td>
            <td colSpan="3">Amount (Rs.)</td>
          </tr>
          <tr>
            <td colSpan="2">&nbsp;</td>
            <td colSpan="2">3000</td>
            <td colSpan="2">0</td>
            <td colSpan="3">0</td>
          </tr>
          <tr>
            <td colSpan="3">Carpet Area</td>
            <td colSpan="3">Builtup Area</td>
            <td colSpan="3">Super Built Up Area</td>
          </tr>
          <tr>
            <td colSpan="3">&nbsp;</td>
            <td colSpan="3">0</td>
            <td colSpan="3">0</td>
          </tr>
          <tr>
            <td colSpan="9">Cost of existing building:</td>
          </tr>
          <tr>
            <td colSpan="2">Floor</td>
            <td colSpan="2">Area(sft)</td>
            <td colSpan="2">Rate per sft(Rs.)</td>
            <td colSpan="3">Amount (Rs.)</td>
          </tr>
          <tr>
            <td colSpan="2">GF/FF/SF/TF: total sft X rate per sft</td>
            <td colSpan="2">4500</td>
            <td colSpan="2">0</td>
            <td colSpan="3">0</td>
          </tr>
          <tr>
            <td colSpan="6">Compound, portico/ balcony,staircase &amp; rounding off                            </td>
            <td colSpan="3">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="6">Total cost of    building</td>
            <td colSpan="3">0</td>
          </tr>
          <tr>
            <td colSpan="6">Hence Market value    of the property is Rs. </td>
            <td colSpan="3">0</td>
          </tr>
          <tr>
            <td colSpan="6">Current Stage of    Construction (Percentage of Construction)</td>
            <td colSpan="3">100.00</td>
          </tr>
          <tr>
            <td colSpan="6">Recommended amount    for Disbursal</td>
            <td colSpan="3">0</td>
          </tr>
          <tr>
            <td colSpan="4">2. Construction estimate given by the customer</td>
            <td colSpan="5">YES</td>
          </tr>
          <tr>
            <td colSpan="4">3. Is the estimate given by the customer valid</td>
            <td colSpan="5">NA</td>
          </tr>
          <tr>
            <td colSpan="4">4. Less: for composite depreciation for age of the building and    future   life     </td>
            <td colSpan="5">Depreciated value itself is considered in the valuation.</td>
          </tr>
          <tr>
            <td colSpan="4">5. Less: for immediate repairs /painting / structural repairs    for the flat and building                                                                                                                       </td>
            <td colSpan="5">Nil</td>
          </tr>
          <tr>
            <td colSpan="4">6. Value of the    property as on date</td>
            <td colSpan="5">0</td>
          </tr>
          <tr>
            <td colSpan="4">7. Insurance Values</td>
            <td colSpan="5">0</td>
          </tr>
          <tr>
            <td colSpan="4">8. Re construction    value</td>
            <td colSpan="5">0</td>
          </tr>
          <tr>
            <td colSpan="4">9 Forced Sale Value</td>
            <td colSpan="5">0</td>
          </tr>
          <tr>
            <td colSpan="4">10. How the    property was identified:</td>
            <td colSpan="5">By ourselves</td>
          </tr>
          <tr>
            <td colSpan="4">11. Whether the property was demarcated &amp; easily    identifiable :</td>
            <td colSpan="5">Yes</td>
          </tr>
          <tr>
            <td colSpan="4">Longitude &amp; Latitude</td>
            <td colSpan="5">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="9">REMARKS:-</td>
          </tr>
          <tr>
            <td colSpan="9">1. GIVEN XEROX COPY OF LEASE DEED IS IN FAVOR OF    MADHU TRADER'S PRO.SMT. NIDHI JAIN W/O.MR. SATISH JAIN<br />
              2. DURING PROPERTY VISIT MR. SATISH JAIN JI MET AT THE PROPERTY WHO IS THE    SONOF CUSTOMER CONTACT NO. 9425673781.  IT WAS CLEARLY EXPLAINED TO HIM THAT THE PROPERTY VISIT IS BEING DONE    FOR VALUATION PURPOSE IN RELATION WITH LOAN PROPOSAL.<br />
              3. RATE HAS BEEN CONFORM FROM MARKET INQUIRY.<br />
              4. PROPERTY IS SITUATED AT SURROUNDING AREA OF LOCALITY IS COMMERCIAL    ZONING.<br />
              5. PROPERTY IS G+1 COMMERCIAL GODOWN WHICH IS OCCUPIED BY CUSTOMER.<br />
              6. PROPERTY IS IDENTIFIED BY FOUR SIDE BOUNDARIES OF GIVEN DEED AND LOCAL    ENQUIRY.<br />
              7. AS PER DEED PROPERTY IS 50X60=3000 SQFT, BUT ACTUAL    AT SITE 38*80=3040 SQFT AREA OBSERVE, PLOT DIMENSION IS MISMATCH, APPROVED    NAJARIYA NAKSHA OR AUTHORITY LAYOUT PLAN IS REQUIRE WITH PROPER PLOT    DIMENSION FOR PROPER AREA CLARIFICATION.<br />
              8. BUILDING PERMISSION AND MAP NOT OBTAIN.<br />
              9. PROPERTY IS LEASE HOLD AND LEASE IS VALID UPTO 16.08.2037.<br />
              10. BUILT UP IS TAKEN FROM PERMISSIBLE FAR (1.5) AS PER NORMS.<br />
              11. SUGGEST TO CREDIT TEAM TO BE CHECK PROPER OWNERSHIP DOCUMENT PRIOR    DISBURSEMENT.<br />
              12. TENTATIVE LAND RATE IS RS. 2200/- PER SQFT AND CONST COST IS RS. 900/-    PER SQFT.<br /></td>
          </tr>
          <tr>
            <td colSpan="9">SITE PHOTOGRAPHS</td>
          </tr>
          <tr>
            <td colSpan="9">&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="4">GPS. PHOTO</td>
            <td colSpan="2">LAT/LOG.</td>
            <td colSpan="3">23.291138,77.41286</td>
          </tr>
          <tr>
            <td colSpan="2">Date: --------</td>
            <td colSpan="2">29.05.2023</td>
            <td colSpan="5">UNIQUE ENGINEERING AND ASSOCIATE </td>
          </tr>
          <tr>
            <td colSpan="4">&nbsp;</td>
            <td colSpan="5">Valuer Authoraised Signature..</td>
          </tr>
          <tr>
            <td colSpan="9">Declaration<br />
              • Statements of fact are true and correct<br />
              • Limiting conditions have been disclosed<br />
              • We have no interest (present or future) in the transaction or    property<br />
              • Compensation is not contingent upon rendering a specified value<br />
              • We have complied with all of the real estate appraisal program    requirements<br />
              • An inspection of the property was performed, and<br />
              • Assistance was not received in the preparation of the appraisal</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default IndraKeela;