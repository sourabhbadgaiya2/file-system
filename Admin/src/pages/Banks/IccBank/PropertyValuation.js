import React from "react"
import { Container, Row, Col, Table, Button } from "react-bootstrap"

const PropertyValuation = () => {
    return (
        <div className="mb-4"
            style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "10px",
                background: "#f9f9f9",
            }}
        >
            <div className="p-4">
                <h4 style={{ color: " #AC2321" }}>Valuation Methodology</h4>
                <p style={{ color: "gray", margin: "2px" }}>Valuation Methodology</p>
                <h6>Sale Comparison</h6>

                <h5 style={{ color: " #AC2321" }}>Land/Existing Structure Value</h5>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Area (sq.ft)</th>
                            <th>Rate Per sq.ft (₹)</th>
                            <th>Amount (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Plot Area (Sqft)</td>
                            <td>1500</td>
                            <td>1200</td>
                            <td>18,00,000</td>
                        </tr>
                    </tbody>
                </Table>

                <h5 style={{ color: " #AC2321" }}>Unit Value **</h5>
                <p style={{ color: "gray" }}>Valuation on </p>
                <h6>Saleable Area </h6>

                <Table bordered>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Carpet Area (sq.ft)</th>
                            <th>Saleable Area (sq.ft)</th>
                            <th>Rate Per sq.ft (₹)</th>
                            <th>Amount(₹)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td className="m-2"> Ground Floor</td>
                        <tr>
                            <td>G.F.</td>
                            <td>937.5</td>
                            <td>800</td>
                            <td>7,50,000</td>
                            <td></td>
                        </tr>

                            <td className="m-2">First Floor</td>
                        <tr>

                            <td>F.F.</td>
                            <td>937.5</td>
                            <td>800</td>
                            <td>7,50,000</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>0</td>
                            <td>1,875</td>
                            <td>15,00,000</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>

                <Table>
                    <thead>
                        <tr>
                            <td>Total Appraised Value: ₹ 33,00,000 </td>
                        </tr>
                    </thead>
                </Table>
                <Table>
                    <thead>
                        <tr>
                            <td>
                                Round Off Total: ₹ 33,00,000 (Thirty Three Lakh Rupees
                                Only){" "}
                            </td>
                        </tr>
                    </thead>
                </Table>

                <h5 style={{ color: " #AC2321" }}>Valuation As Per Government Rates</h5>
                <h6 style={{ color: "gray", margin: "2px" }}> Bulding Usage </h6>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Area (sq.ft)</th>
                            <th>Rate Per sq.ft (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Land/BU/SBU</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </Table>
                <Table>
                    <thead>
                        <tr>
                            <td>Total Value (Gross Value) : ₹ 0 (Zero Rupees Only)</td>
                        </tr>
                    </thead>
                </Table>

                <Row>
                    <Col md={4}>
                        <p>
                            <strong>Construction Area (sq.ft):</strong> 0
                        </p>
                    </Col>
                    <Col md={4}>
                        <p>
                            <strong>Approved Covg(far, Sq.ft):</strong> 0
                        </p>
                    </Col>
                    <Col md={4}>
                        <p>
                            <strong>Cost of Construction:</strong> 0
                        </p>
                    </Col>
                </Row>

                <div className="text-end mt-3">
                    <Button variant="primary">Next</Button>
                </div>
            </div>
        </div>
    )
}

export default PropertyValuation
