// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   if (request.nextUrl.pathname.startsWith('/logos/logoemail.png')) {
//     return NextResponse.next();
//   }
//   const authorized = request.cookies.get('authorized')?.value;

//   if (!authorized && !request.nextUrl.pathname.startsWith('/login')) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };
