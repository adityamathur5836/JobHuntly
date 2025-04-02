import React from "react";
import helped from "../assets/helped.png";
import "./Helped.css";
import amd from "../assets/amd.png";
import tesla from "../assets/tesla.png";
import intel from "../assets/intel.png";
import talkit from "../assets/talkit.png";
import vodafone from "../assets/vodafone.png";

const helpedCompanies = [
  { id: 1, name: "AMD", logo: amd },
  { id: 2, name: "Tesla", logo: tesla },
  { id: 3, name: "Intel", logo: intel },
  { id: 4, name: "Talkit", logo: talkit },
  { id: 5, name: "Vodafone", logo: vodafone },
];

export default function Helped() {
  return (
    <div className="helped">
      <h2>Companies we helped Grow</h2>
      <div className="helped-container">
        {helpedCompanies.map((company) => (
          <div key={company.id} className="helped-logo">
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
    </div>
  );
}