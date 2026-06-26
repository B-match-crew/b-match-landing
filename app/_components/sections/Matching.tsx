import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { CONTAINER } from "@/lib/ui";
import Reveal from "@/app/_components/Reveal";

/** 매칭 섹션 — 모임장 ↔ 게스트 연결. (Figma 2585-71553) */
export default function Matching() {
  return (
    <section className="bg-white">
      <div
        className={cn(
          CONTAINER,
          "flex flex-col gap-16 py-20 lg:gap-[100px] lg:pt-[120px] lg:pb-[120px]",
        )}
      >
        {/* 타이틀 */}
        <Reveal className="flex flex-col gap-5 lg:gap-6">
          <p className="text-[22px] font-bold tracking-[-0.024em] text-primary-500 sm:text-[28px]">
            매칭
          </p>
          <h2 className="text-[28px] font-bold leading-[1.358] tracking-[-0.024em] text-ink/90 sm:text-[40px] lg:text-[52px]">
            게스트가 필요한 모임과
            <br />
            오늘 칠 곳을 찾는 동호인을
            <br />
            연결해요
          </h2>
        </Reveal>

        {/* 모임장이라면 */}
        <MatchRow
          tone="violet"
          chip="모임장이라면"
          title={
            <>
              정모 인원 부족 걱정,
              <br />
              이젠 할 필요 없어요
            </>
          }
          desc={
            <>
              모집글만 작성하면 근처 유저에게 자동 노출돼요.
              <br />
              급수, 성별, 나이 등 조건에 맞는 게스트가 알아서 찾아와요.
            </>
          }
          from="/icons/campaign.svg"
          to="/icons/group.svg"
        />

        {/* 게스트라면 */}
        <MatchRow
          reverse
          tone="green"
          chip="게스트라면"
          title={
            <>
              원하는 배드민턴 모임 찾기
              <br />
              30초면 끝나요
            </>
          }
          desc={
            <>
              내 주변 모임 일정을 확인해 보세요.
              <br />
              부담없이 게스트로 먼저 경험해보고, 딱 맞는 모임을 찾을 수 있어요.
            </>
          }
          from="/icons/travel_explore.svg"
          to="/icons/groups.svg"
        />
      </div>
    </section>
  );
}

/* ───────────────── 매칭 섹션 행 (텍스트 + 아이콘 카드) ───────────────── */

function MatchRow({
  tone,
  chip,
  title,
  desc,
  from,
  to,
  reverse = false,
}: {
  tone: "violet" | "green";
  chip: string;
  title: ReactNode;
  desc: ReactNode;
  from: string;
  to: string;
  reverse?: boolean;
}) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10">
      {/* 텍스트 */}
      <Reveal
        dir={reverse ? "right" : "left"}
        className={cn(
          "flex flex-1 flex-col justify-between gap-6",
          reverse && "lg:order-2",
        )}
      >
        <div className="flex flex-col items-start gap-4">
          <span
            className={cn(
              "inline-flex rounded-[10px] px-3.5 py-1.5 text-[18px] font-semibold tracking-[-0.012em] sm:text-[22px]",
              tone === "violet"
                ? "bg-violet-50 text-violet-700"
                : "bg-green-50 text-green-700",
            )}
          >
            {chip}
          </span>
          <h3 className="text-[24px] font-bold leading-[1.375] tracking-[-0.025em] text-ink sm:text-[28px] lg:text-[32px]">
            {title}
          </h3>
        </div>
        <p className="text-[16px] font-semibold leading-[1.4] tracking-[-0.012em] text-ink-secondary sm:text-[18px] lg:text-[22px]">
          {desc}
        </p>
      </Reveal>

      {/* 아이콘 카드 */}
      <Reveal
        dir={reverse ? "left" : "right"}
        delay={120}
        className={cn("lg:shrink-0", reverse && "lg:order-1")}
      >
        <div className="flex h-[180px] w-full items-center justify-center gap-6 rounded-[30px] bg-bg-alt px-8 sm:h-[220px] sm:gap-8 lg:h-[260px] lg:w-[560px] lg:px-[100px]">
          <Image src={from} alt="" width={80} height={80} className="size-16 lg:size-20" />
          <ArrowRight
            className="size-8 shrink-0 text-[#60918B] lg:size-10"
            aria-hidden
          />
          <Image src={to} alt="" width={80} height={80} className="size-16 lg:size-20" />
        </div>
      </Reveal>
    </div>
  );
}
