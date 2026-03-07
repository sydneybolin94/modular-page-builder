export default function ImageWithText({ theme, image, heading, body, reverse }) {
  return (
    <section className="py-16 px-6" style={{ color: theme.text, background: theme.accent }}>
      <div
        className={`max-w-5xl mx-auto flex flex-col items-center gap-10 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <img
          src={image}
          alt=""
          className="w-full md:w-1/2 rounded-lg shadow-md object-cover"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">{heading}</h2>
          <p className="text-gray-700 leading-relaxed">{body}</p>
        </div>
      </div>
    </section>
  );
}
