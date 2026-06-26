import type { ReactNode } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import Reveal from "@/app/_components/Reveal";

export type Screen = { src: string; alt: string; w: number; h: number };

/**
 * 좌우 교차 피처 행 (텍스트 + 폰 목업). 본문·지도 섹션 공용.
 * 폰 PNG 는 580/600px "컬럼" 통째 이미지로, 폰 정렬·크기가 베이크돼 있습니다.
 */
export default function FeatureRow({
  eyebrow,
  eyebrowVariant = "pill",
  title,
  desc,
  screen,
  reverse = false,
  big = false,
}: {
  eyebrow: string;
  /** pill: 민트 칩 (피처) / text: teal 텍스트 (섹션 타이틀) */
  eyebrowVariant?: "pill" | "text";
  title: ReactNode;
  desc: ReactNode;
  screen: Screen;
  reverse?: boolean;
  /** 지도 등 큰 타이틀(52px) 행 */
  big?: boolean;
}) {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-5">
      {/* 텍스트 */}
      <Reveal
        dir={reverse ? "right" : "left"}
        className={cn(
          "flex flex-1 flex-col items-start gap-6 lg:gap-16",
          reverse && "lg:order-2",
        )}
      >
        {eyebrowVariant === "pill" ? (
          <span className="inline-flex w-fit items-center rounded-full bg-primary-300 px-5 py-2 text-[18px] font-bold tracking-[-0.02em] text-ink sm:px-7 sm:py-2.5 sm:text-[24px]">
            {eyebrow}
          </span>
        ) : (
          <p className="text-[22px] font-bold tracking-[-0.024em] text-primary-500 sm:text-[28px]">
            {eyebrow}
          </p>
        )}
        <div className="flex flex-col gap-5">
          <h3
            className={cn(
              "font-bold tracking-[-0.025em] text-ink",
              big
                ? "text-[28px] leading-[1.358] sm:text-[40px] lg:text-[52px]"
                : "text-[26px] leading-[1.375] sm:text-[34px] lg:text-[44px]",
            )}
          >
            {title}
          </h3>
          <p className="text-[16px] font-semibold leading-[1.4] tracking-[-0.012em] text-ink-secondary sm:text-[18px] lg:text-[22px]">
            {desc}
          </p>
        </div>
      </Reveal>

      {/* 폰 목업 (PNG = 580/600px 컬럼 통째, 폰 정렬·크기 베이크됨) */}
      <Reveal
        dir={reverse ? "left" : "right"}
        delay={120}
        className={cn("lg:shrink-0", reverse && "lg:order-1")}
      >
        <Image
          src={screen.src}
          alt={screen.alt}
          width={screen.w}
          height={screen.h}
          sizes="(max-width: 1024px) 90vw, 600px"
          className={cn(
            "mx-auto h-auto w-full max-w-[440px] transition-transform duration-500 hover:-translate-y-2 lg:max-w-none",
            big ? "lg:w-[600px]" : "lg:w-[580px]",
          )}
        />
      </Reveal>
    </div>
  );
}
