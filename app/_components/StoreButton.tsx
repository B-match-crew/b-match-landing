import Image from "next/image";

import { Button } from "@/components/ui/button";

/** 앱스토어 / 플레이스토어 다운로드 버튼. */
export default function StoreButton({
  icon,
  label,
  href,
}: {
  icon: string;
  label: string;
  href: string;
}) {
  return (
    <Button asChild variant="store" size="store" className="gap-1.5 font-semibold">
      <a href={href}>
        <Image
          src={icon}
          alt=""
          width={24}
          height={24}
          className="size-5 lg:size-6"
        />
        {label}
      </a>
    </Button>
  );
}
