import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/**
 * 레이어는 아래로만 흐른다: shared ← widgets ← app.
 *
 * 규모가 작아 features·entities 는 두지 않았다 — 도메인 상태가 없는 랜딩에
 * 그 두 층은 빈 폴더가 될 뿐이다. 필요해지는 날 추가한다.
 */
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["src/shared/**"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/src/widgets/*", "@/src/app/*"],
              message:
                "shared 는 가장 아래 레이어다. 섹션·페이지를 아는 것은 위로 올릴 것.",
            },
          ],
        },
      ],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
