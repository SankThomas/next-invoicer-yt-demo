import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="hidden fixed lg:flex flex-col items-start justify-between h-screen w-64 bg-slate-900 p-4">
        <Button variant="secondary">Welcome</Button>

        <ul className="space-y-4">
          <li>
            <Button variant="customOutline">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </li>
          <li>
            <Button variant="customOutline">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </Button>
          </li>
        </ul>

        <p className="text-slate-400 text-xs">&copy; Thomas Sankara 2024</p>
      </div>
    </>
  );
}
