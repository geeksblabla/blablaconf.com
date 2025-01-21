import Image from "next/image";
import Link from "next/link";
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
    <div className="relative bg-opacity-90 py-20 md:pt-20 pt-8  pb-20 min-h-screen">
      <div className=" mx-auto max-w-screen-lg md:max-w-screen-xl  flex flex-col justify-center items-center  md:px-8 px-4 text-center ">
        {/* <DateConf /> */}

        <h2 className=" relative md:text-5xl text-4xl font-bold my-4 capitalize max-w-[700px]">
          {page === "home" && "Make your own ticket"}
          {(page === "user" || page === "me") &&
            `${name}'s BlaBlaConf 2024 Ticket`}
        </h2>
        <p className="text-base font-medium text-[#061431]  capitalize max-w-[500px] pt-8">
          {page === "home" &&
            "Generate a unique ticket with your Github profile"}
          {page === "me" &&
            "Share your ticket with your friends and get a chance to win a free BlablaConf t-shirt"}

          {page === "user" &&
            "Go back to the home page to get your free ticket"}
          <br />
        </p>
        {page === "me" && (
          <ShareActions shareUrl={url || "https://blablaconf.com"} />
        )}
        {page === "home" && <GithubButton />}

        {page === "user" && (
          <Link
            href="/"
            className="text-white self-center mt-4 px-6 py-2 rounded-md bg-[#53925E] text-base min-w-[110px] text-center  shadow-[3px_3px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_#000000] transition-all duration-300 border-2 border-black"
          >
            Back to Home
          </Link>
        )}

        <div className=" mt-16 -rotate-3 px-2">
          {page === "user" || page === "me" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt="BlablaConf Ticket"
              width={1200}
              height={630}
              className="mx-auto  rounded-md max-w-2xl w-full aspect-[1200/630]"
            />
          ) : (
            <Image
              src="/images/ticket-template.png"
              alt="BlablaConf Ticket"
              width={1200}
              height={630}
              className="mx-auto  rounded-md max-w-2xl w-full aspect-[1200/630]"
            />
          )}
        </div>
      </div>
    </div>
  );
};
