import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark";

export default function JsonEditor({ value, onChange }) {
    return (
        <div className="border rounded json-editor-container">
            <CodeMirror
                value={value}
                height="100%"
                theme={oneDark}
                extensions={[json()]}
                onChange={(val) => onChange({ target: { value: val } })}
                basicSetup={{
                    lineNumbers: true,
                    foldGutter: true,
                    highlightActiveLine: true,
                }}
            />
        </div>
    );
}
