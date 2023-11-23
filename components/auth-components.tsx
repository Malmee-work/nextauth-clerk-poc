import { redirect } from "next/navigation"

export function SignIn({
  provider,
}: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server"
        redirect("api/auth/signin")
      }}
    >
      <button>Sign In</button>
    </form>
  )
}
