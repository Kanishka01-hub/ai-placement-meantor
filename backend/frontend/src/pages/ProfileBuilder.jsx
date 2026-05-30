import React, { useState } from "react";

function ProfileBuilder() {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [skills, setSkills] = useState("");

  return (
    <div>
      <h1>Profile Builder</h1>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "10px",
          margin: "10px",
          width: "250px",
        }}
      />

      <input
        type="text"
        placeholder="College"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        style={{
          padding: "10px",
          margin: "10px",
          width: "250px",
        }}
      />

      <input
        type="text"
        placeholder="Skills"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        style={{
          padding: "10px",
          margin: "10px",
          width: "250px",
        }}
      />

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <h3>Profile Preview</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>College:</strong> {college}</p>
        <p><strong>Skills:</strong> {skills}</p>
      </div>
    </div>
  );
}

export default ProfileBuilder;