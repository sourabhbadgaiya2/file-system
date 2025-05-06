import React from 'react';
import { Table } from 'react-bootstrap';

const IciciHfcInvoice = () => {
  return (
    <div className="mt-4 mb-4" style={{ fontFamily: 'Arial, sans-serif', padding: '10px' }}>
      {/* Custom CSS to fix wide table */}
      <style>
        {`
          .fixed-width-table table {
            border-collapse: collapse;
            width: 100%;
            font-size: 11px;
            text-align: center;
            table-layout: fixed;
          }

          .fixed-width-table th, .fixed-width-table td {
            word-wrap: break-word;
            padding: 4px;
          }

          .invoice-table th, .invoice-table td {
            border: 1px solid black !important;
          }
        `}
      </style>

      {/* Page 1 */}
      <div style={{ border: '1px solid black', padding: '20px', pageBreakAfter: 'always' }}>
        <div className="text-center mb-3">
          <h4>TAX INVOICE</h4>
        </div>

        <Table bordered className="invoice-table">
          <tbody>
            <tr>
              <td colSpan="2"><strong>Name of Service Provider:</strong> BHART SHARMA</td>
            </tr>
            <tr>
              <td colSpan="2">
                <strong>Address of Service Provider:</strong><br />
                Office at 102, Swedish Bhawan Pict No. 2,Press Complex<br />
                A.B Road Indore,Indore-452001,Madhya Pradesh
              </td>
            </tr>
            <tr>
              <td><strong>State:</strong> Madhya Pradesh</td>
              <td><strong>GSTIN Unique ID:</strong> 228L/ZP5873C927T</td>
            </tr>
            <tr>
              <td colSpan="2"><strong>GST STATE CODE:</strong> 23</td>
            </tr>
          </tbody>
        </Table>

        <hr style={{ borderTop: '1px dashed black', margin: '20px 0' }} />

        <Table bordered className="invoice-table">
          <thead>
            <tr>
              <th colSpan="8" className="text-center">BILL FROM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Invoice Type</strong></td>
              <td>Original</td>
              <td><strong>Invoice Number</strong></td>
              <td>229/2024-25</td>
              <td><strong>Invoice Date</strong></td>
              <td>01 Oct 2024 05:43 PM</td>
              <td><strong>Place Of Supply</strong></td>
              <td>Madhya Pradesh</td>
            </tr>
            <tr>
              <td><strong>TAX PAYABLE UNDER REVERSE CHARGE</strong></td>
              <td>No</td>
              <td><strong>IF REVISED - ORIGINAL INVOICE NO</strong></td>
              <td>NA</td>
              <td><strong>IF REVISED - ORIGINAL INVOICE DATE</strong></td>
              <td>NA</td>
              <td><strong>PAN Number</strong></td>
              <td>BL/ZP5873G</td>
            </tr>
          </tbody>
        </Table>

        {/* ✅ THIS IS THE FIXED TABLE */}
        <div className="fixed-width-table">
          <table className="invoice-table">
            <thead>
              <tr>
                <th rowSpan="2">Details</th>
                <th rowSpan="2">DESCRIPTION OF SERVICES</th>
                <th rowSpan="2">HSN/SAC CODE</th>
                <th rowSpan="2">NET VALUE</th>
                <th rowSpan="2">OTHER CHARGES</th>
                <th rowSpan="2">TAXABLE VALUE</th>
                <th rowSpan="2">ABATEMENT/ DISCOUNTS</th>
                <th colSpan="2">CGST</th>
                <th colSpan="2">SGST/UTGST</th>
                <th colSpan="2">IGST</th>
                <th colSpan="2">CESS</th>
                <th rowSpan="2">TOTAL VALUE (INCL.TAX)</th>
              </tr>
              <tr>
                <th>Rate</th>
                <th>Amount</th>
                <th>Rate</th>
                <th>Amount</th>
                <th>Rate</th>
                <th>Amount</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Professional Charges - Legal and Technical</td>
                <td>9863</td>
                <td>52800.00</td>
                <td>-</td>
                <td>52800.00</td>
                <td>-</td>
                <td>9</td>
                <td>4752.00</td>
                <td>9</td>
                <td>4752.00</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>62304.00</td>
              </tr>
              <tr>
                <td colSpan="3"><strong>Total</strong></td>
                <td>52800.00</td>
                <td>-</td>
                <td>52800.00</td>
                <td>-</td>
                <td></td>
                <td>4752.00</td>
                <td></td>
                <td>4752.00</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>62304.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ margin: '20px 0' }}>
          <strong>AMOUNT IN WORDS:</strong> SIXTY TWO THOUSAND THREE HUNDRED AND FOUR RUPEES ONLY
        </div>

        <div style={{ marginBottom: '20px' }}>
          <strong>TERMS & CONDITIONS:</strong><br />
          Total amount payable is subject to deduction of applicable TDS under Income Tax Act, 1961
        </div>

        <hr style={{ borderTop: '1px dashed black', margin: '20px 0' }} />

        <Table bordered className="invoice-table">
          <thead>
            <tr>
              <th colSpan="2" className="text-center">ORIGINAL FOR RECIPIENT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2"><strong>Name of Service Receiver:</strong><br />ICICI Home Finance Company Ltd</td>
            </tr>
            <tr>
              <td colSpan="2">
                <strong>Address of Service Receiver:</strong><br />
                The Empire Office # F-G6,At First Floor 33-City<br />
                Centre, Oswalor-474011-Madhya Pradesh
              </td>
            </tr>
            <tr>
              <td><strong>State:</strong> Madhya Pradesh</td>
              <td><strong>GSTIN Unique ID:</strong> 23AAAC/828GN1Z8</td>
            </tr>
            <tr>
              <td colSpan="2"><strong>GST STATE CODE:</strong> 23</td>
            </tr>
          </tbody>
        </Table>

        <Table bordered className="invoice-table">
          <tbody>
            <tr>
              <td className="text-center"><strong>BILL TO</strong></td>
              <td className="text-center"><strong>SHIPPING</strong></td>
            </tr>
          </tbody>
        </Table>

        <div className="text-center" style={{ marginBottom: '20px' }}>
          <strong>FOR NINETEENTH SECURITIES</strong>
        </div>

        <div className="text-right" style={{ marginBottom: '20px' }}>
          <strong>AUTHORIZED SIGNATORY</strong>
        </div>

        <div className="text-center" style={{ fontStyle: 'italic' }}>
          This is a computer generated invoice which requires no signature.
        </div>
      </div>
    </div>
  );
};

export default IciciHfcInvoice;
