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
  profile(profile:any) {
    return {
      id: profile.user_id,
      name: profile.name,
      email: profile.email,
      image: profile.picture,
    }
  },
  token: {
    url: `${process.env.CLERK_TOKEN_URL}`,
    async request(data:any){
  const code = data.params.code;
  const tokenParams = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: `${process.env.CLERK_CLIENT_ID}`,
    client_secret: `${process.env.CLERK_SECRET_KEY}`,
    redirect_uri: `${process.env.NEXTAUTH_URL}${process.env.REDIRECT_PATH}`,
    code: `${code}`,
  });
  
  const res = await fetch(
    `${process.env.CLERK_TOKEN_URL}?${tokenParams.toString()}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
      }),
    }
  );

  const token = await res.json();
  console.log('token', token)
  return {tokens: token};
    }
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

