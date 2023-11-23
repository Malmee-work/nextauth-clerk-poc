
'use client'
import { Profile } from "@/components/profile";
import { SessionProvider } from "next-auth/react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <SessionProvider> <div>Hello</div>
    <Profile></Profile>
 </SessionProvider>
    </main>
  );
}
