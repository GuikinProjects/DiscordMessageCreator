"use client"

import { ComponentProps } from "react"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="scroll-area"
      className={cn("relative overflow-auto", className)}
      {...props}
    >
      <div
        data-slot="scroll-area-viewport"
        className="size-full rounded-[inherit]"
      >
        {children}
      </div>
    </div>
  )
}

function ScrollBar({
  className,
}: ComponentProps<"div">) {
  return <div data-slot="scroll-area-scrollbar" className={cn("hidden", className)} />
}

export { ScrollArea, ScrollBar }
