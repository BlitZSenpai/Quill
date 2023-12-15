"use client";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

export const Toggle = () => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed && (
        <div className="hidden lg:flex items-center justify-center mb-4 pt-4">
          <Hint label={label} side="right" asChild>
            <Button onClick={onExpand} className="h-auto p-2" variant="ghost">
              <ArrowRightFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="p-3 flex pl-6 items-center mb-2 w-full">
          <p className="font-semibold text-primary">For you</p>
          <Hint label={label} side="right" asChild>
            <Button className="ml-auto h-auto p-2" variant="ghost" onClick={onCollapse}>
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};
