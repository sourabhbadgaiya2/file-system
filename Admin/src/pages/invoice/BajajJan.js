import React, { useRef } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import ExcelHeader from 'components/Header/ExcelHeader'; // Ensure the path is correct

const BajajJan = () => {
  const printRef = useRef(null);

  const handlePrint = () => {
    const content = printRef.current.innerHTML;
    const printWindow = window.open('', '_blank');

    printWindow.document.write('<html><head><title>TAX INVOICE</title>');
    printWindow.document.write('<style type="text/css">');
    printWindow.document.write(`
      body { 
        margin: 0;
        padding: 10px;
        font-family: Arial, sans-serif;
      }
      table, th, td { 
        border: 1px solid black; 
        border-collapse: collapse; 
      }
      th, td {
        word-wrap: break-word;
        padding: 5px;
      }
      .invoice-table {
        width: 100%;
      }
      @page {
        size: A4;
        margin: 10mm;
      }
    `);
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between mb-3">
        <Button onClick={handlePrint} variant="primary">Print</Button>
      </div>
      <div ref={printRef}>
        <div className="text-end mb-3">
          <ExcelHeader />
        </div>
        <Table bordered className="invoice-table">
          <tbody>
            <tr>
              <td colSpan="14" className="text-center fw-bold">TAX INVOICE</td>
            </tr>
            <tr>
              <td colSpan="16">
                Invoice No.: 399/2024-25<br />
                Invoice Date: 04.02.2025<br />
                Bill Month: Jan-2025<br />
                Pan No: BUZPS8733G
              </td>
            </tr>
            <tr>
              <td colSpan="6" className="fw-bold">Details of Service Provider (Bank Details)</td>
              <td colSpan="10" className="fw-bold">Details of Service Received (Bajaj Details)</td>
            </tr>
            <tr>
              <td colSpan="6">
                <strong>UNIQUE ENGINEERING AND ASSOCIATE</strong><br />
                Unique Engineering and Associate<br />
                Reg. Office at 102, Swadesh Bhawan Plot No. 2, Press Complex A.B Road Indore. 452001<br />
                Madhya Pradesh<br />
                Tel. 0731-496744<br />
                VENDOR CODE:-3000673<br />
                GST NO :-23BUZPS8733G2ZT<br />
                SAC code: 9972<br />
                HSN CODE -9983
              </td>
              <td colSpan="10">
                GSTIN: 23AADCB6018P1ZL<br />
                Name: BAJAJ HOUSING FINANCE LIMITED<br />
                Address: (As per GST) Off. Nos. 605, 606, 607-A, 607-B,, 6th Floor, Airen Heights, Plot No.13-14, P.U.3, Scheme No. 54, INDORE, Indore, Madhya Pradesh, 452001<br />
                State: Madhya Pradesh<br />
                State Code: 23
              </td>
            </tr>
            <tr>
              <th>S.NO.</th>
              <th>APPLICATION ID</th>
              <th>CUSTOMER NAME</th>
              <th>ADDRESS</th>
              <th>DATE OF VISIT</th>
              <th>CASE TYPE</th>
              <th>LOCATION</th>
              <th>Transaction Amount</th>
              <th>CGST Rate</th>
              <th>CGST Amount</th>
              <th>SGST Rate</th>
              <th>SGST Amount</th>
              <th colSpan="3"></th>
            </tr>
            <tr>
              <td>1</td>
              <td>H534RLP0190145</td>
              <td>MR. HARINARAYAN SHARMA</td>
              <td>PROPERTY SITUATED AT, HOUSE NO. 346, WARD NO. 16, DEVRA SHRI MOHALLA,GRAM MOLANA, TH. BADNAGAR, DIST. UJJAIN, MP 456771</td>
              <td>17.01.2025</td>
              <td>AUDIT</td>
              <td>INDORE</td>
              <td>1200</td>
              <td>0.09</td>
              <td>108</td>
              <td>0.09</td>
              <td>108</td>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td>2</td>
              <td>H425HHL1216107</td>
              <td>PRIYANKA KAUSHIK</td>
              <td>FLAT NO. 202, SECOND FLOOR, COPPER STONE, SURVEY NO. 1429/5/2, VILLAGE- KHAJRANA, DIST- INDORE- 452016</td>
              <td>22.01.2025</td>
              <td>AUDIT</td>
              <td>INDORE</td>
              <td>1200</td>
              <td>0.09</td>
              <td>108</td>
              <td>0.09</td>
              <td>108</td>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td className="fw-bold" colSpan="8">TOTAL</td>
              <td className="fw-bold">2400</td>
              <td></td>
              <td className="fw-bold">216</td>
              <td></td>
              <td className="fw-bold">216</td>
              <td colSpan="3"></td>
            </tr>
            <tr>
              <td colSpan="7" className="fw-bold">PAYABLE AMOUNT Transaction AMOUNT</td>
              <td className="fw-bold">2832</td>
              <td colSpan="8"></td>
            </tr>
            <tr>
              <td colSpan="16">RUPEES IN WORD :- Two Thousand Eight Hundred Thirty-Two Only</td>
            </tr>
            <tr>
              <td colSpan="16">
                Nature of Service: Property valuation report<br />
                HSN/ SAC code: 9972<br />
                Please make payment in following bank account
              </td>
            </tr>
            <tr>
              <td colSpan="12"></td>
              <td colSpan="4">Authorized signature</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default BajajJan;