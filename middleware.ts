import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('jwt');  
  
  if (req.url.includes('/dashboard')) {
    if (!token) {
      console.log('Token not found');
      return NextResponse.redirect(new URL('/home', req.url)); // Redirect to home if no token
    }

    try {

      const decoded: any = jwtDecode(token.value);

      if (decoded.exp < Date.now() / 1000) {
        console.log('Token expired');
        return NextResponse.redirect(new URL('/signin', req.url)); 
      }

      if (!decoded.permissions || decoded.permissions.length === 0) {
        console.log('User has no permissions');
        return NextResponse.redirect(new URL('/home', req.url));
      }

      console.log('User has permissions, accessing dashboard');
    } catch (err) {
      console.log('Invalid token');
      return NextResponse.redirect(new URL('/home', req.url));  
    }
  }

  if (req.url.includes('/signin') || req.url.includes('/signup')) {
    if (token) {
      console.log('Token is valid, redirecting to dashboard');
      return NextResponse.redirect(new URL('/dashboard', req.url));  
    }
  }

  return NextResponse.next();  
}

export const config = {
  matcher: ['/dashboard', '/signin', '/signup'],  
};
