import React from "react";
import DataTable from "react-data-table-component";

import "bootstrap/dist/css/bootstrap.min.css";


const MyWorklist = () => {
    const tatColumns = [
        { name: "Type", selector: (row) => row.type, sortable: true },
        { name: "Total Reports Issued", selector: (row) => row.total, sortable: true },
        { name: "Within TAT", selector: (row) => row.withinTAT, sortable: true },
        { name: "Outside TAT", selector: (row) => row.outsideTAT, sortable: true },
        { name: "Request Sent Back", selector: (row) => row.sentBack, sortable: true },
      ];
    
      // Data for TAT Table
      const tatData = [
        { type: "APF", total: 0, withinTAT: 0, outsideTAT: 0, sentBack: 0 },
        { type: "IND", total: 172, withinTAT: 133, outsideTAT: 2, sentBack: 37 },
      ];
    
      // Columns for Team Activity Table
      const teamColumns = [
        { name: "Team", selector: (row) => row.name, sortable: true },
        { name: "Request", selector: (row) => row.request, sortable: true },
        { name: "In Progress", selector: (row) => row.inProgress, sortable: true },
        { name: "In Query", selector: (row) => row.inQuery, sortable: true },
        { name: "Pending for Approval", selector: (row) => row.pendingApproval, sortable: true },
        { name: "Request Approaching TAT", selector: (row) => row.approachingTAT, sortable: true },
      ];
    
      // Data for Team Activity Table
      const teamData = [
        { name: "Saket Thakur", request: 54, inProgress: 0, inQuery: 2, pendingApproval: 1, approachingTAT: 0 },
        { name: "Bharat Sharma", request: 43, inProgress: 5, inQuery: 2, pendingApproval: 0, approachingTAT: 3 },
        { name: "Lokesh Sharma", request: 28, inProgress: 1, inQuery: 0, pendingApproval: 1, approachingTAT: 3 },
        { name: "Shubham Rathore", request: 2, inProgress: 0, inQuery: 0, pendingApproval: 0, approachingTAT: 0 },
      ];
  return (
    <div className=" ">
          <div className=" mt-4">
      {/* Requests Received and Ageing Section */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm border rounded-sm">
            <h5 className="text-color">Requests Received</h5>
            <div className="row p-4 text-center">
              <div className="col border rounded-sm py-4 px-3 fixed-box">Today <br /> 5</div>
              <div className="col border rounded-sm py-4 px-3 fixed-box">This Week <br />13</div>
              <div className="col border rounded-sm py-4 px-3 fixed-box"> This Month <br />130</div>
              <div className="col border rounded-sm py-4 px-3 fixed-box"> This Year <br />361</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-4 shadow-sm border rounded-lg">
            <h5 className="text-color">Ageing (Work In Progress Requests)</h5>
            <div className="row p-4 text-center">
              <div className="col border rounded-sm py-4 px-3 fixed-box">Breached <br/> 90% <br /> 0 </div>
              <div className="col border rounded-sm py-4 px-3 fixed-box">Critical <br/> 70%-90% <br /> 0</div>
              <div className="col border rounded-sm py-4 px-3 fixed-box">Warning <br/> 50%-70% <br /> 0</div>
              <div className="col border rounded-sm py-4 px-3 fixed-box"> Safe <br /> 0%-50% <br />  0</div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`.text-color {
          color: #AC2321 !important;
        }
        .fixed-box {
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 1.1rem;
          background-color: #f8f9fa;
        }
        .rounded-lg {
          border-radius: 12px;
        }`}
      </style>
    </div>
      
     
     <div className="mt-2">
      {/* TAT Section */}
      <div className="card p-3 shadow-sm mb-4">
        <h5 className="text-color">TAT</h5>
        <DataTable columns={tatColumns} data={tatData}  highlightOnHover striped />
      </div>

      {/* Team Activity Section */}
      <div className="card p-3 shadow-sm">
        <h5 className="text-color">Team Activity</h5>
        <DataTable columns={teamColumns} data={teamData} pagination highlightOnHover striped />
      </div>

      <style>
        {`.text-color {
          color: #AC2321 !important;
        }
        .table-hover tbody tr:hover {
          background-color: #f8f9fa !important;
        }
        .table-bordered {
          border: none !important;
        }`}
      </style>
    </div>
    

    
    </div>
    
  );
};

export default MyWorklist;
