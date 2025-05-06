import React from 'react';

const PiramalNpaInvoices = () => {
  // Styles
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      border: '1px solid #000',
    },
    cell: {
      border: '1px solid #000',
      padding: '5px',
      verticalAlign: 'top',
    },
    header: {
      fontSize: '18px',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: '10px',
    },
    sectionHeader: {
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
      padding: '5px',
    },
    label: {
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
    },
    rightAlign: {
      textAlign: 'right',
    },
    serviceDescription: {
      fontWeight: 'bold',
      textAlign: 'center',
      padding: '5px',
      backgroundColor: '#f0f0f0',
    },
    tableHeader: {
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#f0f0f0',
    },
    bankDetails: {
      fontSize: '14px',
      lineHeight: '1.5',
    },
    multiLineAddress: {
      whiteSpace: 'pre-line',
    }
  };

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <tbody>
          {/* Empty row */}
          <tr>
            <td style={styles.cell} colSpan="9"></td>
          </tr>
          
          {/* INVOICE header */}
          <tr>
            <td style={{...styles.cell, ...styles.header}} colSpan="9">INVOICE</td>
          </tr>
          
          {/* Invoice details */}
          <tr>
            <td style={styles.cell} colSpan="5"></td>
            <td style={{...styles.cell, ...styles.rightAlign}}>Invoice No :-</td>
            <td style={styles.cell} colSpan="2">386/2024-25</td>
            <td style={styles.cell}></td>
          </tr>
          <tr>
            <td style={styles.cell} colSpan="5"></td>
            <td style={{...styles.cell, ...styles.rightAlign}}>Invoice Date :-</td>
            <td style={styles.cell} colSpan="2">04.02.2025</td>
            <td style={styles.cell}></td>
          </tr>
          <tr>
            <td style={styles.cell} colSpan="5"></td>
            <td style={{...styles.cell, ...styles.rightAlign}}>Bill month</td>
            <td style={styles.cell} colSpan="2">2025-02-01 00:00:00</td>
            <td style={styles.cell}></td>
          </tr>
          
          {/* Receiver and Vendor details */}
          <tr>
            <td style={{...styles.cell, ...styles.sectionHeader}} colSpan="5">Details of Receiver (Billed to)</td>
            <td style={{...styles.cell, ...styles.sectionHeader}} colSpan="4">Details Of Vendor</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>Name :</td>
            <td style={styles.cell} colSpan="4">PIRAMAL CAPITAL AND HOUSING FINANCE LIMITED</td>
            <td style={{...styles.cell, ...styles.label}}>Name :</td>
            <td style={styles.cell} colSpan="3">M/s. Unique Engineering & Associates</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>Address:-</td>
            <td style={{...styles.cell, ...styles.multiLineAddress}} colSpan="4">
              As Per GST Office Address- 503 to 505, 5th, Airen Heights, Scheme No. 54 PU 3 Plot No. 13/14 Vijay Nagar, lndore, Indore, Madhya Pradesh, 452010<br /><br />
              Location - REWA
            </td>
            <td style={{...styles.cell, ...styles.label}}>Address:-</td>
            <td style={styles.cell} colSpan="3">Office No.102, Plot No.2 Swadesh Bhawan, Indore, Indore, Madhya Pradesh, 452001</td>
          </tr>
          <tr>
            <td style={styles.cell} colSpan="9"></td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>State Code-</td>
            <td style={styles.cell} colSpan="2">23</td>
            <td style={styles.cell} colSpan="2"></td>
            <td style={{...styles.cell, ...styles.label}}>SAC CODE.</td>
            <td style={styles.cell} colSpan="3">998331</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>GSTIN Number.</td>
            <td style={styles.cell} colSpan="2">23AAACD1977A1Z7</td>
            <td style={styles.cell} colSpan="2"></td>
            <td style={{...styles.cell, ...styles.label}}>GSTIN Number.</td>
            <td style={styles.cell} colSpan="3">23BUZPS8733G2ZT</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>PAN No.</td>
            <td style={styles.cell} colSpan="2">NA</td>
            <td style={styles.cell} colSpan="2"></td>
            <td style={{...styles.cell, ...styles.label}}>PAN No.</td>
            <td style={styles.cell} colSpan="3">BUZPS8733G</td>
          </tr>
          
          {/* Service description */}
          <tr>
            <td style={{...styles.cell, ...styles.serviceDescription}} colSpan="9">Sub- Professional fees for property valuation for   REWA Location</td>
          </tr>
          
          {/* Table header */}
          <tr style={styles.tableHeader}>
            <td style={styles.cell}>Sr. No</td>
            <td style={styles.cell}>LAN. NO.</td>
            <td style={styles.cell}>Date of Visit</td>
            <td style={styles.cell}>Customer Name</td>
            <td style={styles.cell}>Property Address</td>
            <td style={styles.cell}>CASE TYPE</td>
            <td style={styles.cell}>LOCATION</td>
            <td style={styles.cell}>PROF. FEES CHARGE</td>
          </tr>
          
          {/* Empty row */}
          <tr>
            <td style={styles.cell} colSpan="9"></td>
          </tr>
          
          {/* Table row */}
          <tr>
            <td style={styles.cell}>1</td>
            <td style={styles.cell}>1740058</td>
            <td style={styles.cell}>17.01.2025</td>
            <td style={styles.cell}>Mr. Suryabhan Singh</td>
            <td style={styles.cell}>Plot no.114-C,m Prop No Muni Ward No 18,Aditya Puram, The-dist.Gwalior,m.p.-474020</td>
            <td style={styles.cell}>NPA</td>
            <td style={styles.cell}>GWALIOR</td>
            <td style={styles.cell}>1500</td>
          </tr>
          
          {/* Subtotal */}
          <tr>
            <td style={styles.cell} colSpan="5"></td>
            <td style={{...styles.cell, ...styles.rightAlign}}>SUB TOTAL</td>
            <td style={styles.cell} colSpan="2"></td>
            <td style={styles.cell}>1500</td>
          </tr>
          
          {/* Bank details and totals */}
          <tr>
            <td style={{...styles.cell, ...styles.bankDetails}} colSpan="5" rowSpan="4">
              CUSTOMER NAME - UNIQUE ENGINEERING AND ASSOCIATES<br />
              BANK NAME -ICICI BANK LTD<br />
              ACCOUNT NO.-  004105017837<br />
              BRANCH ADDRESS - Malav Parisar Branch Indore M.P Pincode- 452008<br />
              IFSC CODE - ICIC0000041<br />
            </td>
            <td style={{...styles.cell, ...styles.rightAlign}}>CGST @ 9%</td>
            <td style={styles.cell} colSpan="2"></td>
            <td style={styles.cell}>135</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.rightAlign}}>SGST @ 9%</td>
            <td style={styles.cell} colSpan="2"></td>
            <td style={styles.cell}>135</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.rightAlign}}>IGST @ 18%</td>
            <td style={styles.cell} colSpan="2"></td>
            <td style={styles.cell}>0</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.rightAlign}}>GRAND TOTAL</td>
            <td style={styles.cell} colSpan="2"></td>
            <td style={styles.cell}>1770</td>
          </tr>
          
          {/* Empty row */}
          <tr>
            <td style={styles.cell} colSpan="9"></td>
          </tr>
          
          {/* Reverse charge */}
          <tr>
            <td style={styles.cell} colSpan="9">Whether TAX is payable under Reverse Charge  - No</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PiramalNpaInvoices;