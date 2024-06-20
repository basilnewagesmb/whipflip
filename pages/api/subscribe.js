import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(404).json({ status: "error", error: "Not Found" });
  }

  const { captcha } = req.body;

  if (!captcha) {
    return res.status(400).json({ status: "error", error: "Invalid captcha" });
  }

  const secret = process.env.RECAPTCHA_SECRET;
  if (!secret) {
    return res
      .status(500)
      .json({ status: "error", error: "Server configuration error" });
  }

  try {
    const captchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: secret,
          response: captcha,
        }),
      }
    ).then((res) => res.json());

    if (!captchaResponse.success) {
      const errorMessage = captchaResponse["error-codes"]
        ? captchaResponse["error-codes"][0]
        : "Unknown error";
      return res.status(400).json({ status: "error", error: errorMessage });
    }

    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.error("Captcha verification failed:", error);
    res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
}
