import React from "react"
import DataTable from "react-data-table-component"
import { InputGroup, FormControl, Button, Dropdown } from "react-bootstrap"
import { FaSearch } from "react-icons/fa"

const columns = [
  {
    name: "Application Number",
    selector: row => row.appNumber,
    sortable: true,
  },
  {
    name: "Applicant Name",
    selector: row => row.applicantName,
    sortable: true,
  },
  { name: "Request No.", selector: row => row.requestNo, sortable: true },
  { name: "Initiated CPC", selector: row => row.initiatedCPC, sortable: true },
  { name: "Assigned To", selector: row => row.assignedTo, sortable: true },
  { name: "Request Type", selector: row => row.requestType },
  { name: "Application Status", selector: row => row.status },
]

const data = Array.from({ length: 15 }).map((_, index) => ({
  id: index,
  appNumber: "0000600792",
  applicantName: "Lachhiram Tekchand",
  requestNo: "9143652",
  initiatedCPC: "MP Gwalior City Centre",
  assignedTo: "LOKESH SHARMA",
  requestType: "IND",
  status: "Report Submitted",
}))

const ApplicationPipeline = () => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        background: "#f9f9f9",
      }}
      className=" mt-2 mb-4"
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <InputGroup className="w-50">
          <FormControl placeholder="Search for Applicant Number, Applicant Name" />
          <Button style={{ border: "none", background: "#AC2321" }}>
            <FaSearch />
          </Button>
        </InputGroup>
        <Dropdown>
          <Dropdown.Toggle style={{ border: "none", background: "#AC2321" }}>
            Status
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Pending</Dropdown.Item>
            <Dropdown.Item>Approved</Dropdown.Item>
            <Dropdown.Item>Rejected</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <InputGroup className="w-25">
          <FormControl type="date" />
          <FormControl type="date" />
        </InputGroup>
        <Button style={{ border: "none", background: "#AC2321" }}>
          Search
        </Button>
      </div>
      <h5 style={{ color: "#AC2321" }}>Application Pipeline</h5>
      <DataTable
        columns={columns}
        data={data}
        pagination
        selectableRows
        highlightOnHover
      />
      <div className="d-flex justify-content-between mt-3">
        <Button style={{ border: "none", background: "#AC2321" }}>
          Re-Assign
        </Button>
        <Button style={{ border: "none", background: "#AC2321" }}>
          Release
        </Button>
      </div>
    </div>
  )
}

export default ApplicationPipeline
