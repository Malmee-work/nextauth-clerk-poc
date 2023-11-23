import NextAuth, { NextAuthOptions } from "next-auth"

const clerkProvider = {
  id: "clerkprovider",
  name: "Clerk",
  type: "oauth",
  version: "2.0",
  callbackUrl: `${process.env.NEXTAUTH_URL}${process.env.REDIRECT_PATH}`,
  authorization: {
    url: `${process.env.CLERK_AUTH_URL}`,
    params: { scope: "email profile public_metadata" },
  },
  token: {
    url: `${process.env.CLERK_TOKEN_URL}`,
  },
  userinfo: {
    url: `${process.env.CLERK_USER_INFO_URL}`,
  },
  clientId: `${process.env.CLERK_CLIENT_ID}`,
  clientSecret: `${process.env.CLERK_SECRET_KEY}`,
};
const authOptions = {
    // Configure one or more authentication providers
    providers: [
      clerkProvider
    ],
    debug: true,
} as unknown as NextAuthOptions

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

