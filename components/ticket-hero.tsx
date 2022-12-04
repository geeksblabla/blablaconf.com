import Image from "next/image";
import { DateConf } from "./date-conf";
import { GithubButton } from "./github-button";
import { ShareActions } from "./share-actions";

//bg-gradient-to-r from-emerald-50 via-emerald-100 to-emerald-200

// this component will be used in three pages:
// 1. /ticket (ticket page): placholder image + button to generate ticket with github - all props are undefined in this case
// 2. /ticket/[username] (ticket page for a user): ticket image + button to  back to home page - image and name props are defined in this case but url is undefined
// 3. /ticket/me/[username] (ticket page for the current user ): ticket image + button to  share the ticket  - all props are defined in this case
type HeroProps = {
  url?: string;
  name?: string;
  image?: string;
};
export const TicketHero = ({ url, name, image }: HeroProps) => {
  const page =
    name === undefined && image === undefined && url === undefined
      ? "home"
      : name !== undefined && image !== undefined && url === undefined
      ? "user"
      : name !== undefined && image !== undefined && url !== undefined
      ? "me"
      : "home";
  return (
    <div className="relative bg-opacity-90 py-16 md:pt-16 pt-8  pb-20 min-h-screen">
      <div className=" mx-auto max-w-screen-lg md:max-w-screen-xl  flex flex-col justify-center items-center  md:px-8 px-4 text-center ">
        <DateConf />
        <h2 className="md:text-5xl text-4xl font-bold my-4 capitalize">
          {page === "home" && "Make your own ticket"}
          {(page === "user" || page === "me") &&
            `${name}'s BlaBlaConf 2022 Ticket`}
        </h2>
        <p className="text-base font-medium text-gray-600 capitalize max-w-[500px]">
          {page === "home" &&
            "Generate a unique ticket with your Github profile"}
          {page === "me" &&
            "Share your ticket with your friends and get a chance to win a free BlablaConf t-shirt"}

          {page === "user" &&
            "Go back to the home page to Get your free ticket"}
          <br />
        </p>
        {page === "me" && (
          <ShareActions shareUrl={url || "https://blablconf.com"} />
        )}
        {page === "home" && <GithubButton />}

        {page === "user" && (
          <button className="mt-4 shrink-0 m-2 rounded-full bg-[#006233] px-8 py-3 font-medium text-white focus:bg-[#006233] focus:outline-none hover:bg-[#006233]">
            Back to Home
          </button>
        )}

        <div className="letter mt-16 -rotate-3">
          {page === "user" || page === "me" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt="BlablaConf Ticket"
              className="mx-auto  border-2 border-gray-200 rounded-md"
            />
          ) : (
            <Image
              src="/images/ticket-placeholder.jpg"
              alt="BlablaConf Ticket"
              width={700}
              height={300}
              className="mx-auto  border-2 border-gray-200 rounded-md"
            />
          )}
        </div>
      </div>
    </div>
  );
};
