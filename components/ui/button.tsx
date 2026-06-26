import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-bold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // 메인 CTA — 다크 시크릿 컬러
        default:
          "bg-secondary-main text-white shadow-[0_14px_30px_-12px_rgba(52,61,74,0.55)] hover:-translate-y-0.5 hover:shadow-[0_20px_38px_-12px_rgba(52,61,74,0.6)]",
        // 앱스토어 / 플레이스토어 다운로드 버튼
        store:
          "bg-secondary-main text-white shadow-[0_10px_24px_-12px_rgba(52,61,74,0.5)] hover:-translate-y-0.5 hover:bg-[#2b333e]",
        primary:
          "bg-primary-500 text-white shadow-[0_14px_30px_-12px_rgba(17,187,167,0.5)] hover:-translate-y-0.5 hover:bg-primary-600",
        outline:
          "border border-gray-100 bg-white text-ink hover:bg-bg-alt hover:-translate-y-0.5",
        ghost: "text-ink hover:bg-bg-alt",
      },
      size: {
        default: "h-12 px-6 text-[15px]",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-14 px-8 text-[17px]",
        store: "h-[52px] px-6 text-[15px]",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
