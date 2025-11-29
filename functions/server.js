// functions/server.js
export const onRequest = async ({ request, next }) => {
  const url = new URL(request.url);
  let pathname = url.pathname;

  // Always serve index.html for clean URLs (SPA routing)
  if (pathname.startsWith("/css/") || 
      pathname.startsWith("/js/") || 
      pathname.startsWith("/images/") || 
      pathname.endsWith(".png") || 
      pathname.endsWith(".jpg") || 
      pathname.endsWith(".ico")) {
    return next();
  }

  // Handle root and any other path → serve index.html
  if (pathname === "/" || !pathname.includes(".")) {
    return new Response(await fetch(new Request(new URL("/index.html", request.url), request)), {
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }

  // For all other files (just in case), try to serve them
  return next();
};