import React from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import ExcelHeader from 'components/Header/ExcelHeader';

const AgriwiseInvoice = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Container className="mt-0 mb-4">
      <div className="d-flex justify-content-end mb-3 no-print">
        <Button variant="primary" onClick={handlePrint}>Print Invoice</Button>
      </div>
      
      <div className="invoice-container" style={{
        border: '1px solid black', 
        padding: '20px',
        backgroundColor: 'white',
        width: '100%',
        maxWidth: '100%',
        overflowX: 'auto',
        marginTop: 0, // Remove margin at the top
      }}>
        {/* Header Section */}
        <div className="excel-header-container" style={{ marginBottom: '20px' }}>
          <ExcelHeader />
        </div>

        <div className="text-center mb-3">
          <h4>Tax Invoice</h4>
        </div>

        <div style={{ padding: '10px', width: 'fit-content', marginLeft: 'auto' }}>
          <p><strong>Date:</strong> 05.10.2024</p>
          <p><strong>Bill No.:</strong> 249/2024-25</p>
          <p><strong>Bill Month:</strong> 2024-09-01 00:00:00</p>
        </div>

        {/* Bill To and Supplier Section */}
        <Table bordered className="invoice-table">
          <tbody>
            <tr>
              <td style={{ width: '10%' }}>Bill To</td>
              <td colSpan="8"></td>
              <td style={{ borderRight: 'none' }}>Supplier :</td>
              <td colSpan="4" style={{ borderLeft: 'none' }}>UNIQUE ENGINEERING AND ASSOCIATE</td>
            </tr>
            <tr>
              <td style={{ borderRight: 'none' }}>Customer :</td>
              <td colSpan="8" style={{ borderLeft: 'none' }}>AGRIWISE FINSERV LIMITED</td>
              <td style={{ borderRight: 'none' }}>GSTIN :</td>
              <td colSpan="4" style={{ borderLeft: 'none' }}>23BUZPS8733G2ZT</td>
            </tr>
            <tr>
              <td style={{ borderRight: 'none' }}>Name :</td>
              <td colSpan="8" style={{ borderLeft: 'none' }}>Branch Manager</td>
              <td style={{ borderRight: 'none' }}>Name :</td>
              <td colSpan="4" style={{ borderLeft: 'none' }}>Bhart Sharma</td>
            </tr>
            <tr>
              <td style={{ borderRight: 'none' }}>Address :</td>
              <td colSpan="8" style={{ borderLeft: 'none' }}>
                Office no. 311, Sadguru parinay PU3 Scheme no 54, Vijay nagar, Indore, Indore, Madhya Pradesh, 452008
              </td>
              <td style={{ borderRight: 'none' }}>Address :</td>
              <td colSpan="4" style={{ borderLeft: 'none' }}>
                Office No.102, Plot No.2 Swadesh Bhawan, Indore, Indore, Madhya Pradesh, 452001
              </td>
            </tr>
            <tr>
              <td style={{ borderRight: 'none' }}>State :</td>
              <td colSpan="8" style={{ borderLeft: 'none' }}>M.P</td>
              <td style={{ borderRight: 'none' }}>State :</td>
              <td colSpan="4" style={{ borderLeft: 'none' }}>MADHYA PRADESH</td>
            </tr>
            <tr>
              <td style={{ borderRight: 'none' }}>State Code :</td>
              <td colSpan="8" style={{ borderLeft: 'none' }}>Relevant State Code 23</td>
              <td colSpan="5"></td>
            </tr>
            <tr>
              <td style={{ borderRight: 'none' }}>GSTIN/Unique ID :</td>
              <td colSpan="8" style={{ borderLeft: 'none' }}>Relevant GSTIN No. 23AABCR0038F1Z0</td>
              <td style={{ borderRight: 'none' }}>Place of Supply :</td>
              <td colSpan="4" style={{ borderLeft: 'none' }}>M.P</td>
            </tr>
          </tbody>
        </Table>

        {/* Description Section */}
        <Table bordered className="invoice-table">
          <tbody>
            <tr>
              <td colSpan="15">
                Sub- Professional fees for property valuation for Indore and Bhopal Location
              </td>
            </tr>
          </tbody>
        </Table>

        {/* Items Table */}
        <Table bordered className="invoice-table" style={{ fontSize: '12px', tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>LAN No.</th>
              <th>Date of Visit</th>
              <th>Customer Name</th>
              <th colSpan="3">Address of Property</th>
              <th>Amount</th>
              <th>CGST</th>
              <th>SGST</th>
              <th>IGST</th>
              <th colSpan="3"></th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th colSpan="3"></th>
              <th></th>
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
              <td>DSSECIND0014513</td>
              <td>03.09.2024</td>
              <td>M/s SHIVA TRADEERS</td>
              <td colSpan="3">
                HOUSE NO. 159, CHHOTI BHAMORI, GRAM CHOTI KHAJRANI, TEHSIL AND DIST. INDORE M.P.
              </td>
              <td>2000</td>
              <td>0.09</td>
              <td>180</td>
              <td>0.09</td>
              <td>180</td>
              <td>0</td>
              <td>2360</td>
            </tr>
            {/* Additional rows... */}
          </tbody>
        </Table>

        {/* Notes Section */}
        <Table bordered className="invoice-table">
          <tbody>
            <tr>
              <td colSpan="15">
                Note - Please Read For More Details Annexure -1
              </td>
            </tr>
          </tbody>
        </Table>

        {/* Payment Details */}
        <Table bordered className="invoice-table">
          <tbody>
            <tr>
              <td colSpan="9">
                Payment Details<br />
                BANK NAME - STATE BANK OF INDIA<br />
                BANK ADDRESS - SCHEME NO. 54, A.B.ROAD,INDORE<br />
                ACCOUNT NO.   36052667013<br />
                RTGS/NEFT- IFSC CODE:  SBIN0030450<br />
                MICR CODE- 452002072<br />
                PAN Number: BUZPS8733G
              </td>
              <td colSpan="6" className="text-center">
                Signature/Digital Signature<br /><br /><br /><br />
                Name of the Signatory<br /><br />
                Date - 05.10.2024
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .invoice-container, .invoice-container * {
            visibility: visible;
          }
          .invoice-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border: none !important;
            padding: 0 !important;
            margin-top: 0;
          }
          .no-print {
            display: none !important;
          }
          .invoice-table {
            page-break-inside: avoid;
            width: 100%;
            table-layout: fixed;
          }
          .invoice-table td, .invoice-table th {
            word-wrap: break-word;
          }
        }
      `}</style>
    </Container>
  );
};

export default AgriwiseInvoice;
