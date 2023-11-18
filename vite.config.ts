import { defineConfig } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths'
import react from "@vitejs/plugin-react";
import { babel } from "@rollup/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    babel({ extensions: [".ts", ".tsx"], babelHelpers: "bundled" }),
    react({ fastRefresh: false}),
  ],
});

