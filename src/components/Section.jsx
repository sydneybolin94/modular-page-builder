export default function Section({
  children,
  backgroundImage,
  backgroundColor,
  className = "",
}) {
  const style = {};

  if (backgroundImage) {
    style.backgroundImage = `url(${backgroundImage})`;
    style.backgroundSize = "cover";
    style.backgroundPosition = "center";
  } else if (backgroundColor) {
    style.backgroundColor = backgroundColor;
  }

  return (
    <section
      className={`w-full py-16 ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
