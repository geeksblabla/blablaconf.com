/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { env } from "process";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const templateImage =
    process.env.NEXT_PUBLIC_HOST + "/images/ticket-template.png";

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
          background: "#EFE1C5",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "520px",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            alt="ticket-template"
            src={templateImage}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: 136,
              left: 120,
              height: 150,
              flexDirection: "column",
            }}
          >
            <img
              width="166"
              height="166"
              style={{
                borderRadius: 10,
                border: "10px solid #05935B",
              }}
              alt="avatar"
              src={avatarUrl}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginRight: 30,
              }}
            >
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 30,
                  maxWidth: 290,
                }}
              >
                {name}
              </span>
              <span
                style={{
                  color: "black",
                  textAlign: "right",
                  fontSize: 24,
                  marginTop: 0,
                }}
              >
                @{login}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                position: "absolute",
                top: 10,
                left: 140,
                textAlign: "center",
                padding: 10,
                transform: "rotate(-40deg) scale(0.9)",
                borderRadius: 20,
                border: "3px solid #F25644",
              }}
            >
              <div
                style={{
                  display: "flex",
                  borderRadius: 16,
                  padding: 8,
                  paddingLeft: 16,
                  paddingRight: 16,
                  border: "3px solid #F25644",
                }}
              >
                <span
                  style={{
                    color: "#F25644",
                    // opacity: 0.6,
                    textAlign: "right",
                    fontWeight: "900",
                    fontSize: 40,
                  }}
                >
                  N {number}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
