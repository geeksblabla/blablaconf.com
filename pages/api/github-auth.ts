// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as qs from "qs";
import { saveUser, User } from "@/utils/db";

type Data = {
  code: string;
  description: string;
  error?: any;
};
// this is a redirect url from github auth
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | User>
) {
  // first step
  // get user info using github api

  if (!req.query.code) {
    // This happens when user cancelled the authentication.
    // In this case, we send an empty message which indicates no data available.

    return res.status(400).json({
      code: "github_issue",
      description: "Github redirect code not found, please try again",
    });
  }

  const q = qs.stringify({
    client_id: process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID,
    client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    code: req.query.code,
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

    return res.status(400).json({
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
    return res.status(400).json({
      code: "github_issue",
      description: "Error retrieving user info , please try again ",
    });
  }

  const user: User & { avatar_url: string } = await userRes.json();

  if (!Boolean(user.login)) {
    return res
      .status(400)
      .json({ code: "github_issue", description: "Invalid Github user data" });
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

    return res.redirect(`/my-ticket/${user.login}`);
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      code: "error_database",
      description: "Error saving to database ",
      error,
    });
  }
}
