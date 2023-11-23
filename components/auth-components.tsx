import { signIn, signOut } from "next-auth/react"

export function SignIn({
  provider,
}: { provider?: string }) {
  return (
    <button onClick={()=> signIn('clerkprovider')}>Sign In</button>
  )
}

export function SignOut({
    provider,
  }: { provider?: string }) {
    return (
      <button onClick={()=> signOut()}>Sign Out</button>
    )
  }
