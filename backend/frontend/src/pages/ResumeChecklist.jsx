import React from "react";

function ResumeChecklist() {
  return (
    <div>
      <h1>Resume Checklist</h1>

      <label>
        <input type="checkbox" /> Added strong projects
      </label>
      <br />

      <label>
        <input type="checkbox" /> Added technical skills
      </label>
      <br />

      <label>
        <input type="checkbox" /> Added LinkedIn profile
      </label>
      <br />

      <label>
        <input type="checkbox" /> Added GitHub profile
      </label>
      <br />

      <label>
        <input type="checkbox" /> Resume is one page
      </label>
    </div>
  );
}

export default ResumeChecklist;