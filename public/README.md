# 에셋 폴더 안내

랜딩페이지에서 실제로 사용 중인 에셋 매핑입니다. (경로는 `/` 부터 — 예: `/brand/logo.svg`)
SVG 에셋은 `next/image` 로 쓰기 위해 `next.config.ts` 에서 `images.dangerouslyAllowSVG` 를 켰습니다.

## brand/ — 로고 (SiteNav)

| 파일 | 쓰임 |
| --- | --- |
| `logo.svg` | 심볼 아이콘 |
| `text-logo.svg` | "b-match" 워드마크 |

## store/ — Hero 다운로드 버튼

| 파일 | 쓰임 |
| --- | --- |
| `apple.svg` | Apple Store 아이콘 |
| `google.svg` | Google Play 아이콘 |

## screens/ — 폰 목업 (위에서부터 순서대로, 프레임·그림자 포함된 통짜 이미지)

| 파일 | 섹션 |
| --- | --- |
| `first.png` | 모임찾기 — 모임 리스트 |
| `second.png` | 모임정보 — 급수/연령/성비 |
| `third.png` | 연락하기 — 모임 상세/연락하기 |
| `fourth.png` | 초보환영 — 장소별 모임 |
| `fifth.png` | 지도 |

## icons/ — 매칭 아이콘 + 3D 아이콘

| 파일 | 쓰임 |
| --- | --- |
| `campaign.svg` → `groups.svg` | 매칭(모임장) 카드 — 확성기 → 사람들 |
| `travel_explore.svg` → `group.svg` | 매칭(게스트) 카드 — 검색 → 사람 |
| `Card.png` | 다크 섹션 "간편 결제" 3D 아이콘 |
| `L-User.png` | 다크 섹션 "실시간 매칭" 3D 아이콘 |
