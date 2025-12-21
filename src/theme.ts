import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: {
          value:
            "'SF Pro Display', 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        },
        body: {
          value:
            "'SF Pro Text', 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        },
      },
      colors: {
        brand: {
          50: { value: "#f5f3ff" },
          100: { value: "#ede9fe" },
          200: { value: "#ddd6fe" },
          300: { value: "#c4b5fd" },
          400: { value: "#a78bfa" },
          500: { value: "#8b5cf6" },
          600: { value: "#7c3aed" },
          700: { value: "#6d28d9" },
          800: { value: "#5b21b6" },
          900: { value: "#4c1d95" },
        },
      },
    },
  },
  globalCss: {
    body: {
      bg: "white",
      color: "gray.800",
    },
  },
});

const system = createSystem(defaultConfig, customConfig);

export default system;
