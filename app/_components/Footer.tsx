import { TERMS_URL, PRIVACY_URL } from "@/lib/links";

/**
 * 푸터 (Figma node 2585-71907) — 사업자 정보 / 약관 링크.
 */
export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-3 px-5 py-20 sm:px-8 lg:px-6 lg:py-[120px]">
        <h2 className="text-[16px] font-semibold tracking-[0.006em] text-ink-secondary">
          비매치 사업자 정보
        </h2>

        <p className="text-[13px] font-medium leading-[1.385] tracking-[0.02em] text-ink-tertiary">
          서울특별시 강남구 광평로19길 15, 109동 1205호 | 070-8998-4471
          <br />
          사업자등록번호: 168-13-02828
          <br />
          대표: 석재현 | 문의: contact@bmatch.app
        </p>

        <p className="text-[13px] font-medium leading-[1.385] tracking-[0.02em] text-ink-tertiary">
          copyright 2026. B-Match. All rights reserved.
        </p>

        <nav className="flex items-center gap-5 text-[13px] font-medium tracking-[0.02em] text-ink-secondary">
          <a
            href={TERMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            이용약관
          </a>
          <a
            href={PRIVACY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            개인정보처리방침
          </a>
        </nav>
      </div>
    </footer>
  );
}
