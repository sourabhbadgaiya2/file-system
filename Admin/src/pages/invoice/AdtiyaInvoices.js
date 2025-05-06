import React from 'react';
import ExcelHeader from 'components/Header/ExcelHeader';

const AdtiyaInvoices = () => {
  const invoiceData = [
    {
      id: 1,
      date: '04.12.2024',
      type: 'LAP',
      customer: 'M/s AASHIRVAAD TRAVELS',
      address: 'PROPERTY SITUATED AT SURVEY NO. 26/3/1 PEKI , P.H.NO. 21, GRAM CHORADIYA, TEHSIL MHOW AND DIST. INDORE M.P.',
      propertyType: 'OPEN PLOT',
      area: '82620',
      location: 'INDORE',
      pincode: '452001',
      dealNo: 'ML000039226',
      basicCharges: '7500',
      higherCharges: '1500',
      totalAmount: '9000',
      gst: '1620',
      grandTotal: '10620'
    },
    {
      id: 2,
      date: '11.12.2024',
      type: 'LAP',
      customer: 'M/s ADNOC CHEM PRIVATE LIMITED',
      address: 'PROPERTY SITUATED AT SURVEY NO. 383/1 AND NORTH PART OF SURVEY NO. 384/1 PEKI, P.H.NO. 65(78), GRAM FARSPUR, TEHSIL SANWAR AND DIST. INDORE M.P.',
      propertyType: 'OPEN PLOT',
      area: '110438',
      location: 'INDORE',
      pincode: '452001',
      dealNo: 'ML000039176',
      basicCharges: '7500',
      higherCharges: '0',
      totalAmount: '7500',
      gst: '1350',
      grandTotal: '8850'
    }
  ];

  const totals = invoiceData.reduce((acc, item) => ({
    basicCharges: acc.basicCharges + parseInt(item.basicCharges),
    higherCharges: acc.higherCharges + parseInt(item.higherCharges),
    totalAmount: acc.totalAmount + parseInt(item.totalAmount),
    gst: acc.gst + parseInt(item.gst),
    grandTotal: acc.grandTotal + parseInt(item.grandTotal)
  }), {
    basicCharges: 0,
    higherCharges: 0,
    totalAmount: 0,
    gst: 0,
    grandTotal: 0
  });

  const handlePrint = () => window.print();

  return (
    <div>
      {/* Print Button */}
      <div style={{ textAlign: 'left', marginBottom: '20px' }} className="no-print">
        <button
          onClick={handlePrint}
          style={{
            padding: '8px 14px',
            backgroundColor: '#7A6FBE',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Print Invoice
        </button>
      </div>

      {/* Invoice Content */}
      <div className="printable-area" style={{ fontFamily: 'Arial, sans-serif', padding: '20px', border: '1px solid #000' }}>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>TAX INVOICE</h2>
        </div>

        <ExcelHeader />

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, marginBottom: 10, borderBottom: '1px solid #000', paddingBottom: '10px' }}>
          <div style={{ width: '50%', borderRight: '1px solid #000', paddingRight: '10px' }}>
            <p style={{ margin: '5px 0', fontWeight: 'bold' }}>To,</p>
            <p style={{ margin: '5px 0' }}>The Manager,</p>
            <p style={{ margin: '5px 0' }}>Aditya Birla Finance Limited</p>
            <p style={{ margin: '5px 0' }}>303-304, Third Floor, Megapolis Square, 579 MG Road, Indore-452001</p>
            <p style={{ margin: '5px 0' }}>GST No. - 23AABCB5769M1ZD</p>
            <p style={{ margin: '5px 0' }}>Sub:- Professional fees for property valuation for the DEC 2024</p>
          </div>

          <div style={{ width: '40%', marginLeft: '10px', border: '1px solid #000', padding: '10px' }}>
            <p style={{ margin: '5px 0', fontWeight: 'bold' }}>UNIQUE ENGINEERING AND ASSOCIATE</p>
            {[
              ['BILL DATE-', '04.02.2025'],
              ['BILL REF. NO.', '376/2024-25'],
              ['VENDOR CODE', '1000001709'],
              ['GST NO.', '23BUZPS8733G2ZT'],
              ['SAC/HSN', '998399']
            ].map(([label, value], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: i < 4 ? '1px solid #ddd' : 'none', padding: '5px 0' }}>
                <span>{label}</span><span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <p style={{ marginBottom: '10px' }}>Dear Sir/Madam,</p>
        <p style={{ marginBottom: '20px', borderBottom: '1px solid #000', paddingBottom: '10px' }}>
          Please find below the bill against services provided for valuation assignments at Indore, (MP)
        </p>

        {/* Invoice Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #000', marginBottom: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              {[
                'S. NO', 'DATE OF PROPERTY VISIT', 'TYPE OF PROPERTY CASE', 'NAME OF CUSTOMER',
                'ADDRESS OF PROPERTY', 'TYPE OF PROPERTY', 'PROPERTY / PLOT AREA IN SQ FT',
                'LOCATION', 'PINCODE', 'Deal No.', 'Basic Charges',
                '20% Higher above Devlopment Athority', 'Total Amount',
                '9% CGST+9% SGST Total 18% GST', 'Total'
              ].map((header, idx) => (
                <th key={idx} style={{ border: '1px solid #000', padding: '8px', textAlign: 'left' }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {invoiceData.map((item, index) => (
              <tr key={item.id}>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{index + 1}</td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{item.date}</td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{item.type}</td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{item.customer}</td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{item.address}</td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{item.propertyType}</td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{item.area}</td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{item.location}</td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{item.pincode}</td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{item.dealNo}</td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{item.basicCharges}</td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{item.higherCharges}</td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{item.totalAmount}</td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{item.gst}</td>
                <td style={{ border: '1px solid #000', padding: '8px' }}>{item.grandTotal}</td>
              </tr>
            ))}
            <tr style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>
              <td colSpan="10" style={{ border: '1px solid #000', padding: '8px', textAlign: 'right' }}>TOTAL</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>{totals.basicCharges}</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>{totals.higherCharges}</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>{totals.totalAmount}</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>{totals.gst}</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>{totals.grandTotal}</td>
            </tr>
            <tr style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>
              <td colSpan="13" style={{ border: '1px solid #000', padding: '8px', textAlign: 'right' }}>GRAND TOTAL</td>
              <td colSpan="2" style={{ border: '1px solid #000', padding: '8px' }}>{totals.grandTotal}</td>
            </tr>
          </tbody>
        </table>

        {/* Bank Details */}
        <div style={{ marginTop: '30px', borderTop: '1px solid #000', paddingTop: '10px' }}>
          <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Please make payment in following bank account</p>
          <div style={{ marginLeft: '20px', border: '1px solid #000', padding: '10px' }}>
            <p style={{ margin: '5px 0' }}>Account Holder: <strong>UNIQUE ENGINEERING AND ASSOCIATE</strong></p>
            <p style={{ margin: '5px 0' }}>Bank Name: <strong>STATE BANK OF INDIA</strong></p>
            <p style={{ margin: '5px 0' }}>Account No: <strong>32086273995</strong></p>
            <p style={{ margin: '5px 0' }}>IFSC Code: <strong>SBIN0000721</strong></p>
            <p style={{ margin: '5px 0' }}>Branch: <strong>T.T. NAGAR, BHOPAL</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdtiyaInvoices;
