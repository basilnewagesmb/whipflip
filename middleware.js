import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname !== request.nextUrl.pathname.toLowerCase()) {
    return NextResponse.redirect(
      new URL(request.nextUrl.origin + request.nextUrl.pathname.toLowerCase())
    );
  }
  const hasError =
    request.error || (request.nextRender && request.nextRender.error);

  if (hasError) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|data|fonts|overlay|favicon.ico).*)",
  ],
};
