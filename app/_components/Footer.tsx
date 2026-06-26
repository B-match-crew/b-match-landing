/**
 * 푸터 — 사업자 정보 / 약관 링크.
 */
export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-bg-alt">
      <div className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 lg:px-6 lg:py-16">
        <h2 className="text-[15px] font-bold text-ink-secondary">
          비매치 사업자 정보
        </h2>

        <div className="mt-4 space-y-1 text-[13px] leading-relaxed text-ink-tertiary">
          <p>서울특별시 강남구 광평로19길 15, 109동 1205호 | 070-8998-4471</p>
          <p>사업자등록번호: 168-13-02828</p>
          <p>대표: 석재현 | 문의: contact@bmatch.app</p>
        </div>

        <p className="mt-6 text-[13px] text-ink-assistive">
          copyright 2026. B-Match. All rights reserved.
        </p>

        <nav className="mt-6 flex items-center gap-6 text-[13px] font-medium text-ink-secondary">
          <a href="#terms" className="transition-colors hover:text-ink">
            이용약관
          </a>
          <a href="#privacy" className="transition-colors hover:text-ink">
            개인정보처리방침
          </a>
        </nav>
      </div>
    </footer>
  );
}
