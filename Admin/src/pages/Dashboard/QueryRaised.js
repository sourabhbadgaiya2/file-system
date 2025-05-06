import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  {
    "Application No.": "77220142411",
    "Applicant Name": "HILLS INDIA HOTELS AND CONSTRUCTIONS PRIVATE LIMITED",
    "Request No.": "10883980",
    "Request Type": "IND",
    "Assigned On": "10/03/2025 11:12:00 AM",
    "Assigned To": "BHART SHARMA",
    "Working CPC": "MP Indore Malav Parisar",
    "Transaction Type": "Resale (Others)",
    "Business Group": "HL Mortgage",
    "Product Type": "Loan Against Property - Enhancement",
    "City": "Indore",
    "Locality": "NA",
    "Pin Code": "452020",
    "Request Status": "Query Raised",
    "Net TAT": "3 days 7 hrs 54 mins",
    "Overall TAT": "10 days 7 hrs 2 mins"
  },
  {
    "Application No.": "SR63230001C",
    "Applicant Name": "BGRL Logistics Pvt Ltd",
    "Request No.": "10994889",
    "Request Type": "IND",
    "Assigned On": "10/03/2025 01:32:00 PM",
    "Assigned To": "LOKESH SHARMA",
    "Working CPC": "MP Gwalior City Centre",
    "Transaction Type": "Resale (Others)",
    "Business Group": "BLG",
    "Product Type": "Loan Against Property",
    "City": "Gwalior",
    "Locality": "NA",
    "Pin Code": "474012",
    "Request Status": "Query Raised",
    "Net TAT": "6 hrs 59 mins",
    "Overall TAT": "2 days 4 hrs 42 mins"
  },
  {
    "Application No.": "SHIVAMPVTLTD",
    "Applicant Name": "Shivam Pvt Ltd",
    "Request No.": "11023404",
    "Request Type": "IND",
    "Assigned On": "21/03/2025 11:37:00 AM",
    "Assigned To": "SAKET THAKUR",
    "Working CPC": "MP Jabalpur",
    "Transaction Type": "Self Construction",
    "Business Group": "SMEAG",
    "Product Type": "Loan Against Property",
    "City": "Singroli",
    "Locality": "Tehsil",
    "Pin Code": "486889",
    "Request Status": "Query Raised",
    "Net TAT": "6 hrs 38 mins",
    "Overall TAT": "6 hrs 38 mins"
  },
  {
    "Application No.": "NEWSEPL1111",
    "Applicant Name": "Shivam Pvt Ltd",
    "Request No.": "11024332",
    "Request Type": "IND",
    "Assigned On": "21/03/2025 11:44:00 AM",
    "Assigned To": "SAKET THAKUR",
    "Working CPC": "MP Jabalpur",
    "Transaction Type": "Self Construction",
    "Business Group": "SMEAG",
    "Product Type": "Loan Against Property",
    "City": "Singroli",
    "Locality": "Singhmudi",
    "Pin Code": "486889",
    "Request Status": "Query Raised",
    "Net TAT": "6 hrs 31 mins",
    "Overall TAT": "6 hrs 31 mins"
  },
  {
    "Application No.": "77220142411",
    "Applicant Name": "HILLS INDIA HOTELS AND CONSTRUCTIONS PRIVATE LIMITED",
    "Request No.": "10883980",
    "Request Type": "IND",
    "Assigned On": "10/03/2025 11:12:00 AM",
    "Assigned To": "BHART SHARMA",
    "Working CPC": "MP Indore Malav Parisar",
    "Transaction Type": "Resale (Others)",
    "Business Group": "HL Mortgage",
    "Product Type": "Loan Against Property - Enhancement",
    "City": "Indore",
    "Locality": "NA",
    "Pin Code": "452020",
    "Request Status": "Query Raised",
    "Net TAT": "3 days 7 hrs 54 mins",
    "Overall TAT": "10 days 7 hrs 2 mins"
  },
  {
    "Application No.": "SR63230001C",
    "Applicant Name": "BGRL Logistics Pvt Ltd",
    "Request No.": "10994889",
    "Request Type": "IND",
    "Assigned On": "10/03/2025 01:32:00 PM",
    "Assigned To": "LOKESH SHARMA",
    "Working CPC": "MP Gwalior City Centre",
    "Transaction Type": "Resale (Others)",
    "Business Group": "BLG",
    "Product Type": "Loan Against Property",
    "City": "Gwalior",
    "Locality": "NA",
    "Pin Code": "474012",
    "Request Status": "Query Raised",
    "Net TAT": "6 hrs 59 mins",
    "Overall TAT": "2 days 4 hrs 42 mins"
  },
  {
    "Application No.": "SHIVAMPVTLTD",
    "Applicant Name": "Shivam Pvt Ltd",
    "Request No.": "11023404",
    "Request Type": "IND",
    "Assigned On": "21/03/2025 11:37:00 AM",
    "Assigned To": "SAKET THAKUR",
    "Working CPC": "MP Jabalpur",
    "Transaction Type": "Self Construction",
    "Business Group": "SMEAG",
    "Product Type": "Loan Against Property",
    "City": "Singroli",
    "Locality": "Tehsil",
    "Pin Code": "486889",
    "Request Status": "Query Raised",
    "Net TAT": "6 hrs 38 mins",
    "Overall TAT": "6 hrs 38 mins"
  },
  {
    "Application No.": "NEWSEPL1111",
    "Applicant Name": "Shivam Pvt Ltd",
    "Request No.": "11024332",
    "Request Type": "IND",
    "Assigned On": "21/03/2025 11:44:00 AM",
    "Assigned To": "SAKET THAKUR",
    "Working CPC": "MP Jabalpur",
    "Transaction Type": "Self Construction",
    "Business Group": "SMEAG",
    "Product Type": "Loan Against Property",
    "City": "Singroli",
    "Locality": "Singhmudi",
    "Pin Code": "486889",
    "Request Status": "Query Raised",
    "Net TAT": "6 hrs 31 mins",
    "Overall TAT": "6 hrs 31 mins"
  }
  
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
  { name: "Application No.", selector: (row) => row["Application No."], sortable: true },
  { name: "Applicant Name", selector: (row) => row["Applicant Name"], sortable: true },
  { name: "Request No.", selector: (row) => row["Request No."], sortable: true },
  { name: "Request Type", selector: (row) => row["Request Type"], sortable: true },
  { name: "Assigned On", selector: (row) => row["Assigned On"], sortable: true },
  { name: "Assigned To", selector: (row) => row["Assigned To"], sortable: true },
  { name: "Working CPC", selector: (row) => row["Working CPC"], sortable: true },
  { name: "Transaction Type", selector: (row) => row["Transaction Type"], sortable: true },
  { name: "Business Group", selector: (row) => row["Business Group"], sortable: true },
  { name: "Product Type", selector: (row) => row["Product Type"], sortable: true },
  { name: "City", selector: (row) => row["City"], sortable: true },
  { name: "Locality", selector: (row) => row["Locality"], sortable: true },
  { name: "Pin Code", selector: (row) => row["Pin Code"], sortable: true },
  { name: "Request Status", selector: (row) => row["Request Status"], sortable: true },
  { name: "Net TAT", selector: (row) => row["Net TAT"], sortable: true },
  { name: "Overall TAT", selector: (row) => row["Overall TAT"], sortable: true }
];

const QueryRaised = () => {
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
          title="Query Raised"
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

export default QueryRaised;
