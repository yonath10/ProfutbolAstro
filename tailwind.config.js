// tailwind.config.js
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta de Colores de Profutbol JC
  'background': '#f5f7fa',
  'surface': '#ffffff',
  'primary-light': '#1e3a8a',  // Azul intenso para Nosotros
  'primary-dark': '#1e293b',   // Azul marino para Torneos
  'primary-darker': '#0f172a', // Azul oscuro para Contacto
  'primary': '#020617',        // Azul casi negro para Footer
  'accent': '#fbbf24',         // Amarillo brillante
  'text': '#0f172a',
  'subtle-text': '#64748b',
  'border': '#e2e8f0',
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};