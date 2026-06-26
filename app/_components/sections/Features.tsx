import { cn } from "@/lib/utils";
import { CONTAINER } from "@/lib/ui";
import Reveal from "@/app/_components/Reveal";
import FeatureRow from "@/app/_components/FeatureRow";

/** "게스트 참여 (30초)" 타이틀 + 4개 피처 행. (Figma 2585-71575) */
export default function Features() {
  return (
    <section className="bg-white">
      <div className={cn(CONTAINER, "pt-20 lg:pt-[120px]")}>
        <Reveal className="flex flex-col gap-5 lg:gap-6">
          <p className="text-[22px] font-bold tracking-[-0.024em] text-primary-500 sm:text-[28px]">
            게스트 참여
          </p>
          <h2 className="text-[28px] font-bold leading-[1.358] tracking-[-0.024em] text-ink/90 sm:text-[40px] lg:text-[52px]">
            오늘 함께
            <br />
            배드민턴 칠 모임,
            <br />
            30초 만에 찾아 보세요
          </h2>
        </Reveal>
      </div>

      <div
        className={cn(
          CONTAINER,
          "space-y-24 pt-16 pb-20 lg:space-y-[120px] lg:pt-24 lg:pb-[120px]",
        )}
      >
        <FeatureRow
          eyebrow="모임찾기"
          title={
            <>
              원하는 시간대의
              <br />
              모임을 한 눈에
            </>
          }
          desc={
            <>
              날짜, 지역, 성별 등 원하는 조건 설정은 기본,
              <br />
              일자별 모집글과 모임 정보까지 한 번에 볼 수 있어요.
            </>
          }
          screen={{
            src: "/screens/first.png",
            alt: "모임 리스트 화면",
            w: 2320,
            h: 4000,
          }}
        />
        <FeatureRow
          reverse
          eyebrow="모임정보"
          title={
            <>
              모임 정보와 분위기,
              <br />
              미리 알고 가서
              <br />
              당황할 일 없도록
            </>
          }
          desc={
            <>
              모임 회원들의 급수와 연령대, 성비까지.
              <br />
              나와 맞는 모임인지 미리 확인해 보세요.
            </>
          }
          screen={{
            src: "/screens/second.png",
            alt: "모임 정보 화면",
            w: 580,
            h: 1000,
          }}
        />
        <FeatureRow
          eyebrow="연락하기"
          title={
            <>
              번거롭게 물어볼 필요 없이
              <br />
              연락하기로 신청 끝
            </>
          }
          desc={
            <>
              원하는 모임을 찾았다면,
              <br />
              모임에 연락해 바로 모임장과 대화할 수 있어요.
            </>
          }
          screen={{
            src: "/screens/third.png",
            alt: "모임 상세 / 연락하기 화면",
            w: 2320,
            h: 4000,
          }}
        />
        <FeatureRow
          reverse
          eyebrow="초보환영"
          title={
            <>
              처음 시작하는 사람도
              <br />
              쉽게 어울릴 수 있도록
            </>
          }
          desc={
            <>
              배드민턴이 처음이어도 괜찮아요.
              <br />
              초보 환영 배지가 있는 모임을 찾아 편하게 참여해 보세요.
            </>
          }
          screen={{
            src: "/screens/fourth.png",
            alt: "장소별 모임 화면",
            w: 2320,
            h: 4000,
          }}
        />
      </div>
    </section>
  );
}
