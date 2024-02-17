import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen px-4">
      <h1 className="text-slate-900 font-bold text-4xl">Custom 404 Page</h1>
      <Button asChild>
        <Link href="/">Back to Homepage</Link>
      </Button>
    </div>
  );
}
