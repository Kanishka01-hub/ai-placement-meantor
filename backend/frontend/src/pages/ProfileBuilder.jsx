import { useEffect, useState } from "react";
import axios from "axios";

function ProfileBuilder() {
  const [profile, setProfile] = useState({
    branch: "",
    cgpa: "",
    skills: "",
    targetCompany: "",
  });

  const [message, setMessage] = useState("");

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProfile({
        branch: res.data.branch || "",
        cgpa: res.data.cgpa || "",
        skills: res.data.skills?.join(", ") || "",
        targetCompany: res.data.targetCompany || "",
      });
    } catch (error) {
      setMessage("Failed to load profile");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/auth/profile",
        {
          branch: profile.branch,
          cgpa: profile.cgpa,
          skills: profile.skills.split(","),
          targetCompany: profile.targetCompany,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(res.data.message);
    } catch (error) {
      setMessage("Failed to save profile");
    }
  };

  return (
    <div>
      <h1>Student Profile Builder</h1>

      <input
        placeholder="Branch"
        value={profile.branch}
        onChange={(e) =>
          setProfile({ ...profile, branch: e.target.value })
        }
      />

      <br />
      <br />

      <input
        placeholder="CGPA"
        value={profile.cgpa}
        onChange={(e) =>
          setProfile({ ...profile, cgpa: e.target.value })
        }
      />

      <br />
      <br />

      <input
        placeholder="Skills comma separated"
        value={profile.skills}
        onChange={(e) =>
          setProfile({ ...profile, skills: e.target.value })
        }
      />

      <br />
      <br />

      <input
        placeholder="Target Company"
        value={profile.targetCompany}
        onChange={(e) =>
          setProfile({ ...profile, targetCompany: e.target.value })
        }
      />

      <br />
      <br />

      <button onClick={handleSave}>Save Profile</button>

      <p>{message}</p>
    </div>
  );
}

export default ProfileBuilder;
