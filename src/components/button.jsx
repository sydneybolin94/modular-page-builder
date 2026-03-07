export default function Button({ theme, label }) {
  return (
    <button className="mt-6 px-6 py-3 bg-theme-primary text-theme-background rounded">
      {label}
    </button>
  );
}
