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
        text: "var(--foreground)", // 기본 텍스트 색상
        ["saju-card-bg"]: "var(--saju-card-bg)", // 사주 카드 영역 배경
        ["saju-card-border"]: "var(--saju-card-border)", // 사주 카드 테두리,
        ["saju-table-border-sub"]: "var(--saju-table-border-sub)", // 사주표 서브 테두리
        ["pri-navy"]: "var(--pri-navy)",
      },
      boxShadow: {
        ["saju-card"]: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
