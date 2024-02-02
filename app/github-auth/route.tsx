import { type NextRequest } from "next/server";
import * as qs from "qs";
import { saveUser, User } from "@/utils/db";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: NextRequest) {
  // first step
  // get user info using github api
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");

  if (!code) {
    // This happens when user cancelled the authentication.
    // In this case, we send an empty message which indicates no data available.

    return Response.json({
      status: 400,
      code: "github_issue",
      description: "Github redirect code not found, please try again",
    });
  }

  const q = qs.stringify({
    client_id: process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID,
    client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    code: code,
  });

  const accessTokenRes = await fetch(
    `https://github.com/login/oauth/access_token?${q}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!accessTokenRes.ok) {
    console.error(
      `Failed to get access token: ${
        accessTokenRes.status
      } ${await accessTokenRes.text()}`
    );

    return Response.json({
      status: 400,
      code: "github_issue",
      description: "Error generating access token, please try again ",
    });
  }

  const { access_token: accessToken } = await accessTokenRes.json();

  const userRes = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `bearer ${accessToken as string}`,
    },
  });

  if (!userRes.ok) {
    console.error(
      `Failed to get GitHub user: ${userRes.status} ${await userRes.text()}`
    );
    return Response.json({
      status: 400,
      code: "github_issue",
      description: "Error retrieving user info , please try again ",
    });
  }

  const user: User & { avatar_url: string } = await userRes.json();

  if (!Boolean(user.login)) {
    return Response.json({
      status: 400,
      code: "github_issue",
      description: "Invalid Github user data",
    });
  }

  // save user to database

  try {
    await saveUser({
      login: user.login,
      email: user.email,
      avatar: user.avatar_url,
      bio: user.bio,
      name: user.name,
    });
    // res.status(200).json(user);
    // fetch images and dont wait for response
  } catch (error) {
    console.log(error);

    return Response.json({
      status: 400,
      code: "error_database",
      description: "Error saving to database ",
      error,
    });
  }

  redirect(`/ticket/${user.login}/me`);
}
