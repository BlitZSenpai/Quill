"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { useEffect, useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const [isClient, setIsClient] = useState(false);
  const { collapsed } = useSidebar((state) => state);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <aside
      className={cn(
        "fixed left-0 w-60 h-full flex flex-col bg-background border-r border-[#2D2E35] z-50",
        collapsed && "w-[70px]"
      )}>
      {children}
    </aside>
  );
};
