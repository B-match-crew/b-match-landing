import Script from "next/script";

/**
 * 당근마켓 광고 픽셀.
 *
 * 당근이 주는 스니펫 그대로다 — 먼저 큐잉만 하는 stub 을 얹고 실제
 * karrot-pixel.js 를 비동기로 불러, 스크립트가 도착하기 전에 일어난
 * init·track 호출도 흘리지 않는다.
 *
 * afterInteractive: 하이드레이션 뒤에 넣는다. 광고 지표는 첫 페인트를
 * 늦출 만큼 급하지 않고, GTM 도 같은 전략을 쓴다.
 *
 * 랜딩이 단일 페이지라 ViewPage 를 여기서 한 번만 쏜다. 라우트가 늘면
 * 클라이언트 전환마다 다시 쏘는 처리가 따로 필요하다.
 */
export function KarrotPixel({ pixelId }: { pixelId: string }) {
  return (
    <Script id="karrot-pixel" strategy="afterInteractive">
      {`(function (w, d) {
  if (w.karrotPixel) return;
  var k = { stub: true, queue: [] };
  k.init = function () { k.queue.push(['init', arguments, Date.now()]); };
  k.track = function () { k.queue.push(['track', arguments, Date.now()]); };
  w.karrotPixel = k;
  var s = d.createElement('script');
  s.async = true;
  s.src = 'https://karrot-pixel.business.daangn.com/karrot-pixel.js';
  var f = d.getElementsByTagName('script')[0];
  f && f.parentNode ? f.parentNode.insertBefore(s, f) : d.head.appendChild(s);
})(window, document);
window.karrotPixel.init('${pixelId}');
window.karrotPixel.track('ViewPage');`}
    </Script>
  );
}
