export default function Image({ src, alt = "", width, height, rounded, shadow, fullWidth }) {
  const classes = [
    fullWidth ? "w-full" : "",
    rounded ? "rounded-lg" : "",
    shadow ? "shadow-lg" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classes}
      style={{ display: "block" }}
    />
  );
}
