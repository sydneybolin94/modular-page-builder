export default function Paragraph({
  text,
  fontSize = "1rem",
  color = "#000000",
  margin,
  width,
  align,
  className = "",
}) {
  const style = {
    fontSize,
    color,
  };

  if (margin) style.margin = margin;
  if (width) style.width = width;
  if (align) style.textAlign = align;

  const safeText =
    typeof text === "string" || typeof text === "number" ? text : "";

  return (
    <p className={className} style={style}>
      {safeText}
    </p>
  );
}
