export default function RenderError({ message, details }) {
  const style = {
    padding: "1rem",
    margin: "1rem 0",
    borderRadius: "8px",
    background: "#ffe6e6",
    border: "1px solid #ffb3b3",
    color: "#a30000",
    fontFamily: "monospace",
    fontSize: "0.9rem",
    whiteSpace: "pre-wrap"
  };

  return (
    <div style={style}>
      <strong>{message}</strong>
      {details && (
        <div style={{ marginTop: "0.5rem", opacity: 0.8 }}>
          {typeof details === "string" ? details : JSON.stringify(details, null, 2)}
        </div>
      )}
    </div>
  );
}
