export default function TextBlock({ theme, heading, body }) {
  return (
    <section className="max-w-3xl mx-auto py-12 px-6" style={{ color: theme.text, backgroundColor: theme.background }}>
      <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
      <p className="text-gray-700 leading-relaxed">{body}</p>
    </section>
  );
}
