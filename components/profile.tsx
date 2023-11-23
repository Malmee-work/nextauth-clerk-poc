'use client'
import { useSession } from "next-auth/react"

export function Profile({
    provider,
  }: { provider?: string }) {
    const { data: session, status } = useSession()
    // console.log('session', session)
    return <div>I am {session?.user?.email}</div>
    // return (
    //   <form
    //     action={async () => {
    //       "use server"
    //       redirect("api/auth/signin")
    //     }}
    //   >
    //     <button>Sign In</button>
    //   </form>
    // )
  }