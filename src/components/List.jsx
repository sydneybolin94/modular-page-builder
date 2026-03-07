export default function List({ items = [], className = "" }) {
  return (
    <ul className={`list-disc pl-6 space-y-2 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="text-base leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}
