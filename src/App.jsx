import { useState, useEffect } from "react";
import layoutFile from "./layout/sampleLayout.js";
import PageRender from "./PageRender";
import ThemePanel from "./ui/ThemePanel";
import JsonEditor from "./ui/JsonEditor.jsx";

export default function App() {
  const [layout, setLayout] = useState(layoutFile);
  const [rawText, setRawText] = useState(JSON.stringify(layoutFile, null, 2));
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const t = layout.theme;
    if (!t) return;

    document.documentElement.style.setProperty("--theme-primary", t.primary);
    document.documentElement.style.setProperty("--theme-accent", t.accent);
    document.documentElement.style.setProperty("--theme-background", t.background);
    document.documentElement.style.setProperty("--theme-text", t.text);
  }, [layout.theme]);

  const applyChanges = () => {
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
  };

  return (
    <div className="p-8 flex flex-col gap-6">

      {/* INSTRUCTIONS CONTAINER */}
      <div className="text-sm text-gray-800 space-y-3">
        <details className="group border border-gray-200 rounded-md p-3">
          <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
            Editing this page
            <span className="transition-transform group-open:rotate-90 text-gray-500">›</span>
          </summary>
          <div className="mt-3 space-y-3 leading-relaxed">
            <p>
              This page is built entirely from the JSON in the editor. Each item in the
              <code className="px-1 py-0.5 rounded bg-gray-100 text-xs">layout</code> array is a component.
              Change text, swap images, adjust spacing, or move sections to update the layout.
            </p>
          </div>
        </details>

        <details className="group border border-gray-200 rounded-md p-3">
          <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
            Components you can use
            <span className="transition-transform group-open:rotate-90 text-gray-500">›</span>
          </summary>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li><code className="bg-gray-100 px-1 rounded text-xs">section</code> — full‑width block with backgrounds.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">div</code> — row/column container.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">header</code> — title text.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">paragraph</code> — body text.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">button</code> — call‑to‑action.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">image</code> — image with styling options.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">list</code> — bulleted list.</li>
          </ul>
        </details>

        <details className="group border border-gray-200 rounded-md p-3">
          <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
            Useful properties
            <span className="transition-transform group-open:rotate-90 text-gray-500">›</span>
          </summary>
          <ul className="mt-3 list-disc pl-5 space-y-1">
            <li><code className="bg-gray-100 px-1 rounded text-xs">background</code> — color or theme value.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">backgroundImage</code> — URL for hero backgrounds.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">padding</code> — inner spacing.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">direction</code> — row/column.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">gap</code> — space between children.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">align</code> — alignment.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">justify</code> — distribution.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">text</code> — for headers/paragraphs.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">label</code> — for buttons.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">src</code>, <code>alt</code> — for images.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">rounded</code>, <code>shadow</code>, <code>fullWidth</code> — image styling.</li>
            <li><code className="bg-gray-100 px-1 rounded text-xs">items</code> — for lists.</li>
          </ul>
        </details>
      </div>

      {/* SCROLLABLE BUILDER CONTAINER */}
      <div className="max-h-[70vh] overflow-auto border rounded p-4 h-dvh">
        

        <div className="flex gap-8 h-dvh">

          {/* LEFT COLUMN */}
          <div className="w-1/3 flex flex-col h-dvh min-h-0 h-1/2 ">

            <button
              className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={applyChanges}
            >
              Update Page
            </button>

            {errors.length > 0 && (
              <div className="mb-4 text-red-600 text-sm">
                JSON error on line {errors[0].line + 1}
              </div>
            )}

            <div className="flex-1 min-h-0 overflow-y-auto border rounded h-dvh">
              <JsonEditor
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                
                height="100%"
              />
            </div>

          </div>



          {/* RIGHT COLUMN */}
          <div className="w-2/3">
            <PageRender layout={layout} />
          </div>

        </div>
      </div>

      {/* <div className="editor-container flex gap-8">
        <div className="left-column">
          <div className="bg-pink-50 p-8 flex flex-col gap-6">
              <ThemePanel className="align-bottom" layout={layout} setLayout={setLayout} />
          </div>
        </div>
        <div className="right-column">
          <div className="bg-red-950 p-8 flex flex-col gap-6"></div>
        </div>
      </div> */}

    </div>
  );
}
