import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // ?title=<title>
  const hasName = searchParams.has("name");
  const hasLogin = searchParams.has("login");
  const hasAvatar = searchParams.has("avatar");
  const hasTicketNumber = searchParams.has("ticketNumber");
  const name = hasName ? searchParams.get("name") : "Name";
  const login = hasLogin ? searchParams.get("login") : "";
  const avatar = hasAvatar ? searchParams.get("avatar") : "";
  const avatarUrl = avatar === null ? "" : avatar;
  const ticketNumber = hasTicketNumber ? searchParams.get("ticketNumber") : "";
  const number =
    new Array(7 + 1 - (ticketNumber + "").length).join("0") + ticketNumber;
  if (!login) {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            fontSize: 60,
            color: "black",
            background: "#f6f6f6",
            width: "100%",
            height: "100%",
            paddingTop: 50,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          Ticket dosn&apos;t exist please visit blablaconf.com
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          color: "black",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width="1200"
          height="630"
          src={`https://res.cloudinary.com/duko2tssr/image/upload/v1706825045/ticket-back_b6qvdk.jpg`}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 70,
            left: 0,
            right: 82,
            height: 150,
            flexDirection: "row-reverse",
          }}
        >
          <img
            width="150"
            height="150"
            style={{
              borderRadius: 100,
            }}
            src={avatarUrl}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
              marginRight: 30,
            }}
          >
            <span
              style={{
                color: "white",
                textAlign: "right",
                fontWeight: "900",
                fontSize: 37,
              }}
            >
              {name}
            </span>
            <span
              style={{
                color: "white",
                textAlign: "right",
                fontSize: 30,
                marginTop: 0,
              }}
            >
              @{login}
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 250,
            right: 150,
            height: 150,
            width: 300,
            // flexDirection: "row-reverse",
            transform: "rotate(-40deg)",
          }}
        >
          <span
            style={{
              color: "white",
              opacity: 0.5,
              textAlign: "right",
              fontWeight: "900",
              fontSize: 54,
            }}
          >
            N {number}{" "}
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
