export const onRequest = async ({ request, next }) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (pathname === "/invite.gif") {
    const gifUrl = new URL("../public/invite.gif", import.meta.url);
    const gifResponse = await fetch(gifUrl);
    const gifArrayBuffer = await gifResponse.arrayBuffer();
    return new Response(gifArrayBuffer, { headers: { "Content-Type": "image/gif" } });
  }

  if (pathname === "/invite") {
    return Response.redirect("https://discord.gg/UJsVfGpjxQ", 302);
  }

  if (pathname.startsWith("/css/") || pathname.startsWith("/js/") || pathname.startsWith("/images/") || pathname.endsWith(".png") || pathname.endsWith(".jpg") || pathname.endsWith(".ico")) {
    return next();
  }

  if (pathname === "/" || !pathname.includes(".")) {
    return new Response(await fetch(new Request(new URL("/index.html", request.url), request)), {
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }

  return next();
};
