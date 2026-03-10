import { useState, useEffect } from "react";
import layoutFile from "./layout/sampleLayout.js";
import PageRender from "./PageRender";
import JsonEditor from "./ui/JsonEditor.jsx";
import InstructionsModal from "./ui/InstructionsModal.jsx";
import logo from "./assets/MPB-Logo.png";

// Debounce hook
function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

// Button component
function InstructionsButton({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="instructions-button w-12 h-12 p-3 rounded-full bg-black text-white hover:bg-gray-900 text-sm font-bold fixed top-4 right-4"
      aria-label="Open instructions"
    >
      <span className="text-container flex items-center justify-center w-full h-full">
        <span className="show-text">How To Edit This Page</span>
        <span className="question-mark">?</span>

      </span>
    </button>
  );
}

export default function App() {
  const [layout, setLayout] = useState(layoutFile);
  const [rawText, setRawText] = useState(JSON.stringify(layoutFile, null, 2));
  const [errors, setErrors] = useState([]);
  const [open, setOpen] = useState(false);

  // Debounced JSON text
  const debouncedText = useDebounce(rawText, 400);

  // Apply theme when layout changes
  useEffect(() => {
    const t = layout.theme;
    if (!t) return;

    document.documentElement.style.setProperty("--theme-primary", t.primary);
    document.documentElement.style.setProperty("--theme-accent", t.accent);
    document.documentElement.style.setProperty("--theme-background", t.background);
    document.documentElement.style.setProperty("--theme-text", t.text);
  }, [layout.theme]);

  // Live update layout when JSON is valid
  useEffect(() => {
    try {
      const parsed = JSON.parse(debouncedText);
      setLayout(parsed);
      setErrors([]);
    } catch (err) {
      const match = /at position (\d+)/.exec(err.message);
      if (match) {
        const pos = Number(match[1]);
        const line = debouncedText.slice(0, pos).split("\n").length - 1;
        setErrors([{ line }]);
      }
    }
  }, [debouncedText]);

  // Ctrl+S / Cmd+S to force immediate update
  useEffect(() => {
    function handleSave(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        try {
          const parsed = JSON.parse(rawText);
          setLayout(parsed);
          setErrors([]);
        } catch (err) {
          const match = /at position (\d+)/.exec(err.message);
          if (match) {
            const pos = Number(match[1]);
            const line = rawText.slice(0, pos).split("\n").length - 1;
            setErrors([{ line }]);
          }
        }
      }
    }

    window.addEventListener("keydown", handleSave);
    return () => window.removeEventListener("keydown", handleSave);
  }, [rawText]);

  return (
    <div className="p-8 flex flex-col gap-6">

      {/* Modal */}
      <InstructionsModal open={open} onClose={() => setOpen(false)}>
        <div className="text-sm text-gray-800 space-y-3">

          <details className="group border border-gray-200 rounded-md p-3">
            <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
              Editing this page
              <span className="transition-transform group-open:rotate-90 text-gray-500">›</span>
            </summary>
            <div className="mt-3 space-y-3 leading-relaxed">
              <p>
                This page is generated entirely from the JSON in the editor. Each item in the
                <code className="px-1 py-0.5 rounded bg-gray-100 text-xs">layout</code> array
                represents a component. Update text, swap images, adjust spacing, or reorder blocks
                to change the page.
              </p>
              <p>
                Invalid blocks automatically show a friendly error overlay in development mode, so
                feel free to experiment.
              </p>
            </div>
          </details>

          <details className="group border border-gray-200 rounded-md p-3">
            <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
              Components you can use
              <span className="transition-transform group-open:rotate-90 text-gray-500">›</span>
            </summary>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li><code className="bg-gray-100 px-1 rounded text-xs">section</code> — full‑width container with backgrounds.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">div</code> — flexible row/column layout container.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">header</code> — large heading text.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">paragraph</code> — body text.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">button</code> — clickable call‑to‑action.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">image</code> — image with optional styling.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">list</code> — bulleted list.</li>
            </ul>
          </details>

          <details className="group border border-gray-200 rounded-md p-3">
            <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
              Useful properties
              <span className="transition-transform group-open:rotate-90 text-gray-500">›</span>
            </summary>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li><code className="bg-gray-100 px-1 rounded text-xs">background</code> — color or theme token.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">backgroundImage</code> — HTTPS image URL.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">padding</code> — inner spacing.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">direction</code> — <code>row</code> or <code>column</code>.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">gap</code> — spacing between children.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">align</code> — alignment of children.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">justify</code> — distribution of children.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">text</code> — for headers and paragraphs.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">label</code> — for buttons.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">src</code>, <code>alt</code> — for images.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">rounded</code>, <code>shadow</code> — image styling.</li>
              <li><code className="bg-gray-100 px-1 rounded text-xs">items</code> — array of list items.</li>
            </ul>
          </details>

        </div>
      </InstructionsModal>

      {/* MAIN LAYOUT */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-16" />
        <h1 className="text-2xl font-bold">Modular Page Builder</h1>
      </div>

      <p className="text-md mb-1">The Modular Page Builder is a tool for visually designing pages using JSON. Edit the JSON on the left to change the page on the right. Click the <strong>?</strong> button in the top right for more info on how to use it.</p>
      <div className="h-[85vh]  border rounded p-4">
        <div className="flex gap-8 h-full">

          {/* LEFT COLUMN — 40% */}
          <div className="w-[40%] h-full flex flex-col overflow-y-auto">
            <h2 className="text-lg mb-1 font-bold">JSON Editor</h2>
            <div className="flex justify-end mb-2">
              <InstructionsButton onOpen={() => setOpen(true)} />
            </div>

            {errors.length > 0 && (
              <div className="mb-4 text-red-600 text-sm">
                JSON error on line {errors[0].line + 1}
              </div>
            )}

            <div className="flex-1 overflow-y-auto border rounded">
              <JsonEditor
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                height="100%"
              />
            </div>
          </div>

          {/* RIGHT COLUMN — 60% */}
          <div className="w-[60%] h-full overflow-y-auto">
            <h2 className="text-lg mb-1 font-bold">Page Preview</h2>
            <PageRender layout={layout} />
          </div>

        </div>
      </div>

    </div>
  );
}
