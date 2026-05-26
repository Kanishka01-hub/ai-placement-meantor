import { useState } from "react";

function ResumeChecklist() {
  const [items, setItems] = useState([
    { text: "Added strong projects", done: false },
    { text: "Added technical skills", done: false },
    { text: "Added LinkedIn profile", done: false },
    { text: "Added GitHub profile", done: false },
    { text: "Resume is one page", done: false },
  ]);

  const completed = items.filter((item) => item.done).length;
  const percentage = Math.round((completed / items.length) * 100);

  const toggleItem = (index) => {
    const updated = [...items];
    updated[index].done = !updated[index].done;
    setItems(updated);
  };

  return (
    <div className="resume-box">
      <h2>Resume Checklist</h2>

      <p className="small-text">
        Complete these points before applying for placements.
      </p>

      <div className="checklist">
        {items.map((item, index) => (
          <label key={index} className="check-item">
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleItem(index)}
            />
            <span className={item.done ? "done" : ""}>
              {item.text}
            </span>
          </label>
        ))}
      </div>

      <div className="progress-bg">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <p className="small-text">{percentage}% resume ready</p>
    </div>
  );
}

export default ResumeChecklist;