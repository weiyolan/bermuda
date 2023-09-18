// import { NextResponse } from 'next/server'

import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";

export function middleware(request) {
  // If you already have middleware that generates a response,
  // you can pass the response as a third argument for i18nRouter to use.
  return i18nRouter(request, i18nConfig);
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
