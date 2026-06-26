import Image from "next/image";

import { cn } from "@/lib/utils";
import { CONTAINER } from "@/lib/ui";
import Reveal from "@/app/_components/Reveal";

const FEATURES = [
  {
    icon: "/icons/Card.png",
    w: 153,
    h: 142,
    title: "간편 결제",
    desc: ["참가비 제출까지", "한 번에 해결"],
  },
  {
    icon: "/icons/L-User.png",
    w: 162,
    h: 162,
    title: "실시간 매칭",
    desc: ["연락할 필요없이", "즉시 모임과 매칭"],
  },
];

/** Coming Soon (다크) — 곧 출시될 기능 소개. (Figma 2585-71889) */
export default function ComingSoon() {
  return (
    <section className="bg-[#232a33]">
      <div className={cn(CONTAINER, "flex flex-col gap-12 py-20 lg:gap-16 lg:py-[120px]")}>
        <Reveal className="flex flex-col gap-6 text-center lg:gap-10">
          <h2 className="text-[28px] font-bold leading-[1.358] tracking-[-0.024em] text-white/90 sm:text-[40px] lg:text-[52px]">
            당신의 배드민턴이
            <br />
            지금보다 더 쉬워지도록
          </h2>
          <p className="text-[17px] font-medium leading-[1.475] tracking-[-0.02em] text-ink-tertiary sm:text-[22px] lg:text-[32px]">
            더 편리한 기능을 곧 선보일 예정이에요
          </p>
        </Reveal>

        <div className="flex flex-col items-stretch justify-center gap-6 sm:flex-row lg:gap-10">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} dir="scale" delay={i * 120}>
              <div className="group flex h-full flex-col items-center justify-center gap-6 rounded-[19px] bg-white px-10 py-9 shadow-[0_9px_14px_rgba(25,31,40,0.14),0_0_7px_rgba(25,31,40,0.16)] transition-transform duration-300 hover:-translate-y-1.5 lg:px-16 lg:py-10">
                <div className="flex size-[130px] items-center justify-center lg:size-[162px]">
                  <Image
                    src={f.icon}
                    alt=""
                    width={f.w}
                    height={f.h}
                    className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col items-center gap-2.5 text-center">
                  <h3 className="text-[20px] font-bold tracking-[-0.023em] text-secondary-main lg:text-[24px]">
                    {f.title}
                  </h3>
                  <p className="text-[16px] font-medium leading-[1.4] tracking-[-0.012em] text-ink-tertiary lg:text-[20px]">
                    {f.desc[0]}
                    <br />
                    {f.desc[1]}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
