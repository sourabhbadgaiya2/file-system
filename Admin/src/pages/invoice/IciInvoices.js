import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExcelHeader from 'components/Header/ExcelHeader';

const IciInvoices = () => {
  const handlePrint = () => {
    const printContent = document.getElementById("printable-area").innerHTML
    const originalContent = document.body.innerHTML

    document.body.innerHTML = printContent
    window.print()
    document.body.innerHTML = originalContent
    window.location.reload()
  }
  return (
    <div className="container-fluid p-3">
      <style>
        {`
          .invoice-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
          }
          
          .invoice-table td, .invoice-table th {
            border: 1px solid #000;
            padding: 8px;
            vertical-align: top;
          }
          
          .invoice-header {
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            padding: 10px !important;
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
            font-size: 14px;
            line-height: 1.5;
          }
          
          .reverse-charge {
            text-align: center;
            font-weight: bold;
            background-color: #f2f2f2;
          }
          
          .supporting-header {
            font-weight: bold;
            background-color: #f2f2f2;
            text-align: center;
          }
        `}
      </style>
   
      <div>
        <button
          onClick={handlePrint}
          style={{
            padding: "8px 16px",
            backgroundColor: "#7A6FBE",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "18px",
            fontSize: "16px",
          }}
        >
          Print Invoice
        </button>
      </div>

     <div id='printable-area' >
   
      <ExcelHeader/>
      {/* BILL SUMMARY SHEET */}
      <table className="invoice-table table-bordered">
        <tbody>
          <tr>
            <td colSpan="7"></td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="5" className="invoice-header">TAX INVOICE</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Bill No.</td>
            <td>257/2024-25</td>
            <td colSpan="2"></td>
            <td>Date of Bill</td>
            <td>05.10.2024</td>
          </tr>
          <tr>
            <td></td>
            <td>Bill Period</td>
            <td colSpan="4">01/09/2024 to 30/09/2024</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Agency I box ID</td>
            <td>184032</td>
            <td colSpan="2"></td>
            <td>Hub Location</td>
            <td>INDORE</td>
          </tr>
          <tr>
            <td></td>
            <td>Activity Code</td>
            <td>008</td>
            <td colSpan="2"></td>
            <td>ICICI BANK GST No</td>
            <td>23AAACI1195H1ZU</td>
          </tr>
          <tr>
            <td></td>
            <td>To,</td>
            <td colSpan="5"></td>
          </tr>
          <tr>
            <td></td>
            <td>ICICI Bank Ltd.</td>
            <td colSpan="5"></td>
          </tr>
          <tr>
            <td></td>
            <td>286 M.G. Road</td>
            <td colSpan="5"></td>
          </tr>
          <tr>
            <td></td>
            <td>Gorakhund Chauraha, Indore – 452002</td>
            <td colSpan="5"></td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="5">Sub: Technical Valuation Bill for month of Sep.-2024</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Valuation Type</td>
            <td></td>
            <td>Cases Count</td>
            <td>Base Rate</td>
            <td>Distance Rate</td>
            <td>Total</td>
          </tr>
          <tr>
            <td></td>
            <td>Individual</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>HL Mortgage (Below 30kms)</td>
            <td></td>
            <td>2</td>
            <td>1000</td>
            <td>0</td>
            <td className="amount">2000</td>
          </tr>
          <tr>
            <td></td>
            <td>HL Mortgage (Between 30to 75kms)</td>
            <td></td>
            <td>2</td>
            <td>1000</td>
            <td>500</td>
            <td className="amount">3000</td>
          </tr>
          <tr>
            <td></td>
            <td>HL Mortgage (Between 75to120kms)</td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td className="amount">0</td>
          </tr>
          <tr>
            <td></td>
            <td>HL Mortgage (Above 120kms)</td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td className="amount">0</td>
          </tr>
          <tr>
            <td></td>
            <td>BLG (Below 30kms)</td>
            <td></td>
            <td>4</td>
            <td>1000</td>
            <td>0</td>
            <td className="amount">4000</td>
          </tr>
          <tr>
            <td></td>
            <td>BLG (Between 30to 75kms)</td>
            <td></td>
            <td>1</td>
            <td>1000</td>
            <td>500</td>
            <td className="amount">1500</td>
          </tr>
          <tr>
            <td></td>
            <td>BLG (Between 75to120kms)</td>
            <td></td>
            <td>1</td>
            <td>1000</td>
            <td>750</td>
            <td className="amount">1750</td>
          </tr>
          <tr>
            <td></td>
            <td>BLG (Above 120kms)</td>
            <td></td>
            <td>1</td>
            <td>1000</td>
            <td>1000</td>
            <td className="amount">2000</td>
          </tr>
          <tr>
            <td></td>
            <td>RIBG (Below 30kms)</td>
            <td></td>
            <td>6</td>
            <td>1000</td>
            <td>0</td>
            <td className="amount">6000</td>
          </tr>
          <tr>
            <td></td>
            <td>RIBG (Between 30to 75kms)</td>
            <td></td>
            <td>3</td>
            <td>1000</td>
            <td>500</td>
            <td className="amount">4500</td>
          </tr>
          <tr>
            <td></td>
            <td>RIBG (Between 75to120kms)</td>
            <td></td>
            <td>3</td>
            <td>1000</td>
            <td>750</td>
            <td className="amount">5250</td>
          </tr>
          <tr>
            <td></td>
            <td>RIBG (Above 120kms)</td>
            <td></td>
            <td>3</td>
            <td>1000</td>
            <td>1000</td>
            <td className="amount">6000</td>
          </tr>
          <tr>
            <td></td>
            <td>SMEAG (Below 30kms)</td>
            <td></td>
            <td>3</td>
            <td>1000</td>
            <td>0</td>
            <td className="amount">3000</td>
          </tr>
          <tr>
            <td></td>
            <td>SMEAG (Above 120kms)</td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td className="amount">0</td>
          </tr>
          <tr>
            <td></td>
            <td>NON HL (Above 120 km.)</td>
            <td></td>
            <td>2</td>
            <td>1000</td>
            <td>1000</td>
            <td className="amount">4000</td>
          </tr>
          <tr>
            <td></td>
            <td>NON HL (75 to 120 km.)</td>
            <td></td>
            <td>2</td>
            <td>1000</td>
            <td>750</td>
            <td className="amount">3500</td>
          </tr>
          <tr>
            <td></td>
            <td>NON HL (Below 30Kms)</td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td className="amount">0</td>
          </tr>
          <tr>
            <td></td>
            <td>NON HL (Between 30 to 75 Kms)</td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td className="amount">0</td>
          </tr>
          <tr>
            <td></td>
            <td>MVG_OTHERS (Between 30 to 75 kms)</td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td className="amount">0</td>
          </tr>
          <tr>
            <td></td>
            <td>HL Mortgages – APF</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Fresh</td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td className="amount">0</td>
          </tr>
          <tr>
            <td></td>
            <td>Subsequent</td>
            <td></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td className="amount">0</td>
          </tr>
          <tr>
            <td></td>
            <td>Total</td>
            <td></td>
            <td>34</td>
            <td></td>
            <td></td>
            <td className="amount">42250</td>
          </tr>
          <tr>
            <td></td>
            <td>Total without GST</td>
            <td colSpan="4"></td>
            <td className="amount">42250</td>
          </tr>
          <tr>
            <td></td>
            <td>CGST 9%</td>
            <td colSpan="4"></td>
            <td className="amount">3802.5</td>
          </tr>
          <tr>
            <td></td>
            <td>SGST 9%</td>
            <td colSpan="4"></td>
            <td className="amount">3802.5</td>
          </tr>
          <tr>
            <td></td>
            <td>Total with GST</td>
            <td colSpan="4"></td>
            <td className="total-amount">49855</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="5">Total Amt in words</td>
            <td>Rupees – Fifty-Four Thousand Eight Hundred Seventy</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="6">We are enclosing the list of Technical Valuation's done by us.</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="6">This is also confirmed that my annual turnover is more than 20 LPA hence GST is applicable on my services bill.</td>
          </tr>
          <tr>
            <td></td>
            <td>PAN No.</td>
            <td>BUZPS8733G</td>
            <td colSpan="2">Bank Name</td>
            <td>ICICI BANK</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>GST No.</td>
            <td>23BUZPS8733G2ZT</td>
            <td colSpan="2">Bank Current A/C No.</td>
            <td>004105017837</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>SAC Code</td>
            <td>998331</td>
            <td colSpan="2">IFSC Code</td>
            <td>ICIC0000041</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="7"></td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="5">UNIQUE ENGINEERING AND ASSOCIATE</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="5">AUTHORISED SIGNATORY</td>
            <td></td>
          </tr>
        </tbody>
      </table>
     </div>


    
    </div>
  );
};

export default IciInvoices;