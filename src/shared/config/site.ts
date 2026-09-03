/**
 * 배포 환경에 따라 달라지는 값.
 *
 * 소스에 박아 두면 프리뷰 배포에서도 canonical 이 프로덕션을 가리키고
 * (검색엔진이 프리뷰를 원본으로 오해할 수 있다), GTM 이 프로덕션 컨테이너로
 * 발화해 실사용 지표에 테스트 트래픽이 섞인다.
 */

/**
 * 사이트 절대 주소. metadataBase · canonical · OG 이미지의 기준.
 *
 * Vercel 프리뷰에는 NEXT_PUBLIC_SITE_URL 이 없으므로 VERCEL_URL 로 폴백한다.
 * 둘 다 없으면(로컬) 프로덕션 주소를 쓴다 — 로컬에서 canonical 은 의미가 없다.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "https://bmatch.app");

/**
 * GTM 컨테이너 id. **비어 있으면 태그를 아예 렌더하지 않는다** —
 * 빈 id 로 스크립트를 붙이면 콘솔 오류만 남고 얻는 것이 없다.
 */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";
