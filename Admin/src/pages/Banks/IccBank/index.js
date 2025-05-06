import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaWrench, FaExclamationTriangle, FaBuilding, FaChartBar, FaRuler, FaCamera, FaCommentDots } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import PropertyDetails from "./PropertyDetails";
import Maintenance from "./Maintenance";
import Remarks from "./Remarks";
import PropertyValuation from "./PropertyValuation";
import ConstructionProgress from "./ConstructionProgress";
import DistanceRangeProperty from "./DistanceRangeProperty";
import SitePhotographs from "./SitePhotographs";
import Amenities from "./Amenities";
import CautionArea from "./CautionArea";

const Index = () => {
  const [activeTab, setActiveTab] = useState("remarks");

  const tabs = [
    { key: "property_details", label: "Property Details", icon: <FaHome />, component: <PropertyDetails /> },
    { key: "maintenance_boundaries", label: "Maintenance & Boundaries", icon: <FaWrench />, component: <Maintenance /> },
    { key: "amenities", label: "Amenities", icon: <FaBuilding />, component: < Amenities/> },
    { key: "Coution_area", label: "Caution Area", icon: <FaExclamationTriangle />, component: <CautionArea/> },
    { key: "fair_market", label: "Fair Market Valuation", icon: <MdOutlineAttachMoney />, component: <PropertyValuation /> },
    { key: "progress_details", label: "Construction Progress", icon: <FaChartBar />, component: <ConstructionProgress /> },
    { key: "distance_range", label: "Distance Range of The Project", icon: <FaRuler />, component: <DistanceRangeProperty /> },
    { key: "site_photos", label: "Site Photographs", icon: <FaCamera />, component: <SitePhotographs /> },
    { key: "remarks", label: "Remarks", icon: <FaCommentDots />, component: <Remarks /> },

  ];

  return (
    <div className=" mt-3">
      <div className="d-flex overflow-auto gap-2">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`d-flex flex-column align-items-center p-2 border rounded`}
            style={{
              minWidth: "110px",
              minHeight: "90px",
              backgroundColor: activeTab === tab.key ? "#f8d7da" : "#f8f9fa",
              color: activeTab === tab.key ? "#842029" : "#6c757d",
              cursor: "pointer",
            }}
            onClick={() => setActiveTab(tab.key)}
          >
            <div style={{ fontSize: "35px" }}>{tab.icon}</div>
            <div style={{fontWeight: "bold", fontSize: "12px", textAlign:  "center", marginTop: "5px" }}>
              {tab.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 col-md-12">
        {tabs.find((tab) => tab.key === activeTab)?.component}
      </div>
    </div>
  );
};

export default Index;
