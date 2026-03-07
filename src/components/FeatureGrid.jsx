export default function FeatureGrid({ theme, items }) {
  return (
    <section className="py-16 px-6 bg-gray-50" style={{ color: theme.text }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
