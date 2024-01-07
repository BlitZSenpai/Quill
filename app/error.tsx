"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex flex-col text-muted-foreground space-y-4 h-full items-center justify-center">
      <p>Something went wrong!</p>
      <Button variant="secondary" asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
