export default function Div({
  theme,
  direction = "column",
  gap = "1rem",
  align = "stretch",
  justify = "flex-start",
  padding = "0",
  background,
  children
}) {
  const bg = background?.startsWith("theme.")
    ? theme[background.replace("theme.", "")]
    : background;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        gap,
        alignItems: align,
        justifyContent: justify,
        padding,
        backgroundColor: bg
      }}
    >
      {children}
    </div>
  );
}
