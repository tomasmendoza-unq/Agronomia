import { green } from "./src/core/styles/theme/colors/green";
import { red } from "./src/core/styles/theme/colors/red";
import { neutral } from "./src/core/styles/theme/colors/neutral";
import { blue } from "./src/core/styles/theme/colors/blue";
import { animationStyles } from "./src/core/styles/theme/animation-styles";
import { zIndex } from "./src/core/styles/theme/tokens/z-index";
import { shadows } from "./src/core/styles/theme/tokens/shadows";
import { durations } from "./src/core/styles/theme/tokens/durations";
import { colors } from "./src/core/styles/theme/tokens/colors";
import { textStyles } from "./src/core/styles/theme/text-styles";
import { layerStyles } from "./src/core/styles/theme/layer-styles";
import { keyframes } from "./src/core/styles/theme/keyframes";
import { globalCss } from "./src/core/styles/theme/global-css";
import { conditions } from "./src/core/styles/theme/conditions";
import { slotRecipes, recipes } from "./src/core/styles/theme/recipes";
import { defineConfig } from "@pandacss/dev";
import tokenColors from './src/core/styles/token/colors'
import animations from './src/core/styles/animations/animations'
import { durationsToken } from './src/core/styles/token/durations'

export default defineConfig({
  plugins: [
  {
    name: 'Remove Panda Preset Colors',
    hooks: {
      'preset:resolved': ({ utils, preset, name }) =>
        name === '@pandacss/preset-panda'
          ? utils.omit(preset, ['theme.tokens.colors', 'theme.semanticTokens.colors'])
          : preset,
      },
    },
  ],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        ...animations,
        ...keyframes
      },
      tokens: {
        colors: {
          ...tokenColors,
          ...colors
        },
        durations: {
          ...durationsToken,
          ...durations
        },
        zIndex: zIndex
      },

      animationStyles: animationStyles,
      recipes: recipes,
      slotRecipes: slotRecipes,
      layerStyles: layerStyles,
      textStyles: textStyles,

      semanticTokens: {
        colors: {
          fg: {
            default: {
              value: {
                _light: "{colors.gray.12}",
                _dark: "{colors.gray.12}"
              }
            },

            muted: {
              value: {
                _light: "{colors.gray.11}",
                _dark: "{colors.gray.11}"
              }
            },

            subtle: {
              value: {
                _light: "{colors.gray.10}",
                _dark: "{colors.gray.10}"
              }
            }
          },

          border: {
            value: {
              _light: "{colors.gray.4}",
              _dark: "{colors.gray.4}"
            }
          },

          error: {
            value: {
              _light: "{colors.red.9}",
              _dark: "{colors.red.9}"
            }
          },

          blue: blue,
          gray: neutral,
          red: red,
          green: green
        },

        shadows: shadows,

        radii: {
          l1: {
            value: "{radii.xs}"
          },

          l2: {
            value: "{radii.sm}"
          },

          l3: {
            value: "{radii.md}"
          }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  globalCss: globalCss,
  conditions: conditions
});