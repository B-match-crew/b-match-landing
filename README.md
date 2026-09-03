This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 구조

Feature-Sliced Design 의 **얇은 판**을 쓴다. 어드민(b-match-admin)과 같은 기조지만
층이 셋뿐이다:

```
src/
├── app/       Next 라우트 · 레이아웃 · 전역 스타일
├── widgets/   페이지를 이루는 섹션 (Hero · Matching · Features …)
└── shared/    ui(공용 조각 + shadcn kit) · config(링크·사이트 설정) · lib(cn)
```

`features/` 와 `entities/` 는 **일부러 두지 않았다.** 도메인 상태가 없는 정적
랜딩에서 그 두 층은 빈 폴더가 된다. 필요해지는 날 추가한다.

의존은 아래로만 흐른다(`shared ← widgets ← app`). eslint 가 강제한다.

## 환경 변수

`.env.example` 참조. 둘 다 없어도 빌드는 되지만, 프리뷰 배포에서는 넣는 편이 낫다 —
`NEXT_PUBLIC_SITE_URL` 이 없으면 canonical 이 프로덕션을 가리키고,
`NEXT_PUBLIC_GTM_ID` 를 비우면 GTM 태그를 아예 렌더하지 않는다.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
