"use strict";
(() => {
  // tokens/design-tokens.json
  var design_tokens_default = {
    $schema: "https://design-tokens.github.io/community-group/format",
    meta: {
      name: "Finley AI Design System - Complete",
      version: "2.0.0",
      description: "Comprehensive design tokens for Finley AI including gradients, shadows, animations, and all visual details"
    },
    global: {
      typography: {
        fontFamily: {
          primary: {
            value: "Comfortaa, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
            type: "fontFamily"
          }
        },
        fontWeight: {
          light: {
            value: 300,
            type: "fontWeight"
          },
          regular: {
            value: 400,
            type: "fontWeight"
          },
          medium: {
            value: 500,
            type: "fontWeight"
          },
          semibold: {
            value: 600,
            type: "fontWeight"
          },
          bold: {
            value: 700,
            type: "fontWeight"
          },
          extrabold: {
            value: 800,
            type: "fontWeight"
          }
        },
        fontSize: {
          xs: {
            value: "12px",
            type: "fontSize"
          },
          sm: {
            value: "14px",
            type: "fontSize"
          },
          base: {
            value: "16px",
            type: "fontSize"
          },
          lg: {
            value: "18px",
            type: "fontSize"
          },
          xl: {
            value: "20px",
            type: "fontSize"
          },
          "2xl": {
            value: "22px",
            type: "fontSize"
          },
          "3xl": {
            value: "28px",
            type: "fontSize"
          },
          "4xl": {
            value: "42px",
            type: "fontSize"
          },
          "5xl": {
            value: "48px",
            type: "fontSize"
          },
          "6xl": {
            value: "58px",
            type: "fontSize"
          }
        },
        lineHeight: {
          tight: {
            value: 1.2,
            type: "lineHeight"
          },
          normal: {
            value: 1.5,
            type: "lineHeight"
          },
          relaxed: {
            value: 1.6,
            type: "lineHeight"
          }
        }
      },
      spacing: {
        xs: {
          value: "4px",
          type: "spacing"
        },
        sm: {
          value: "8px",
          type: "spacing"
        },
        md: {
          value: "16px",
          type: "spacing"
        },
        lg: {
          value: "24px",
          type: "spacing"
        },
        xl: {
          value: "32px",
          type: "spacing"
        },
        "2xl": {
          value: "40px",
          type: "spacing"
        },
        "3xl": {
          value: "60px",
          type: "spacing"
        },
        "4xl": {
          value: "80px",
          type: "spacing"
        },
        "5xl": {
          value: "100px",
          type: "spacing"
        }
      },
      borderRadius: {
        sm: {
          value: "8px",
          type: "borderRadius"
        },
        md: {
          value: "12px",
          type: "borderRadius"
        },
        lg: {
          value: "16px",
          type: "borderRadius"
        },
        xl: {
          value: "20px",
          type: "borderRadius"
        },
        "2xl": {
          value: "24px",
          type: "borderRadius"
        },
        full: {
          value: "50px",
          type: "borderRadius"
        }
      },
      borderWidth: {
        none: {
          value: "0px",
          type: "borderWidth"
        },
        thin: {
          value: "1px",
          type: "borderWidth"
        },
        medium: {
          value: "2px",
          type: "borderWidth"
        },
        thick: {
          value: "3px",
          type: "borderWidth"
        }
      },
      shadow: {
        sm: {
          value: "0 4px 20px rgba(0, 0, 0, 0.08)",
          type: "boxShadow"
        },
        md: {
          value: "0 10px 30px rgba(0, 0, 0, 0.15)",
          type: "boxShadow"
        },
        lg: {
          value: "0 10px 40px rgba(0, 0, 0, 0.15)",
          type: "boxShadow"
        },
        xl: {
          value: "0 20px 60px rgba(0, 0, 0, 0.12)",
          type: "boxShadow"
        },
        "2xl": {
          value: "0 25px 70px rgba(0, 0, 0, 0.18)",
          type: "boxShadow"
        },
        icon: {
          value: "0 8px 20px rgba(0, 0, 0, 0.15)",
          type: "boxShadow"
        },
        button: {
          value: "0 10px 30px rgba(0, 0, 0, 0.15)",
          type: "boxShadow"
        },
        buttonHover: {
          value: "0 15px 40px rgba(0, 0, 0, 0.25)",
          type: "boxShadow"
        },
        cardHover: {
          value: "0 20px 50px rgba(0, 0, 0, 0.15)",
          type: "boxShadow"
        }
      },
      textShadow: {
        sm: {
          value: "0 2px 8px rgba(0, 0, 0, 0.2)",
          type: "textShadow"
        },
        md: {
          value: "0 4px 15px rgba(0, 0, 0, 0.15)",
          type: "textShadow"
        },
        lg: {
          value: "0 4px 20px rgba(0, 0, 0, 0.1)",
          type: "textShadow"
        }
      },
      opacity: {
        transparent: {
          value: 0,
          type: "opacity"
        },
        low: {
          value: 0.2,
          type: "opacity"
        },
        medium: {
          value: 0.5,
          type: "opacity"
        },
        high: {
          value: 0.8,
          type: "opacity"
        },
        subtle: {
          value: 0.9,
          type: "opacity"
        },
        almostFull: {
          value: 0.95,
          type: "opacity"
        },
        full: {
          value: 1,
          type: "opacity"
        }
      },
      transition: {
        fast: {
          value: "0.15s ease",
          type: "transition"
        },
        medium: {
          value: "0.3s ease",
          type: "transition"
        },
        slow: {
          value: "0.5s ease",
          type: "transition"
        }
      },
      animation: {
        hover: {
          translateY: {
            value: "-2px",
            type: "dimension"
          },
          scale: {
            value: 1.05,
            type: "number"
          }
        },
        cardHover: {
          translateY: {
            value: "-5px",
            type: "dimension"
          }
        },
        featureCardHover: {
          translateY: {
            value: "-8px",
            type: "dimension"
          }
        }
      }
    },
    components: {
      button: {
        primary: {
          padding: {
            value: "18px 36px",
            type: "spacing"
          },
          fontSize: {
            value: "{global.typography.fontSize.lg}",
            type: "fontSize"
          },
          fontWeight: {
            value: "{global.typography.fontWeight.bold}",
            type: "fontWeight"
          },
          borderRadius: {
            value: "{global.borderRadius.full}",
            type: "borderRadius"
          },
          borderWidth: {
            value: "{global.borderWidth.none}",
            type: "borderWidth"
          },
          transition: {
            value: "{global.transition.medium}",
            type: "transition"
          },
          shadow: {
            default: {
              value: "{global.shadow.button}",
              type: "boxShadow"
            },
            hover: {
              value: "{global.shadow.buttonHover}",
              type: "boxShadow"
            }
          }
        }
      },
      card: {
        hero: {
          borderRadius: {
            value: "{global.borderRadius.2xl}",
            type: "borderRadius"
          },
          padding: {
            value: "{global.spacing.2xl}",
            type: "spacing"
          },
          shadow: {
            default: {
              value: "{global.shadow.xl}",
              type: "boxShadow"
            },
            hover: {
              value: "{global.shadow.2xl}",
              type: "boxShadow"
            }
          },
          transition: {
            value: "{global.transition.medium}",
            type: "transition"
          }
        },
        feature: {
          borderRadius: {
            value: "{global.borderRadius.xl}",
            type: "borderRadius"
          },
          padding: {
            value: "36px",
            type: "spacing"
          },
          shadow: {
            default: {
              value: "{global.shadow.lg}",
              type: "boxShadow"
            },
            hover: {
              value: "{global.shadow.cardHover}",
              type: "boxShadow"
            }
          },
          transition: {
            value: "{global.transition.medium}",
            type: "transition"
          }
        }
      },
      header: {
        padding: {
          value: "20px 40px",
          type: "spacing"
        },
        shadow: {
          value: "{global.shadow.sm}",
          type: "boxShadow"
        }
      },
      nav: {
        link: {
          padding: {
            value: "8px 16px",
            type: "spacing"
          },
          borderRadius: {
            value: "{global.borderRadius.sm}",
            type: "borderRadius"
          },
          fontWeight: {
            value: "{global.typography.fontWeight.medium}",
            type: "fontWeight"
          },
          transition: {
            value: "{global.transition.medium}",
            type: "transition"
          },
          hoverBackground: {
            value: "rgba(255, 255, 255, 0.2)",
            type: "color"
          }
        }
      },
      icon: {
        size: {
          value: "60px",
          type: "dimension"
        },
        borderRadius: {
          value: "{global.borderRadius.lg}",
          type: "borderRadius"
        },
        shadow: {
          value: "{global.shadow.icon}",
          type: "boxShadow"
        }
      },
      stat: {
        number: {
          fontSize: {
            value: "{global.typography.fontSize.5xl}",
            type: "fontSize"
          },
          fontWeight: {
            value: "{global.typography.fontWeight.bold}",
            type: "fontWeight"
          }
        },
        label: {
          fontSize: {
            value: "{global.typography.fontSize.base}",
            type: "fontSize"
          },
          fontWeight: {
            value: "{global.typography.fontWeight.medium}",
            type: "fontWeight"
          },
          marginTop: {
            value: "4px",
            type: "spacing"
          },
          opacity: {
            value: "{global.opacity.subtle}",
            type: "opacity"
          }
        },
        marginBottom: {
          value: "30px",
          type: "spacing"
        }
      },
      logo: {
        fontSize: {
          value: "{global.typography.fontSize.3xl}",
          type: "fontSize"
        },
        fontWeight: {
          value: "{global.typography.fontWeight.bold}",
          type: "fontWeight"
        },
        textShadow: {
          value: "{global.textShadow.sm}",
          type: "textShadow"
        }
      },
      hero: {
        title: {
          fontSize: {
            value: "{global.typography.fontSize.6xl}",
            type: "fontSize"
          },
          fontWeight: {
            value: "{global.typography.fontWeight.extrabold}",
            type: "fontWeight"
          },
          lineHeight: {
            value: "{global.typography.lineHeight.tight}",
            type: "lineHeight"
          },
          marginBottom: {
            value: "{global.spacing.lg}",
            type: "spacing"
          }
        },
        description: {
          fontSize: {
            value: "{global.typography.fontSize.xl}",
            type: "fontSize"
          },
          lineHeight: {
            value: "{global.typography.lineHeight.relaxed}",
            type: "lineHeight"
          },
          marginBottom: {
            value: "{global.spacing.xl}",
            type: "spacing"
          }
        },
        maxWidth: {
          value: "1200px",
          type: "dimension"
        },
        marginTop: {
          value: "{global.spacing.4xl}",
          type: "spacing"
        },
        gap: {
          value: "{global.spacing.3xl}",
          type: "spacing"
        }
      },
      section: {
        title: {
          fontSize: {
            value: "{global.typography.fontSize.4xl}",
            type: "fontSize"
          },
          fontWeight: {
            value: "{global.typography.fontWeight.extrabold}",
            type: "fontWeight"
          },
          marginBottom: {
            value: "{global.spacing.3xl}",
            type: "spacing"
          }
        }
      },
      featureCard: {
        title: {
          fontSize: {
            value: "{global.typography.fontSize.2xl}",
            type: "fontSize"
          },
          fontWeight: {
            value: "{global.typography.fontWeight.bold}",
            type: "fontWeight"
          },
          marginBottom: {
            value: "12px",
            type: "spacing"
          }
        },
        description: {
          lineHeight: {
            value: "{global.typography.lineHeight.relaxed}",
            type: "lineHeight"
          }
        }
      },
      themeControls: {
        selector: {
          padding: {
            value: "15px",
            type: "spacing"
          },
          borderRadius: {
            value: "{global.borderRadius.md}",
            type: "borderRadius"
          },
          borderWidth: {
            value: "{global.borderWidth.medium}",
            type: "borderWidth"
          },
          borderColor: {
            value: "rgba(255, 255, 255, 0.3)",
            type: "color"
          },
          shadow: {
            value: "{global.shadow.md}",
            type: "boxShadow"
          }
        },
        select: {
          padding: {
            value: "10px 15px",
            type: "spacing"
          },
          borderRadius: {
            value: "{global.borderRadius.sm}",
            type: "borderRadius"
          },
          borderWidth: {
            value: "{global.borderWidth.medium}",
            type: "borderWidth"
          },
          fontSize: {
            value: "{global.typography.fontSize.sm}",
            type: "fontSize"
          },
          fontWeight: {
            value: "{global.typography.fontWeight.semibold}",
            type: "fontWeight"
          },
          minWidth: {
            value: "200px",
            type: "dimension"
          }
        },
        toggle: {
          size: {
            value: "50px",
            type: "dimension"
          },
          borderRadius: {
            value: "{global.borderRadius.md}",
            type: "borderRadius"
          },
          fontSize: {
            value: "24px",
            type: "fontSize"
          },
          shadow: {
            value: "{global.shadow.md}",
            type: "boxShadow"
          },
          transition: {
            value: "{global.transition.medium}",
            type: "transition"
          }
        }
      }
    },
    themes: {
      "classic-teal-lemon": {
        light: {
          color: {
            background: {
              primary: {
                value: "#FFFFFF",
                type: "color"
              },
              secondary: {
                value: "#F8F9FA",
                type: "color"
              }
            },
            accent: {
              primary: {
                value: "#FFF348",
                type: "color"
              },
              secondary: {
                value: "#FFE082",
                type: "color"
              }
            },
            gradient: {
              accent: {
                value: "linear-gradient(135deg, #FFF348 0%, #FFE082 100%)",
                type: "gradient"
              },
              card: {
                value: "linear-gradient(135deg, #3EB8AF 0%, #2CA89F 100%)",
                type: "gradient"
              },
              header: {
                value: "linear-gradient(135deg, #3EB8AF 0%, #2CA89F 100%)",
                type: "gradient"
              }
            },
            card: {
              start: {
                value: "#3EB8AF",
                type: "color"
              },
              end: {
                value: "#2CA89F",
                type: "color"
              }
            },
            header: {
              start: {
                value: "#3EB8AF",
                type: "color"
              },
              end: {
                value: "#2CA89F",
                type: "color"
              }
            },
            text: {
              primary: {
                value: "#2a2a2a",
                type: "color"
              },
              secondary: {
                value: "#666666",
                type: "color"
              },
              onColor: {
                value: "#FFFFFF",
                type: "color"
              },
              button: {
                value: "#2a2a2a",
                type: "color"
              }
            }
          }
        },
        dark: {
          color: {
            background: {
              primary: {
                value: "#2A2A2A",
                type: "color"
              },
              secondary: {
                value: "#3D3D3D",
                type: "color"
              }
            },
            accent: {
              primary: {
                value: "#FFF348",
                type: "color"
              },
              secondary: {
                value: "#FFE082",
                type: "color"
              }
            },
            gradient: {
              accent: {
                value: "linear-gradient(135deg, #FFF348 0%, #FFE082 100%)",
                type: "gradient"
              },
              card: {
                value: "linear-gradient(135deg, #3A3A3A 0%, #2E2E2E 100%)",
                type: "gradient"
              },
              header: {
                value: "linear-gradient(135deg, #1F1F1F 0%, #151515 100%)",
                type: "gradient"
              }
            },
            card: {
              start: {
                value: "#3A3A3A",
                type: "color"
              },
              end: {
                value: "#2E2E2E",
                type: "color"
              }
            },
            header: {
              start: {
                value: "#1F1F1F",
                type: "color"
              },
              end: {
                value: "#151515",
                type: "color"
              }
            },
            text: {
              primary: {
                value: "#E5E5E5",
                type: "color"
              },
              secondary: {
                value: "#B0B0B0",
                type: "color"
              },
              onColor: {
                value: "#FFFFFF",
                type: "color"
              },
              button: {
                value: "#2a2a2a",
                type: "color"
              }
            }
          }
        }
      },
      "ocean-breeze": {
        light: {
          color: {
            background: {
              primary: {
                value: "#FFFFFF",
                type: "color"
              },
              secondary: {
                value: "#F0F8FF",
                type: "color"
              }
            },
            accent: {
              primary: {
                value: "#4FC3F7",
                type: "color"
              },
              secondary: {
                value: "#29B6F6",
                type: "color"
              }
            },
            gradient: {
              accent: {
                value: "linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%)",
                type: "gradient"
              },
              card: {
                value: "linear-gradient(135deg, #0288D1 0%, #0277BD 100%)",
                type: "gradient"
              },
              header: {
                value: "linear-gradient(135deg, #0288D1 0%, #0277BD 100%)",
                type: "gradient"
              }
            },
            card: {
              start: {
                value: "#0288D1",
                type: "color"
              },
              end: {
                value: "#0277BD",
                type: "color"
              }
            },
            header: {
              start: {
                value: "#0288D1",
                type: "color"
              },
              end: {
                value: "#0277BD",
                type: "color"
              }
            },
            text: {
              primary: {
                value: "#1A237E",
                type: "color"
              },
              secondary: {
                value: "#5C6BC0",
                type: "color"
              },
              onColor: {
                value: "#FFFFFF",
                type: "color"
              },
              button: {
                value: "#1A237E",
                type: "color"
              }
            }
          }
        },
        dark: {
          color: {
            background: {
              primary: {
                value: "#0D1B2A",
                type: "color"
              },
              secondary: {
                value: "#1B263B",
                type: "color"
              }
            },
            accent: {
              primary: {
                value: "#4FC3F7",
                type: "color"
              },
              secondary: {
                value: "#29B6F6",
                type: "color"
              }
            },
            gradient: {
              accent: {
                value: "linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%)",
                type: "gradient"
              },
              card: {
                value: "linear-gradient(135deg, #1E3A5F 0%, #1A2F4A 100%)",
                type: "gradient"
              },
              header: {
                value: "linear-gradient(135deg, #0D1B2A 0%, #0A1628 100%)",
                type: "gradient"
              }
            },
            card: {
              start: {
                value: "#1E3A5F",
                type: "color"
              },
              end: {
                value: "#1A2F4A",
                type: "color"
              }
            },
            header: {
              start: {
                value: "#0D1B2A",
                type: "color"
              },
              end: {
                value: "#0A1628",
                type: "color"
              }
            },
            text: {
              primary: {
                value: "#E3F2FD",
                type: "color"
              },
              secondary: {
                value: "#90CAF9",
                type: "color"
              },
              onColor: {
                value: "#FFFFFF",
                type: "color"
              },
              button: {
                value: "#1A237E",
                type: "color"
              }
            }
          }
        }
      },
      "soft-pastels": {
        light: {
          color: {
            background: {
              primary: {
                value: "#FFFFFF",
                type: "color"
              },
              secondary: {
                value: "#FFF9F5",
                type: "color"
              }
            },
            accent: {
              primary: {
                value: "#FFB3BA",
                type: "color"
              },
              secondary: {
                value: "#FFDFBA",
                type: "color"
              }
            },
            gradient: {
              accent: {
                value: "linear-gradient(135deg, #FFB3BA 0%, #FFDFBA 100%)",
                type: "gradient"
              },
              card: {
                value: "linear-gradient(135deg, #BFBFE6 0%, #D4BFE8 100%)",
                type: "gradient"
              },
              header: {
                value: "linear-gradient(135deg, #BFBFE6 0%, #D4BFE8 100%)",
                type: "gradient"
              }
            },
            card: {
              start: {
                value: "#BFBFE6",
                type: "color"
              },
              end: {
                value: "#D4BFE8",
                type: "color"
              }
            },
            header: {
              start: {
                value: "#BFBFE6",
                type: "color"
              },
              end: {
                value: "#D4BFE8",
                type: "color"
              }
            },
            text: {
              primary: {
                value: "#4A4063",
                type: "color"
              },
              secondary: {
                value: "#8B7BA8",
                type: "color"
              },
              onColor: {
                value: "#FFFFFF",
                type: "color"
              },
              button: {
                value: "#4A4063",
                type: "color"
              }
            }
          }
        },
        dark: {
          color: {
            background: {
              primary: {
                value: "#2D2438",
                type: "color"
              },
              secondary: {
                value: "#3D3148",
                type: "color"
              }
            },
            accent: {
              primary: {
                value: "#FFB3BA",
                type: "color"
              },
              secondary: {
                value: "#FFDFBA",
                type: "color"
              }
            },
            gradient: {
              accent: {
                value: "linear-gradient(135deg, #FFB3BA 0%, #FFDFBA 100%)",
                type: "gradient"
              },
              card: {
                value: "linear-gradient(135deg, #4A3F5C 0%, #514561 100%)",
                type: "gradient"
              },
              header: {
                value: "linear-gradient(135deg, #2D2438 0%, #261F34 100%)",
                type: "gradient"
              }
            },
            card: {
              start: {
                value: "#4A3F5C",
                type: "color"
              },
              end: {
                value: "#514561",
                type: "color"
              }
            },
            header: {
              start: {
                value: "#2D2438",
                type: "color"
              },
              end: {
                value: "#261F34",
                type: "color"
              }
            },
            text: {
              primary: {
                value: "#F5E6FF",
                type: "color"
              },
              secondary: {
                value: "#D4BFE8",
                type: "color"
              },
              onColor: {
                value: "#FFFFFF",
                type: "color"
              },
              button: {
                value: "#4A4063",
                type: "color"
              }
            }
          }
        }
      },
      "cool-professional": {
        light: {
          color: {
            background: {
              primary: {
                value: "#FFFFFF",
                type: "color"
              },
              secondary: {
                value: "#F5F7FA",
                type: "color"
              }
            },
            accent: {
              primary: {
                value: "#00BCD4",
                type: "color"
              },
              secondary: {
                value: "#00ACC1",
                type: "color"
              }
            },
            gradient: {
              accent: {
                value: "linear-gradient(135deg, #00BCD4 0%, #00ACC1 100%)",
                type: "gradient"
              },
              card: {
                value: "linear-gradient(135deg, #37474F 0%, #263238 100%)",
                type: "gradient"
              },
              header: {
                value: "linear-gradient(135deg, #37474F 0%, #263238 100%)",
                type: "gradient"
              }
            },
            card: {
              start: {
                value: "#37474F",
                type: "color"
              },
              end: {
                value: "#263238",
                type: "color"
              }
            },
            header: {
              start: {
                value: "#37474F",
                type: "color"
              },
              end: {
                value: "#263238",
                type: "color"
              }
            },
            text: {
              primary: {
                value: "#263238",
                type: "color"
              },
              secondary: {
                value: "#607D8B",
                type: "color"
              },
              onColor: {
                value: "#FFFFFF",
                type: "color"
              },
              button: {
                value: "#263238",
                type: "color"
              }
            }
          }
        },
        dark: {
          color: {
            background: {
              primary: {
                value: "#121212",
                type: "color"
              },
              secondary: {
                value: "#1E1E1E",
                type: "color"
              }
            },
            accent: {
              primary: {
                value: "#00BCD4",
                type: "color"
              },
              secondary: {
                value: "#00ACC1",
                type: "color"
              }
            },
            gradient: {
              accent: {
                value: "linear-gradient(135deg, #00BCD4 0%, #00ACC1 100%)",
                type: "gradient"
              },
              card: {
                value: "linear-gradient(135deg, #2C2C2C 0%, #232323 100%)",
                type: "gradient"
              },
              header: {
                value: "linear-gradient(135deg, #1A1A1A 0%, #0F0F0F 100%)",
                type: "gradient"
              }
            },
            card: {
              start: {
                value: "#2C2C2C",
                type: "color"
              },
              end: {
                value: "#232323",
                type: "color"
              }
            },
            header: {
              start: {
                value: "#1A1A1A",
                type: "color"
              },
              end: {
                value: "#0F0F0F",
                type: "color"
              }
            },
            text: {
              primary: {
                value: "#ECEFF1",
                type: "color"
              },
              secondary: {
                value: "#B0BEC5",
                type: "color"
              },
              onColor: {
                value: "#FFFFFF",
                type: "color"
              },
              button: {
                value: "#263238",
                type: "color"
              }
            }
          }
        }
      }
    }
  };

  // screens/hello-world-screen.json
  var hello_world_screen_default = {
    name: "Hello World",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "Hello World",
        x: 120,
        y: 300,
        fontSize: 42,
        colorToken: "color.text.primary"
      }
    ]
  };

  // screens/login-screen.json
  var login_screen_default = {
    name: "Login Screen",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "Welcome Back",
        x: 50,
        y: 150,
        fontSize: 32,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Sign in to continue",
        x: 50,
        y: 200,
        fontSize: 16,
        colorToken: "color.text.secondary"
      },
      {
        type: "rectangle",
        x: 24,
        y: 280,
        width: 343,
        height: 50,
        borderRadius: 12,
        colorToken: "color.card.start"
      },
      {
        type: "text",
        content: "Email",
        x: 41,
        y: 294,
        fontSize: 16,
        colorToken: "color.text.secondary"
      },
      {
        type: "rectangle",
        x: 24,
        y: 350,
        width: 343,
        height: 50,
        borderRadius: 12,
        colorToken: "color.card.start"
      },
      {
        type: "text",
        content: "Password",
        x: 41,
        y: 364,
        fontSize: 16,
        colorToken: "color.text.secondary"
      },
      {
        type: "button",
        x: 24,
        y: 440,
        width: 343,
        height: 56,
        borderRadius: 12,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "Sign In",
        x: 155,
        y: 458,
        fontSize: 18,
        colorToken: "color.text.button"
      },
      {
        type: "text",
        content: "Forgot Password?",
        x: 125,
        y: 520,
        fontSize: 14,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      }
    ]
  };

  // screens/onboarding-welcome.json
  var onboarding_welcome_default = {
    name: "Onboarding - Welcome",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "Skip",
        x: 325,
        y: 60,
        fontSize: 16,
        colorToken: "color.text.onColor"
      },
      {
        type: "text",
        content: "Welcome to App",
        x: 60,
        y: 450,
        fontSize: 32,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Discover amazing features",
        x: 50,
        y: 500,
        fontSize: 16,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "and make your life easier",
        x: 50,
        y: 530,
        fontSize: 16,
        colorToken: "color.text.secondary"
      },
      {
        type: "rectangle",
        x: 175,
        y: 620,
        width: 8,
        height: 8,
        borderRadius: 50,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "rectangle",
        x: 193,
        y: 620,
        width: 8,
        height: 8,
        borderRadius: 50,
        colorToken: "color.accent.secondary"
      },
      {
        type: "rectangle",
        x: 211,
        y: 620,
        width: 8,
        height: 8,
        borderRadius: 50,
        colorToken: "color.accent.secondary"
      },
      {
        type: "button",
        x: 24,
        y: 700,
        width: 343,
        height: 56,
        borderRadius: 12,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "Get Started",
        x: 140,
        y: 718,
        fontSize: 18,
        colorToken: "color.text.button"
      }
    ]
  };

  // screens/profile-screen.json
  var profile_screen_default = {
    name: "Profile Screen",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "John Appleseed",
        x: 110,
        y: 220,
        fontSize: 24,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "john@example.com",
        x: 110,
        y: 260,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "rectangle",
        x: 24,
        y: 320,
        width: 343,
        height: 80,
        borderRadius: 16,
        colorToken: "color.card.start"
      },
      {
        type: "text",
        content: "Posts",
        x: 60,
        y: 335,
        fontSize: 12,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "124",
        x: 60,
        y: 355,
        fontSize: 20,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Followers",
        x: 170,
        y: 335,
        fontSize: 12,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "2.5K",
        x: 170,
        y: 355,
        fontSize: 20,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Following",
        x: 280,
        y: 335,
        fontSize: 12,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "342",
        x: 290,
        y: 355,
        fontSize: 20,
        colorToken: "color.text.primary"
      },
      {
        type: "button",
        x: 24,
        y: 440,
        width: 343,
        height: 56,
        borderRadius: 16,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "Edit Profile",
        x: 145,
        y: 458,
        fontSize: 18,
        colorToken: "color.text.button"
      },
      {
        type: "button",
        x: 24,
        y: 512,
        width: 343,
        height: 56,
        borderRadius: 16,
        colorToken: "color.card.start"
      },
      {
        type: "text",
        content: "Settings",
        x: 160,
        y: 530,
        fontSize: 18,
        colorToken: "color.text.primary"
      }
    ]
  };

  // screens/dashboard-screen.json
  var dashboard_screen_default = {
    name: "Dashboard",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "Good Morning",
        x: 25,
        y: 80,
        fontSize: 16,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "John",
        x: 25,
        y: 105,
        fontSize: 32,
        colorToken: "color.text.primary"
      },
      {
        type: "rectangle",
        x: 24,
        y: 180,
        width: 343,
        height: 160,
        borderRadius: 20,
        colorToken: "color.header.start"
      },
      {
        type: "text",
        content: "Total Balance",
        x: 49,
        y: 200,
        fontSize: 14,
        colorToken: "color.text.onColor"
      },
      {
        type: "text",
        content: "$12,345.67",
        x: 49,
        y: 230,
        fontSize: 42,
        colorToken: "color.text.onColor"
      },
      {
        type: "text",
        content: "+12.5% from last month",
        x: 49,
        y: 290,
        fontSize: 12,
        colorToken: "color.text.onColor"
      },
      {
        type: "text",
        content: "Quick Actions",
        x: 25,
        y: 370,
        fontSize: 20,
        colorToken: "color.text.primary"
      },
      {
        type: "rectangle",
        x: 25,
        y: 415,
        width: 165,
        height: 120,
        borderRadius: 16,
        colorToken: "color.card.start"
      },
      {
        type: "text",
        content: "Send",
        x: 45,
        y: 490,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "rectangle",
        x: 203,
        y: 415,
        width: 165,
        height: 120,
        borderRadius: 16,
        colorToken: "color.card.end"
      },
      {
        type: "text",
        content: "Receive",
        x: 223,
        y: 490,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Recent Transactions",
        x: 25,
        y: 565,
        fontSize: 20,
        colorToken: "color.text.primary"
      },
      {
        type: "rectangle",
        x: 24,
        y: 615,
        width: 343,
        height: 70,
        borderRadius: 12,
        colorToken: "color.card.start"
      },
      {
        type: "text",
        content: "Coffee Shop",
        x: 85,
        y: 628,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Today, 8:30 AM",
        x: 85,
        y: 652,
        fontSize: 12,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "-$5.40",
        x: 305,
        y: 638,
        fontSize: 16,
        colorToken: "color.accent.secondary"
      }
    ]
  };

  // screens/01-welcome-screen.json
  var welcome_screen_default = {
    name: "01 - Welcome Screen",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "Build Your Wealth,",
        x: 40,
        y: 300,
        fontSize: 32,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "One Decision at",
        x: 70,
        y: 340,
        fontSize: 32,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "a Time",
        x: 130,
        y: 380,
        fontSize: 32,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Compare your choices against 16M",
        x: 50,
        y: 440,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "Australians and see your financial future",
        x: 40,
        y: 460,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "button",
        x: 40,
        y: 720,
        width: 310,
        height: 56,
        borderRadius: 28,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "Get Started",
        x: 150,
        y: 738,
        fontSize: 18,
        colorToken: "color.text.button"
      }
    ]
  };

  // screens/02-onboarding-age.json
  var onboarding_age_default = {
    name: "02 - Onboarding Age",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "1/5",
        x: 30,
        y: 60,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "rectangle",
        x: 30,
        y: 85,
        width: 70,
        height: 4,
        borderRadius: 2,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "rectangle",
        x: 105,
        y: 85,
        width: 255,
        height: 4,
        borderRadius: 2,
        colorToken: "color.card.start"
      },
      {
        type: "text",
        content: "Let's get to know you",
        x: 85,
        y: 220,
        fontSize: 24,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "What's your age?",
        x: 130,
        y: 260,
        fontSize: 16,
        colorToken: "color.text.secondary"
      },
      {
        type: "rectangle",
        x: 155,
        y: 290,
        width: 80,
        height: 80,
        borderRadius: 40,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "28",
        x: 175,
        y: 315,
        fontSize: 32,
        colorToken: "color.text.button"
      },
      {
        type: "rectangle",
        x: 60,
        y: 420,
        width: 270,
        height: 100,
        borderRadius: 12,
        colorToken: "color.card.start"
      },
      {
        type: "text",
        content: "Decisions over next X years",
        x: 80,
        y: 440,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "have a big impact on your",
        x: 80,
        y: 460,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "wealth",
        x: 155,
        y: 480,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "button",
        x: 60,
        y: 720,
        width: 270,
        height: 56,
        borderRadius: 28,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "Next",
        x: 175,
        y: 738,
        fontSize: 18,
        colorToken: "color.text.button"
      }
    ]
  };

  // screens/03-onboarding-income.json
  var onboarding_income_default = {
    name: "03 - Onboarding Income",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "2/5",
        x: 30,
        y: 60,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "rectangle",
        x: 30,
        y: 85,
        width: 140,
        height: 4,
        borderRadius: 2,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "$",
        x: 155,
        y: 120,
        fontSize: 64,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "What's your",
        x: 110,
        y: 220,
        fontSize: 28,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "income?",
        x: 140,
        y: 255,
        fontSize: 28,
        colorToken: "color.text.primary"
      },
      {
        type: "rectangle",
        x: 60,
        y: 305,
        width: 270,
        height: 56,
        borderRadius: 12,
        colorToken: "color.card.start"
      },
      {
        type: "text",
        content: "A$  $65,000",
        x: 80,
        y: 323,
        fontSize: 20,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "You earn 44% more than the",
        x: 80,
        y: 390,
        fontSize: 12,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "Australian median ($45,000)",
        x: 80,
        y: 408,
        fontSize: 12,
        colorToken: "color.text.secondary"
      },
      {
        type: "button",
        x: 60,
        y: 720,
        width: 270,
        height: 56,
        borderRadius: 28,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "Next",
        x: 175,
        y: 738,
        fontSize: 18,
        colorToken: "color.text.button"
      }
    ]
  };

  // screens/04-onboarding-assets.json
  var onboarding_assets_default = {
    name: "04 - Onboarding Assets",
    width: 390,
    height: 844,
    elements: [
      {
        type: "rectangle",
        x: 40,
        y: 100,
        width: 310,
        height: 350,
        borderRadius: 16,
        colorToken: "color.card.start"
      },
      {
        type: "text",
        content: "Assets:",
        x: 165,
        y: 140,
        fontSize: 18,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Cash (liquid)",
        x: 125,
        y: 190,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Investments (liquid v illiquid)",
        x: 75,
        y: 240,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Property (% ownership)",
        x: 90,
        y: 290,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Other (car, other)",
        x: 115,
        y: 340,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "button",
        x: 40,
        y: 720,
        width: 310,
        height: 56,
        borderRadius: 28,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "Next",
        x: 175,
        y: 738,
        fontSize: 18,
        colorToken: "color.text.button"
      }
    ]
  };

  // screens/05-onboarding-super.json
  var onboarding_super_default = {
    name: "05 - Onboarding Super",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "4/5",
        x: 30,
        y: 60,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "Superannuation",
        x: 105,
        y: 220,
        fontSize: 24,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "balance?",
        x: 140,
        y: 255,
        fontSize: 24,
        colorToken: "color.text.primary"
      },
      {
        type: "rectangle",
        x: 60,
        y: 305,
        width: 270,
        height: 70,
        borderRadius: 12,
        colorToken: "color.card.start"
      },
      {
        type: "text",
        content: "$25,000",
        x: 130,
        y: 328,
        fontSize: 28,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Australian average for 28yr old: $23,000",
        x: 70,
        y: 400,
        fontSize: 12,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "You're ahead by $2,000!",
        x: 115,
        y: 430,
        fontSize: 14,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "Super is 40% of retirement wealth",
        x: 85,
        y: 460,
        fontSize: 12,
        colorToken: "color.text.secondary"
      },
      {
        type: "button",
        x: 60,
        y: 720,
        width: 270,
        height: 56,
        borderRadius: 28,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "Next",
        x: 175,
        y: 738,
        fontSize: 18,
        colorToken: "color.text.button"
      }
    ]
  };

  // screens/06-dashboard-wealth.json
  var dashboard_wealth_default = {
    name: "06 - Dashboard - Wealth Navigator",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "Wealth Navigator",
        x: 115,
        y: 80,
        fontSize: 20,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "G'day Sarah!",
        x: 115,
        y: 115,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "rectangle",
        x: 120,
        y: 160,
        width: 150,
        height: 150,
        borderRadius: 75,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "Your",
        x: 165,
        y: 200,
        fontSize: 14,
        colorToken: "color.text.onColor"
      },
      {
        type: "text",
        content: "Wealth Score",
        x: 145,
        y: 218,
        fontSize: 14,
        colorToken: "color.text.onColor"
      },
      {
        type: "text",
        content: "72",
        x: 170,
        y: 245,
        fontSize: 42,
        colorToken: "color.text.onColor"
      },
      {
        type: "text",
        content: "You vs Australia",
        x: 80,
        y: 340,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "$85k",
        x: 80,
        y: 365,
        fontSize: 28,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Net Worth",
        x: 80,
        y: 400,
        fontSize: 12,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "$45k",
        x: 230,
        y: 365,
        fontSize: 28,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Average",
        x: 230,
        y: 400,
        fontSize: 12,
        colorToken: "color.text.secondary"
      },
      {
        type: "button",
        x: 60,
        y: 460,
        width: 85,
        height: 90,
        borderRadius: 16,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "Make a",
        x: 75,
        y: 495,
        fontSize: 12,
        colorToken: "color.text.button"
      },
      {
        type: "text",
        content: "Decision",
        x: 70,
        y: 510,
        fontSize: 12,
        colorToken: "color.text.button"
      },
      {
        type: "button",
        x: 155,
        y: 460,
        width: 85,
        height: 90,
        borderRadius: 16,
        colorToken: "color.accent.secondary"
      },
      {
        type: "text",
        content: "Track",
        x: 178,
        y: 495,
        fontSize: 12,
        colorToken: "color.text.button"
      },
      {
        type: "text",
        content: "Progress",
        x: 168,
        y: 510,
        fontSize: 12,
        colorToken: "color.text.button"
      },
      {
        type: "button",
        x: 250,
        y: 460,
        width: 85,
        height: 90,
        borderRadius: 16,
        colorToken: "color.header.start"
      },
      {
        type: "text",
        content: "Learn",
        x: 273,
        y: 495,
        fontSize: 12,
        colorToken: "color.text.button"
      },
      {
        type: "text",
        content: "More",
        x: 273,
        y: 510,
        fontSize: 12,
        colorToken: "color.text.button"
      }
    ]
  };

  // screens/18-progress-tracking.json
  var progress_tracking_default = {
    name: "18 - Progress Tracking",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "Your Wealth",
        x: 50,
        y: 80,
        fontSize: 24,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "35% COMPLETE",
        x: 50,
        y: 120,
        fontSize: 12,
        colorToken: "color.text.secondary"
      },
      {
        type: "rectangle",
        x: 50,
        y: 140,
        width: 120,
        height: 6,
        borderRadius: 3,
        colorToken: "color.accent.primary"
      },
      {
        type: "text",
        content: "Current net worth",
        x: 50,
        y: 170,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "$85k",
        x: 250,
        y: 170,
        fontSize: 20,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Started journey",
        x: 120,
        y: 240,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "First $10k saved",
        x: 120,
        y: 290,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Super optimized",
        x: 120,
        y: 340,
        fontSize: 16,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "House deposit ready",
        x: 120,
        y: 390,
        fontSize: 16,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "First investment",
        x: 120,
        y: 440,
        fontSize: 16,
        colorToken: "color.text.secondary"
      },
      {
        type: "rectangle",
        x: 90,
        y: 235,
        width: 20,
        height: 20,
        borderRadius: 10,
        colorToken: "color.accent.primary"
      },
      {
        type: "rectangle",
        x: 90,
        y: 285,
        width: 20,
        height: 20,
        borderRadius: 10,
        colorToken: "color.accent.primary"
      },
      {
        type: "rectangle",
        x: 90,
        y: 335,
        width: 20,
        height: 20,
        borderRadius: 10,
        colorToken: "color.card.start"
      },
      {
        type: "rectangle",
        x: 90,
        y: 385,
        width: 20,
        height: 20,
        borderRadius: 10,
        colorToken: "color.card.start"
      },
      {
        type: "rectangle",
        x: 90,
        y: 435,
        width: 20,
        height: 20,
        borderRadius: 10,
        colorToken: "color.card.start"
      }
    ]
  };

  // screens/20-wealth-projection.json
  var wealth_projection_default = {
    name: "20 - Wealth Projection Survey",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "Survey how happy are u with",
        x: 70,
        y: 140,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "your wealth projection?",
        x: 80,
        y: 165,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Do you want to change",
        x: 90,
        y: 190,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "anything?",
        x: 150,
        y: 215,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Priorities:",
        x: 150,
        y: 265,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "1. super",
        x: 155,
        y: 300,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "2. Home ownership",
        x: 120,
        y: 330,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "3. Education fund kids",
        x: 110,
        y: 360,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "4. House deposit kids",
        x: 110,
        y: 390,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "5. Type and auto suggest",
        x: 105,
        y: 420,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "options, but make it",
        x: 125,
        y: 440,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "customisable",
        x: 145,
        y: 460,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "button",
        x: 70,
        y: 720,
        width: 250,
        height: 56,
        borderRadius: 28,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "Continue",
        x: 160,
        y: 738,
        fontSize: 18,
        colorToken: "color.text.button"
      }
    ]
  };

  // screens/22-social-comparison.json
  var social_comparison_default = {
    name: "22 - Social Comparison",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "How You Stack Up",
        x: 90,
        y: 80,
        fontSize: 24,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "You're in the top 35% for your",
        x: 80,
        y: 130,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "age group (28)",
        x: 140,
        y: 150,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "Your network average",
        x: 60,
        y: 200,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "You",
        x: 270,
        y: 200,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "$72k",
        x: 70,
        y: 225,
        fontSize: 24,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "$85k",
        x: 260,
        y: 225,
        fontSize: 24,
        colorToken: "color.text.primary"
      },
      {
        type: "rectangle",
        x: 110,
        y: 290,
        width: 200,
        height: 12,
        borderRadius: 6,
        colorToken: "color.accent.primary"
      },
      {
        type: "text",
        content: "1",
        x: 95,
        y: 288,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "rectangle",
        x: 110,
        y: 320,
        width: 170,
        height: 12,
        borderRadius: 6,
        colorToken: "color.card.start"
      },
      {
        type: "text",
        content: "2",
        x: 95,
        y: 318,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "rectangle",
        x: 110,
        y: 350,
        width: 100,
        height: 12,
        borderRadius: 6,
        colorToken: "color.card.start"
      },
      {
        type: "text",
        content: "3",
        x: 95,
        y: 348,
        fontSize: 14,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "You're ahead of 65%",
        x: 110,
        y: 430,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "of Australians your age!",
        x: 95,
        y: 455,
        fontSize: 16,
        colorToken: "color.text.primary"
      }
    ]
  };

  // screens/23-goal-setting.json
  var goal_setting_default = {
    name: "23 - Goal Setting",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "Set Your Financial Goals",
        x: 70,
        y: 60,
        fontSize: 22,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Short-term (1-2 years)",
        x: 50,
        y: 120,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Emergency fund",
        x: 60,
        y: 155,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "$15k",
        x: 60,
        y: 175,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "60%",
        x: 310,
        y: 175,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "rectangle",
        x: 60,
        y: 200,
        width: 200,
        height: 8,
        borderRadius: 4,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "Medium-term (3-7 years)",
        x: 50,
        y: 260,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "House deposit",
        x: 60,
        y: 295,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "$80k",
        x: 60,
        y: 315,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "25%",
        x: 310,
        y: 315,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "rectangle",
        x: 60,
        y: 340,
        width: 80,
        height: 8,
        borderRadius: 4,
        colorToken: "color.accent.secondary"
      },
      {
        type: "text",
        content: "Long-term (10+ years)",
        x: 50,
        y: 400,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "Retirement",
        x: 60,
        y: 435,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "$1.2M",
        x: 60,
        y: 455,
        fontSize: 16,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "8%",
        x: 310,
        y: 455,
        fontSize: 14,
        colorToken: "color.text.primary"
      },
      {
        type: "rectangle",
        x: 60,
        y: 480,
        width: 30,
        height: 8,
        borderRadius: 4,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "button",
        x: 50,
        y: 720,
        width: 290,
        height: 56,
        borderRadius: 12,
        colorToken: "color.accent.primary",
        shadowToken: "shadow.button"
      },
      {
        type: "text",
        content: "Add New Goal",
        x: 145,
        y: 738,
        fontSize: 18,
        colorToken: "color.text.button"
      }
    ]
  };

  // screens/financial-overview.json
  var financial_overview_default = {
    name: "Financial Overview",
    width: 390,
    height: 844,
    elements: [
      {
        type: "text",
        content: "income",
        x: 60,
        y: 100,
        fontSize: 24,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "expense",
        x: 250,
        y: 100,
        fontSize: 24,
        colorToken: "color.text.primary"
      },
      {
        type: "circle",
        x: 120,
        y: 180,
        width: 150,
        height: 150,
        colorToken: "color.accent.primary"
      },
      {
        type: "circle",
        x: 145,
        y: 205,
        width: 100,
        height: 100,
        colorToken: "color.background.primary"
      },
      {
        type: "circle",
        x: 120,
        y: 180,
        width: 150,
        height: 150,
        rotation: 0,
        arcLength: 252,
        colorToken: "color.accent.secondary"
      },
      {
        type: "text",
        content: "30%",
        x: 175,
        y: 240,
        fontSize: 24,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "disposable",
        x: 150,
        y: 360,
        fontSize: 16,
        colorToken: "color.text.secondary"
      },
      {
        type: "rectangle",
        x: 50,
        y: 430,
        width: 290,
        height: 2,
        borderRadius: 1,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "10/10",
        x: 165,
        y: 470,
        fontSize: 32,
        colorToken: "color.accent.primary"
      },
      {
        type: "text",
        content: "with 30% disposable",
        x: 115,
        y: 520,
        fontSize: 16,
        colorToken: "color.text.secondary"
      },
      {
        type: "text",
        content: "you have the pathway",
        x: 95,
        y: 600,
        fontSize: 18,
        colorToken: "color.text.primary"
      },
      {
        type: "text",
        content: "to build wealth",
        x: 125,
        y: 630,
        fontSize: 18,
        colorToken: "color.text.primary"
      }
    ]
  };

  // src/code.ts
  var screenTemplates = {
    "hello-world-screen": hello_world_screen_default,
    "login-screen": login_screen_default,
    "onboarding-welcome": onboarding_welcome_default,
    "profile-screen": profile_screen_default,
    "dashboard-screen": dashboard_screen_default,
    // Wealth Navigator app
    "01-welcome-screen": welcome_screen_default,
    "02-onboarding-age": onboarding_age_default,
    "03-onboarding-income": onboarding_income_default,
    "04-onboarding-assets": onboarding_assets_default,
    "05-onboarding-super": onboarding_super_default,
    "06-dashboard-wealth": dashboard_wealth_default,
    "18-progress-tracking": progress_tracking_default,
    "20-wealth-projection": wealth_projection_default,
    "22-social-comparison": social_comparison_default,
    "23-goal-setting": goal_setting_default,
    "financial-overview": financial_overview_default
  };
  figma.showUI(__html__, { width: 450, height: 700, themeColors: true });
  var currentTheme = { name: "classic-teal-lemon", mode: "light" };
  figma.ui.onmessage = async (msg) => {
    try {
      if (msg.type === "import-tokens") {
        await importAllTokens();
        figma.ui.postMessage({ type: "import-complete" });
      }
      if (msg.type === "set-theme") {
        currentTheme = { name: msg.themeName, mode: msg.mode };
        figma.ui.postMessage({ type: "theme-set", themeName: msg.themeName, mode: msg.mode });
      }
      if (msg.type === "generate-screen") {
        const theme = { name: msg.themeName, mode: msg.mode };
        let screenSpec = msg.screenSpec;
        if (screenSpec.template && screenTemplates[screenSpec.template]) {
          screenSpec = screenTemplates[screenSpec.template];
        }
        await generateScreen(screenSpec, theme);
        figma.ui.postMessage({ type: "screen-generated" });
      }
      if (msg.type === "generate-all-themes") {
        let screenSpec = msg.screenSpec;
        if (screenSpec.template && screenTemplates[screenSpec.template]) {
          screenSpec = screenTemplates[screenSpec.template];
        }
        await generateAllThemes(screenSpec);
        figma.ui.postMessage({ type: "all-themes-generated" });
      }
      if (msg.type === "close") {
        figma.closePlugin();
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      figma.notify("\u274C Error: " + errorMessage);
      console.error(error);
      figma.ui.postMessage({ type: "error", message: errorMessage });
    }
  };
  async function importAllTokens() {
    figma.notify("Importing design tokens...");
    await createColorVariablesForAllThemes();
    await createSpacingVariables();
    await createBorderRadiusVariables();
    await createBorderWidthVariables();
    await createOpacityVariables();
    await createTextStyles();
    await createEffectStyles();
    await createTextShadowStyles();
    figma.notify("\u2705 All tokens imported successfully!");
  }
  async function createColorVariablesForAllThemes() {
    const themes = Object.keys(design_tokens_default.themes);
    for (const themeName of themes) {
      const themeData = design_tokens_default.themes[themeName];
      if (themeData.light) {
        await createColorCollection(themeName, "light", themeData.light);
      }
      if (themeData.dark) {
        await createColorCollection(themeName, "dark", themeData.dark);
      }
    }
  }
  async function createColorCollection(themeName, mode, colorData) {
    const collectionName = `${themeName}-${mode}`;
    let collection = figma.variables.getLocalVariableCollections().find((c) => c.name === collectionName);
    if (!collection) {
      collection = figma.variables.createVariableCollection(collectionName);
    }
    const modeId = collection.modes[0].modeId;
    if (colorData.color) {
      await createColorVarsRecursive(collection, modeId, colorData.color, []);
    }
  }
  async function createColorVarsRecursive(collection, modeId, obj, path) {
    for (const [key, value] of Object.entries(obj)) {
      if (value && typeof value === "object") {
        if (value.value && value.type === "color") {
          const varName = [...path, key].join("/");
          const colorValue = value.value;
          const allVariables = figma.variables.getLocalVariables();
          let variable = allVariables.find((v) => v.name === varName && v.variableCollectionId === collection.id);
          if (!variable) {
            variable = figma.variables.createVariable(varName, collection, "COLOR");
          }
          const rgb = hexToRgb(colorValue);
          if (rgb) {
            variable.setValueForMode(modeId, rgb);
          }
        } else {
          await createColorVarsRecursive(collection, modeId, value, [...path, key]);
        }
      }
    }
  }
  async function createSpacingVariables() {
    const spacing = design_tokens_default.global.spacing;
    const collectionName = "Spacing";
    let collection = figma.variables.getLocalVariableCollections().find((c) => c.name === collectionName);
    if (!collection) {
      collection = figma.variables.createVariableCollection(collectionName);
    }
    const modeId = collection.modes[0].modeId;
    for (const [key, value] of Object.entries(spacing)) {
      if (value && typeof value === "object" && value.value) {
        const varName = key;
        const numValue = parseFloat(value.value);
        const allVariables = figma.variables.getLocalVariables();
        let variable = allVariables.find((v) => v.name === varName && v.variableCollectionId === collection.id);
        if (!variable) {
          variable = figma.variables.createVariable(varName, collection, "FLOAT");
        }
        variable.setValueForMode(modeId, numValue);
      }
    }
  }
  async function createBorderRadiusVariables() {
    const borderRadius = design_tokens_default.global.borderRadius;
    const collectionName = "Border Radius";
    let collection = figma.variables.getLocalVariableCollections().find((c) => c.name === collectionName);
    if (!collection) {
      collection = figma.variables.createVariableCollection(collectionName);
    }
    const modeId = collection.modes[0].modeId;
    for (const [key, value] of Object.entries(borderRadius)) {
      if (value && typeof value === "object" && value.value) {
        const varName = key;
        const numValue = parseFloat(value.value);
        const allVariables = figma.variables.getLocalVariables();
        let variable = allVariables.find((v) => v.name === varName && v.variableCollectionId === collection.id);
        if (!variable) {
          variable = figma.variables.createVariable(varName, collection, "FLOAT");
        }
        variable.setValueForMode(modeId, numValue);
      }
    }
  }
  async function createBorderWidthVariables() {
    const borderWidth = design_tokens_default.global.borderWidth;
    const collectionName = "Border Width";
    let collection = figma.variables.getLocalVariableCollections().find((c) => c.name === collectionName);
    if (!collection) {
      collection = figma.variables.createVariableCollection(collectionName);
    }
    const modeId = collection.modes[0].modeId;
    for (const [key, value] of Object.entries(borderWidth)) {
      if (value && typeof value === "object" && value.value) {
        const varName = key;
        const numValue = parseFloat(value.value);
        const allVariables = figma.variables.getLocalVariables();
        let variable = allVariables.find((v) => v.name === varName && v.variableCollectionId === collection.id);
        if (!variable) {
          variable = figma.variables.createVariable(varName, collection, "FLOAT");
        }
        variable.setValueForMode(modeId, numValue);
      }
    }
  }
  async function createOpacityVariables() {
    const opacity = design_tokens_default.global.opacity;
    const collectionName = "Opacity";
    let collection = figma.variables.getLocalVariableCollections().find((c) => c.name === collectionName);
    if (!collection) {
      collection = figma.variables.createVariableCollection(collectionName);
    }
    const modeId = collection.modes[0].modeId;
    for (const [key, value] of Object.entries(opacity)) {
      if (value && typeof value === "object" && value.value) {
        const varName = key;
        const numValue = value.value;
        const allVariables = figma.variables.getLocalVariables();
        let variable = allVariables.find((v) => v.name === varName && v.variableCollectionId === collection.id);
        if (!variable) {
          variable = figma.variables.createVariable(varName, collection, "FLOAT");
        }
        variable.setValueForMode(modeId, numValue);
      }
    }
  }
  async function createTextStyles() {
    var _a;
    const typography = design_tokens_default.global.typography;
    let fontFamily = typography.fontFamily.primary.value.split(",")[0].trim().replace(/['"]/g, "");
    const fontWeightToStyle = {
      300: "Light",
      400: "Regular",
      500: "Medium",
      600: "SemiBold",
      700: "Bold",
      800: "ExtraBold"
    };
    let availableFontWeights = {};
    for (const [weight, style] of Object.entries(fontWeightToStyle)) {
      try {
        await figma.loadFontAsync({ family: fontFamily, style });
        availableFontWeights[parseInt(weight)] = style;
      } catch (e) {
      }
    }
    if (Object.keys(availableFontWeights).length === 0) {
      console.log(`Font ${fontFamily} not available, using Inter instead`);
      fontFamily = "Inter";
      for (const [weight, style] of Object.entries(fontWeightToStyle)) {
        try {
          await figma.loadFontAsync({ family: fontFamily, style });
          availableFontWeights[parseInt(weight)] = style;
        } catch (e) {
        }
      }
    }
    for (const [sizeName, sizeData] of Object.entries(typography.fontSize)) {
      if (sizeData && typeof sizeData === "object" && sizeData.value) {
        const fontSize = parseFloat(sizeData.value);
        for (const [weightName, weightData] of Object.entries(typography.fontWeight)) {
          if (weightData && typeof weightData === "object" && weightData.value) {
            const weightValue = weightData.value;
            const fontStyle = availableFontWeights[weightValue];
            if (fontStyle) {
              const styleName = `${sizeName}/${weightName}`;
              let textStyle = figma.getLocalTextStyles().find((s) => s.name === styleName);
              if (!textStyle) {
                textStyle = figma.createTextStyle();
                textStyle.name = styleName;
              }
              textStyle.fontName = { family: fontFamily, style: fontStyle };
              textStyle.fontSize = fontSize;
              if ((_a = typography.lineHeight) == null ? void 0 : _a.normal) {
                const lineHeightValue = typography.lineHeight.normal.value;
                textStyle.lineHeight = { value: lineHeightValue, unit: "PERCENT" };
              }
            }
          }
        }
      }
    }
  }
  async function createEffectStyles() {
    const shadows = design_tokens_default.global.shadow;
    for (const [shadowName, shadowData] of Object.entries(shadows)) {
      if (shadowData && typeof shadowData === "object" && shadowData.value) {
        const styleName = `Shadow/${shadowName}`;
        const shadowValue = shadowData.value;
        let effectStyle = figma.getLocalEffectStyles().find((s) => s.name === styleName);
        if (!effectStyle) {
          effectStyle = figma.createEffectStyle();
          effectStyle.name = styleName;
        }
        const effect = parseShadowToEffect(shadowValue);
        if (effect) {
          effectStyle.effects = [effect];
        }
      }
    }
  }
  async function createTextShadowStyles() {
    const textShadows = design_tokens_default.global.textShadow;
    for (const [shadowName, shadowData] of Object.entries(textShadows)) {
      if (shadowData && typeof shadowData === "object" && shadowData.value) {
        const styleName = `TextShadow/${shadowName}`;
        const shadowValue = shadowData.value;
        let effectStyle = figma.getLocalEffectStyles().find((s) => s.name === styleName);
        if (!effectStyle) {
          effectStyle = figma.createEffectStyle();
          effectStyle.name = styleName;
        }
        const effect = parseShadowToEffect(shadowValue);
        if (effect) {
          effectStyle.effects = [effect];
        }
      }
    }
  }
  async function generateScreen(screenSpec, theme) {
    var _a, _b, _c, _d;
    figma.notify(`Generating screen with ${theme.name} - ${theme.mode}...`);
    const themeData = (_a = design_tokens_default.themes[theme.name]) == null ? void 0 : _a[theme.mode];
    if (!themeData) {
      throw new Error(`Theme ${theme.name} ${theme.mode} not found`);
    }
    const frame = figma.createFrame();
    frame.name = `${screenSpec.name} - ${theme.name} ${theme.mode}`;
    const width = typeof screenSpec.width === "number" ? screenSpec.width : parseFloat(screenSpec.width) || 390;
    const height = typeof screenSpec.height === "number" ? screenSpec.height : parseFloat(screenSpec.height) || 844;
    frame.resize(width, height);
    const bgColor = (_d = (_c = (_b = themeData.color) == null ? void 0 : _b.background) == null ? void 0 : _c.primary) == null ? void 0 : _d.value;
    if (bgColor) {
      const rgb = hexToRgb(bgColor);
      if (rgb) {
        frame.fills = [{ type: "SOLID", color: rgb }];
      }
    }
    const typography = design_tokens_default.global.typography;
    let fontFamily = typography.fontFamily.primary.value.split(",")[0].trim().replace(/['"]/g, "");
    const fontsToLoad = [
      { family: fontFamily, style: "Regular" },
      { family: fontFamily, style: "Light" },
      { family: fontFamily, style: "Medium" },
      { family: fontFamily, style: "SemiBold" },
      { family: fontFamily, style: "Bold" }
    ];
    let fontLoaded = false;
    for (const font of fontsToLoad) {
      try {
        await figma.loadFontAsync(font);
        fontLoaded = true;
      } catch (e) {
      }
    }
    if (!fontLoaded) {
      console.log(`Font ${fontFamily} not available, using Inter instead`);
      fontFamily = "Inter";
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    }
    for (const element of screenSpec.elements || []) {
      await createElementWithTheme(frame, element, themeData, fontFamily);
    }
    figma.viewport.scrollAndZoomIntoView([frame]);
  }
  async function createElementWithTheme(parent, element, themeData, fontFamily = "Inter") {
    if (element.type === "text") {
      const text = figma.createText();
      try {
        await figma.loadFontAsync({ family: fontFamily, style: "Regular" });
        text.fontName = { family: fontFamily, style: "Regular" };
      } catch (e) {
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        text.fontName = { family: "Inter", style: "Regular" };
      }
      text.characters = element.content || "";
      const x = typeof element.x === "number" ? element.x : parseFloat(element.x) || 0;
      const y = typeof element.y === "number" ? element.y : parseFloat(element.y) || 0;
      text.x = x;
      text.y = y;
      if (element.fontSize) {
        const fontSize = typeof element.fontSize === "number" ? element.fontSize : parseFloat(element.fontSize);
        text.fontSize = fontSize;
      }
      const textColor = element.colorToken ? getTokenValue(themeData, element.colorToken) : element.color;
      if (textColor) {
        const rgb = hexToRgb(textColor);
        if (rgb) {
          text.fills = [{ type: "SOLID", color: rgb }];
        }
      }
      parent.appendChild(text);
    }
    if (element.type === "rectangle" || element.type === "button") {
      const rect = figma.createRectangle();
      const x = typeof element.x === "number" ? element.x : parseFloat(element.x) || 0;
      const y = typeof element.y === "number" ? element.y : parseFloat(element.y) || 0;
      const width = typeof element.width === "number" ? element.width : parseFloat(element.width) || 100;
      const height = typeof element.height === "number" ? element.height : parseFloat(element.height) || 40;
      rect.x = x;
      rect.y = y;
      rect.resize(width, height);
      const fillColor = element.colorToken ? getTokenValue(themeData, element.colorToken) : element.backgroundColor;
      if (fillColor) {
        const rgb = hexToRgb(fillColor);
        if (rgb) {
          rect.fills = [{ type: "SOLID", color: rgb }];
        }
      }
      if (element.borderRadius) {
        const borderRadius = typeof element.borderRadius === "number" ? element.borderRadius : parseFloat(element.borderRadius);
        rect.cornerRadius = borderRadius;
      }
      if (element.shadowToken) {
        const shadowValue = getShadowTokenValue(element.shadowToken);
        if (shadowValue) {
          const effect = parseShadowToEffect(shadowValue);
          if (effect) {
            rect.effects = [effect];
          }
        }
      }
      parent.appendChild(rect);
    }
    if (element.type === "circle") {
      const ellipse = figma.createEllipse();
      const x = typeof element.x === "number" ? element.x : parseFloat(element.x) || 0;
      const y = typeof element.y === "number" ? element.y : parseFloat(element.y) || 0;
      const width = typeof element.width === "number" ? element.width : parseFloat(element.width) || 100;
      const height = typeof element.height === "number" ? element.height : parseFloat(element.height) || 100;
      ellipse.x = x;
      ellipse.y = y;
      ellipse.resize(width, height);
      const fillColor = element.colorToken ? getTokenValue(themeData, element.colorToken) : element.backgroundColor;
      if (fillColor) {
        const rgb = hexToRgb(fillColor);
        if (rgb) {
          ellipse.fills = [{ type: "SOLID", color: rgb }];
        }
      }
      if (element.arcLength !== void 0) {
        const arcLength = typeof element.arcLength === "number" ? element.arcLength : parseFloat(element.arcLength);
        ellipse.arcData = {
          startingAngle: 0,
          endingAngle: arcLength / 360 * 2 * Math.PI,
          innerRadius: 0.67
          // Creates donut effect
        };
      }
      parent.appendChild(ellipse);
    }
  }
  async function generateAllThemes(screenSpec) {
    figma.notify("Generating in all 4 themes...");
    const themes = [
      "classic-teal-lemon",
      "ocean-breeze",
      "soft-pastels",
      "cool-professional"
    ];
    let xOffset = 0;
    for (const themeName of themes) {
      for (const mode of ["light", "dark"]) {
        await generateScreen(screenSpec, { name: themeName, mode });
        const frames = figma.currentPage.children.filter((n) => n.type === "FRAME");
        const lastFrame = frames[frames.length - 1];
        if (lastFrame) {
          lastFrame.x = xOffset;
          xOffset += lastFrame.width + 50;
        }
      }
    }
    figma.notify("\u2705 Generated in all 8 theme variations!");
  }
  function getTokenValue(obj, path) {
    const parts = path.split(".");
    let current = obj;
    for (const part of parts) {
      if (current && current[part]) {
        current = current[part];
      } else {
        return null;
      }
    }
    return (current == null ? void 0 : current.value) || null;
  }
  function getShadowTokenValue(tokenPath) {
    const parts = tokenPath.split(".");
    if (parts[0] === "shadow" && parts.length >= 2) {
      const shadowName = parts[1];
      const shadowData = design_tokens_default.global.shadow[shadowName];
      return (shadowData == null ? void 0 : shadowData.value) || null;
    }
    let current = design_tokens_default.global;
    for (const part of parts) {
      if (current && current[part]) {
        current = current[part];
      } else {
        return null;
      }
    }
    return (current == null ? void 0 : current.value) || null;
  }
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255
    } : null;
  }
  function parseShadowToEffect(shadowString) {
    try {
      const parts = shadowString.trim().split(/\s+/);
      const x = parseFloat(parts[0]);
      const y = parseFloat(parts[1]);
      const blur = parseFloat(parts[2]);
      const colorMatch = shadowString.match(/rgba?\(([^)]+)\)/);
      let r = 0, g = 0, b = 0, a = 1;
      if (colorMatch) {
        const colorParts = colorMatch[1].split(",").map((p) => parseFloat(p.trim()));
        r = colorParts[0] / 255;
        g = colorParts[1] / 255;
        b = colorParts[2] / 255;
        a = colorParts[3] !== void 0 ? colorParts[3] : 1;
      }
      return {
        type: "DROP_SHADOW",
        color: { r, g, b, a },
        offset: { x, y },
        radius: blur,
        visible: true,
        blendMode: "NORMAL"
      };
    } catch (e) {
      return null;
    }
  }
})();
