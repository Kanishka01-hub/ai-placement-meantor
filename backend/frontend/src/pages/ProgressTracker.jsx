function ProgressTracker() {
  const completed = 3;
  const total = 5;
  const percentage = (completed / total) * 100;

  return (
    <div style={{ marginTop: "40px" }}>
      <h1>Progress Tracker</h1>

      <p>
        You completed {completed} out of {total} placement tasks.
      </p>

      <div
        style={{
          width: "350px",
          height: "25px",
          backgroundColor: "#ddd",
          margin: "auto",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "25px",
            backgroundColor: "green",
            borderRadius: "20px",
          }}
        ></div>
      </div>

      <h3>{percentage}% Completed</h3>
    </div>
  );
}

export default ProgressTracker;