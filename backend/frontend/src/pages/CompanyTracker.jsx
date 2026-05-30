import React from "react";

function CompanyTracker() {
  const companies = [
    { name: "TCS", status: "Applied" },
    { name: "Infosys", status: "Preparing" },
    { name: "Wipro", status: "Not Applied" },
  ];

  return (
    <div>
      <h1>Company Application Tracker</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#2563eb", color: "white" }}>
            <th style={{ padding: "12px" }}>Company</th>
            <th style={{ padding: "12px" }}>Status</th>
          </tr>
        </thead>

        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                {company.name}
              </td>
              <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                {company.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyTracker;