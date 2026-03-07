export default {
  "theme": {
    "primary": "#4f8a8b",
    "accent": "#a3c4bc",
    "background": "#ffffff",
    "text": "#1a1a1a"
  },

  "layout": [

    {
      "type": "section",
      "props": {
        "backgroundImage": "https://images.unsplash.com/photo-1767172352170-19b1140dc51f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "padding": "6rem 4rem"
      },
      "children": [
        {
          "type": "div",
          "props": {
            "direction": "column",
            "gap": "1.5rem",
            "align": "center",
            "justify": "center"
          },
          "children": [
            {
              "type": "header",
              "props": {
                "text": "Build Pages Without the Chaos"
              }
            },
            {
              "type": "paragraph",
              "props": {
                "text": "A simple, modular system that keeps your content clean and your design consistent."
              }
            },
            {
              "type": "button",
              "props": {
                "label": "Start Building"
              }
            }
          ]
        }
      ]
    },

    {
      "type": "section",
      "props": {
        "background": "theme.accent",
        "padding": "4rem"
      },
      "children": [
        {
          "type": "div",
          "props": {
            "direction": "row",
            "gap": "2rem",
            "align": "flex-start",
            "justify": "space-between"
          },
          "children": [
            {
              "type": "div",
              "props": {
                "direction": "column",
                "gap": "1rem",
                "flex": 1
              },
              "children": [
                {
                  "type": "header",
                  "props": {
                    "text": "Why Modular Works"
                  }
                },
                {
                  "type": "paragraph",
                  "props": {
                    "text": "Each section is a self-contained component, so you can rearrange, reuse, and iterate without breaking your layout."
                  }
                }
              ]
            },
            {
              "type": "div",
              "props": {
                "direction": "column",
                "gap": "1rem",
                "flex": 1
              },
              "children": [
                {
                  "type": "image",
                  "props": {
                    "src": "https://images.unsplash.com/photo-1590545719316-085002117529?q=80&w=1740&auto=format&fit=crop",
                    "alt": "Workspace",
                    "rounded": true,
                    "shadow": true,
                    "fullWidth": true
                  }
                }
              ]
            }
          ]
        }
      ]
    },

    {
      "type": "section",
      "props": {
        "background": "theme.primary",
        "padding": "4rem"
      },
      "children": [
        {
          "type": "div",
          "props": {
            "direction": "column",
            "gap": "1rem",
            "align": "center",
            "justify": "center"
          },
          "children": [
            {
              "type": "header",
              "props": {
                "text": "Ready to Try It?"
              }
            },
            {
              "type": "button",
              "props": {
                "label": "Build a Page"
              }
            }
          ]
        }
      ]
    },

  ]
};
