## 🛠️ 기술 스택

- **Framework**: [Next.js (Page Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **유틸리티**: `clsx` (조건부 className 관리)

## 📁 폴더 구조

```
src/
├── components/
│ ├── home/
│ │   ├── SajuCard/
│ │   │    ├── SajuHeader.tsx # 사용자 이름 + 생년월일 시각화
│ │   │    ├── SajuTable.tsx # 사주팔자 정보 테이블
│ │   │    └── index.tsx
│ │   └── SpeechBubbleScript.tsx # 웹툰 말풍선 텍스트 그룹
│ └── SpeechBubbleText.tsx # 개별 말풍선 UI 컴포넌트
├── lib/
│ └── utils.ts # cn 함수
```

## ✅ 과제 목표 충족 사항

- 디자인 시안 1페이지 완성
- 말풍선 텍스트 직접 삽입 (사용자 이름 반영)
- max-w-md(448px) 기준 반응형 대응
- 사주팔자 표를 컴포넌트로 구현
- 표 데이터는 이미지 대신 텍스트로 출력
- 모든 해상도에서 레이아웃 유지
- Tailwind 기본 폰트 사용
- 컴포넌트 구조로 기능 분리 완료

## 🌐 배포 링크

👉 https://rocketai-front-test.vercel.app (Vercel 배포 완료)
