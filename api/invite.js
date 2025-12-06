export default async function handler(req, res) {
  const ua = req.headers["user-agent"] || "";

  if (ua.toLowerCase().includes("bot")) {
    const gif = await fetch("https://vsn.pages.dev/invite.gif");
    const buf = Buffer.from(await gif.arrayBuffer());
    res.setHeader("Content-Type", "image/gif");
    return res.send(buf);
  }

  return res.redirect(302, "https://discord.gg/UJsVfGpjxQ");
}
