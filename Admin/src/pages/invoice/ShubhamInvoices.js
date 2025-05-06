import React from 'react';

const ShubhamInvoices = () => {
  // Styles
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
      maxWidth: '100%',
      overflowX: 'auto',
      '@media print': {
        margin: 0,
        padding: 0,
      }
    },
    printButton: {
      padding: '8px 14px',
      backgroundColor: '#7A6FBE',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      marginBottom: '20px',
      '@media print': {
        display: 'none'
      }
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      border: '1px solid #000',
      fontSize: '12px',
      marginBottom: '20px',
      pageBreakInside: 'avoid',
    },
    cell: {
      border: '1px solid #000',
      padding: '5px',
      verticalAlign: 'top',
      lineHeight: '1.3'
    },
    header: {
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: '8px',
      backgroundColor: '#f5f5f5'
    },
    label: {
      fontWeight: 'bold',
      whiteSpace: 'nowrap'
    },
    rightAlign: {
      textAlign: 'right'
    },
    centerAlign: {
      textAlign: 'center'
    },
    multiLine: {
      whiteSpace: 'pre-line'
    },
    totalRow: {
      fontWeight: 'bold',
      backgroundColor: '#f0f0f0'
    },
    annexureTable: {
      width: '100%',
      borderCollapse: 'collapse',
      border: '1px solid #000',
      fontSize: '11px',
      pageBreakInside: 'avoid',
    },
    annexureHeader: {
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#f5f5f5'
    },
    pageBreak: {
      pageBreakAfter: 'always',
      '@media print': {
        height: 0,
        visibility: 'hidden'
      }
    }
  };

  // Invoice data
  const invoiceData = {
    date: '04.02.2025',
    billNo: '392/2024-25',
    customer: 'Shubham Housing Development Finance Company Limited',
    name: 'Branch Manager',
    address: 'House No. 290-C PLOT NO.12,1st Floor Near Bhawartal Garden, Opposite Spandan Hospital, Napier Town, JABALPUR M.P. - 482002.',
    state: 'Madhya Pradesh',
    stateCode: 'Relevant State Code',
    gstin: 'Relevant GSTIN No. 23AAOCS3673E1Z9',
    supplier: 'UNIQUE ENGINEERING AND ASSOCIATE',
    supplierGstin: '23BUZPS8733G2ZT',
    supplierName: 'Bhart Sharma',
    supplierAddress: 'Office at 102, Swadesh Bhawan Plot No. 2\nPress Complex A.B Road Indore. 452001\nMadhya Pradesh',
    supplierState: 'MADHYA PRADESH',
    sacCode: '998331',
    placeOfSupply: 'Indore',
    items: [
      {
        description: 'Professional fees for property valuation for the month of JAN 2025JABALPUR LOCATION',
        qty: 4,
        unit: 'No.',
        rate: 'Lum sum',
        total: 6000,
        discount: 0,
        taxable: 6000,
        cgstRate: '0.09',
        cgstAmount: 540,
        sgstRate: '0.09',
        sgstAmount: 540,
        igstRate: '0',
        igstAmount: 0
      },
      {
        description: 'Other Incidental Charges',
        qty: '',
        unit: '',
        rate: '',
        total: '',
        discount: '',
        taxable: '',
        cgstRate: '',
        cgstAmount: '',
        sgstRate: '',
        sgstAmount: '',
        igstRate: '',
        igstAmount: ''
      }
    ],
    paymentDetails: {
      bankName: 'STATE BANK OF INDIA',
      bankAddress: 'SCHEME NO. 54, A.B.ROAD,INDORE',
      accountNo: '36052667013',
      ifsc: 'SBIN0030450',
      micr: '452002072',
      pan: 'BUZPS8733G'
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={styles.container}>
      {/* Print Button */}
      <button style={styles.printButton} onClick={handlePrint}>
        Print Invoice
      </button>

      {/* Main Invoice Table */}
      <table style={styles.table}>
        <tbody>
          {/* Empty rows */}
          {[1, 2].map((_, index) => (
            <tr key={`empty-${index}`}>
              <td style={styles.cell} colSpan="14"></td>
            </tr>
          ))}

          {/* Tax Invoice header */}
          <tr>
            <td style={{...styles.cell, ...styles.header}} colSpan="14">Tax Invoice</td>
          </tr>

          {/* Date and Bill Number */}
          <tr>
            <td style={styles.cell} colSpan="8"></td>
            <td style={{...styles.cell, ...styles.label}}>Date:</td>
            <td style={styles.cell} colSpan="4">{invoiceData.date}</td>
          </tr>
          <tr>
            <td style={styles.cell} colSpan="8"></td>
            <td style={{...styles.cell, ...styles.label}}>Bill No.:</td>
            <td style={styles.cell} colSpan="4">{invoiceData.billNo}</td>
          </tr>

          {/* Bill details */}
          <tr>
            <td style={{...styles.cell, ...styles.label}}>Bill To</td>
            <td style={styles.cell} colSpan="7"></td>
            <td style={{...styles.cell, ...styles.label}}>Supplier :</td>
            <td style={styles.cell} colSpan="4">{invoiceData.supplier}</td>
          </tr>

          {/* Customer and Supplier details */}
          <tr>
            <td style={{...styles.cell, ...styles.label}}>Customer :</td>
            <td style={styles.cell} colSpan="7">{invoiceData.customer}</td>
            <td style={{...styles.cell, ...styles.label}}>GSTIN :</td>
            <td style={styles.cell} colSpan="4">{invoiceData.supplierGstin}</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>Name :</td>
            <td style={styles.cell} colSpan="7">{invoiceData.name}</td>
            <td style={{...styles.cell, ...styles.label}}>Name :</td>
            <td style={styles.cell} colSpan="4">{invoiceData.supplierName}</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>Address :</td>
            <td style={{...styles.cell, ...styles.multiLine}} colSpan="7">
              {invoiceData.address}
            </td>
            <td style={{...styles.cell, ...styles.label}}>Address :</td>
            <td style={{...styles.cell, ...styles.multiLine}} colSpan="4">
              {invoiceData.supplierAddress}
            </td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>State :</td>
            <td style={styles.cell} colSpan="7">{invoiceData.state}</td>
            <td style={{...styles.cell, ...styles.label}}>State :</td>
            <td style={styles.cell} colSpan="4">{invoiceData.supplierState}</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>State Code :</td>
            <td style={styles.cell} colSpan="7">{invoiceData.stateCode}</td>
            <td style={{...styles.cell, ...styles.label}}>SAC CODE</td>
            <td style={styles.cell} colSpan="4">{invoiceData.sacCode}</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>GSTIN/Unique ID :</td>
            <td style={styles.cell} colSpan="7">{invoiceData.gstin}</td>
            <td style={{...styles.cell, ...styles.label}}>Place of Supply :</td>
            <td style={styles.cell} colSpan="4">{invoiceData.placeOfSupply}</td>
          </tr>

          {/* Empty row */}
          <tr>
            <td style={styles.cell} colSpan="14"></td>
          </tr>

          {/* Items table header */}
          <tr>
            <td style={styles.cell}>Sr. No.</td>
            <td style={styles.cell}>Description</td>
            <td style={styles.cell}>Qty.</td>
            <td style={styles.cell}>Unit</td>
            <td style={styles.cell}>Rate<br/>(per item)</td>
            <td style={styles.cell}>Total</td>
            <td style={styles.cell}>Discount</td>
            <td style={styles.cell}>Taxable value</td>
            <td style={styles.cell}>CGST</td>
            <td style={styles.cell}></td>
            <td style={styles.cell}>SGST</td>
            <td style={styles.cell}></td>
            <td style={styles.cell}>IGST</td>
            <td style={styles.cell}></td>
          </tr>
          <tr>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}></td>
            <td style={styles.cell}>Rate</td>
            <td style={styles.cell}>Amount</td>
            <td style={styles.cell}>Rate</td>
            <td style={styles.cell}>Amount</td>
            <td style={styles.cell}>Rate</td>
            <td style={styles.cell}>Amount</td>
          </tr>

          {/* Invoice items */}
          {invoiceData.items.map((item, index) => (
            <tr key={`item-${index}`}>
              <td style={styles.cell}>{index + 1}</td>
              <td style={styles.cell}>{item.description}</td>
              <td style={styles.cell}>{item.qty}</td>
              <td style={styles.cell}>{item.unit}</td>
              <td style={styles.cell}>{item.rate}</td>
              <td style={styles.cell}>{item.total}</td>
              <td style={styles.cell}>{item.discount}</td>
              <td style={styles.cell}>{item.taxable}</td>
              <td style={styles.cell}>{item.cgstRate}</td>
              <td style={styles.cell}>{item.cgstAmount}</td>
              <td style={styles.cell}>{item.sgstRate}</td>
              <td style={styles.cell}>{item.sgstAmount}</td>
              <td style={styles.cell}>{item.igstRate}</td>
              <td style={styles.cell}>{item.igstAmount}</td>
            </tr>
          ))}

          {/* Empty rows */}
          {[1, 2].map((_, index) => (
            <tr key={`empty-row-${index}`}>
              <td style={styles.cell} colSpan="14"></td>
            </tr>
          ))}

          {/* Totals */}
          <tr style={styles.totalRow}>
            <td style={styles.cell} colSpan="7">Total</td>
            <td style={styles.cell}>{invoiceData.items[0].taxable}</td>
            <td style={styles.cell}></td>
            <td style={styles.cell}>{invoiceData.items[0].cgstAmount}</td>
            <td style={styles.cell}></td>
            <td style={styles.cell}>{invoiceData.items[0].sgstAmount}</td>
            <td style={styles.cell}></td>
            <td style={styles.cell}>{invoiceData.items[0].igstAmount}</td>
          </tr>

          {/* Empty row */}
          <tr>
            <td style={styles.cell} colSpan="14"></td>
          </tr>

          {/* Invoice value */}
          <tr>
            <td style={styles.cell} colSpan="7">Total Invoice Value (In figure)</td>
            <td style={styles.cell} colSpan="7">{invoiceData.items[0].taxable + invoiceData.items[0].cgstAmount + invoiceData.items[0].sgstAmount}</td>
          </tr>

          {/* Note */}
          <tr>
            <td style={{...styles.cell, ...styles.multiLine}} colSpan="14">
              Note - Please Read For More Details Annexure -1
            </td>
          </tr>

          {/* Payment details */}
          <tr>
            <td style={{...styles.cell, ...styles.multiLine}} colSpan="7">
              Payment Details<br/>
              BANK NAME - {invoiceData.paymentDetails.bankName}<br/>
              BANK ADDRESS - {invoiceData.paymentDetails.bankAddress}<br/>
              ACCOUNT NO.   {invoiceData.paymentDetails.accountNo}<br/>
              RTGS/NEFT- IFSC CODE:  {invoiceData.paymentDetails.ifsc}<br/>
              MICR CODE- {invoiceData.paymentDetails.micr}<br/>
              PAN Number: {invoiceData.paymentDetails.pan}
            </td>
            <td style={styles.cell} colSpan="7" rowSpan="4">
              Signature/Digital Signature<br/><br/><br/>
              Name of the Signatory<br/><br/>
              Date - {invoiceData.date}
            </td>
          </tr>

          {/* Empty rows */}
          {[1, 2, 3].map((_, index) => (
            <tr key={`empty-bottom-${index}`}>
              <td style={styles.cell} colSpan="7"></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Print-specific CSS */}
      <style>
        {`
          @media print {
            @page {
              size: A4 portrait;
              margin: 10mm;
            }
            body {
              margin: 0;
              padding: 0;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            table {
              page-break-inside: avoid;
            }
            tr {
              page-break-inside: avoid;
              page-break-after: auto;
            }
            thead {
              display: table-header-group;
            }
            tfoot {
              display: table-footer-group;
            }
            .no-print {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ShubhamInvoices;