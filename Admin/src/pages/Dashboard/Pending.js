import React, { useEffect, useState, useMemo } from "react"
import DataTable from "react-data-table-component"
import { Row, Col, Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"

const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#343a40",
      color: "#fff",
      fontWeight: "bold",
      fontSize: "16px",
      textAlign: "center",
    },
  },
}

// const columns = [
//   {
//     name: "Applicant Name",
//     selector: row => row.applicantName,
//     sortable: true,
//   },
//   { name: "Request No", selector: row => row.requestNo, sortable: true },
//   { name: "Request Type", selector: row => row.requestType, sortable: true },
//   { name: "Assigned On", selector: row => row.assignedOn, sortable: true },
//   { name: "Assigned To", selector: row => row.assignedTo, sortable: true },
//   { name: "Working CPC", selector: row => row.workingCPC, sortable: true },
//   {
//     name: "Transaction Type",
//     selector: row => row.transactionType,
//     sortable: true,
//   },
//   {
//     name: "Business Group",
//     selector: row => row.businessGroup,
//     sortable: true,
//   },
//   { name: "Product Type", selector: row => row.productType, sortable: true },
//   { name: "City", selector: row => row.city, sortable: true },
//   { name: "Locality", selector: row => row.locality, sortable: true },
//   { name: "Pin Code", selector: row => row.pinCode, sortable: true },
//   {
//     name: "Request Status",
//     selector: row => row.requestStatus,
//     sortable: true,
//   },
//   { name: "Net TAT", selector: row => row.netTAT, sortable: true },
// ]

const columns = [
  {
    name: "Customer Name",
    selector: row => (
      <Link to={`/Homefirst/${row._id}`}>{row.customerName}</Link>
    ),
    sortable: true,
  },
  { name: "Customer No", selector: row => row.customerNo, sortable: true },
  { name: "Type of Loan", selector: row => row.typeOfLoan, sortable: true },
  { name: "Date of Report", selector: row => row.dateOfReport, sortable: true },
  {
    name: "Address",
    selector: row => row.addressSite || row.addressLegal,
    sortable: true,
  },
  { name: "Zone", selector: row => row.zone, sortable: true },
  {
    name: "Fair Market Value",
    selector: row => `₹${row.fairMarketValue?.toLocaleString()}`,
    sortable: true,
  },
]

const Pending = () => {
  const [search, setSearch] = useState("")
  const [reportData, setReportData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/first-bank")
        const data = await res.json()

        if (res.ok) {
          setReportData(data?.data || [])
        } else {
          console.error("Error:", data.message)
        }
      } catch (error) {
        console.error("Network Error:", error)
        alert("❌ Network Error. Please try again.")
      }
    }

    fetchData()
  }, [])

  const filteredData = useMemo(() => {
    return reportData.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(search.toLowerCase()),
      ),
    )
  }, [search, reportData])

  console.log(filteredData, "FILTER")

  return (
    <div
      className="mb-4"
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        background: "#f9f9f9",
      }}
    >
      <Row className="mt-4">
        <Col xs={12}>
          <Form.Control
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="mb-3"
          />
          <DataTable
            title="Valuation Reports"
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
  )
}

export default Pending
