import type { ReactNode } from "react";

type PhoneProps = {
  children: ReactNode;
  className?: string;
  /** 상단 상태바(노치) 노출 여부 */
  statusBar?: boolean;
};

/**
 * 모바일 앱 목업을 감싸는 기기 프레임.
 * 디자인의 phone mockup(둥근 베젤 + 상단 노치)을 단순화해 재현한다.
 */
export default function Phone({
  children,
  className = "",
  statusBar = true,
}: PhoneProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border-[6px] border-secondary-main bg-white shadow-[0_18px_40px_-12px_rgba(25,31,40,0.28)] ${className}`}
    >
      {statusBar && (
        <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-semibold text-ink">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="inline-block h-2.5 w-3.5 rounded-[2px] bg-ink/80" />
            <span className="inline-block h-2.5 w-3 rounded-[2px] bg-ink/80" />
            <span className="inline-block h-2.5 w-5 rounded-[3px] border border-ink/60" />
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
