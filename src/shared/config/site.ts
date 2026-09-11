/**
 * 사이트 전역 상수.
 *
 * 둘 다 공개 값이다 — NEXT_PUBLIC_* 로 두어도 결국 클라이언트 번들에
 * 그대로 인라인되므로 환경변수로 숨겨지는 것이 없다. 반면 배포 환경에
 * 주입을 빠뜨리면 조용히 빈 값이 되어 GTM 이 통째로 사라지고 canonical 이
 * 배포별 vercel 주소를 가리킨다(실제로 그랬다). 그래서 평문으로 박는다.
 */

/**
 * 사이트 절대 주소. metadataBase · canonical · OG 이미지의 기준.
 */
export const SITE_URL = "https://bmatch.app";

/** GTM 컨테이너 id. */
export const GTM_ID = "GTM-5WQCW4BJ";

/** 당근마켓 광고 픽셀 id. */
export const KARROT_PIXEL_ID = "1789033725844538001";
