"use client";
import { useState } from "react";

const githubUrl = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
  process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID || "",
)}`;

export const GithubButton = () => {
  const [loading, setLoading] = useState(false);

  return (
    <a
      href={githubUrl}
      onClick={() => setLoading(true)}
      className="text-white self-center px-6 py-2 rounded-md bg-tertiary text-base min-w-[110px] text-center mt-4 shadow-[3px_3px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000000] transition-all duration-300 border-2 border-black"
    >
      {loading ? "Loading Github Profile ...." : "Customize with Github"}
    </a>
  );
};
