import { cn } from "@/lib/utils";
import { CONTAINER } from "@/lib/ui";
import Reveal from "@/app/_components/Reveal";

/** 인트로 — "3초 만에 찾아보세요". (Figma 2585-71548) */
export default function Intro() {
  return (
    <section id="intro" className="bg-bg-alt">
      <div className={cn(CONTAINER, "py-24 text-center lg:py-[140px]")}>
        <Reveal
          as="p"
          className="text-[18px] font-semibold leading-[1.358] tracking-[-0.024em] text-ink-tertiary sm:text-[24px] lg:text-[28px]"
        >
          배드민턴은 치고 싶은데 동호회 가입은 부담스럽다구요?
        </Reveal>
        <Reveal
          as="h2"
          delay={100}
          className="mt-7 text-[26px] font-bold leading-[1.358] tracking-[-0.024em] text-ink/90 sm:text-[36px] lg:mt-10 lg:text-[44px]"
        >
          이제 비매치에서 나에게 딱 맞는
          <br />
          배드민턴 모임을 <span className="text-primary-500">3초 만에</span>{" "}
          찾아보세요
        </Reveal>
      </div>
    </section>
  );
}
