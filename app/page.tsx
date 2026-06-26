import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Reveal from "@/app/_components/Reveal";
import SiteNav from "@/app/_components/SiteNav";
import Footer from "@/app/_components/Footer";

/* ───────────────── 공용 작은 컴포넌트 ───────────────── */

const CONTAINER = "mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-6";

function Eyebrow({
  children,
  tone = "teal",
}: {
  children: ReactNode;
  tone?: "teal" | "violet" | "green";
}) {
  const tones = {
    teal: "bg-primary-500 text-white",
    violet: "bg-violet-50 text-violet-700",
    green: "bg-green-50 text-green-700",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-[14px] font-bold tracking-tight",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

/** 앱스토어 / 플레이스토어 다운로드 버튼. */
function StoreButton({ icon, label }: { icon: string; label: string }) {
  return (
    <Button asChild variant="store" size="store">
      <a href="#download">
        <Image src={icon} alt="" width={24} height={24} className="size-5" />
        {label}
      </a>
    </Button>
  );
}

type Screen = { src: string; alt: string; w: number; h: number };

/* ───────────────── 좌우 교차 피처 행 ───────────────── */

function FeatureRow({
  eyebrow,
  title,
  desc,
  screen,
  reverse = false,
}: {
  eyebrow: string;
  title: ReactNode;
  desc: ReactNode;
  screen: Screen;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal
        dir={reverse ? "right" : "left"}
        className={cn("text-center lg:text-left", reverse && "lg:order-2")}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 className="mt-6 text-[26px] font-extrabold leading-[1.32] tracking-tight text-ink sm:text-[32px] lg:text-[34px]">
          {title}
        </h3>
        <p className="mx-auto mt-5 max-w-[460px] text-[15px] leading-relaxed text-ink-secondary sm:text-[16px] lg:mx-0">
          {desc}
        </p>
      </Reveal>

      <Reveal
        dir={reverse ? "left" : "right"}
        delay={120}
        className={cn("flex justify-center", reverse && "lg:order-1")}
      >
        <Image
          src={screen.src}
          alt={screen.alt}
          width={screen.w}
          height={screen.h}
          sizes="(max-width: 1024px) 80vw, 320px"
          className="h-auto w-full max-w-[300px] transition-transform duration-500 hover:-translate-y-2 sm:max-w-[320px]"
        />
      </Reveal>
    </div>
  );
}

/* ───────────────── 페이지 ───────────────── */

export default function Home() {
  return (
    <div id="top">
      <SiteNav />

      <main className="overflow-hidden bg-white">
        {/* ===== HERO ===== */}
        <section className="bg-gradient-to-b from-white via-primary-50 to-primary-200">
          <div className={cn(CONTAINER, "pb-24 pt-20 text-center lg:pb-32 lg:pt-28")}>
            <Reveal
              as="h1"
              className="text-[32px] font-extrabold leading-[1.32] tracking-tight text-ink sm:text-[44px] lg:text-[52px]"
            >
              오늘 바로, 내 근처
              <br />
              배드민턴 모임에 게스트 참여
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="mx-auto mt-6 max-w-[640px] text-[15px] leading-relaxed text-ink-secondary sm:text-[18px]"
            >
              내 위치와 실력에 맞는 최적의 모임에 게스트로 가볍게 참여해보세요.
            </Reveal>
            <Reveal
              delay={220}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <StoreButton icon="/store/apple.svg" label="Apple Store" />
              <StoreButton icon="/store/google.svg" label="Google Play" />
            </Reveal>
          </div>
        </section>

        {/* ===== INTRO ===== */}
        <section
          id="intro"
          className="bg-gradient-to-b from-primary-200 via-bg-alt to-white"
        >
          <div className={cn(CONTAINER, "py-24 text-center lg:py-32")}>
            <Reveal
              as="p"
              className="text-[15px] font-medium text-ink-tertiary sm:text-[17px]"
            >
              배드민턴은 치고 싶은데 동호회 가입은 부담스럽다구요?
            </Reveal>
            <Reveal
              as="h2"
              delay={100}
              className="mt-5 text-[26px] font-extrabold leading-[1.4] tracking-tight text-ink sm:text-[36px] lg:text-[40px]"
            >
              이제 비매치에서 나에게 딱 맞는
              <br />
              배드민턴 모임을{" "}
              <span className="text-primary-500">3초 만에</span> 찾아보세요
            </Reveal>
          </div>
        </section>

        {/* ===== 매칭 ===== */}
        <section className="bg-white">
          <div className={cn(CONTAINER, "py-20 lg:py-28")}>
            <Reveal>
              <Eyebrow>매칭</Eyebrow>
              <h2 className="mt-6 text-[28px] font-extrabold leading-[1.3] tracking-tight text-ink sm:text-[38px] lg:text-[44px]">
                게스트가 필요한 모임과
                <br />
                오늘 칠 곳을 찾는 동호인을
                <br />
                연결해요
              </h2>
            </Reveal>

            {/* 모임장이라면 — 텍스트 좌 / 아이콘 카드 우 */}
            <div className="mt-16 grid items-center gap-10 lg:mt-24 lg:grid-cols-2 lg:gap-16">
              <Reveal dir="left">
                <Eyebrow tone="violet">모임장이라면</Eyebrow>
                <h3 className="mt-5 text-[22px] font-extrabold leading-[1.4] tracking-tight text-ink sm:text-[28px]">
                  정모 인원 부족 걱정,
                  <br />
                  이젠 할 필요 없어요
                </h3>
                <p className="mt-5 max-w-[460px] text-[15px] leading-relaxed text-ink-secondary sm:text-[16px]">
                  모집글만 작성하면 근처 유저에게 자동 노출돼요.
                  <br />
                  급수, 성별, 나이 등 조건에 맞는 게스트가 알아서 찾아와요.
                </p>
              </Reveal>
              <Reveal dir="right" delay={120}>
                <IconCard from="/icons/campaign.svg" to="/icons/groups.svg" />
              </Reveal>
            </div>

            {/* 게스트라면 — 아이콘 카드 좌 / 텍스트 우 */}
            <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-16">
              <Reveal dir="left" delay={120} className="lg:order-1">
                <IconCard from="/icons/travel_explore.svg" to="/icons/group.svg" />
              </Reveal>
              <Reveal dir="right" className="lg:order-2">
                <Eyebrow tone="green">게스트라면</Eyebrow>
                <h3 className="mt-5 text-[22px] font-extrabold leading-[1.4] tracking-tight text-ink sm:text-[28px]">
                  원하는 배드민턴 모임 찾기
                  <br />
                  30초면 끝나요
                </h3>
                <p className="mt-5 max-w-[460px] text-[15px] leading-relaxed text-ink-secondary sm:text-[16px]">
                  내 주변 모임 일정을 확인해 보세요.
                  <br />
                  부담없이 게스트로 먼저 경험해보고, 딱 맞는 모임을 찾을 수
                  있어요.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===== 30초 안에 찾기 + 피처들 ===== */}
        <section className="bg-white">
          <div className={cn(CONTAINER, "pb-8 pt-12 text-center lg:pt-16")}>
            <Reveal
              as="h2"
              className="text-[28px] font-extrabold leading-[1.36] tracking-tight text-ink sm:text-[38px] lg:text-[44px]"
            >
              오늘 함께 배드민턴 칠 모임,
              <br />
              30초 만에 찾아 보세요
            </Reveal>
          </div>

          <div className={cn(CONTAINER, "space-y-24 py-16 lg:space-y-36 lg:py-24")}>
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

        {/* ===== 지도 ===== */}
        <section className="bg-bg-alt">
          <div className={cn(CONTAINER, "py-20 lg:py-28")}>
            <FeatureRow
              eyebrow="지도"
              title={
                <>
                  내 주변 배드민턴 모임,
                  <br />
                  지도에서 바로 찾기
                </>
              }
              desc={
                <>
                  내 위치 기반으로 근처 모임 정보와
                  <br />
                  예정된 정모까지 한 눈에 볼 수 있어요
                </>
              }
              screen={{
                src: "/screens/fifth.png",
                alt: "지도 화면",
                w: 2400,
                h: 3600,
              }}
            />
          </div>
        </section>

        {/* ===== COMING SOON (다크) ===== */}
        <section id="download" className="bg-secondary-main">
          <div className={cn(CONTAINER, "py-24 text-center lg:py-32")}>
            <Reveal
              as="h2"
              className="text-[28px] font-extrabold leading-[1.36] tracking-tight text-white sm:text-[36px] lg:text-[42px]"
            >
              당신의 배드민턴이
              <br />
              지금보다 더 쉬워지도록
            </Reveal>
            <Reveal
              as="p"
              delay={100}
              className="mt-5 text-[15px] text-ink-assistive sm:text-[17px]"
            >
              더 편리한 기능을 곧 선보일 예정이에요
            </Reveal>

            <div className="mx-auto mt-14 grid max-w-[560px] grid-cols-1 gap-5 sm:grid-cols-2">
              {[
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
              ].map((f, i) => (
                <Reveal key={f.title} dir="scale" delay={i * 120}>
                  <div className="group flex h-full flex-col items-center rounded-3xl bg-white px-6 py-10 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1.5">
                    <Image
                      src={f.icon}
                      alt=""
                      width={f.w}
                      height={f.h}
                      className="h-[88px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <h3 className="mt-5 text-[18px] font-extrabold text-ink sm:text-[20px]">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-tertiary">
                      {f.desc[0]}
                      <br />
                      {f.desc[1]}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* ───────────────── 매칭 섹션 아이콘 카드 ───────────────── */

function IconCard({ from, to }: { from: string; to: string }) {
  return (
    <div className="flex min-h-[180px] items-center justify-center gap-5 rounded-3xl bg-bg-alt px-8 py-12 sm:gap-7 lg:min-h-[200px]">
      <Image src={from} alt="" width={80} height={80} className="size-16 sm:size-[72px]" />
      <ArrowRight className="size-7 shrink-0 text-ink-tertiary" aria-hidden />
      <Image src={to} alt="" width={80} height={80} className="size-16 sm:size-[72px]" />
    </div>
  );
}
