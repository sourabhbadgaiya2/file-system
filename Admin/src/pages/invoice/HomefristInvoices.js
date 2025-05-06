import React from 'react';
import ExcelHeader from 'components/Header/ExcelHeader';

const HomeFirstInvoices = () => {
  const handlePrint = () => {
    window.print();
  };
  

  return (
    <div className="container-fluid p-3">
      <div className="print-btn-container">
        <button className="btn btn-primary print-btn" onClick={handlePrint}>
          Print Invoice
        </button>
      </div>

      <div className="invoice-container">
        <ExcelHeader />

        <table className="invoice-table">
          <tbody>
            <tr>
              <td colSpan="14"></td>
            </tr>
            <tr>
              <td colSpan="14" className="invoice-header">Tax Invoice</td>
            </tr>
            <tr>
              <td colSpan="8"></td>
              <td>Date:</td>
              <td>05.10.2024</td>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td colSpan="8"></td>
              <td>Bill No.:</td>
              <td>247/2024-25</td>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td colSpan="14"></td>
            </tr>
            <tr>
              <td colSpan="7">Bill To</td>
              <td></td>
              <td>Supplier :</td>
              <td colSpan="4">M/s. Unique Engineering & Associates</td>
              <td></td>
            </tr>
            <tr>
              <td>Customer :</td>
              <td colSpan="6">Home First Finance Company India Ltd. (HFFC)</td>
              <td></td>
              <td>GSTIN :</td>
              <td colSpan="4">23BUZPS8733G2ZT</td>
              <td></td>
            </tr>
            <tr>
              <td>Name :</td>
              <td colSpan="6">The Manager</td>
              <td></td>
              <td>Name :</td>
              <td colSpan="4">Bhart Sharma</td>
              <td></td>
            </tr>
            <tr>
              <td>Address :</td>
              <td colSpan="6">
                Office no. 235, Dhan Trident, Block no. B3 PU4 Sch. no. 54, opposite Satya Sai school, 
                Bombay Hospital road, Vijaynagar, Indore - 452010
              </td>
              <td></td>
              <td>Address :</td>
              <td colSpan="4">
                Office No.102, Plot No.2 Swadesh Bhawan, Indore, Indore, Madhya Pradesh, 452001
              </td>
              <td></td>
            </tr>
            <tr>
              <td>State :</td>
              <td colSpan="6">M.P</td>
              <td></td>
              <td>State :</td>
              <td colSpan="4">MADHYA PRADESH</td>
              <td></td>
            </tr>
            <tr>
              <td>State Code :</td>
              <td colSpan="6">Relevant State Code 23</td>
              <td></td>
              <td>PAN NO.</td>
              <td colSpan="4">BUZPS8733G</td>
              <td></td>
            </tr>
            <tr>
              <td>GSTIN/Unique ID :</td>
              <td colSpan="6">Relevant GSTIN No. 23AACCH3317E127</td>
              <td></td>
              <td>Place of Supply :</td>
              <td colSpan="4">Indore</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="14"></td>
            </tr>
            <tr>
              <td colSpan="14"></td>
            </tr>
            <tr className="supporting-header">
              <td>Sr. No.</td>
              <td>Description</td>
              <td>Qty.</td>
              <td>Unit</td>
              <td>Rate<br />(per item)</td>
              <td>Total</td>
              <td>Discount</td>
              <td>Taxable value</td>
              <td>CGST</td>
              <td></td>
              <td>SGST</td>
              <td></td>
              <td>IGST</td>
              <td></td>
            </tr>
            <tr className="supporting-header">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Rate</td>
              <td>Amount</td>
              <td>Rate</td>
              <td>Amount</td>
              <td>Rate</td>
              <td>Amount</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                Description of Services<br /><br />
                Professional fees of Property Valuation <br />
                NPA CASES SEP 2024 INDORE
              </td>
              <td>4</td>
              <td>No.</td>
              <td>Lamsum</td>
              <td className="amount">6000</td>
              <td>0</td>
              <td className="amount">6000</td>
              <td>0.09</td>
              <td className="amount">540</td>
              <td>0.09</td>
              <td className="amount">540</td>
              <td>0</td>
              <td className="amount">0</td>
            </tr>
            <tr>
              <td></td>
              <td>Other Incidental Charges</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="amount">6000</td>
              <td></td>
              <td className="amount">540</td>
              <td></td>
              <td className="amount">540</td>
              <td></td>
              <td className="amount">0</td>
            </tr>
            <tr>
              <td colSpan="14"></td>
            </tr>
            <tr>
              <td colSpan="8"></td>
              <td>Total Invoice Value (In figure)</td>
              <td colSpan="4" className="total-amount">7080</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="14" className="reverse-charge">
                Whether TAX is payable under Reverse Charge - No
              </td>
            </tr>
            <tr>
              <td colSpan="14">
                Note - Please Read For More Details Annexure -1
              </td>
            </tr>
            <tr>
              <td colSpan="7" className="bank-details">
                Payment Details<br />
                BANK NAME - STATE BANK OF INDIA<br />
                BANK ADDRESS - SCHEME NO. 54, A.B.ROAD,INDORE<br />
                ACCOUNT NO.   36052667013<br />
                RTGS/NEFT- IFSC CODE:  SBIN0030450<br />
                MICR CODE- 452002072<br />
                PAN Number: BUZPS8733G<br />
              </td>
              <td colSpan="7">
                <div className="signature-box"></div>
                Signature/Digital Signature
              </td>
            </tr>
            <tr>
              <td colSpan="14"></td>
            </tr>
            <tr>
              <td colSpan="7"></td>
              <td colSpan="7">
                Name of the Signatory
              </td>
            </tr>
            <tr>
              <td colSpan="7"></td>
              <td colSpan="7">
                Date - 05.10.2024
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeFirstInvoices;