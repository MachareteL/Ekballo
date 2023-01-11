import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: '',
      clientSecret: '',
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
  }
}

export default NextAuth(authOptions)