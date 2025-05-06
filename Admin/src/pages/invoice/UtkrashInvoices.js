import React from 'react';

const UtkrashInvoices = () => {
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
  };

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <tbody>
          {/* Empty row */}
          <tr>
            <td style={styles.cell} colSpan="12"></td>
          </tr>
          
          {/* TAX INVOICE header */}
          <tr>
            <td style={{...styles.cell, ...styles.header}} colSpan="12">TAX INVOICE</td>
          </tr>
          
          {/* Invoice details */}
          <tr>
            <td style={styles.cell} colSpan="5"></td>
            <td style={{...styles.cell, ...styles.rightAlign}}>Invoice No :-</td>
            <td style={styles.cell} colSpan="2">385/2024-25</td>
            <td style={styles.cell} colSpan="2"></td>
            <td style={{...styles.cell, ...styles.rightAlign}}>1500</td>
          </tr>
          <tr>
            <td style={styles.cell} colSpan="5"></td>
            <td style={{...styles.cell, ...styles.rightAlign}}>Invoice Date :-</td>
            <td style={styles.cell} colSpan="2">04.02.2025</td>
            <td style={styles.cell} colSpan="2"></td>
            <td style={{...styles.cell, ...styles.rightAlign}}>1250</td>
          </tr>
          <tr>
            <td style={styles.cell} colSpan="5"></td>
            <td style={{...styles.cell, ...styles.rightAlign}}>Bill month</td>
            <td style={styles.cell} colSpan="2">2025-01-01 00:00:00</td>
            <td style={styles.cell} colSpan="3"></td>
          </tr>
          
          {/* Receiver and Vendor details */}
          <tr>
            <td style={{...styles.cell, ...styles.sectionHeader}} colSpan="6">Details of Receiver (Billed to)</td>
            <td style={{...styles.cell, ...styles.sectionHeader}} colSpan="6">Details Of Vendor</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>Name :</td>
            <td style={styles.cell} colSpan="4">Utkarsh Small Finance Bank</td>
            <td style={{...styles.cell, ...styles.label}}>Name :</td>
            <td style={styles.cell} colSpan="5">M/s. Unique Engineering & Associates</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>Address:-</td>
            <td style={styles.cell} colSpan="4">Shop No. G-1, G-6, G-9, Ground Floor, Mangal City Mall & Hotel, Plot No -A-1, Scheme No 54, PU -4 Commercial, Indore- 452010</td>
            <td style={{...styles.cell, ...styles.label}}>Address:-</td>
            <td style={styles.cell} colSpan="5">Office No.102, Plot No.2 Swadesh Bhawan, Indore, Indore, Madhya Pradesh, 452001</td>
          </tr>
          <tr>
            <td style={styles.cell} colSpan="12"></td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>State Code-</td>
            <td style={styles.cell} colSpan="2">23</td>
            <td style={styles.cell} colSpan="2"></td>
            <td style={{...styles.cell, ...styles.label}}>SAC CODE.</td>
            <td style={styles.cell} colSpan="5">998331</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>GSTIN Number.</td>
            <td style={styles.cell} colSpan="2">23AABCU9355J1Z2</td>
            <td style={styles.cell} colSpan="2"></td>
            <td style={{...styles.cell, ...styles.label}}>GSTIN Number.</td>
            <td style={styles.cell} colSpan="5">23BUZPS8733G2ZT</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.label}}>PAN No.</td>
            <td style={styles.cell} colSpan="2">NA</td>
            <td style={styles.cell} colSpan="2"></td>
            <td style={{...styles.cell, ...styles.label}}>PAN No.</td>
            <td style={styles.cell} colSpan="5">BUZPS8733G</td>
          </tr>
          
          {/* Service description */}
          <tr>
            <td style={{...styles.cell, ...styles.serviceDescription}} colSpan="12">Sub- Professional fees for property valuation for INDORE Location</td>
          </tr>
          
          {/* Table header */}
          <tr style={styles.tableHeader}>
            <td style={styles.cell}>Sr. No</td>
            <td style={styles.cell}>LAN. NO.</td>
            <td style={styles.cell}>Date of Visit</td>
            <td style={styles.cell}>Customer Name</td>
            <td style={styles.cell}>Property Address</td>
            <td style={styles.cell}>Distance IN KM</td>
            <td style={styles.cell}>Case Type</td>
            <td style={styles.cell}>BASE AMOUNT</td>
            <td style={styles.cell} colSpan="3">TOTAL</td>
          </tr>
          
          {/* Table rows */}
          {[
            {
              srNo: 1,
              lanNo: 'MSME0000232644',
              date: '13.01.2025',
              customer: 'MR. AMARLAL CHABRIA',
              address: 'PRAKOSTHA NO. 7, 8, 9, 10 AND 11, GROUND FLOOR, PLOT NO. 42, 43, 44 AND 45, AMAR FASHION COMPLEX, SHIV VILAS PALACE IMLI BAZAR INDORE M.P',
              distance: '7 km',
              caseType: 'LAP Retail',
              amount: '1250',
              total: '1250'
            },
            {
              srNo: 2,
              lanNo: 'MSME0000232644',
              date: '13.01.2025',
              customer: 'MR. AMARLAL CHABRIA',
              address: 'PRAKOSTHA NO. G-9, GROUND FLOOR, PLOT NO. 42, 43, 44 AND 45, AMAR FASHION COMPLEX, SHIV VILAS PALACE IMLI BAZAR INDORE M.P 452001.',
              distance: '7 km',
              caseType: 'LAP Retail',
              amount: '1250',
              total: '1250'
            },
            {
              srNo: 3,
              lanNo: 'MSME0000232713',
              date: '29.01.2025',
              customer: 'MR. AYUSH DAFAL',
              address: 'PRAKOSTHA NO. 301 TO 315, THIRD FLOOR PEKI, SHARMA CHAMBERS, JAWAHAR MARG PLOT NO. 05, INDORE M.P.',
              distance: '6 KM',
              caseType: 'LAP Retail',
              amount: '1250',
              total: '1250'
            },
            {
              srNo: 4,
              lanNo: 'MSME0000232714',
              date: '27.01.2025',
              customer: 'MR. DEEPAK YADAV',
              address: 'HOUSE NO. P-20, KALINDI GOLD CITY, GRAM BHANGYA, TEHSIL SANWER AND DIST. INDORE M.P.',
              distance: '12 KM',
              caseType: 'LAP Retail',
              amount: '1250',
              total: '1250'
            },
            {
              srNo: 5,
              lanNo: 'MSME0000232795',
              date: '15.01.2025',
              customer: 'MR. GOKUL SINGH',
              address: 'HOUSE NO. 337 (OLD NO. 336), WARD NO. 18, SHIVKANTH NAGAR, INDORE M.P. 452001',
              distance: '11 KM',
              caseType: 'BL Advantage',
              amount: '1250',
              total: '1250'
            },
            {
              srNo: 6,
              lanNo: 'MORT0000071332',
              date: '17.01.2025',
              customer: 'MR. JATINDER PAL SINGH BADWAL',
              address: 'PLOT NO. 75 & 76, SURVEY NO. 259/60 PEKI, KUSHAWAH NAGAR, SECTOR-A, GRAM-CHHOTA BAGNDA, TEHSIL AND DIST. INDORE M.P.',
              distance: '14 KM',
              caseType: 'HL Purchase',
              amount: '1250',
              total: '1250'
            },
            {
              srNo: 7,
              lanNo: 'MSME0000174441',
              date: '09.01.2025',
              customer: 'MR. MUKESH CHITTODIYA',
              address: 'PROPERTY SITUATED AT SURVEY NO. 2/2/1/2 PEKI, P.H.NO. 14, GRAM CHITAWLIYA KHEDA, TEHSIL MAKDON (TARNA), DISTRICT UJJAIN (M.P.) – 456665',
              distance: '56 KM',
              caseType: 'LPCP (LAP Low LTV)',
              amount: '1500',
              total: '1500'
            },
            {
              srNo: 8,
              lanNo: 'MSME0000232670',
              date: '10.01.2025',
              customer: 'MRS. NISHA VERMA',
              address: 'PROPERTY SITUATED AT SURVEY NO. 501/5, EAST PART, GRAM MHOWGAON DHARNAKA, M.G. ROAD,TEHSIL MHOW , INDORE 453441',
              distance: '35 KM',
              caseType: 'LAP Retail',
              amount: '1500',
              total: '1500'
            },
            {
              srNo: 9,
              lanNo: 'MSME0000232647',
              date: '17.01.2025',
              customer: 'MR. RAJU AMOLE JATAV',
              address: 'HOUSE NO. 50, SURVEY NO. 368, MECHANIC NAGAR, DIST. INDORE M.P.',
              distance: '10 KM',
              caseType: 'LAP Retail',
              amount: '1250',
              total: '1250'
            },
            {
              srNo: 10,
              lanNo: 'MSME0000232647',
              date: '10.01.2025',
              customer: 'MR. RAJU AMOLE JATAV',
              address: 'HOUSE NO. 50, SURVEY NO. 368, MECHANIC NAGAR, DIST. INDORE M.P.',
              distance: '10 KM',
              caseType: 'LAP – Retail',
              amount: '1250',
              total: '1250'
            },
            {
              srNo: 11,
              lanNo: 'MORT0000053627',
              date: '09.01.2025',
              customer: 'MR. SHAHRUKH',
              address: 'NORTH PART OF PLOT NO. 27, SILVER PARK COLONY (SHANKARGARH), DIST. DEWAS M.P. 455001',
              distance: '36 KM',
              caseType: 'HL Purchase Resale (Assessed Income Program)',
              amount: '1500',
              total: '1500'
            },
            {
              srNo: 12,
              lanNo: 'MSME0000232712',
              date: '16.01.2025',
              customer: 'MR. TOSHIF WARSI',
              address: 'PROPERTY SITUATED AT SURVEY NO. 273/2 PEKI, P.H.NO. 51/61, GRAM GUNAWAD, TEHSIL AND DIST. DHAR M.P. 454001',
              distance: '72 KM',
              caseType: 'LAP Low LTV',
              amount: '1500',
              total: '1500'
            },
            {
              srNo: 13,
              lanNo: 'MSME0000232700',
              date: '10.01.2025',
              customer: 'MR. VIRENDRA JADHAV',
              address: 'PRAKOSTHA NO. 319, THIRD FLOOR, SIDHI APARTMENT, PLOT NO. 09, SHREE RAM KAMAL RESIDENCY, GRAM NAINOD, TEHSIL AND DIST. INDORE M.P. 453112',
              distance: '20 KM',
              caseType: 'LAP Retail',
              amount: '1250',
              total: '1250'
            }
          ].map((item, index) => (
            <tr key={index}>
              <td style={styles.cell}>{item.srNo}</td>
              <td style={styles.cell}>{item.lanNo}</td>
              <td style={styles.cell}>{item.date}</td>
              <td style={styles.cell}>{item.customer}</td>
              <td style={styles.cell}>{item.address}</td>
              <td style={styles.cell}>{item.distance}</td>
              <td style={styles.cell}>{item.caseType}</td>
              <td style={styles.cell}>{item.amount}</td>
              <td style={styles.cell} colSpan="3">{item.total}</td>
            </tr>
          ))}
          
          {/* Bank details and totals */}
          <tr>
            <td style={{...styles.cell, ...styles.bankDetails}} colSpan="4" rowSpan="4">
              CUSTOMER NAME - UNIQUE ENGINEERING AND ASSOCIATES<br />
              BANK NAME -ICICI BANK LTD<br />
              ACCOUNT NO.-  004105017837<br />
              BRANCH ADDRESS - Malav Parisar Branch Indore M.P Pincode- 452008<br />
              IFSC CODE - ICIC0000041<br />
            </td>
            <td style={styles.cell} colSpan="4" className="right-align">SUB TOTAL</td>
            <td style={styles.cell} colSpan="3">16750</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.rightAlign}} colSpan="4">CGST @ 9%</td>
            <td style={styles.cell} colSpan="3">1507.5</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.rightAlign}} colSpan="4">SGST @ 9%</td>
            <td style={styles.cell} colSpan="3">1507.5</td>
          </tr>
          <tr>
            <td style={{...styles.cell, ...styles.rightAlign}} colSpan="4">GRAND TOTAL</td>
            <td style={styles.cell} colSpan="3">19765</td>
          </tr>
          
          {/* Empty rows */}
          <tr>
            <td style={styles.cell} colSpan="12"></td>
          </tr>
          <tr>
            <td style={styles.cell} colSpan="12"></td>
          </tr>
          
          {/* Signature */}
          <tr>
            <td style={styles.cell} colSpan="6"></td>
            <td style={{...styles.cell, ...styles.rightAlign}} colSpan="5">Authorized signature</td>
            <td style={styles.cell}></td>
          </tr>
          
          {/* Empty row */}
          <tr>
            <td style={styles.cell} colSpan="12"></td>
          </tr>
          
          {/* Reverse charge */}
          <tr>
            <td style={styles.cell} colSpan="12">Whether TAX is payable under Reverse Charge  - No</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UtkrashInvoices;