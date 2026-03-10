export default function Header({
  text,
  fontSize = "2rem",
  color = "#000000",
  margin,
  align,
  className = "",
}) {
  const style = {
    fontSize,
    color,
  };

  if (margin) style.margin = margin;
  if (align) style.textAlign = align;

  const safeText =
    typeof text === "string" || typeof text === "number" ? text : "";

  return (
    <h2 className={className} style={style}>
      {safeText}
    </h2>
  );
}
