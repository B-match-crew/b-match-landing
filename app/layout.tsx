import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "비매치 — 오늘 바로, 내 근처 배드민턴 모임에 게스트로",
  description:
    "동호회 가입은 부담스럽다구요? 비매치에서 오늘 내 근처 배드민턴 모임에 게스트로 참여하세요. 원하는 일정·지도로 모임을 찾고, 채팅으로 바로 연락하세요.",
  openGraph: {
    title: "비매치 — 오늘 바로, 내 근처 배드민턴 모임에 게스트로",
    description:
      "원하는 일정·지도로 모임을 찾고, 채팅으로 바로 연락. 초보 환영 모임도 만나보세요.",
    type: "website",
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
