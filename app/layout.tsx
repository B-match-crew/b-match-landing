import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://bmatch.app";
const TITLE = "비매치 — 오늘 바로, 내 근처 배드민턴 모임에 게스트로";
const DESCRIPTION =
  "내 위치와 실력에 맞는 배드민턴 모임에 게스트로 가볍게 참여하세요. 동호회 가입 없이, 오늘 바로 내 근처 모임을 지도·일정으로 찾고 연락까지 한 번에.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | 비매치",
  },
  description: DESCRIPTION,
  applicationName: "비매치",
  keywords: [
    "비매치",
    "배드민턴",
    "배드민턴 모임",
    "배드민턴 게스트",
    "게스트 매칭",
    "배드민턴 동호회",
  ],
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "비매치",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/OG_image.png",
        width: 4096,
        height: 2000,
        alt: "비매치 — 내 근처 배드민턴 모임 게스트 매칭",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/OG_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
