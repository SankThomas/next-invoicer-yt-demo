import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();

  return (
    <div className="p-4">
      <header className="flex items-center justify-between">
        <Button variant="outline">
          <Link href="/">Invoicer</Link>
        </Button>

        {userId ? (
          <Button>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        ) : (
          <ul className="flex items-center gap-4">
            <li>
              <Button variant="secondary">
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </li>
          </ul>
        )}
      </header>

      <section className="relative py-32 space-y-8 max-w-4xl mx-auto text-center">
        <div className="absolute left-0 top-0 h-40 w-40 bg-pink-400 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 h-40 w-40 bg-blue-400 blur-[100px]"></div>

        <h1 className="text-4xl lg:text-6xl text-slate-800 font-bold">
          Welcome to Invoicer V2
        </h1>
        <p className="text-muted-foreground text-lg lg:text-xl">
          Easily create invoices for yourself, your clients all at the
          convenience of your mobile phone or PC. Version 2 offers improved
          performance, better responsiveness on mobile, and better UI design by
          Thomas Sankara.
        </p>

        {userId ? (
          <Button>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        ) : (
          <ul className="flex items-center justify-center gap-4">
            <li>
              <Button variant="secondary">
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </li>
          </ul>
        )}
      </section>
    </div>
  );
}
