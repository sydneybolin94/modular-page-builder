export default function Div({
  children,
  direction = "column",
  flexwrap,
  gap,
  align,
  justify,
  padding,
  margin,
  backgroundColor,
  width,
  height,
  maxWidth,
  className = "",
}) {
  const flexDirection =
    direction === "row" || direction === "column" ? direction : "column";

  const style = {
    display: "flex",
    flexDirection,
    flexWrap: flexwrap ? "wrap" : "nowrap",
  };

  if (gap) style.gap = gap;
  if (align) style.alignItems = align;
  if (justify) style.justifyContent = justify;
  if (padding) style.padding = padding;
  if (margin) style.margin = margin;
  if (backgroundColor) style.backgroundColor = backgroundColor;
  if (width) style.width = width;
  if (height) style.height = height;
  if (maxWidth) style.maxWidth = maxWidth;

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
