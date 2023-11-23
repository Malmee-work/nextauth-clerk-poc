'use client'
import { Profile } from "@/components/profile";
import { SessionProvider } from "next-auth/react";

export default function Dashboard() {
  
  return (
    <SessionProvider> <div>Hello</div>
    <Profile></Profile>
 </SessionProvider>
  );
}
