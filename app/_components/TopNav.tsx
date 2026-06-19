/**
 * 상단 내비게이션 — Figma "이용가이드" 화면의 헤더.
 * 좌측 닫기(X) 버튼 + 가운데 타이틀. 스크롤 시 상단 고정.
 */
export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-6xl items-center justify-center px-4 sm:h-16 sm:px-6">
        <button
          type="button"
          aria-label="닫기"
          className="absolute left-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5 sm:left-5"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <h1 className="text-[16px] font-semibold tracking-tight text-ink sm:text-[17px]">
          비매치 이용가이드
        </h1>
      </div>
    </header>
  );
}
