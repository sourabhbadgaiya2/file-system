import React from 'react';
import ExcelHeader from 'components/Header/ExcelHeader';

const FincropInvoices = () => {
  // Main invoice data
  const invoiceItems = [
    {
      description: "Property valuation Bill for JAN 2025 INDORE and BHOPAL",
      qty: 7,
      unit: "No.",
      rate: 1500,
      discount: 0
    },
    {
      description: "",
      qty: 1,
      unit: "No.",
      rate: 2000,
      discount: 0
    }
  ];

  // Annexure data
  const annexureItems = [
    {
      sno: 1,
      vertical: "LAP",
      finnoneId: "LAP-133802 / ID 72197619",
      branch: "INDORE",
      customerName: "ANANYA SKIN AND COSMETIC",
      propertyAddress: "ROW HOUSE J 229 PH NO 17 NEW 45 JANUS CLUSTER SS INFINITUS PHASE 2-B GRAM LASUDIYA MORI, INDORE",
      dateOfVisit: "18/01/2025",
      location: "INDORE",
      distance: "8",
      propertyType: "Residential",
      area: "1050",
      propertyValue: "1,50,01,800",
      amount: 1500
    },
    // ... (rest of your annexure items remain the same)
  ];

  // Calculate invoice totals
  const calculateInvoiceTotals = () => {
    const taxableValues = invoiceItems.map(item => item.rate * item.qty);
    const cgstAmounts = taxableValues.map(value => value * 0.09);
    const sgstAmounts = taxableValues.map(value => value * 0.09);
    const igstAmounts = taxableValues.map(value => value * 0);

    return {
      totalTaxable: taxableValues.reduce((sum, val) => sum + val, 0),
      totalCgst: cgstAmounts.reduce((sum, val) => sum + val, 0),
      totalSgst: sgstAmounts.reduce((sum, val) => sum + val, 0),
      totalIgst: igstAmounts.reduce((sum, val) => sum + val, 0),
      grandTotal: taxableValues.reduce((sum, val) => sum + val, 0) +
        cgstAmounts.reduce((sum, val) => sum + val, 0) +
        sgstAmounts.reduce((sum, val) => sum + val, 0)
    };
  };

  const invoiceTotals = calculateInvoiceTotals();
  const annexureTotal = annexureItems.reduce((sum, item) => sum + item.amount, 0);

  const handlePrint = () => {
    const printContent = document.getElementById('printable-area').innerHTML;
    const originalContent = document.body.innerHTML;
    const printStyles = `
      <style>
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-area, #printable-area * {
            visibility: visible;
          }
          #printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          table {
            border-collapse: collapse !important;
            width: 100% !important;
          }
          table, th, td {
            border: 1px solid black !important;
          }
          .table-bordered {
            border: 1px solid #000 !important;
          }
          .table-bordered th, .table-bordered td {
            border: 1px solid #000 !important;
          }
          .print-border {
            border: 1px solid #000 !important;
            padding: 20px !important;
            margin-bottom: 20px !important;
          }
          @page {
            size: A4 portrait;
            margin: 10mm;
          }
        }
      </style>
    `;

    document.body.innerHTML = printStyles + printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  };

  return (
    <>
      <div>
        <button
          onClick={handlePrint}
          style={{
            padding: '8px 16px',
            backgroundColor: '#7A6FBE',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '18px',
            fontSize: '16px'
          }}
        >
          Print Invoice
        </button>
      </div>

      <div className="container-fluid p-2" style={{ border: '1px solid #000' }}>
        <div id="printable-area" className="printable-area" style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
          <div className="col-12 text-center fw-bold fs-4 mb-2">Tax Invoice</div>

          <ExcelHeader />
          
          {/* Main Invoice */}
          <div className="row mb-2 p-4 print-border p-3" style={{ border: '1px solid #000' }}>

            <div className="col-md-6">
              <div className="row mb-2">
                <div className="col-4 fw-bold">Bill To</div>
              </div>
              <div className="row mb-1">
                <div className="col-4 fw-bold">Customer :</div>
                <div className="col-8">HERO FINCORP LIMITED</div>
              </div>
              {/* ... rest of your bill to section ... */}
            </div>

            <div className="col-md-6">
              <div className="row mb-2">
                <div className="col-4 fw-bold">Date:</div>
                <div className="col-8">04.02.2025</div>
              </div>
              {/* ... rest of your supplier section ... */}
            </div>
          </div>

          {/* Invoice Items Table */}
          <div className="table-responsive mb-4">
            <table className="table table-bordered" style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black' }}>Sr. No.</th>
                  <th style={{ border: '1px solid black' }}>Description</th>
                  <th style={{ border: '1px solid black' }}>Qty.</th>
                  {/* ... rest of table headers with border styles ... */}
                </tr>
              </thead>
              <tbody>
                {invoiceItems.map((item, index) => {
                  const total = item.rate * item.qty;
                  const taxableValue = total - item.discount;
                  const cgst = taxableValue * 0.09;
                  const sgst = taxableValue * 0.09;
                  const igst = taxableValue * 0;

                  return (
                    <tr key={index}>
                      <td style={{ border: '1px solid black' }}>{index === 0 ? "" : index}</td>
                      <td style={{ border: '1px solid black' }}>{item.description}</td>
                      <td style={{ border: '1px solid black' }}>{item.qty}</td>
                      {/* ... rest of table cells with border styles ... */}
                    </tr>
                  );
                })}
                {/* ... rest of your table rows ... */}
              </tbody>
            </table>
          </div>

          {/* Payment Details */}
          <div className="row mb-4" style={{ borderTop: '1px solid #000', paddingTop: '15px' }}>
            <div className="col-12 fw-bold mb-2">Note - Please Read For More Details Annexure -1</div>
            <div className="col-12 mb-3">
              <div className="fw-bold">Payment Details</div>
              <div>BANK NAME - STATE BANK OF INDIA</div>
              {/* ... rest of payment details ... */}
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-6 text-end">
              <div className="mb-2">Signature/Digital Signature</div>
              <div className="mb-2">Name of the Signatory</div>
              <div>Date - 04.02.2025</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FincropInvoices;