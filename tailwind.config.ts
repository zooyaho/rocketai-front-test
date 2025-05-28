import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // 전체 배경
        panel: "var(--panel)", // 사주 테이블 영역 배경
        text: "var(--foreground)", // 기본 텍스트 색상
      },
    },
  },
  plugins: [],
} satisfies Config;
