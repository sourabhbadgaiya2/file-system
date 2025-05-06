import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import ExcelHeader from 'components/Header/ExcelHeader';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const dummyPics = [
    {
        url: "https://images.unsplash.com/photo-1702952815477-553ae3774509?w=600&auto=format&fit=crop&q=60",
        location: "76m3+6qc, Gwalior, Madhya Pradesh 474001, India",
        latitude: "26.284655",
        longitude: "78.205254",
        localTime: "05:13:22 PM",
        altitude: "188 m",
        gmt: "12:12:11 PM",
        date: "Tuesday, 09.04.2025",
    },
    {
        url: "https://images.unsplash.com/photo-1702952815477-553ae3774509?w=600&auto=format&fit=crop&q=60",
        location: "76m3+6qc, Gwalior, Madhya Pradesh 474001, India",
        latitude: "26.284655",
        longitude: "78.205254",
        localTime: "05:20:10 PM",
        altitude: "190 m",
        gmt: "12:20:11 PM",
        date: "Tuesday, 09.04.2025",
    },
    {
        url: "https://images.unsplash.com/photo-1702952815477-553ae3774509?w=600&auto=format&fit=crop&q=60",
        location: "76m3+6qc, Gwalior, Madhya Pradesh 474001, India",
        latitude: "26.284655",
        longitude: "78.205254",
        localTime: "05:20:10 PM",
        altitude: "190 m",
        gmt: "12:20:11 PM",
        date: "Tuesday, 09.04.2025",
    },
];

const HomeTrench = () => {

    const handleExportPDF = () => {
        const input = document.getElementById('reportContent');  // Wrap your entire content in a div with this id
        html2canvas(input, { scale: 2, useCORS: true }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const margin = 10;
            const imgWidth = pageWidth - margin * 2;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            let position = margin;
            let remainingHeight = imgHeight;

            if (imgHeight > pageHeight - margin * 2) {
                while (remainingHeight > 0) {
                    pdf.addImage(imgData, 'PNG', margin, position, imgWidth, imgHeight);
                    remainingHeight -= pageHeight - margin * 2;
                    if (remainingHeight > 0) {
                        pdf.addPage();
                        position = margin - (imgHeight - remainingHeight);
                    }
                }
            } else {
                pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);
            }

            pdf.save('Baja_Ameriya_Report.pdf');
        });
    };

    const handleExportExcel = () => {
        const table = document.getElementById('reportTable');
        const workbook = XLSX.utils.table_to_book(table, { sheet: 'Report' });
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(blob, 'Baja_Ameriya_Report.xlsx');
    };

    const handleExportCSV = () => {
        const table = document.getElementById('reportTable');
        const worksheet = XLSX.utils.table_to_sheet(table);
        const csv = XLSX.utils.sheet_to_csv(worksheet);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'Baja_Ameriya_Report.csv');
    };

    return (
        <Container fluid className="border p-3">
            {/* Wrapper for the entire content */}
            <Row className=" mb-3">
                <div style={{ marginBottom: 10, textAlign: 'right' }}>
                    <button onClick={handleExportPDF} style={{ marginRight: 10 }}>Download PDF</button>
                    <button onClick={handleExportExcel} style={{ marginRight: 10 }}>Download Excel</button>
                    <button onClick={handleExportCSV}>Download CSV</button>
                </div>
            </Row>
            <div id="reportContent">
                {/* Header Section */}
                <Row className="align-items-center border-bottom pb-3">
                    <Col>
                        <ExcelHeader />
                    </Col>
                </Row>

                {/* Export Buttons */}


                {/* Report Table */}
                <Row id="reportTable">
                    <Table bordered responsive>
                        <tbody>
                            {/* Sections (Same as your code) */}
                            <tr className="bg-light">
                                <td style={{ backgroundColor: "#DAE3F3" }} colSpan={4}><strong>1. VENDOR VISIT DETAILS</strong></td>
                            </tr>
                            <tr>
                                <td><strong>DATE OF VISIT</strong></td>
                                <td>10.04.2025</td>
                                <td><strong>DATE OF REPORT</strong></td>
                                <td>10.04.2025</td>
                            </tr>
                            <tr>
                                <td colSpan={4}><strong>Address of Property (As per site):</strong></td>
                            </tr>
                            <tr>
                                <td><strong>NAME OF THE PERSON WHO VISITED THE SITE:</strong></td>
                                <td>MR. SHARAVAN KUMAR SINGH</td>
                                <td><strong>CONTACT NUMBER</strong></td>
                                <td>9340442783</td>
                            </tr>
                            {/* 2. Construction */}
                            <tr className="bg-light">
                                <td style={{ backgroundColor: "#DAE3F3" }} colSpan={4}><strong>2. CONSTRUCTION</strong></td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <strong>
                                        CONSTRUCTION STAGE (AS PER SITE): <br />
                                        (FOUNDATION / PLINTH / RCC / BRICK WORK / PLASTER / TILING / INTERNAL FINISHING / COMPLETED)
                                    </strong>
                                </td>
                                <td colSpan={2}><strong>COMPLETED WITH C.C. FLOORING</strong></td>
                            </tr>
                            <tr>
                                <td><strong>CONSTRUCTION (%)</strong></td>
                                <td>100%</td>
                                <td><strong>CONSTRUCTION IS AS PER : (PROVIDED PLANS / BYELAWS)</strong></td>
                                <td>YES</td>
                            </tr>
                            {/* 3. AREA */}
                            <tr className="bg-light">
                                <td style={{ backgroundColor: "#DAE3F3" }} colSpan={4}><strong>3. AREA</strong></td>
                            </tr>
                            <tr>
                                <td><strong>TOTAL BUA CONSIDERED ON SITE (IN SQ.FT)</strong></td>
                                <td>930 SQFT</td>
                                <td><strong>REMARKS</strong></td>
                                <td>NA</td>
                            </tr>
                            <tr>
                                <td><strong>LATITUDE :</strong></td>
                                <td>26.284655</td>
                                <td><strong>LONGITUDE :</strong></td>
                                <td>78.205254</td>
                            </tr>
                            <tr>
                                <td><strong>OVERALL STATUS (POSITIVE / NEGATIVE) :</strong></td>
                                <td>POSITIVE</td>
                                <td><strong>IF NEGATIVE, PLEASE SPECIFY THE REASON :</strong></td>
                                <td>NA</td>
                            </tr>
                            {/* 4. Certificate */}
                            <tr className="bg-light">
                                <td style={{ backgroundColor: "#DAE3F3" }} colSpan={4}><strong>4. CERTIFICATE</strong></td>
                            </tr>
                            <tr>
                                <td><strong>CERTIFICATE :</strong></td>
                                <td colSpan={3}>
                                    THIS IS TO CERTIFY THAT, I HAVE VISITED CONSTRUCTION SITE AS PER ABOVE ADDRESS AND FOUND IT
                                    COMPLIANT TO THE BYELAWS / PLANS PROVIDED.
                                </td>
                            </tr>
                            {/* 5. Billing */}
                            <tr className="bg-light">
                                <td style={{ backgroundColor: "#DAE3F3" }} colSpan={4}><strong>5. BILLING</strong></td>
                            </tr>
                            <tr>
                                <td><strong>CHARGES :</strong></td>
                                <td></td>
                                <td><strong>GST % (IF APPLICABLE)</strong></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><strong>TOTAL :</strong></td>
                                <td colSpan={3}></td>
                            </tr>
                            {/* 6. Declaration */}
                            <tr className="bg-light">
                                <td style={{ backgroundColor: "#DAE3F3" }} colSpan={4}><strong>6. DECLARATION</strong></td>
                            </tr>
                            <tr>
                                <td><strong>DECLARATION (I HEREBY DECLARE THAT)</strong></td>
                                <td colSpan={3}>
                                    <ul className="mb-0 ps-3">
                                        <li>We have no direct or indirect interest in the property valued.</li>
                                        <li>The property was inspected by our authorized representative and info is true.</li>
                                    </ul>
                                </td>
                            </tr>
                            {/* 7. Site Pics */}
                            <tr className="bg-light">
                                <td style={{ backgroundColor: "#DAE3F3" }} colSpan={4}><strong>7. SITE PICS</strong></td>
                            </tr>
                            <tr>
                                <td colSpan={4}>
                                    <Row>
                                        {dummyPics.map((pic, index) => (
                                            <Col md={4} className="mb-3" key={index}>
                                                <div className="border p-2">
                                                    <img
                                                        src={pic.url}
                                                        alt={`Site Pic ${index + 1}`}
                                                        className="img-fluid mb-2"
                                                        style={{ height: '250px', objectFit: 'cover' }}
                                                    />
                                                    <div style={{ fontSize: '12px', backgroundColor: '#f8f9fa', padding: '8px', borderTop: '1px solid #ccc' }}>
                                                        <strong>{pic.location}</strong><br />
                                                        Latitude: <b>{pic.latitude}</b>, Longitude: <b>{pic.longitude}</b><br />
                                                        Local: {pic.localTime} &nbsp;&nbsp; Altitude: {pic.altitude}<br />
                                                        GMT: {pic.gmt} &nbsp;&nbsp; {pic.date}
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </div>
        </Container>
    );
};

export default HomeTrench;
