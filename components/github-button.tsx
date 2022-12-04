"use client";
import { useState } from "react";

const githubUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
  process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID || ""
)}`;

export const GithubButton = () => {
  const [loading, setLoading] = useState(false);

  return (
    <a
      href={githubUrl}
      onClick={() => setLoading(true)}
      className="shrink-0 m-2 rounded-full bg-[#006233] px-8 py-3 font-medium text-white focus:bg-[#006233] focus:outline-none hover:bg-[#006233]"
    >
      {loading ? "Loading Github Profile ...." : "Customize with Github"}
    </a>
  );
};
