// Tambahkan patch Rushstack terlebih dahulu
import "@rushstack/eslint-patch/modern-module-resolution";
import next from "eslint-config-next";

export default [
  // Preset Core Web Vitals dari Next.js
  next.coreWebVitals,
  // Preset TypeScript untuk linting Next.js
  next.typescript,
  {
    // Aturan tambahan untuk file JavaScript/TypeScript
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest", // Mendukung fitur ECMAScript terbaru
        sourceType: "module", // Mendukung module system (ESM)
      },
    },
    rules: {
      "no-unused-vars": "warn", // Memberikan peringatan untuk variabel yang tidak digunakan
      "no-console": "off", // Mematikan peringatan untuk console.log
    },
  },
];
