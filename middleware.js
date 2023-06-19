import { NextResponse } from "next/server";

export function middleware(request) {
  const hasError =
    request.error || (request.nextRender && request.nextRender.error);

  if (hasError) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
