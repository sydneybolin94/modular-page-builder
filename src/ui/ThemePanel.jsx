export default function ThemePanel({ layout, setLayout }) {
  const update = (key, value) => {
    const updated = structuredClone(layout);
    updated.theme[key] = value;
    setLayout(updated);
  };

  return (
    <div className="flex gap-6 align-bottom">
      <label className="flex items-center gap-2">
        Primary
        <input
          type="color"
          value={layout.theme.primary}
          onChange={(e) => update("primary", e.target.value)}
        />
      </label>

      <label className="flex items-center gap-2">
        Accent
        <input
          type="color"
          value={layout.theme.accent}
          onChange={(e) => update("accent", e.target.value)}
        />
      </label>

      <label className="flex items-center gap-2">
        Background
        <input
          type="color"
          value={layout.theme.background}
          onChange={(e) => update("background", e.target.value)}
        />
      </label>

      <label className="flex items-center gap-2">
        Text
        <input
          type="color"
          value={layout.theme.text}
          onChange={(e) => update("text", e.target.value)}
        />
      </label>
    </div>
  );
}
