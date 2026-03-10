export default function List({
  items = [],
  gap,
  fontSize = "1rem",
  color = "#000000",
  listStyle = "disc",
  margin,
  className = "",
}) {
  const style = {
    fontSize,
    color,
    listStyleType: listStyle,
  };

  if (margin) style.margin = margin;

  const itemStyle = {};
  if (gap) itemStyle.marginBottom = gap;

  const safeItems = Array.isArray(items)
    ? items.filter(
        (item) => typeof item === "string" || typeof item === "number"
      )
    : [];

  return (
    <ul className={className} style={style}>
      {safeItems.map((item, i) => (
        <li key={i} style={itemStyle}>
          {item}
        </li>
      ))}
    </ul>
  );
}
