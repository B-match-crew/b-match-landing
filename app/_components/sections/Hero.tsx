import { cn } from "@/lib/utils";
import { CONTAINER } from "@/lib/ui";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/links";
import Reveal from "@/app/_components/Reveal";
import StoreButton from "@/app/_components/StoreButton";

/** Hero — 메인 헤드라인 + 스토어 버튼. (Figma 2585-71538) */
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white from-[20%] to-[#5bedd5]">
      <div className={cn(CONTAINER, "py-20 text-center lg:py-[120px]")}>
        <Reveal
          as="h1"
          className="text-[28px] font-bold leading-[1.4] tracking-[-0.02em] text-[#212121] sm:text-[44px] lg:text-[66px]"
        >
          오늘 바로, 내 근처
          <br />
          배드민턴 모임을 만나보세요
        </Reveal>
        <Reveal
          as="p"
          delay={120}
          className="mx-auto mt-6 max-w-[860px] text-[15px] font-medium leading-[1.375] tracking-[-0.02em] text-[#616161] sm:text-[20px] lg:mt-10 lg:text-[32px]"
        >
          내 위치와 실력에 맞는 최적의 모임에 게스트로 가볍게 참여해보세요.
        </Reveal>
        <Reveal
          delay={220}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 lg:mt-20 lg:gap-6"
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
