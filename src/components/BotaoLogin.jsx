import { useSession, signIn, signOut } from "next-auth/react"

export default function BotaoLogin() {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <>
        
        <button onClick={() => signOut({callbackUrl: '/'})} className="bg-slate-900 text-stone-50 px-4 py-2 rounded"> <img src={session.user.image} className="inline w-8 mr-2"/><span>Deslogar</span> </button>

      </>
    )
  }
  return (
    <>
    
    <button onClick={() => signIn()} className="bg-slate-900 text-stone-50 px-4 py-2 rounded">Login</button>

    </>
  )
}