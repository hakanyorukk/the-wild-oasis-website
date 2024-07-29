// import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "@/app/_lib/auth";

export const middleware = auth;
//Means:This auth serves as a middleware function.

//all the middleware should actually run in this route
export const config = { matcher: ["/account"] };
//when the user hits this route then the authorized callback will be called
