import React from 'react';

const ShubhamInvoices = () => {
  // Styles
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
      maxWidth: '100%',
      overflowX: 'auto'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      border: '1px solid #000',
      fontSize: '12px'
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
      marginTop: '20px',
      width: '100%',
      borderCollapse: 'collapse',
      border: '1px solid #000',
      fontSize: '11px'
    }
  };

  // Data
  const invoiceItems = [
    {
      description: "Fresh cases within Municipal limits",
      cases: 13,
      rate: "Lumsum",
      total: 19500,
      discount: 0,
      taxable: 19500,
      cgstRate: "0.09",
      cgstAmount: 1755,
      sgstRate: "0.09",
      sgstAmount: 1755,
      igstRate: "0",
      igstAmount: 0
    },
    {
      description: "Other Incidental Charges",
      cases: "",
      rate: "",
      total: "",
      discount: "",
      taxable: "",
      cgstRate: "",
      cgstAmount: "",
      sgstRate: "",
      sgstAmount: "",
      igstRate: "",
      igstAmount: ""
    },
    {
      description: "",
      cases: "",
      rate: "",
      total: "",
      discount: "",
      taxable: "",
      cgstRate: "",
      cgstAmount: "",
      sgstRate: "",
      sgstAmount: "",
      igstRate: "",
      igstAmount: ""
    }
  ];

  const annexureItems = [
    {
      sno: 1,
      fileNo: "BPL20250143",
      propertyId: "25034199 - 1",
      customer: "NIKHIL BARJATYA",
      address: "PLOT NO 104 A SECTOR SARDAR VALLABH BHAI PATEL MISROD PHASE 1 BAWADIYA, BHOPAL",
      visitDate: "09.01.2025",
      caseType: "TAKEOVER / BT",
      propertyType: "RESI COM COMMERCIAL",
      area: "3012",
      location: "MISHROD, BHOPAL",
      pincode: "462026",
      amount: 1500
    },
    {
      sno: 2,
      fileNo: "BPL20250146",
      propertyId: "NA",
      customer: "CONEMED HEALTHCARE PRIVATE LIMITED (SHOP NO. 88)",
      address: "SHOP NO. FF-88, FF-89, FF-91, FIRST FLOOR, MINAL SHOPPING MALL, MINAL RESIDENCY, J.K ROAD, TEHSIL-HUZUR, DISTRICT-BHOPAL  (MADHYA PRADESH) - 462023",
      visitDate: "17.01.2025",
      caseType: "COMMERCIAL LAP",
      propertyType: "COMMERCIAL SHOP",
      area: "136.8",
      location: "BHOPAL",
      pincode: "462023",
      amount: 1500
    },
    // Add remaining annexure items (3-13) following the same pattern
  ];

  return (
    <div style={styles.container}>
      {/* Main Invoice Table */}
      <table style={styles.table}>
        <tbody>
          {/* Empty rows */}
          {[1, 2, 3].map((_, index) => (
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
            <td style={styles.cell} colSpan="4">04.02.2025</td>
          </tr>
          <tr>
            <td style={styles.cell} colSpan="8"></td>
            <td style={{...styles.cell, ...styles.label}}>Bill No.:</td>
            <td style={styles.cell} colSpan="4">395/2024-25</td>
          </tr>

          {/* Bill details */}
          <tr>
            <td style={{...styles.cell, ...styles.label}}>To,</td>
            <td style={styles.cell} colSpan="7"></td>
            <td style={{...styles.cell, ...styles.label}}>Bill for Month</td>
            <td style={styles.cell} colSpan="4">2025-01-01 00:00:00</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>The Manager,</td>
            <td style={styles.cell} colSpan="7"></td>
            <td style={{...styles.cell, ...styles.label}}>Supplier :</td>
            <td style={styles.cell} colSpan="4">UNIQUE ENGINEERING AND ASSOCIATE</td>
          </tr>

          {/* Customer and Supplier details */}
          <tr>
            <td style={{...styles.cell, ...styles.label}}>Customer :</td>
            <td style={styles.cell} colSpan="7">Sundaram Home Finance Limited</td>
            <td style={{...styles.cell, ...styles.label}}>GSTIN :</td>
            <td style={styles.cell} colSpan="4">23BUZPS8733G2ZT</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>Name :</td>
            <td style={styles.cell} colSpan="7">Branch Manager</td>
            <td style={{...styles.cell, ...styles.label}}>Name :</td>
            <td style={styles.cell} colSpan="4">Bhart Sharma</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>Address :</td>
            <td style={{...styles.cell, ...styles.multiLine}} colSpan="7">
              Plot no. 9/1/3 EMBASSY BUILDING, 3RD FLOOR (NEAR TREASURE IS LAND MALL) M.G. ROAD| INDORE – 452001
            </td>
            <td style={{...styles.cell, ...styles.label}}>Address :</td>
            <td style={{...styles.cell, ...styles.multiLine}} colSpan="4">
              Office No.102, Plot No.2 Swadesh Bhawan, Indore, Indore, Madhya Pradesh, 452001
            </td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>State :</td>
            <td style={styles.cell} colSpan="7">MADHYA PRADESH</td>
            <td style={{...styles.cell, ...styles.label}}>State :</td>
            <td style={styles.cell} colSpan="4">MADHYA PRADESH</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>State Code :</td>
            <td style={styles.cell} colSpan="7">Relevant State Code 23</td>
            <td style={{...styles.cell, ...styles.label}}>SAC CODE</td>
            <td style={styles.cell} colSpan="4">998331</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>GSTIN/Unique ID :</td>
            <td style={styles.cell} colSpan="7">Relevant GSTIN No. 23AADCS4826J1ZC</td>
            <td style={{...styles.cell, ...styles.label}}>Place of Supply :</td>
            <td style={styles.cell} colSpan="4">Madhya Pradesh</td>
          </tr>

          {/* Empty row */}
          <tr>
            <td style={styles.cell} colSpan="14"></td>
          </tr>

          {/* Items table header */}
          <tr>
            <td style={styles.cell}>Sr. No.</td>
            <td style={styles.cell} colSpan="2">CASE DETAILS</td>
            <td style={styles.cell}>No. of cases</td>
            <td style={styles.cell}>Rate<br/>(per item)</td>
            <td style={styles.cell}>Total</td>
            <td style={styles.cell}>Discount</td>
            <td style={styles.cell}>Taxable value</td>
            <td style={styles.cell} colSpan="2">CGST</td>
            <td style={styles.cell} colSpan="2">SGST</td>
            <td style={styles.cell} colSpan="2">IGST</td>
          </tr>
          <tr>
            <td style={styles.cell}></td>
            <td style={styles.cell} colSpan="2"></td>
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
          {invoiceItems.map((item, index) => (
            <tr key={`item-${index}`}>
              <td style={styles.cell}>{index + 1}</td>
              <td style={styles.cell} colSpan="2">{item.description}</td>
              <td style={styles.cell}>{item.cases}</td>
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

          {/* Totals */}
          <tr style={styles.totalRow}>
            <td style={styles.cell} colSpan="7">Total</td>
            <td style={styles.cell}>19500</td>
            <td style={styles.cell}></td>
            <td style={styles.cell}>1755</td>
            <td style={styles.cell}></td>
            <td style={styles.cell}>1755</td>
            <td style={styles.cell}></td>
            <td style={styles.cell}>0</td>
          </tr>

          {/* Empty row */}
          <tr>
            <td style={styles.cell} colSpan="14"></td>
          </tr>

          {/* Invoice value */}
          <tr>
            <td style={styles.cell} colSpan="7">Total Invoice Value (In figure)</td>
            <td style={styles.cell} colSpan="7">23010</td>
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
              Payment Details <br/>
              Name- UNIQUE ENGINEERING AND ASSOCIATE<br/>
              BANK NAME - ICICI BANK LTD<br/>
              BANK ADDRESS - Malav Parisar Branch Indore M.P Pincode- 452008<br/>
              ACCOUNT NO.   004105017837<br/>
              RTGS/NEFT- IFSC CODE:  ICIC0000041<br/>
              PAN Number: BUZPS8733G
            </td>
            <td style={styles.cell} colSpan="7" rowSpan="4">
              Signature/Digital Signature<br/><br/><br/>
              Name of the Signatory<br/><br/>
              Date - 04.02.2025
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

      {/* Annexure Table */}
      <table style={styles.annexureTable}>
        <thead>
          <tr>
            <th style={styles.cell}>S. NO</th>
            <th style={styles.cell}>FILE NO</th>
            <th style={styles.cell}>PROPERTY ID NO.</th>
            <th style={styles.cell}>NAME OF CUSTOMER</th>
            <th style={styles.cell}>ADDRESS OF PROPERTY</th>
            <th style={styles.cell}>DATE OF PROPERTY VISIT</th>
            <th style={styles.cell}>TYPE OF PROPERTY CASE</th>
            <th style={styles.cell}>PROPERTY TYPE</th>
            <th style={styles.cell}>PLOT / Built Up AREA (SQFT)</th>
            <th style={styles.cell}>LOCATION</th>
            <th style={styles.cell}>PICODE</th>
            <th style={styles.cell}>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {annexureItems.map((item, index) => (
            <tr key={`annexure-${index}`}>
              <td style={styles.cell}>{item.sno}</td>
              <td style={styles.cell}>{item.fileNo}</td>
              <td style={styles.cell}>{item.propertyId}</td>
              <td style={styles.cell}>{item.customer}</td>
              <td style={{...styles.cell, ...styles.multiLine}}>{item.address}</td>
              <td style={styles.cell}>{item.visitDate}</td>
              <td style={styles.cell}>{item.caseType}</td>
              <td style={styles.cell}>{item.propertyType}</td>
              <td style={styles.cell}>{item.area}</td>
              <td style={styles.cell}>{item.location}</td>
              <td style={styles.cell}>{item.pincode}</td>
              <td style={styles.cell}>{item.amount}</td>
            </tr>
          ))}
          <tr style={styles.totalRow}>
            <td style={styles.cell} colSpan="11">Total</td>
            <td style={styles.cell}>19500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShubhamInvoices;