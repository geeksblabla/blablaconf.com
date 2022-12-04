import type { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { addEmail } from "@/utils/db";

type Data = {
  email: string;
};

type Response = {
  message: string;
};

type ErrorResponse = {
  error: {
    code: string;
    message: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response | ErrorResponse>
) {
  if (req.method !== "POST") {
    return res.status(501).json({
      error: {
        code: "method_unknown",
        message: "This endpoint only responds to POST",
      },
    });
  }

  const email: string = ((req.body.email as string) || "").trim().toLowerCase();
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      error: {
        code: "bad_email",
        message: "Invalid email",
      },
    });
  }

  try {
    await addEmail(email);
    return res.redirect(303, `/ticket`);
  } catch (error) {
    return res.status(400).json({
      error: {
        code: "error_database",
        message: `Data base error `,
      },
    });
  }
}
