import { NextRequest, NextResponse } from "next/server";

const GET = async (request: NextRequest) => {
  let params = new URL(request.url).searchParams;
  const code = params.get("code");

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
  return NextResponse.json(await res.json());
};

export { GET };
