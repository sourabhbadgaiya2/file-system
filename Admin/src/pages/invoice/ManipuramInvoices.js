import React from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import ExcelHeader from 'components/Header/ExcelHeader';

const ManipuramInvoices = () => {
  // Calculate values based on the sample data
  const subTotal = 1800 + 1500; // Only 2 rows included
  const cgst = subTotal * 0.09;
  const sgst = subTotal * 0.09;
  const grandTotal = subTotal + cgst + sgst;

  const handlePrint = () => {
    const printContent = document.getElementById("printable-area").innerHTML
    const originalContent = document.body.innerHTML

    document.body.innerHTML = printContent
    window.print()
    document.body.innerHTML = originalContent
    window.location.reload()
  }

  return (
    <Container className="mt-4">
      <Button variant="primary" onClick={handlePrint} className="mb-3">
        Print Invoice
      </Button>
      <div id='printable-area'>
        <ExcelHeader />
        <Table bordered className="invoice-table">
          <tbody>
            {/* Empty row */}
            <tr>
              <td colSpan="14"></td>
            </tr>

            {/* TAX INVOICE header */}
            <tr>
              <td colSpan="14" className="fw-bold">TAX INVOICE</td>
            </tr>

            {/* Invoice details */}
            <tr>
              <td colSpan="5"></td>
              <td>Invoice No :-</td>
              <td colSpan="2">397/2024-25</td>
              <td colSpan="6"></td>
            </tr>
            <tr>
              <td colSpan="5"></td>
              <td>Invoice Date :-</td>
              <td colSpan="2">04.02.2025</td>
              <td colSpan="6"></td>
            </tr>
            <tr>
              <td colSpan="5"></td>
              <td>Bill month</td>
              <td colSpan="2">2025-01-01 00:00:00</td>
              <td colSpan="6"></td>
            </tr>

            {/* Receiver and Vendor headers */}
            <tr>
              <td colSpan="6">Details of Receiver (Billed to)</td>
              <td colSpan="8">Details Of Vendor</td>
            </tr>

            {/* Name rows */}
            <tr>
              <td>Name :</td>
              <td colSpan="5">Manappuram Home Finance Limited</td>
              <td>Name :</td>
              <td colSpan="7">M/s. Unique Engineering & Associates</td>
            </tr>

            {/* Address rows */}
            <tr>
              <td>Address:-</td>
              <td colSpan="5">1st Floor, Shop - 4A, Royal Gold Building, Yaswant Nivas Road, Indore, Indore, Madhya Pradesh - 452001</td>
              <td>Address:-</td>
              <td colSpan="7">Office No.102, Plot No.2 Swadesh Bhawan, Indore, Indore, Madhya Pradesh, 452001</td>
            </tr>

            {/* Empty row */}
            <tr>
              <td colSpan="14"></td>
            </tr>

            {/* State Code and GST rows */}
            <tr>
              <td>State Code-</td>
              <td colSpan="2">23</td>
              <td colSpan="3"></td>
              <td>SAC CODE.</td>
              <td colSpan="2">998331</td>
              <td colSpan="5"></td>
            </tr>
            <tr>
              <td>GSTIN Number.</td>
              <td colSpan="2">23AAGCM7846R1ZP</td>
              <td colSpan="3"></td>
              <td>GSTIN Number.</td>
              <td colSpan="2">23BUZPS8733G2ZT</td>
              <td colSpan="5"></td>
            </tr>
            <tr>
              <td>PAN No.</td>
              <td colSpan="2">NA</td>
              <td colSpan="3"></td>
              <td>PAN No.</td>
              <td colSpan="2">BUZPS8733G</td>
              <td colSpan="5"></td>
            </tr>

            {/* Professional fees header */}
            <tr>
              <td colSpan="14">Sub- Professional fees for property valuation</td>
            </tr>

            {/* Table headers */}
            <tr>
              <th>Sr. No</th>
              <th>REF. NO.</th>
              <th>Date of Visit</th>
              <th>Customer Name</th>
              <th>Property Address</th>
              <th>Distance IN KM</th>
              <th>Case Type</th>
              <th colSpan="2">PROF. FEES CHARGE</th>
              <th colSpan="5"></th>
            </tr>

            {/* Sub headers */}
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>BASE AMOUNT</th>
              <th>TOTAL</th>
              <th colSpan="5"></th>
            </tr>

            {/* Customer row 1 */}
            <tr>
              <td>1</td>
              <td>APP005501314</td>
              <td>20.01.2025</td>
              <td>Mrs.Kalawati</td>
              <td>PROPERTY IS LAND PART OF KHSRA NO.358/2(S) IS SITUATED AT GRAM-RASI,POST-LOHDI,PH NO.55,TEHSIL-SEONI MALWA.DIST- NARMADAPURAM,MP,461221</td>
              <td>100</td>
              <td>IMPROVEMENT</td>
              <td>1800</td>
              <td>1800</td>
              <td colSpan="5"></td>
            </tr>

            {/* Customer row 2 */}
            <tr>
              <td>2</td>
              <td>APP005501247</td>
              <td>17.01.2025</td>
              <td>MRS. AAISHA</td>
              <td>PROPERTY SITUATED AT SURVEY NO. 80/2/1, GRAM KADWA, TEHSIL SANWER AND DIST. INDORE M.P. 453771</td>
              <td>30 KM</td>
              <td>ML, CONSTRUCTION FOR IMPROVEMENT - ML</td>
              <td>1500</td>
              <td>1500</td>
              <td colSpan="5"></td>
            </tr>

            {/* Bank details and totals */}
            <tr>
              <td colSpan="4">BANK DETIALS</td>
              <td colSpan="3">SUB TOTAL</td>
              <td></td>
              <td>{subTotal}</td>
              <td colSpan="5"></td>
            </tr>

            <tr>
              <td colSpan="4">
                CUSTOMER NAME - UNIQUE ENGINEERING AND ASSOCIATES<br />
                BANK NAME -AU SMALL FINANCE BANK<br />
                ACCOUNT NO.- 1821231316314808<br />
                BRANCH NAME - INDORE AB ROAD<br />
                BRANCH CODE - 2313<br />
                BRANCH ADDRESS - SD ARCADE, UPPER GROUND FLOOR, PLOT PO 3, SCHEME- 54 AB ROAD INDORE 452010 M.P<br />
                IFSC CODE - AUBL0002313<br />
                MICR CODE - 452765001
              </td>
              <td colSpan="3">CGST @ 9%</td>
              <td></td>
              <td>{cgst.toFixed(2)}</td>
              <td colSpan="5"></td>
            </tr>

            <tr>
              <td colSpan="4"></td>
              <td colSpan="3">SGST @ 9%</td>
              <td></td>
              <td>{sgst.toFixed(2)}</td>
              <td colSpan="5"></td>
            </tr>

            <tr>
              <td colSpan="4"></td>
              <td colSpan="3">GRAND TOTAL</td>
              <td></td>
              <td>{grandTotal.toFixed(2)}</td>
              <td colSpan="5"></td>
            </tr>

            {/* Empty rows */}
            <tr>
              <td colSpan="14"></td>
            </tr>
            <tr>
              <td colSpan="14"></td>
            </tr>
            <tr>
              <td colSpan="14"></td>
            </tr>

            {/* Signature row */}
            <tr>
              <td colSpan="8"></td>
              <td colSpan="3">Authorized signature</td>
              <td colSpan="3"></td>
            </tr>

            {/* Empty row */}
            <tr>
              <td colSpan="14"></td>
            </tr>

            {/* Reverse charge */}
            <tr>
              <td colSpan="7">Whether TAX is payable under Reverse Charge - No</td>
              <td colSpan="7"></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default ManipuramInvoices;
