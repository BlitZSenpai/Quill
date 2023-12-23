"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
  isActive: boolean;
}

export const NavItem = ({ label, href, icon: Icon, isActive }: NavItemProps) => {
  const { collapsed } = useCreatorSidebar((state) => state);
  return (
    <Button
      variant="ghost"
      className={cn("w-full h-12", collapsed ? "justify-center" : "justify-start", isActive && "bg-accent")}
      asChild>
      <Link href={href}>
        <div className="flex items-center gap-x-4">
          <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
          {!collapsed && <span>{label}</span>}
        </div>
      </Link>
    </Button>
  );
};
