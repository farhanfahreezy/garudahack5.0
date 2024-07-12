import NextAuth from 'next-auth';
import "next-auth/jwt"


declare module 'next-auth/jwt' {
    interface JWT {
        uid: number;
    }
}

declare module 'next-auth' {
  interface Session {
      user: {
          id: number;
      } & DefaultSession['user'];
  }
}