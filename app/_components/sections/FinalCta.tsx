import Image from "next/image";

import { cn } from "@/lib/utils";
import { CONTAINER } from "@/lib/ui";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/links";
import Reveal from "@/app/_components/Reveal";
import StoreButton from "@/app/_components/StoreButton";

/** 최종 CTA (민트) — 로고 + 스토어 버튼. (Figma 2601-8394) */
export default function FinalCta() {
  return (
    <section id="download" className="bg-primary-300">
      <div className={cn(CONTAINER, "flex flex-col items-center gap-12 py-20 lg:gap-20 lg:py-[120px]")}>
        <Reveal className="flex flex-col items-center gap-8 lg:gap-10">
          <h2 className="text-center text-[26px] font-bold leading-[1.358] tracking-[-0.024em] text-ink/90 sm:text-[36px] lg:text-[44px]">
            나에게 딱 맞는 배드민턴 모임
            <br />
            지금 바로 찾아보세요
          </h2>
          <Image
            src="/brand/Logo-black.png"
            alt="b-match"
            width={800}
            height={157}
            className="h-[32px] w-auto lg:h-[39px]"
          />
        </Reveal>
        <Reveal
          delay={120}
          className="flex flex-wrap items-center justify-center gap-3 lg:gap-6"
        >
          <StoreButton
            icon="/store/apple.svg"
            label="Apple Store"
            href={APP_STORE_URL}
          />
          <StoreButton
            icon="/store/google.svg"
            label="Google Play"
            href={PLAY_STORE_URL}
          />
        </Reveal>
      </div>
    </section>
  );
}
