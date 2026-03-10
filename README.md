# 🧱 JSON‑Driven Page Builder

A modular, theme‑aware, security‑hardened page builder built with React.  
This project renders full web pages from a JSON layout structure, similar to how tools like Webflow, Framer, or Builder.io represent content internally.

It’s designed to be:

- **Composable** — every block maps to a React component  
- **Theme‑driven** — supports `theme.*` tokens anywhere in props  
- **Safe** — sanitizes URLs, props, and children  
- **Resilient** — protects against malformed JSON and recursion bombs  
- **Developer‑friendly** — visual error overlays and console warnings in dev mode  

---

## 🚀 Features

### JSON → React Rendering
The `PageRender` component takes a JSON layout and turns it into a full page.  
Each block in the JSON maps to a component in `src/components/`.

### Theme Token Resolution
Any string starting with `theme.` automatically resolves to a value in the theme object:

```json
"color": "theme.primary"
```

## 🛡️ Security‑Hardened Rendering

The renderer protects against:

- Unsafe URLs (`javascript:`, `data:`, `http:`)
- Invalid props
- Unknown component types
- Malformed children
- Excessive recursion depth
- Excessive node count
- Invalid theme tokens

---

## 🧯 Dev‑Mode Visual Error Overlays

Instead of silently failing, invalid blocks render a friendly message:

> **Nice try, but not today 😎**

This makes debugging JSON layouts fast and intuitive.

---

## 🧼 Component‑Level Validation

Each component sanitizes its own props and styles to prevent:

- Invalid CSS  
- Invalid text values  
- Broken layouts  

---

## 📁 Project Structure


```
src/
    components/
        Section.jsx
        Header.jsx
        Paragraph.jsx
        Button.jsx
        Image.jsx
        Div.jsx
        List.jsx
        RenderError.jsx
    layout/
        sampleLayout.json
    ui/
        jsonEditor.jsx
        ThemePanel.jsx
    PageRender.jsx
    App.jsx
    App.css
```

---

## 🧩 How the JSON Layout Works

A layout file looks like this:

```json
{
  "theme": {
    "primary": "#3ac0bc",
    "background": "#ffffff",
    "text": "#3a2f2a"
  },
  "layout": [
    {
      "type": "section",
      "props": {
        "padding": "4rem",
        "backgroundColor": "theme.background"
      },
      "children": [
        {
          "type": "header",
          "props": {
            "text": "Hello World",
            "color": "theme.text"
          }
        }
      ]
    }
  ]
}
```

## 🧩 Block Structure

Every block has:

- **type** — maps to a component  
- **props** — passed into the component  
- **children** — nested blocks  

---

## 🛡️ Security & Sanitization

The renderer includes multiple layers of protection:

### 1. URL Sanitization
Only `https://` URLs are allowed. Everything else is blocked.

### 2. Prop Whitelisting
Each component has a strict list of allowed props. Anything else is dropped with a dev‑mode warning.

### 3. Theme Token Validation
Unknown tokens trigger warnings.

### 4. Depth & Node Limits
Prevents JSON bombs:

- Max depth: **20**  
- Max nodes: **500**  

### 5. Visual Error Overlays
Invalid blocks render a friendly error box in dev mode.


## 🛠️ Running the Project
Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open the editor and paste JSON into the editor panel to see it rendered live.

## 🧪 Stress Testing
The project includes intentionally chaotic JSON samples to test:

- invalid props

- unsafe URLs

- malformed children

- unknown component types

- recursion depth

- theme token failures

These help demonstrate the renderer’s resilience.

## 🎨 Customizing Components
All components live in src/components/.

You can add new block types by:

1. Creating a new component

2. Adding it to the components map in PageRender.jsx

3. Adding allowed props to the whitelist