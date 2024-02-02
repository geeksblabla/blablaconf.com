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
      className="shrink-0 mt-4 relative px-8 py-3 rounded-full border-2  bg-white/60 flex items-center justify-center font-medium  hover:scale-105 transition-all "
    >
      {loading ? "Loading Github Profile ...." : "Customize with Github"}
    </a>
  );
};
