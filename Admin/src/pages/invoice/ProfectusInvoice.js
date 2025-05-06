import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExcelHeader from 'components/Header/ExcelHeader';

const ProfectusInvoice = () => {
  const handlePrint = () => {
    const printContents = document.getElementById('printable-area').innerHTML;
    const originalContents = document.body.innerHTML;
    
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <div className="container-fluid p-3">
      <style>
        {`
          #printable-area {
            width: 100%;
          }
          
          .invoice-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
            margin-top: 15px;
          }

          .invoice-table td, .invoice-table th {
            border: 1px solid #000;
            padding: 6px;
            vertical-align: top;
          }

          .invoice-header {
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            padding: 8px !important;
          }

          .label {
            font-weight: bold;
            text-align: right;
            white-space: nowrap;
          }

          .section-header {
            font-weight: bold;
            background-color: #f2f2f2;
          }

          .service-description {
            font-weight: bold;
            background-color: #f2f2f2;
            padding: 8px;
          }

          .table-header {
            font-weight: bold;
            background-color: #f2f2f2;
            text-align: center;
          }

          .amount {
            text-align: right;
          }

          .subtotal-label, .tax-label {
            font-weight: bold;
            text-align: right;
          }

          .total-label {
            font-weight: bold;
            text-align: right;
            background-color: #f2f2f2;
          }

          .total-amount {
            font-weight: bold;
            text-align: right;
            background-color: #f2f2f2;
          }

          .bank-details {
            font-size: 12px;
            line-height: 1.4;
          }

          .reverse-charge {
            text-align: center;
            font-weight: bold;
            background-color: #f2f2f2;
            padding: 8px;
          }

          .property-address {
            font-size: 11px;
          }

          .no-print {
            display: none;
          }

          @media print {
            body {
              margin: 0;
              padding: 10mm;
              font-size: 12px;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            
            #printable-area {
              width: 100%;
              margin: 0;
              padding: 0;
            }
            
            .invoice-table {
              font-size: 10px;
              page-break-inside: avoid;
            }
            
            .invoice-table td, .invoice-table th {
              padding: 4px !important;
            }
            
            .property-address {
              font-size: 9px !important;
            }
            
            @page {
              size: A4 portrait;
              margin: 10mm;
            }
          }
        `}
      </style>

      <button className="btn btn-primary mb-3" onClick={handlePrint}>Print Invoice</button>

      <div id="printable-area">
        <ExcelHeader />
        
        <table className="invoice-table table-bordered">
          <tbody>
            <tr>
              <td colSpan="12"></td>
            </tr>
            <tr>
              <td colSpan="12" className="invoice-header">TAX INVOICE</td>
            </tr>
            <tr>
              <td colSpan="6"></td>
              <td className="label">Invoice No :-</td>
              <td>396/2024-25</td>
              <td colSpan="4"></td>
            </tr>
            <tr>
              <td colSpan="6"></td>
              <td className="label">Invoice Date :-</td>
              <td>04.02.2025</td>
              <td colSpan="4"></td>
            </tr>
            <tr>
              <td colSpan="6"></td>
              <td className="label">Bill month</td>
              <td>2025-01-01 00:00:00</td>
              <td colSpan="4"></td>
            </tr>
            <tr>
              <td className="section-header" colSpan="6">Details of Receiver (Billed to)</td>
              <td className="section-header" colSpan="5">Details Of Vendor</td>
              <td></td>
            </tr>
            <tr>
              <td className="label">Name :</td>
              <td colSpan="5">PROFECTUS CAPITAL PRIVATE LIMITED</td>
              <td className="label">Name :</td>
              <td colSpan="4">M/s. Unique Engineering & Associates</td>
              <td></td>
            </tr>
            <tr>
              <td className="label">Address:-</td>
              <td colSpan="5">
                3rd Floor, 305 / 306, Parekh Heights, New Palasia, New Palasia, Indore, Indore, Madhya Pradesh, 452001
              </td>
              <td className="label">Address:-</td>
              <td colSpan="4">Office No.102, Plot No.2 Swadesh Bhawan, Indore, Indore, Madhya Pradesh, 452001</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="12"></td>
            </tr>
            <tr>
              <td className="label">State Code-</td>
              <td colSpan="5">23</td>
              <td className="label">SAC CODE.</td>
              <td colSpan="4">998331</td>
              <td></td>
            </tr>
            <tr>
              <td className="label">GSTIN Number.</td>
              <td colSpan="5">23AAJCP2396N1ZW</td>
              <td className="label">GSTIN Number.</td>
              <td colSpan="4">23BUZPS8733G2ZT</td>
              <td></td>
            </tr>
            <tr>
              <td className="label">PAN No.</td>
              <td colSpan="5">AAJCP2396N</td>
              <td className="label">PAN No.</td>
              <td colSpan="4">BUZPS8733G</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="12" className="service-description">
                Sub- Professional fees for property valuation for INDORE Location
              </td>
            </tr>
            <tr className="table-header">
              <th>Sr. No</th>
              <th>LAN. NO.</th>
              <th>Date of Visit</th>
              <th>Customer Name</th>
              <th>CASE TYPE</th>
              <th>Property Address</th>
              <th>Distance In KM</th>
              <th>PLOT / BUIT UP AREA</th>
              <th>PROPERTY TYPE</th>
              <th>FESS IN (RS)</th>
              <th>DIST. CHARGES</th>
              <th>PROF. FEES CHARGE</th>
            </tr>
            <tr>
              <td>1</td>
              <td>PLAPIND0074987</td>
              <td>29.01.2025</td>
              <td>ASHWINI RATHORE</td>
              <td>FRESH</td>
              <td className="property-address">
                PLOT NO. 01, INDUSTRIAL PARK DEWAS AT PROPERTY SITUATED AT SURVEY NO. 98, GRAM BALGARH, TEHSIL DEWAS NAGAR AND DIST. DEWAS M.P.
              </td>
              <td>37</td>
              <td>4280</td>
              <td>OPEN PLOT</td>
              <td className="amount">2500</td>
              <td className="amount">500</td>
              <td className="amount">3000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>PLPBIND0072934</td>
              <td>12.01.2025</td>
              <td>RAJU</td>
              <td>FRESH</td>
              <td className="property-address">
                EAST PART OF PRAKOSTH NO. G-01, MZ FLOOR, FIRST FLOOR AND SECOND FLOOR AT MAKAN NI 15 AND 15/2, WARD NO 59, ADHA BAZAR PANDHARINATH PATH, JAWAHAR MARG RAJWADA INDORE MADHYA PRADESH 452001
              </td>
              <td>8</td>
              <td>0</td>
              <td>COMMERCIAL UNIT</td>
              <td className="amount">1500</td>
              <td className="amount">0</td>
              <td className="amount">1500</td>
            </tr>
            <tr>
              <td>3</td>
              <td>PLAPIND0074606</td>
              <td>25.01.2025</td>
              <td>SANDEEP JEWANI</td>
              <td>FRESH</td>
              <td className="property-address">
                NORTH PART OF SURVEY NO. 99/4/3 PEKI, AT GODOWN NO. 07 SR COMPOUND, NEAR DEWAS NAKA A.B. ROAD, GRAM LASUDIYA MORI, TEHSIL JUNI INDORE AND DIST. INDORE M.P.
              </td>
              <td>10</td>
              <td>2000</td>
              <td>COMMERCIAL UNIT</td>
              <td className="amount">1500</td>
              <td className="amount">0</td>
              <td className="amount">1500</td>
            </tr>
            <tr>
              <td colSpan="5" className="bank-details">
                CUSTOMER NAME - UNIQUE ENGINEERING AND ASSOCIATES<br />
                BANK NAME - ICICI BANK LTD<br />
                ACCOUNT NO.- 004105017837<br />
                BRANCH ADDRESS - Malav Parisar Branch Indore M.P Pincode- 452008<br />
                IFSC CODE - ICIC0000041<br /><br />
              </td>
              <td colSpan="1"></td>
              <td className="subtotal-label">SUB TOTAL</td>
              <td colSpan="2"></td>
              <td colSpan="1"></td>
              <td className="amount">6000</td>
            </tr>
            <tr>
              <td colSpan="6"></td>
              <td className="tax-label">CGST @ 9%</td>
              <td colSpan="3"></td>
              <td className="amount">540</td>
            </tr>
            <tr>
              <td colSpan="6"></td>
              <td className="tax-label">SGST @ 9%</td>
              <td colSpan="3"></td>
              <td className="amount">540</td>
            </tr>
            <tr>
              <td colSpan="6"></td>
              <td className="tax-label">IGST @ 18%</td>
              <td colSpan="3"></td>
              <td className="amount">0</td>
            </tr>
            <tr>
              <td colSpan="6"></td>
              <td className="total-label">GRAND TOTAL</td>
              <td colSpan="3"></td>
              <td className="total-amount">7080</td>
            </tr>
            <tr>
              <td colSpan="12"></td>
            </tr>
            <tr>
              <td colSpan="12" className="reverse-charge">
                Whether TAX is payable under Reverse Charge - No
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfectusInvoice;