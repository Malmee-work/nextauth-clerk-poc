
import { useSession } from "next-auth/react"
import { SignIn, SignOut } from "./auth-components"

export function Profile({
    provider,
  }: { provider?: string }) {
    const { data: session, status } = useSession();
    if (status === "authenticated") {
        return <div><p>Signed in as {session?.user?.email}</p>
        <p>My bc account id {session?.user?.bcId}</p><SignOut></SignOut></div>
      }
    
      return <SignIn></SignIn>
  }