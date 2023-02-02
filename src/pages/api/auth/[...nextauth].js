import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.clientID,
            clientSecret: process.env.clientSecret,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        GithubProvider({
            clientId: process.env.githubSecret,
            clientSecret: process.env.githubID,
        }),
    ],
      pages: {
        signIn: '/login',
        // signOut: '/auth/signout',
    },
    secret: '10f0f6dd-3688-4b6c-858b-18bd25e4eeff'
}

export default NextAuth(authOptions)