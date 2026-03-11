import Section from "./components/Section";
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import Button from "./components/Button";
import Image from "./components/Image";
import Div from "./components/Div";
import List from "./components/List";
import RenderError from "./components/RenderError";

const components = {
  section: Section,
  header: Header,
  paragraph: Paragraph,
  button: Button,
  image: Image,
  div: Div,
  list: List,
};

// Limits to avoid JSON bombs
const MAX_DEPTH = 20;
const MAX_NODES = 500;

// Recursively resolve theme tokens like "theme.primary"
function resolveThemeTokens(value, theme) {
  if (typeof value === "string" && value.startsWith("theme.")) {
    const key = value.replace("theme.", "");
    const resolved = theme?.[key];

    if (process.env.NODE_ENV === "development" && resolved === undefined) {
      console.warn(
        `[PageRender] Unknown theme token "${value}". No matching key "${key}" found in theme.`
      );
    }

    return resolved ?? value;
  }

  if (Array.isArray(value)) {
    return value.map((v) => resolveThemeTokens(v, theme));
  }

  if (value && typeof value === "object") {
    const resolved = {};
    for (const k in value) {
      resolved[k] = resolveThemeTokens(value[k], theme);
    }
    return resolved;
  }

  return value;
}

// Basic URL sanitizer
function sanitizeUrl(url) {
  if (typeof url !== "string") {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[PageRender] Invalid URL (not a string):`, url);
    }
    return null;
  }

  const trimmed = url.trim().toLowerCase();
  if (!trimmed.startsWith("https://")) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        `[PageRender] Blocked unsafe URL "${url}". Only https:// URLs are allowed.`
      );
    }
    return null;
  }

  return url;
}

// Allowed props per component type
const allowedProps = {
  section: ["backgroundImage", "background", "backgroundColor", "padding", "className"],
  header: ["text", "fontSize", "color", "margin", "align", "className"],
  paragraph: ["text", "fontSize", "color", "margin", "width", "align", "className"],
  button: ["label", "padding", "backgroundColor", "color", "borderRadius", "margin", "className"],
  image: ["src", "alt", "width", "height", "objectFit", "borderRadius", "shadow", "className", "maxWidth"],
  div: ["direction", "gap", "align", "justify", "padding", "margin", "backgroundColor", "width", "height", "className", "flexwrap", "maxWidth"],
  list: ["items", "gap", "fontSize", "color", "listStyle", "margin", "className"],
};

// Filter + sanitize props per component
function filterProps(type, rawProps, theme) {
  const safe = {};
  const allowed = allowedProps[type] || [];

  for (const key in rawProps || {}) {
    if (!allowed.includes(key)) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          `[PageRender] Dropped prop "${key}" on <${type}> — not in allowedProps.`
        );
      }
      continue;
    }

    let value = rawProps[key];

    // URL sanitization
    if (type === "image" && key === "src") {
      const sanitized = sanitizeUrl(value);
      if (!sanitized) continue;
      value = sanitized;
    }

    if (type === "section" && key === "backgroundImage") {
      const sanitized = sanitizeUrl(value);
      if (!sanitized) continue;
      value = sanitized;
    }

    safe[key] = value;
  }

  // Resolve theme tokens after filtering
  return resolveThemeTokens(safe, theme);
}

export default function PageRender({ layout }) {
  const { theme, layout: blocks } = layout;
  let nodeCount = 0;

  const renderBlock = (block, i, depth = 0) => {
    // Invalid block
    if (!block || typeof block !== "object") {
      if (process.env.NODE_ENV === "development") {
        return (
          <RenderError
            key={i}
            message="Nice try, but not today 😎"
            details="Invalid block structure."
          />
        );
      }
      return null;
    }

    // Depth limit
    if (depth > MAX_DEPTH) {
      if (process.env.NODE_ENV === "development") {
        return (
          <RenderError
            key={i}
            message="Nice try, but not today 😎"
            details={`Exceeded max depth of ${MAX_DEPTH}.`}
          />
        );
      }
      return null;
    }

    // Node count limit
    if (nodeCount > MAX_NODES) {
      if (process.env.NODE_ENV === "development") {
        return (
          <RenderError
            key={i}
            message="Nice try, but not today 😎"
            details={`Exceeded max node count of ${MAX_NODES}.`}
          />
        );
      }
      return null;
    }

    nodeCount++;

    const Component = components[block.type];

    // Unknown component type
    if (!Component) {
      if (process.env.NODE_ENV === "development") {
        return (
          <RenderError
            key={i}
            message="Nice try, but not today 😎"
            details={`Unknown component type "${block.type}".`}
          />
        );
      }
      return null;
    }

    const resolvedProps = filterProps(block.type, block.props, theme);

    const children = Array.isArray(block.children)
      ? block.children.map((child, index) => {
          const rendered = renderBlock(child, index, depth + 1);
          if (!rendered && process.env.NODE_ENV === "development") {
            return (
              <RenderError
                key={index}
                message="Nice try, but not today 😎"
                details="Invalid child node."
              />
            );
          }
          return rendered;
        })
      : null;

    return (
      <Component key={i} theme={theme} {...resolvedProps}>
        {children}
      </Component>
    );
  };

  return <>{Array.isArray(blocks) ? blocks.map((block, i) => renderBlock(block, i, 0)) : null}</>;
}
