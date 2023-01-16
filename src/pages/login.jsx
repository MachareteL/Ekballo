import { signIn } from "next-auth/react";
import Image from "next/image";
import logo from "../../public/favicon.png";



export default function login() {
  return (
    <>
      <div className="h-screen max-h-screen bg-slate-900 max-w-screen">
        <div className="flex flex-col items-center justify-evenly bg-slate-900 container m-auto min-h-screen">
          <Image priority src={logo} alt="Logo" className="justify-self-center" />
          <form className="grid h-60 text-lg" onSubmit={(e)=>e.preventDefault()}>
            <button onClick={()=>signIn('google')} className="rounded bg-gray-100 h-fit p-4 flex items-end"> <img src="https://authjs.dev/img/providers/google.svg" className="inline pr-2" /><span>Entrar com Google</span></button>
            <button onClick={()=>signIn('github', {callbackUrl: '/'})} className="rounded bg-gray-100 h-fit p-4 flex items-end"> <img src="https://authjs.dev/img/providers/github.svg" className="inline pr-2" /> <span>Entrar com Github</span></button>
          </form>
        </div>
      </div>
    </>
  );
}