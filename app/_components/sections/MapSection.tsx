import { cn } from "@/lib/utils";
import { CONTAINER } from "@/lib/ui";
import FeatureRow from "@/app/_components/FeatureRow";

/** 지도 섹션. (Figma 2585-71841) */
export default function MapSection() {
  return (
    <section className="bg-white">
      <div className={cn(CONTAINER, "py-20 lg:py-[120px]")}>
        <FeatureRow
          big
          eyebrow="지도"
          eyebrowVariant="text"
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
  );
}
