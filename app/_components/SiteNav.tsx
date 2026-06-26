import Image from "next/image";

import { NOTICE_URL } from "@/lib/links";

const LINKS = [
  { label: "비매치 소개", href: "#intro", external: false },
  { label: "공지사항", href: NOTICE_URL, external: true },
];

/**
 * 상단 내비게이션 (Figma node 2585-71530).
 * 로고 + 메뉴를 좌측에 모아 배치, 우측은 비움. 스크롤 시 상단 고정.
 */
export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(74,85,101,0.16)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-8 px-5 sm:px-8 lg:h-[82px] lg:gap-20 lg:px-6">
        {/* 로고 — Logo.png (signature) */}
        <a
          href="#top"
          className="shrink-0 transition-opacity hover:opacity-80"
          aria-label="b-match 홈"
        >
          <Image
            src="/brand/Logo.png"
            alt="b-match"
            width={532}
            height={104}
            priority
            className="h-[22px] w-auto lg:h-[26px]"
          />
        </a>

        {/* 메뉴 */}
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-8 text-[17px] font-semibold tracking-[-0.24px] text-ink-tertiary lg:gap-16 lg:text-[20px]">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
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
