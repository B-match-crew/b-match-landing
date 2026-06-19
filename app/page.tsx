import Image from "next/image";
import Reveal from "@/app/_components/Reveal";
import Phone from "@/app/_components/Phone";
import TopNav from "@/app/_components/TopNav";

/* ---------- 작은 아이콘들 ---------- */

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path
        d="M4 10.5l3.5 3.5L16 5.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 21s-7.5-4.6-10-9.2C.4 8.6 1.9 5 5.3 5c2 0 3.4 1.2 4.7 2.8C11.3 6.2 12.7 5 14.7 5 18.1 5 19.6 8.6 22 11.8 19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- 공용 작은 컴포넌트 ---------- */

function StepBadge({ n }: { n: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-primary-300 px-4 py-1 text-[13px] font-bold tracking-wide text-primary-600 sm:text-[14px]">
      {n}
    </span>
  );
}

function CheckFeature({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center justify-center gap-1.5 text-[16px] font-semibold text-primary-500 lg:justify-start lg:text-[18px]">
      <CheckIcon className="h-[18px] w-[18px] shrink-0 lg:h-5 lg:w-5" />
      <span>{children}</span>
    </p>
  );
}

function BoBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-0.5 rounded-full bg-accent-500 px-2 py-[3px] text-[10px] font-bold leading-none text-white">
      <HeartIcon className="h-2.5 w-2.5" />
      초보환영
    </span>
  );
}

function MapPin({
  label,
  x,
  y,
  big,
  delay = 0,
}: {
  label?: string;
  x: string;
  y: string;
  big?: boolean;
  delay?: number;
}) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center animate-float"
      style={{ left: x, top: y, animationDelay: `${delay}ms` }}
    >
      {label && (
        <span className="mb-1 whitespace-nowrap rounded-md bg-white/90 px-1.5 py-0.5 text-[9px] font-semibold text-ink shadow-sm">
          {label}
        </span>
      )}
      <svg
        viewBox="0 0 24 32"
        className={big ? "h-9 w-7 drop-shadow-md" : "h-6 w-[18px] drop-shadow"}
        fill="none"
        aria-hidden
      >
        <path
          d="M12 0C5.4 0 0 5.3 0 11.8 0 20.6 12 32 12 32s12-11.4 12-20.2C24 5.3 18.6 0 12 0z"
          fill="#ff27b0"
        />
        <circle cx="12" cy="11.5" r="4.2" fill="#fff" />
      </svg>
    </div>
  );
}

function FilterChip({
  label,
  caret,
  active,
}: {
  label: string;
  caret?: boolean;
  active?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full border px-3 py-1.5 text-[12px] font-medium ${
        active
          ? "border-secondary-main bg-secondary-main text-white"
          : "border-gray-100 bg-white text-ink-secondary"
      }`}
    >
      {label}
      {caret && <ChevronDown className="h-3 w-3" />}
    </span>
  );
}

/* ---------- 모임 리스트 아이템 ---------- */

type Meeting = {
  time: string;
  name: string;
  bo?: boolean;
  region: string;
  place: string;
  demo: string;
};

function MeetingItem({
  m,
  dim,
  highlight,
}: {
  m: Meeting;
  dim?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex gap-3 rounded-2xl px-3 py-3 transition ${
        highlight ? "bg-white ring-2 ring-primary-400 animate-glow" : "bg-transparent"
      } ${dim ? "opacity-40" : ""}`}
    >
      <div className="w-[42px] shrink-0 pt-0.5 text-[15px] font-extrabold text-ink">
        {m.time}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="truncate text-[14px] font-bold text-ink">{m.name}</span>
          {m.bo && <BoBadge />}
        </div>
        <p className="mt-1 truncate text-[11px] text-ink-tertiary">
          {m.region} · {m.place}
        </p>
        <p className="mt-0.5 truncate text-[11px] text-ink-tertiary">{m.demo}</p>
      </div>
    </div>
  );
}

const MEETINGS: Meeting[] = [
  {
    time: "09:00",
    name: "무궁화배드민턴모임",
    bo: true,
    region: "서울시 강남구",
    place: "방산중학교",
    demo: "남녀모두 · 20~50대 · 초심 이상~A조 이하",
  },
  {
    time: "09:00",
    name: "강서구 직장인 배드민턴",
    region: "서울시 강서구",
    place: "가양다목적체육관",
    demo: "남녀모두 · 20~30대 · D조 이상~A조 이하",
  },
  {
    time: "10:00",
    name: "셔틀메이트3040모임",
    bo: true,
    region: "성남시 분당구",
    place: "분당종합스포츠센터",
    demo: "여성만 · 30~40대 · 초심 이상~A조 이하",
  },
  {
    time: "11:00",
    name: "굿샷배드민턴모임",
    region: "서울시 송파구",
    place: "잠실생활체육관",
    demo: "남녀모두 · 20~30대 · 입문 이상~B조 이하",
  },
];

const DATES = [
  { d: "21", w: "오늘", today: true },
  { d: "22", w: "목" },
  { d: "23", w: "금" },
  { d: "24", w: "토" },
  { d: "25", w: "일" },
  { d: "26", w: "월" },
];

/* ---------- 재사용 목업 ---------- */

function CalendarPhone() {
  return (
    <div className="relative">
      {/* 떠 있는 '오늘' 원형 */}
      <div className="absolute -left-1 -top-5 z-10 flex h-[78px] w-[78px] flex-col items-center justify-center rounded-full bg-white shadow-[0_10px_24px_-6px_rgba(25,31,40,0.25)] animate-float">
        <span className="text-[12px] font-medium text-ink-tertiary">21</span>
        <span className="mt-0.5 rounded-full bg-primary-400 px-3 py-0.5 text-[13px] font-bold text-white">
          오늘
        </span>
      </div>

      <Phone className="text-left">
        <div className="flex justify-between px-4 pt-2">
          {DATES.map((d) => (
            <div key={d.d} className="flex flex-col items-center gap-1">
              <span
                className={`text-[14px] font-bold ${
                  d.today ? "text-primary-500" : "text-ink"
                }`}
              >
                {d.d}
              </span>
              <span
                className={`text-[11px] ${
                  d.today ? "font-bold text-primary-500" : "text-ink-tertiary"
                }`}
              >
                {d.w}
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-2 overflow-hidden px-4 pt-4 pb-3">
          <FilterChip label="마감제외" />
          <FilterChip label="지역" caret />
          <FilterChip label="성별" caret />
          <FilterChip label="초보환영" />
        </div>

        <div className="h-px bg-gray-100" />

        <div className="px-1 py-1">
          {MEETINGS.map((m, i) => (
            <MeetingItem key={i} m={m} dim={i === MEETINGS.length - 1} />
          ))}
        </div>
      </Phone>
    </div>
  );
}

function MapPhone() {
  return (
    <Phone>
      <div className="flex gap-1.5 overflow-hidden px-3 pt-1 pb-2">
        <FilterChip label="날짜" caret />
        <FilterChip label="마감제외" />
        <FilterChip label="남녀모두" caret active />
        <FilterChip label="초보환영" />
      </div>

      <div className="relative">
        <Image
          src="/figma/map-screen.png"
          alt="지도에서 내 주변 배드민턴 모임을 보여주는 화면"
          width={887}
          height={1774}
          className="h-auto w-full"
        />

        <span className="absolute left-1/2 top-3 inline-flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-ink-secondary shadow-md">
          <svg viewBox="0 0 14 14" className="h-3 w-3" fill="none" aria-hidden>
            <path d="M11.5 2.5A6 6 0 102 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M9 2.5h2.8V5.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          현 지도에서 검색
        </span>

        <MapPin label="서울메이트2030" x="64%" y="30%" delay={0} />
        <MapPin label="강남 방병 배드민턴" x="24%" y="44%" delay={400} />
        <MapPin x="52%" y="50%" delay={800} />
        <MapPin label="송파 직장인 배드민턴" x="62%" y="56%" delay={200} />
        <MapPin label="강남2030 배드민턴" x="38%" y="68%" big delay={600} />
        <MapPin x="88%" y="62%" delay={1000} />
        <MapPin label="무궁화배드민턴모임" x="30%" y="86%" delay={300} />
      </div>
    </Phone>
  );
}

function ContactCard() {
  return (
    <div className="relative overflow-visible rounded-[22px] bg-white text-left shadow-[0_18px_40px_-12px_rgba(25,31,40,0.22)] ring-1 ring-gray-100">
      <div className="relative h-[150px] w-full overflow-hidden rounded-t-[22px] sm:h-[180px]">
        <Image src="/figma/badminton.png" alt="" fill className="object-cover" />
      </div>
      <div className="px-5 pt-5 pb-6">
        <BoBadge />
        <h3 className="mt-2 text-[17px] font-extrabold text-ink sm:text-[19px]">
          강남 2030 배드민턴 모임
        </h3>
        <dl className="mt-3 space-y-1.5 text-[13px] text-ink-secondary sm:text-[14px]">
          <div className="flex gap-2">
            <dt aria-hidden>📅</dt>
            <dd>7월 30일 목요일 19:00 ~ 22:00</dd>
          </div>
          <div className="flex gap-2">
            <dt aria-hidden>📍</dt>
            <dd>서울특별시 강남구 밤고개로690 52</dd>
          </div>
          <div className="flex gap-2 opacity-50">
            <dt aria-hidden>🏟️</dt>
            <dd>강남스포츠문화센터 4층</dd>
          </div>
        </dl>
      </div>

      {/* 연락하기 팝업 — 카드 하단에 겹쳐 떠 있음 */}
      <div className="relative z-10 -mt-2 mx-2 mb-2 rounded-2xl border-2 border-primary-300 bg-white p-4 text-center shadow-[0_14px_30px_-10px_rgba(17,187,167,0.4)]">
        <p className="text-[13px] text-ink-tertiary">
          모임장이 등록한 연락 링크로 이동해요!
        </p>
        <button
          type="button"
          className="mt-3 w-full rounded-xl bg-secondary-main py-3.5 text-[15px] font-bold text-white transition-transform active:scale-[0.98]"
        >
          모임장에게 연락하기
        </button>
      </div>
    </div>
  );
}

/* ---------- 페이지 ---------- */

export default function Home() {
  return (
    <>
      <TopNav />

      <main className="w-full overflow-hidden bg-white">
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-300 via-primary-200 to-white px-6 pt-14 pb-[280px] text-center sm:pb-[360px] lg:pt-24 lg:pb-[440px]">
          <div className="mx-auto max-w-3xl">
            <Reveal as="p" className="text-[14px] font-semibold leading-relaxed text-ink-secondary sm:text-[16px] lg:text-[18px]">
              배드민턴은 치고 싶은데
              <br />
              동호회 가입은 부담스럽다구요?
            </Reveal>
            <Reveal
              as="h2"
              delay={120}
              className="mt-5 text-[28px] font-extrabold leading-[1.36] tracking-tight text-ink sm:text-[40px] lg:text-[52px] xl:text-[58px]"
            >
              오늘 바로, 내 근처 모임에
              <br />
              게스트로 참여하세요
            </Reveal>
          </div>

          {/* 하단 지도 일러스트 + 펄스 핀 */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[240px] sm:h-[320px] lg:h-[400px]">
            <Image
              src="/figma/hero-map.png"
              alt=""
              fill
              priority
              className="animate-float-slow object-cover object-top opacity-95"
            />
            <span className="absolute left-1/2 top-[78px] h-10 w-10 -translate-x-1/2 rounded-full bg-primary-400/60 animate-pulse-ring lg:top-[120px] lg:h-14 lg:w-14" />
          </div>
        </section>

        {/* ===== 다크 밴드 ===== */}
        <section className="bg-secondary-main px-6 py-12 text-center lg:py-20">
          <Reveal as="p" className="text-[14px] font-medium text-ink-assistive sm:text-[16px]">
            게스트로 어떻게 참여하나요?
          </Reveal>
          <Reveal
            as="h2"
            delay={100}
            className="mt-3 text-[26px] font-extrabold tracking-tight text-white sm:text-[38px] lg:text-[48px]"
          >
            이렇게 참여해보세요
          </Reveal>
        </section>

        {/* ===== STEP 01 + 지도 (회색 배경) ===== */}
        <section className="bg-bg-alt px-6 py-14 lg:py-24">
          {/* STEP 01 — 일정/모임 확인 */}
          <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="text-center lg:text-left">
              <Reveal>
                <StepBadge n="01" />
              </Reveal>
              <Reveal as="h2" delay={80} className="mt-5 text-[22px] font-extrabold leading-[1.4] text-ink sm:text-[30px] lg:text-[38px]">
                원하는 일정이나
                <br />
                가까운 모임을 확인하세요!
              </Reveal>
              <Reveal delay={140} className="mt-8 lg:mt-7">
                <CheckFeature>
                  날짜를 골라 <span className="font-extrabold">원하는 일정</span>을 한 번에
                </CheckFeature>
              </Reveal>
            </div>
            <Reveal delay={120} className="mx-auto mt-10 w-full max-w-[330px] sm:max-w-[360px] lg:mt-0">
              <CalendarPhone />
            </Reveal>
          </div>

          {/* 지도 기능 */}
          <div className="mx-auto mt-20 max-w-6xl lg:mt-28 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="text-center lg:order-2 lg:text-left">
              <Reveal>
                <CheckFeature>
                  지도에서 <span className="font-extrabold">내 주변 모임</span>을 한 눈에
                </CheckFeature>
              </Reveal>
            </div>
            <Reveal delay={120} className="mx-auto mt-8 w-full max-w-[330px] sm:max-w-[360px] lg:order-1 lg:mt-0">
              <MapPhone />
            </Reveal>
          </div>
        </section>

        {/* ===== STEP 02 — 연락하기 ===== */}
        <section className="bg-white px-6 py-14 lg:py-24">
          <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="text-center lg:text-left">
              <Reveal>
                <StepBadge n="02" />
              </Reveal>
              <Reveal as="h2" delay={80} className="mt-5 text-[22px] font-extrabold leading-[1.4] text-ink sm:text-[30px] lg:text-[38px]">
                번거롭게 물어볼 필요 없이,
                <br />
                연락하기로 신청 끝!
              </Reveal>
              <Reveal delay={140} className="mt-8 lg:mt-7">
                <CheckFeature>
                  채팅으로 이동해 <span className="font-extrabold">모임장과 바로 대화</span>
                </CheckFeature>
              </Reveal>
            </div>
            <Reveal delay={120} className="mx-auto mt-10 w-full max-w-[330px] sm:max-w-[360px] lg:mt-0">
              <ContactCard />
            </Reveal>
          </div>
        </section>

        {/* ===== 초보환영 ===== */}
        <section className="bg-white px-6 pb-16 text-center lg:pb-28">
          <Reveal as="p" className="text-[14px] font-medium text-ink-tertiary sm:text-[16px]">
            초보라도 괜찮을지 걱정된다구요?
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-3 text-[24px] font-extrabold leading-[1.4] text-ink sm:text-[34px] lg:text-[44px]">
            초보자를 반기는
            <br />
            <span className="text-primary-500">초보환영</span> 모임을 만나보세요
          </Reveal>

          <Reveal delay={140} className="mx-auto mt-9 w-full max-w-[440px] lg:mt-12">
            <div className="rounded-3xl bg-bg-alt p-2 text-left">
              <MeetingItem m={MEETINGS[1]} dim />
              <MeetingItem
                m={{
                  time: "10:00",
                  name: "셔틀메이트2030모임",
                  bo: true,
                  region: "성남시 분당구",
                  place: "분당종합스포츠센터",
                  demo: "남녀모두 · 20~30대 · 초심 이상~A조 이하",
                }}
                highlight
              />
              <MeetingItem m={MEETINGS[3]} dim />
            </div>
          </Reveal>
        </section>

        {/* ===== COMING SOON + CTA ===== */}
        <section className="bg-gradient-to-b from-white via-primary-200 to-primary-300 px-6 pt-16 pb-16 text-center lg:pt-24 lg:pb-24">
          <Reveal as="h2" className="text-[24px] font-extrabold leading-[1.4] text-ink sm:text-[34px] lg:text-[44px]">
            당신의 배드민턴이
            <br />
            지금보다 더 쉬워지도록
          </Reveal>
          <Reveal as="p" delay={80} className="mt-3 text-[14px] text-ink-secondary sm:text-[16px] lg:text-[18px]">
            더 편리한 기능을 곧 선보일 예정이에요
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 lg:mt-14 lg:gap-6">
            {[
              {
                icon: "/figma/icon-pay.png",
                title: "간편 결제",
                desc: ["참가비 제출까지", "한 번에 해결"],
              },
              {
                icon: "/figma/icon-match.png",
                title: "실시간 매칭",
                desc: ["연락할 필요없이", "즉시 모임과 매칭"],
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <div className="flex h-full flex-col items-center rounded-3xl bg-white px-4 py-7 shadow-[0_12px_30px_-12px_rgba(25,31,40,0.2)] lg:py-10">
                  <Image src={f.icon} alt="" width={72} height={72} className="h-[72px] w-[72px] object-contain lg:h-[88px] lg:w-[88px]" />
                  <h3 className="mt-4 text-[17px] font-extrabold text-primary-600 sm:text-[19px] lg:text-[22px]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-tertiary sm:text-[14px] lg:text-[16px]">
                    {f.desc[0]}
                    <br />
                    {f.desc[1]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mx-auto mt-12 w-full max-w-md lg:mt-16">
            <button
              type="button"
              className="w-full rounded-2xl bg-secondary-main py-4 text-[17px] font-bold text-white shadow-[0_14px_30px_-10px_rgba(52,61,74,0.6)] transition-transform hover:-translate-y-0.5 active:scale-[0.98] lg:py-5 lg:text-[19px]"
            >
              비매치 시작하기
            </button>
          </Reveal>
        </section>
      </main>
    </>
  );
}
