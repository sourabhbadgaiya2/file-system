import React from 'react';
import ExcelHeader from 'components/Header/ExcelHeader';



export const FedInvoice = () => {
  // Calculate totals as in the original Excel
  const basicCharges = [1300, 1300, 1300, 1500, 1300, 1300, 1300, 1800, 1800];
  const distanceCharges = [0, 0, 0, 200, 0, 0, 0, 200, 200];
  const totalAmounts = basicCharges.map((basic, index) => basic + distanceCharges[index]);
  const cgstAmounts = totalAmounts.map(amount => amount * 0.09);
  const sgstAmounts = totalAmounts.map(amount => amount * 0.09);
  const lineTotals = totalAmounts.map((amount, index) => amount + cgstAmounts[index] + sgstAmounts[index]);

  const sumBasic = basicCharges.reduce((sum, val) => sum + val, 0);
  const sumDistance = distanceCharges.reduce((sum, val) => sum + val, 0);
  const sumTotalAmount = totalAmounts.reduce((sum, val) => sum + val, 0);
  const sumCgst = cgstAmounts.reduce((sum, val) => sum + val, 0);
  const sumSgst = sgstAmounts.reduce((sum, val) => sum + val, 0);
  const sumGrandTotal = lineTotals.reduce((sum, val) => sum + val, 0);

  const handlePrint = () => {
    const printContent = document.getElementById('printable-area').innerHTML;
    const originalContent = document.body.innerHTML;
    
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  };

  return (
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

      <div id="printable-area" className="printable-area" style={{ fontFamily: 'Arial, sans-serif', padding: '20px', border: '1px solid #000' }}>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>TAX INVOICE</h2>
        </div>

      <ExcelHeader/>

        <div className="bill-container">
          <div className="bill-header">
            <div className="to-section">
              <div>To,</div>
              <div>The Manager,</div>
              <div>FEDBANK FINANCIAL SERVICES LIMITED</div>
              <div>BRANCH - BETUL</div>
              <div>GST No. - 23AAACF8662J1ZI</div>
              <div>Sub:- Professional fees for property valuation for the month of JAN -2025</div>
              <div>Dear Sir/Madam,</div>
              <div>
                Please find below the bill against services provided for valuation assignments at BETUL brach, (MP)
              </div>
            </div>
            
            <div className="company-info">
              <div>UNIQUE ENGINEERING AND ASSOCIATE</div>
              <div>BILL DATE- 04.02.2025</div>
              <div>BILL REF. NO. 381/2024-25</div>
              <div>GST NO. 23BUZPS8733G2ZT</div>
              <div>SAC/HSN 998399</div>
              <div>PANCARD No. BUZPS8733G</div>
            </div>
          </div>

          <table className="bill-table" style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
            <thead>
              <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>S. NO</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>DATE OF PROPERTY VISIT</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>TYPE OF PROPERTY CASE</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>NAME OF CUSTOMER</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>ADDRESS OF PROPERTY</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>LOCATION</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Deal No.</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Basic Charges</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Distance Charges</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total Amount</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>CGST 9%</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>SGST 9%</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>10.01.2025</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>STL-NEW -FIXED</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>MR, MR. ABHISHEK RATHORE</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  PROPERTY AT PART OF KHASRA NO.677/5,678/6 IS SITUATED AT
                  SHANKAR NAGAR,PH NO.53, BADNURDHANA SHANKAR NAGAR
                  WARD BAGGUDHANA BETUL, MAUJA-BADNURDHANA
                  ,R.NO.BETUL,TEHSIL AND DIST-BETUL,MP,460001
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>BETUL</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>L0000015697</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1300</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>0</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{1300 + 0}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 1.18}</td>
              </tr>
              
              {/* Row 2 */}
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>2</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>10.01.2025</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>HL-PURCHASE</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>MR,SURESH BAGHEL</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  KHASRA NO 287, PATWARI HALKA NO 34, RNBN NO - LBE/0072848, GRAM TIKARI , 
                  MAHAVEER WARD NO 20, F - CHANDNI CHOWK LINK ROAD NAGAR PALIKA BETUL 
                  TEH& DISST BETUL MADHYA PRADESH
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>BETUL</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>L0000015600</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1300</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>0</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{1300 + 0}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 1.18}</td>
              </tr>
              
              {/* Row 3 */}
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>3</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>13.01.2025</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>STL-BT-TOP-UP</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>MR,.MR.GOURAV SAHU</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  PATWARI HALKA NO 53, KHASRA NO 536 , BANKE MOUJA BADNOORDHANA TEH & DISST BETUL
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>BETUL</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>L0000015770</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1300</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>0</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{1300 + 0}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 1.18}</td>
              </tr>
              
              {/* Row 4 */}
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>4</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>16.01.2024</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>HL/PURCHES</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>MR.SHEKH AMAD</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  PROPERTY IS HOUSE NO. 126, MAUJA-CHICHOLI,P.H NO.28,
                  WARD NO. 09, TEHSIL-CHICHOLI,DIST-BETUL,MP,460330
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>CHICHOLI, BETUL</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>L0000015996</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1500</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>200</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{1500 + 200}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1500 + 200) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1500 + 200) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1500 + 200) * 1.18}</td>
              </tr>
              
              {/* Row 5 */}
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>5</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>15.01.2025</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>LAP-BT+TOP UP</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>MR,NATTHU RAO DESHMUKH</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  WARD NO 3B, B.N. 467 P H N 52/36 K.N.38/37/15, DURGAWARD KHANJANPUR DIST BETUL
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>BETUL</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>L0000015972</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1300</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>0</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{1300 + 0}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 1.18}</td>
              </tr>
              
              {/* Row 6 */}
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>6</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>18.12.2025</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>HL-BT+TOP UP</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>MR.RAVI THAKRE</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  P.H .NO 07 V.NO 406/1 BLOCK .R.N.M TEHSIL AMLA MAUJA HASAIPUR THE AMLA DIST BETUL460553
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>AMLA, BETUL</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>L0000016322</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1300</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>0</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{1300 + 0}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 1.18}</td>
              </tr>
              
              {/* Row 7 */}
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>7</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>18.01.2025</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>HL - PURCHASE</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>MR.BABU PAWAR</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  MOUJA CHICHOLI AWADI PATWARI HALKA NO 28 MENNAGAR PARISHAD CHICHOLI 
                  WARD NO 09, BETUL TEH & DISST BETUL
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>BETUL</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>L0000016263</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1300</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>0</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{1300 + 0}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1300 + 0) * 1.18}</td>
              </tr>
              
              {/* Row 8 */}
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>8</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>21.01.2025</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>LAP-BT+TOP UP</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>MR.RAVI SAHU</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  P.H .NO 27 B.NO 35 KHASRA NO 75/1 GRAM KAMATH C2 KAMATH TIRAHE SE 
                  CHHINDWARA MARG RNV MULTAI VIKAS KHAND MULTAI DIST BETUL
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>MULTAI, BETUL</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>L0000016439</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1800</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>200</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{1800 + 200}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1800 + 200) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1800 + 200) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1800 + 200) * 1.18}</td>
              </tr>
              
              {/* Row 9 */}
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>9</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>24.1.2025</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>LAP-BT+TOP UP</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>MR.RAVI SAHU (REVISIT)</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  P.H .NO 27 B.NO 35 KHASRA NO 75/1 GRAM KAMATH C2 KAMATH TIRAHE SE 
                  CHHINDWARA MARG RNV MULTAI VIKAS KHAND MULTAI DIST BETUL
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>MULTAI, BETUL</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>L0000016439</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1800</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>200</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{1800 + 200}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1800 + 200) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1800 + 200) * 0.09}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{(1800 + 200) * 1.18}</td>
              </tr>
              
              {/* Total Row */}
              <tr className="total-row" style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }} colSpan="7">TOTAL</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{sumBasic.toFixed(2)}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{sumDistance.toFixed(2)}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{sumTotalAmount.toFixed(2)}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{sumCgst.toFixed(2)}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{sumSgst.toFixed(2)}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{sumGrandTotal.toFixed(2)}</td>
              </tr>
              
              {/* Grand Total Row */}
              <tr className="grand-total-row" style={{ backgroundColor: '#e6e6e6', fontWeight: 'bold' }}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }} colSpan="11">GRAND TOTAL</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }} colSpan="2">{sumGrandTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

          <div className="bank-details" style={{ marginTop: '20px', borderTop: '1px solid #000', paddingTop: '10px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Please make payment in following bank account</div>
            <div style={{ marginBottom: '5px' }}>
              <span style={{ fontWeight: 'bold', marginRight: '10px' }}>BANK NAME:</span>
              <span>ICICI BANK LTD</span>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Account Name:</span>
              <span>UNIQUE ENGINEERING AND ASSOCIATE</span>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Branch:</span>
              <span>Malav Parisar Branch Indore M.P Pincode- 452008</span>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Account No:</span>
              <span>004105017837</span>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <span style={{ fontWeight: 'bold', marginRight: '10px' }}>IFSC Code:</span>
              <span>ICIC0000041</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FedInvoice;