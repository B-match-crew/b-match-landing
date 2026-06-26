import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 로고·스토어·매칭 아이콘 등 자체 SVG 에셋을 next/image 로 사용하기 위함.
    // /public 의 신뢰된 로컬 에셋만 다루므로 안전, 보안을 위해 CSP/sandbox 적용.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
