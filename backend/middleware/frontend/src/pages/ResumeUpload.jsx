import { useState } from "react";
import axios from "axios";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("resume", file);

      const res = await axios.post(
        "http://localhost:5000/api/auth/resume-upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessage(res.data.message);
    } catch (error) {
      setMessage("Resume upload failed");
    }
  };

  return (
    <div
      style={{
        background: "white",
        padding: "40px",
        borderRadius: "15px",
        marginTop: "30px",
        textAlign: "center",
      }}
    >
      <h1>Resume Upload</h1>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={handleUpload}>
        Upload Resume
      </button>

      <p>{message}</p>
    </div>
  );
}

export default ResumeUpload;