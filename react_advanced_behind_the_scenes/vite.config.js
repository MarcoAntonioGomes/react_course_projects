import MillionLint from "@million/lint";
import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [React(), MillionLint.vite()],
});
