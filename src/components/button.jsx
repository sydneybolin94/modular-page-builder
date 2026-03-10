export default function Button({
  label,
  padding = "0.75rem 1.5rem",
  backgroundColor = "#000000",
  color = "#ffffff",
  borderRadius = "0.5rem",
  margin,
  className = "",
}) {
  const style = {
    padding,
    backgroundColor,
    color,
    borderRadius,
    border: "none",
    cursor: "pointer",
    display: "inline-block",
  };

  if (margin) style.margin = margin;

  const safeLabel =
    typeof label === "string" || typeof label === "number" ? label : "";

  return (
    <button className={className} style={style} type="button">
      {safeLabel}
    </button>
  );
}
