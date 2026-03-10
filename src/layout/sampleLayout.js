export default {
  "theme": {
    "primary": "#3ac0bc",
    "accent": "#b89a6f",
    "background": "#ffffff",
    "text": "#3a2f2a"
  },

  "layout": [
    {
      "type": "section",
      "props": {
        "padding": "6rem 2rem",
        "backgroundImage": "https://images.unsplash.com/photo-1502790671504-542ad42d5189?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "className": "text-center"
      },
      "children": [
        {
          "type": "header",
          "props": {
            "text": "Build Pages With Pure JSON",
            "fontSize": "3rem",
            "margin": "0 0 1rem 0",
            "color": "theme.background"
          }
        },
        {
          "type": "paragraph",
          "props": {
            "text": "A modular, flexible page builder powered entirely by JSON-driven components.",
            "fontSize": "1.25rem",
            "color": "theme.background",
            "margin": "0 auto 2rem auto",
            "width": "60%"
          }
        },
        {
          "type": "button",
          "props": {
            "label": "Start Editing",
            "padding": "1rem 2rem",
            "backgroundColor": "theme.primary",
            "color": "theme.background",
            "borderRadius": "8px",
            "margin": "0 auto"
          }
        }
      ]
    },

    {
      "type": "section",
      "props": {
        "padding": "4rem 2rem",
        "backgroundColor": "theme.background"
      },
      "children": [
        {
          "type": "div",
          "props": {
            "direction": "row",
            "gap": "2rem",
            "align": "center",
            "justify": "center",
            "padding": "2rem",
            "width": "100%"
          },
          "children": [
            {
              "type": "image",
              "props": {
                "src": "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80",
                "alt": "Workspace",
                "width": "400px",
                "height": "300px",
                "objectFit": "cover",
                "borderRadius": "12px",
                "shadow": true
              }
            },
            {
              "type": "div",
              "props": {
                "direction": "column",
                "gap": "1rem",
                "width": "400px"
              },
              "children": [
                {
                  "type": "header",
                  "props": {
                    "text": "Fully Modular Components",
                    "fontSize": "2rem",
                    "color": "theme.accent"
                  }
                },
                {
                  "type": "paragraph",
                  "props": {
                    "text": "Every component in this builder accepts flexible styling and layout attributes directly from JSON.",
                    "fontSize": "1rem",
                    "color": "theme.text"
                  }
                },
                {
                  "type": "list",
                  "props": {
                    "items": [
                      "Flexible layout primitives",
                      "Customizable styling",
                      "Theme-aware components",
                      "JSON as the single source of truth"
                    ],
                    "gap": "0.5rem",
                    "fontSize": "1rem",
                    "color": "theme.text",
                    "listStyle": "disc",
                    "margin": "1rem 0 0 1rem"
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
        "padding": "4rem 2rem",
        "backgroundColor": "theme.accent"
      },
      "children": [
        {
          "type": "header",
          "props": {
            "text": "Call to Action",
            "fontSize": "2.5rem",
            "align": "center",
            "margin": "0 0 1rem 0",
            "color": "theme.background"
          }
        },
        {
          "type": "paragraph",
          "props": {
            "text": "Ready to build something incredible? Edit the JSON and watch your page update instantly.",
            "fontSize": "1.125rem",
            "align": "center",
            "margin": "0 auto 2rem auto",
            "width": "60%",
            "color": "theme.background"
          }
        },
        {
          "type": "div",
          "props": {
            "direction": "row",
            "justify": "center"
          },
          "children": [
            {
              "type": "button",
              "props": {
                "label": "Get Started",
                "padding": "1rem 2rem",
                "backgroundColor": "theme.primary",
                "color": "theme.background",
                "borderRadius": "8px"
              }
            }
          ]
        }
      ]
    }
  ]
}
