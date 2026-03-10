export default function Section({
  children,
  backgroundImage,
  background,
  backgroundColor,
  padding,
  className = "",
}) {
  const style = {};

  if (backgroundImage) {
    style.backgroundImage = `url(${backgroundImage})`;
    style.backgroundSize = "cover";
    style.backgroundPosition = "center";
  }

  if (backgroundColor) {
    style.backgroundColor = backgroundColor;
  } else if (background) {
    style.background = background;
  }

  if (padding) {
    style.padding = padding;
  }

  return (
    <section className={`w-full py-16 ${className}`} style={style}>
      {children}
    </section>
  );
}
