import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  {
    applicantName: "PUJA ASSOCIATES",
    requestNo: "10954685",
    requestType: "IND",
    assignedOn: "21/03/2025 03:58:00 PM",
    assignedTo: "SAKET THAKUR",
    workingCPC: "MP Jabalpur",
    transactionType: "Resale (Others)",
    businessGroup: "BLG",
    productType: "Loan Against Property",
    city: "Waidhan",
    locality: "MAUJA MADHA PHNO 33 ARAJ NO 243/2 BLOCK MADHAN TEH. MADHA DIST SINGRAULI MP",
    pinCode: "486886",
    requestStatus: "In Progress",
    netTAT: "2 hrs 17 mins",
  },
  {
    applicantName: "HARSH SONI",
    requestNo: "10980439",
    requestType: "IND",
    assignedOn: "21/03/2025 07:05:00 PM",
    assignedTo: "BHART SHARMA",
    workingCPC: "MP Indore Malav Parisar",
    transactionType: "Resale (Others)",
    businessGroup: "HL Mortgage",
    productType: "Land + Construction Loan",
    city: "Indore",
    locality: "NA",
    pinCode: "452001",
    requestStatus: "In Progress",
    netTAT: "8 hrs 4 mins",
  },
  {
    applicantName: "Aniket J",
    requestNo: "10984390",
    requestType: "IND",
    assignedOn: "18/03/2025 05:10:00 PM",
    assignedTo: "BHART SHARMA",
    workingCPC: "MP Indore Malav Parisar",
    transactionType: "Resale (Others)",
    businessGroup: "RIBG",
    productType: "Loan Against Property",
    city: "Burhanpur",
    locality: "Khavas No 109/5 and 109/6, amodi tehsil burhanpurSURVEY NO 207/168/4, 193/2,193/4,A",
    pinCode: "450331",
    requestStatus: "In Progress",
    netTAT: "2 days 4 hrs 44 mins",
  },
  {
    applicantName: "SHRI BHAGRATH PAWAN KUMAR PATE",
    requestNo: "10986148",
    requestType: "IND",
    assignedOn: "18/03/2025 05:35:00 PM",
    assignedTo: "SAKET THAKUR",
    workingCPC: "MP Jabalpur",
    transactionType: "Resale (Others)",
    businessGroup: "BLG",
    productType: "Loan Against Property",
    city: "Damoh",
    locality: "MAGNA MARDI NO 05",
    pinCode: "470661",
    requestStatus: "In Progress",
    netTAT: "1 day 6 hrs 53 mins",
  },
  {
    applicantName: "Aniket J",
    requestNo: "10984390",
    requestType: "IND",
    assignedOn: "18/03/2025 05:10:00 PM",
    assignedTo: "BHART SHARMA",
    workingCPC: "MP Indore Malav Parisar",
    transactionType: "Resale (Others)",
    businessGroup: "RIBG",
    productType: "Loan Against Property",
    city: "Burhanpur",
    locality: "Khavas No 109/5 and 109/6, amodi tehsil burhanpurSURVEY NO 207/168/4, 193/2,193/4,A",
    pinCode: "450331",
    requestStatus: "In Progress",
    netTAT: "2 days 4 hrs 44 mins",
  },
  {
    applicantName: "SHRI BHAGRATH PAWAN KUMAR PATE",
    requestNo: "10986148",
    requestType: "IND",
    assignedOn: "18/03/2025 05:35:00 PM",
    assignedTo: "SAKET THAKUR",
    workingCPC: "MP Jabalpur",
    transactionType: "Resale (Others)",
    businessGroup: "BLG",
    productType: "Loan Against Property",
    city: "Damoh",
    locality: "MAGNA MARDI NO 05",
    pinCode: "470661",
    requestStatus: "In Progress",
    netTAT: "1 day 6 hrs 53 mins",
  },
  {
    applicantName: "Aniket J",
    requestNo: "10984390",
    requestType: "IND",
    assignedOn: "18/03/2025 05:10:00 PM",
    assignedTo: "BHART SHARMA",
    workingCPC: "MP Indore Malav Parisar",
    transactionType: "Resale (Others)",
    businessGroup: "RIBG",
    productType: "Loan Against Property",
    city: "Burhanpur",
    locality: "Khavas No 109/5 and 109/6, amodi tehsil burhanpurSURVEY NO 207/168/4, 193/2,193/4,A",
    pinCode: "450331",
    requestStatus: "In Progress",
    netTAT: "2 days 4 hrs 44 mins",
  },
  {
    applicantName: "SHRI BHAGRATH PAWAN KUMAR PATE",
    requestNo: "10986148",
    requestType: "IND",
    assignedOn: "18/03/2025 05:35:00 PM",
    assignedTo: "SAKET THAKUR",
    workingCPC: "MP Jabalpur",
    transactionType: "Resale (Others)",
    businessGroup: "BLG",
    productType: "Loan Against Property",
    city: "Damoh",
    locality: "MAGNA MARDI NO 05",
    pinCode: "470661",
    requestStatus: "In Progress",
    netTAT: "1 day 6 hrs 53 mins",
  },
];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#343a40", // Dark Background
      color: "#ffffff", // White Text
      fontWeight: "bold",
      fontSize: "16px",
      textAlign: "center",
    },
  },
};

const columns = [
  { name: "Applicant Name", selector: (row) => row.applicantName, sortable: true },
  { name: "Request No", selector: (row) => row.requestNo, sortable: true },
  { name: "Request Type", selector: (row) => row.requestType, sortable: true },
  { name: "Assigned On", selector: (row) => row.assignedOn, sortable: true },
  { name: "Assigned To", selector: (row) => row.assignedTo, sortable: true },
  { name: "Working CPC", selector: (row) => row.workingCPC, sortable: true },
  { name: "Transaction Type", selector: (row) => row.transactionType, sortable: true },
  { name: "Business Group", selector: (row) => row.businessGroup, sortable: true },
  { name: "Product Type", selector: (row) => row.productType, sortable: true },
  { name: "City", selector: (row) => row.city, sortable: true },
  { name: "Locality", selector: (row) => row.locality, sortable: true },
  { name: "Pin Code", selector: (row) => row.pinCode, sortable: true },
  { name: "Request Status", selector: (row) => row.requestStatus, sortable: true },
  { name: "Net TAT", selector: (row) => row.netTAT, sortable: true },
];

const Assigned = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="mb-4"
    style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        background: "#f9f9f9",
    }}
>
    <Row className="border-box mt-4">
      <Col xs="12">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-3"
        />
        <DataTable
          title="Assigned Requests"
          columns={columns}
          data={filteredData}
          pagination
          highlightOnHover
          striped
          responsive
          persistTableHead
          customStyles={customStyles}
        />
      </Col>
    </Row>
</div>
  );
};

export default Assigned;
