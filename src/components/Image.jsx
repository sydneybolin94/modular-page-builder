export default function Image({
  src,
  alt = "",
  width,
  height,
  objectFit = "cover",
  borderRadius,
  shadow,
  className = "",
}) {
  if (!src) return null;

  const style = {
    objectFit,
  };

  if (width) style.width = width;
  if (height) style.height = height;
  if (borderRadius) style.borderRadius = borderRadius;
  if (shadow) style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";

  return (
    <img
      src={src}
      alt={typeof alt === "string" ? alt : String(alt)}
      className={className}
      style={style}
    />
  );
}
