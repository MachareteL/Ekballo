import { useSession, signIn, signOut } from "next-auth/react"

export default function BotaoLogin() {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut({callbackUrl: '/'})} className="bg-slate-900 text-stone-50 px-4 py-2 rounded">Logout</button>

      </>
    )
  }
  return (
    <>
    
    <button onClick={() => signIn()} className="bg-slate-900 text-stone-50 px-4 py-2 rounded">Login</button>

    </>
  )
}