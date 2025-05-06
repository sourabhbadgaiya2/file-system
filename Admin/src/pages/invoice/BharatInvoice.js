import React from 'react';
import ExcelHeader from 'components/Header/ExcelHeader';
const BharatInvoice = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mt-4 mb-5">
      
      <div className="text-right mb-3 no-print">
        <button onClick={handlePrint} className="btn btn-primary">
          Print Invoice
        </button>
      </div>
      
      {/* Invoice Content - Only this will print */}
      <div className="card shadow-sm printable-area">
        <ExcelHeader/>
        <div className="card-body">
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="h3">Invoice</h1>
            <h2 className="h5">BHART SHARMA</h2>
          </div>
          
          {/* Address */}
          <div className="text-center text-muted mb-4">
            868/c sector c, sukhaliya, Indore, Madhya Pradesh, 452001
          </div>
          
          {/* Details */}
          <div className="row mb-4">
            <div className="col-md-6">
              <p className="mb-1">Date of Bill : 20/02/2025</p>
              <p className="mb-1">Bill No : 404/2024-25</p>
              <p className="mb-1">Bill Period : 01-Jan-2025 To 31-Jan-2025</p>
            </div>
            <div className="col-md-6">
              <p className="mb-1">Agency iBox ID : 184032</p>
              <p className="mb-1">State : ICICI Bank - Madhya Pradesh</p>
              <p className="mb-1">Activity Code : 8</p>
              <p className="mb-1">GST no ICICI Bank : 23AAAC11195H1ZU</p>
            </div>
          </div>
          
          <hr className="my-4" />
          
          {/* Subject */}
          <div className="font-weight-bold text-center mb-4">
            Subject : Technical Verification Bill for the month of JAN-2025
          </div>
          
          {/* Main Invoice Table */}
          <div className="table-responsive mb-4">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th>Valuation Type</th>
                  <th>Cases Count</th>
                  <th>Base Rate for Each Case</th>
                  <th>Distance Rate</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["HL Mortgage(121-999)", 8, 1000, 1000, 16000],
                  ["RIBG(76-120)", 1, 1000, 750, 1750],
                  ["HL Mortgage(31-75)", 8, 1000, 500, 12000],
                  ["HL Mortgage(0-30)", 7, 1000, 0, 7000],
                  ["BLG(31-75)", 9, 1000, 500, 13500],
                  ["RIBG(31-75)", 8, 1000, 500, 12000],
                  ["RIBG(121-999)", 12, 1000, 1000, 24000],
                  ["SMEAG(0-30)", 4, 1000, 0, 4000],
                  ["Large Client group (121-999)", 2, 1000, 1000, 4000],
                  ["BLG(76-120)", 2, 1000, 750, 3500],
                  ["HL Mortgage(76-120)", 5, 1000, 750, 8750],
                  ["BLG(121-999)", 10, 1000, 1000, 20000],
                  ["BLG(0-30)", 11, 1000, 0, 11000],
                  ["SMEAG(31-75)", 2, 1000, 500, 3000],
                  ["RIBG(0-30)", 1, 1000, 0, 1000],
                  ["MCG(0-30)", 1, 1000, 0, 1000],
                ].map((row, index) => (
                  <tr key={index}>
                    <td>{row[0]}</td>
                    <td className="text-center">{row[1]}</td>
                    <td className="text-right">{row[2].toLocaleString('en-IN')}</td>
                    <td className="text-right">{row[3].toLocaleString('en-IN')}</td>
                    <td className="text-right">{row[4].toLocaleString('en-IN')}</td>
                  </tr>
                ))}
                
                <tr className="table-active font-weight-bold">
                  <td>Total</td>
                  <td className="text-center">91</td>
                  <td colSpan="2"></td>
                  <td className="text-right">142,500.00</td>
                </tr>
                <tr>
                  <td colSpan="4">CGST 9 %</td>
                  <td className="text-right">12,825.00</td>
                </tr>
                <tr>
                  <td colSpan="4">SGST 9 %</td>
                  <td className="text-right">12,825.00</td>
                </tr>
                <tr>
                  <td colSpan="4">UTGST 0 %</td>
                  <td className="text-right">0.00</td>
                </tr>
                <tr>
                  <td colSpan="4">IGST 0 %</td>
                  <td className="text-right">0.00</td>
                </tr>
                <tr>
                  <td colSpan="4">Other Tax %</td>
                  <td className="text-right">0.00</td>
                </tr>
                <tr className="table-active font-weight-bold">
                  <td colSpan="4">Gross Bill Amount</td>
                  <td className="text-right">168,150.00</td>
                </tr>
                <tr className="table-info">
                  <td colSpan="5" className="font-italic">
                    Gross Bill Amount in words: ONE LAKH SIXTY EIGHT THOUSAND ONE HUNDRED FIFTY ONLY
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Bank Details */}
          <div className="row mb-4">
            <div className="col-md-6">
              <p className="mb-1">PAN No : BUZPS8733G</p>
              <p className="mb-1">Bank Name : ICICI BANK LTD</p>
              <p className="mb-1">HSN Code : 998331</p>
            </div>
            <div className="col-md-6">
              <p className="mb-1">Bank Current A/C No. : 91601502883</p>
              <p className="mb-1">GST no of Vendor : 23BUZPS8733G2ZT</p>
              <p className="mb-1">IFSC Code : ICIC0000041</p>
            </div>
          </div>
          
          {/* For Section */}
          <div className="mb-4">
            <p className="font-weight-bold">For : BHART SHARMA</p>
          </div>
          
          {/* Customer Table */}
          <div className="table-responsive mb-4">
            <table className="table table-bordered table-sm">
              <thead className="thead-light">
                <tr>
                  <th>Customer Name</th>
                  <th>Application No</th>
                  <th>Request ID</th>
                  <th>State</th>
                  <th>Distance from CPC</th>
                  <th>Business Group</th>
                  <th>Date of Site Visit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MONIL NILESHBHAI SHAH</td>
                  <td>77211966955</td>
                  <td>10174164</td>
                  <td>Madhya Pradesh</td>
                  <td>200</td>
                  <td>HLM</td>
                  <td>02/01/2025</td>
                </tr>
                <tr>
                  <td>SACHIN GUPTA</td>
                  <td>8878414790AB</td>
                  <td>10176555</td>
                  <td>Madhya Pradesh</td>
                  <td>110</td>
                  <td>RIBG</td>
                  <td>02/01/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Signature */}
          <div className="text-right">
            <p className="mb-1">Digitally Signed By : BHART SHARMA</p>
            <p className="mb-1 font-weight-bold">BHART SHARMA</p>
            <p className="mb-1">Date : 20/02/2025</p>
            <p className="mb-1">404/2024-25</p>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .printable-area, .printable-area * {
            visibility: visible;
          }
          .printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 15px;
            box-shadow: none;
            border: none;
          }
          .no-print {
            display: none !important;
          }
          @page {
            size: auto;
            margin: 5mm;
          }
          table {
            page-break-inside: auto;
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
        }
      `}</style>
    </div>
  );
};

export default BharatInvoice;