export default function Div({
  children,
  direction = "column",
  gap,
  align,
  justify,
  padding,
  margin,
  backgroundColor,
  width,
  height,
  className = "",
}) {
  const flexDirection =
    direction === "row" || direction === "column" ? direction : "column";

  const style = {
    display: "flex",
    flexDirection,
  };

  if (gap) style.gap = gap;
  if (align) style.alignItems = align;
  if (justify) style.justifyContent = justify;
  if (padding) style.padding = padding;
  if (margin) style.margin = margin;
  if (backgroundColor) style.backgroundColor = backgroundColor;
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
