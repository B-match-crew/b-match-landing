import Image from "next/image";

const LINKS = [
  { label: "비매치 소개", href: "#intro" },
  { label: "공지사항", href: "#notice" },
];

/**
 * 상단 내비게이션 — 로고 + 메뉴(좌측 정렬). 스크롤 시 상단 고정.
 * Figma: 로고와 메뉴가 좌측에 모여 있고 우측은 비어 있음.
 */
export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center px-5 sm:px-8 lg:h-20 lg:px-6">
        {/* 로고 (아이콘 + 워드마크) */}
        <a
          href="#top"
          className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
          aria-label="b-match 홈"
        >
          <Image
            src="/brand/logo.svg"
            alt=""
            width={21}
            height={26}
            className="h-[26px] w-auto"
            priority
          />
          <Image
            src="/brand/text-logo.svg"
            alt="b-match"
            width={105}
            height={25}
            className="h-[22px] w-auto"
            priority
          />
        </a>

        {/* 메뉴 — 로고 우측에 모여 있음 */}
        <nav className="ml-12 hidden lg:ml-20 sm:block">
          <ul className="flex items-center gap-9 text-[15px] font-medium text-ink-assistive">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="relative py-1 transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary-500 after:transition-transform after:duration-300 hover:text-ink-secondary hover:after:scale-x-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
